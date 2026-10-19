/**
 * Speech & Repeat Engine
 * Controls reading aloud sentences with multi-repeat cycles.
 * Default 4-repeat mode:
 *   1. 1st time: English reading
 *   2. 2nd time: English reading
 *   3. Intermediate: Japanese translation reading
 *   4. Intermediate: Japanese literal (chunk) translation reading
 *   5. 3rd time: English reading
 *   6. 4th time: English reading
 */

export type SpeechPhase =
  | 'en_1'
  | 'en_2'
  | 'ja_translation'
  | 'ja_literal'
  | 'en_3'
  | 'en_4'
  | 'normal';

export interface PlayableItem {
  text: string;
  translation?: string;
  literalTranslation?: string;
}

export interface SpeechEngineCallbacks {
  onSentenceStart?: (index: number) => void;
  onRepeatChange?: (repeatIndex: number, totalRepeats: number, phase: SpeechPhase) => void;
  onIntervalCountdown?: (remainingSec: number) => void;
  onSentenceFinished?: (index: number) => void;
  onPlaybackStateChange?: (isPlaying: boolean, isPaused: boolean) => void;
  onError?: (msg: string) => void;
}

export function cleanLiteralForSpeech(literal?: string): string {
  if (!literal) return '';
  let text = literal.trim();
  if (text.startsWith('(') && text.endsWith(')')) {
    text = text.slice(1, -1).trim();
  }
  // Replace slashes with natural pause in Japanese
  text = text.replace(/\s*[/／]\s*/g, '、 ');
  return text;
}

export class SpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPlaying = false;
  private isPaused = false;
  private currentSentenceIndex = 0;
  private currentRepeatIndex = 1;
  private currentPhase: SpeechPhase = 'normal';
  private playlist: PlayableItem[] = [];
  private callbacks: SpeechEngineCallbacks = {};

  // Settings
  public rate = 1.0;
  public pitch = 1.0;
  public repeatCount = 4; // 4回音読が標準 (デフォルト)
  public pauseInterval = 1.2; // seconds between repetitions for shadowing
  public autoAdvance = true;
  public voiceName = '';

  private intervalTimerId: number | null = null;
  private audioCtx: AudioContext | null = null;

  constructor(callbacks: SpeechEngineCallbacks = {}) {
    this.callbacks = callbacks;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setCallbacks(callbacks: SpeechEngineCallbacks) {
    this.callbacks = { ...this.callbacks, ...callbacks };
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    const all = this.synth.getVoices();
    return all.filter((v) => v.lang.startsWith('en'));
  }

  public getJapaneseVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    const all = this.synth.getVoices();
    return all.filter((v) => v.lang.startsWith('ja'));
  }

  public selectBestDefaultVoice(): SpeechSynthesisVoice | null {
    const enVoices = this.getVoices();
    if (enVoices.length === 0) return null;

    const preferred = enVoices.find(
      (v) =>
        v.name.includes('Natural') ||
        v.name.includes('Google') ||
        v.name.includes('Samantha') ||
        v.name.includes('Daniel') ||
        v.name.includes('Karen') ||
        (v.lang === 'en-US' && !v.name.includes('Bad'))
    );
    return preferred || enVoices[0];
  }

  public selectBestJapaneseVoice(): SpeechSynthesisVoice | null {
    const jaVoices = this.getJapaneseVoices();
    if (jaVoices.length === 0) return null;

    const preferred = jaVoices.find(
      (v) =>
        v.name.includes('Google') ||
        v.name.includes('Natural') ||
        v.name.includes('Kyoko') ||
        v.name.includes('Otoya') ||
        v.name.includes('Nanami') ||
        v.lang === 'ja-JP'
    );
    return preferred || jaVoices[0];
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine') {
    try {
      if (!this.audioCtx) {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtxClass) {
          this.audioCtx = new AudioCtxClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (this.audioCtx) {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      }
    } catch {
      // AudioContext safe fallback
    }
  }

  public playRepeatChime(repeatNum: number) {
    // 4 melodic ascending notes for repeats: C5, E5, G5, C6
    const freqs = [523.25, 659.25, 783.99, 1046.5];
    const f = freqs[(repeatNum - 1) % freqs.length] || 523.25;
    this.playTone(f, 0.15, 'sine');
  }

  public start(items: (string | PlayableItem)[], startIndex = 0) {
    this.stop();
    this.playlist = items.map((it) => (typeof it === 'string' ? { text: it } : it));
    this.currentSentenceIndex = Math.max(0, Math.min(startIndex, this.playlist.length - 1));
    this.currentRepeatIndex = 1;
    this.currentPhase = this.repeatCount === 4 ? 'en_1' : 'normal';
    this.isPlaying = true;
    this.isPaused = false;
    this.notifyPlaybackState();
    this.executeCurrentStep();
  }

  public jumpToSentence(index: number) {
    if (index < 0 || index >= this.playlist.length) return;
    this.stopIntervalTimer();
    if (this.synth) this.synth.cancel();

    this.currentSentenceIndex = index;
    this.currentRepeatIndex = 1;
    this.currentPhase = this.repeatCount === 4 ? 'en_1' : 'normal';

    if (this.isPlaying) {
      this.executeCurrentStep();
    } else {
      this.isPlaying = true;
      this.isPaused = false;
      this.notifyPlaybackState();
      this.executeCurrentStep();
    }
  }

  public nextSentence() {
    if (this.currentSentenceIndex < this.playlist.length - 1) {
      this.jumpToSentence(this.currentSentenceIndex + 1);
    }
  }

  public previousSentence() {
    if (this.currentSentenceIndex > 0) {
      this.jumpToSentence(this.currentSentenceIndex - 1);
    }
  }

  public restartCurrentSentence() {
    this.jumpToSentence(this.currentSentenceIndex);
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPaused = true;
    this.stopIntervalTimer();
    if (this.synth) {
      this.synth.cancel();
    }
    this.notifyPlaybackState();
  }

  public resume() {
    if (!this.isPlaying || !this.isPaused) return;
    this.isPaused = false;
    this.notifyPlaybackState();
    this.executeCurrentStep();
  }

  public togglePlayPause() {
    if (!this.isPlaying) {
      if (this.playlist.length > 0) {
        this.start(this.playlist, this.currentSentenceIndex);
      }
    } else if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
  }

  public stop() {
    this.isPlaying = false;
    this.isPaused = false;
    this.stopIntervalTimer();
    if (this.synth) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
    this.notifyPlaybackState();
  }

  private stopIntervalTimer() {
    if (this.intervalTimerId !== null) {
      window.clearInterval(this.intervalTimerId);
      this.intervalTimerId = null;
    }
    if (this.callbacks.onIntervalCountdown) {
      this.callbacks.onIntervalCountdown(0);
    }
  }

  /**
   * Main step execution dispatcher based on repeatCount and phase
   */
  private executeCurrentStep() {
    if (!this.synth || !this.isPlaying || this.isPaused) return;

    if (this.currentSentenceIndex >= this.playlist.length) {
      this.stop();
      return;
    }

    const currentItem = this.playlist[this.currentSentenceIndex];
    if (!currentItem || !currentItem.text?.trim()) {
      this.handleSentenceCompleted();
      return;
    }

    // Check if we are in 4-repeat mode (bilingual: 英語2回 → 和訳 → 直訳 → 英語2回)
    if (this.repeatCount === 4) {
      this.execute4StepFlow(currentItem);
    } else {
      // Standard English-only repetitions (3回, 2回, 1回など)
      this.currentPhase = 'normal';
      this.speakEnglish(currentItem.text, this.currentRepeatIndex, () => {
        this.handleStandardRepeatEnded();
      });
    }
  }

  /**
   * 4-repeat cycle flow:
   * en_1 -> en_2 -> ja_translation -> ja_literal -> en_3 -> en_4
   */
  private execute4StepFlow(item: PlayableItem) {
    switch (this.currentPhase) {
      case 'en_1':
        this.currentRepeatIndex = 1;
        this.speakEnglish(item.text, 1, () => {
          this.currentPhase = 'en_2';
          this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
        });
        break;

      case 'en_2':
        this.currentRepeatIndex = 2;
        this.speakEnglish(item.text, 2, () => {
          // Transition to Japanese Translation if available
          if (item.translation?.trim()) {
            this.currentPhase = 'ja_translation';
            this.waitAndExecute(() => this.executeCurrentStep(), 0.7);
          } else {
            this.currentPhase = 'en_3';
            this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
          }
        });
        break;

      case 'ja_translation':
        this.speakJapanese(item.translation || '', 'ja_translation', () => {
          const cleanLiteral = cleanLiteralForSpeech(item.literalTranslation);
          if (cleanLiteral) {
            this.currentPhase = 'ja_literal';
            this.waitAndExecute(() => this.executeCurrentStep(), 0.6);
          } else {
            this.currentPhase = 'en_3';
            this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
          }
        });
        break;

      case 'ja_literal':
        const cleanLiteral = cleanLiteralForSpeech(item.literalTranslation);
        this.speakJapanese(cleanLiteral || item.translation || '', 'ja_literal', () => {
          this.currentPhase = 'en_3';
          this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
        });
        break;

      case 'en_3':
        this.currentRepeatIndex = 3;
        this.speakEnglish(item.text, 3, () => {
          this.currentPhase = 'en_4';
          this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
        });
        break;

      case 'en_4':
        this.currentRepeatIndex = 4;
        this.speakEnglish(item.text, 4, () => {
          this.handleSentenceCompleted();
        });
        break;

      default:
        this.currentPhase = 'en_1';
        this.executeCurrentStep();
        break;
    }
  }

  /**
   * Speak English sentence
   */
  private speakEnglish(text: string, repeatIndex: number, onEnd: () => void) {
    if (!this.synth || !this.isPlaying || this.isPaused) return;

    if (this.callbacks.onSentenceStart) {
      this.callbacks.onSentenceStart(this.currentSentenceIndex);
    }
    if (this.callbacks.onRepeatChange) {
      this.callbacks.onRepeatChange(repeatIndex, this.repeatCount, this.currentPhase);
    }

    this.playRepeatChime(repeatIndex);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.lang = 'en-US';

    if (this.voiceName) {
      const v = this.getVoices().find((x) => x.name === this.voiceName);
      if (v) utterance.voice = v;
    } else {
      const best = this.selectBestDefaultVoice();
      if (best) utterance.voice = best;
    }

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;
      onEnd();
    };

    utterance.onerror = (ev) => {
      if (ev.error === 'canceled' || ev.error === 'interrupted') return;
      if (this.callbacks.onError) {
        this.callbacks.onError(`英語音声再生エラー (${ev.error})`);
      }
      onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.cancel();
    this.synth.speak(utterance);
  }

  /**
   * Speak Japanese text (translation or chunk literal translation)
   */
  private speakJapanese(text: string, phase: SpeechPhase, onEnd: () => void) {
    if (!this.synth || !this.isPlaying || this.isPaused || !text.trim()) {
      onEnd();
      return;
    }

    if (this.callbacks.onSentenceStart) {
      this.callbacks.onSentenceStart(this.currentSentenceIndex);
    }
    if (this.callbacks.onRepeatChange) {
      this.callbacks.onRepeatChange(this.currentRepeatIndex, this.repeatCount, phase);
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = Math.min(1.15, Math.max(0.85, this.rate));
    utterance.pitch = 1.0;

    const jaVoice = this.selectBestJapaneseVoice();
    if (jaVoice) {
      utterance.voice = jaVoice;
    }

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;
      onEnd();
    };

    utterance.onerror = (ev) => {
      if (ev.error === 'canceled' || ev.error === 'interrupted') return;
      onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.cancel();
    this.synth.speak(utterance);
  }

  /**
   * Handle repeat ended in standard (non-4x) mode
   */
  private handleStandardRepeatEnded() {
    if (!this.isPlaying || this.isPaused) return;

    if (this.currentRepeatIndex < this.repeatCount) {
      this.currentRepeatIndex += 1;
      this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval);
    } else {
      this.handleSentenceCompleted();
    }
  }

  /**
   * Wait for pause interval with live countdown
   */
  private waitAndExecute(action: () => void, seconds: number) {
    const totalMs = Math.max(300, seconds * 1000);
    const startTime = Date.now();

    this.stopIntervalTimer();

    this.intervalTimerId = window.setInterval(() => {
      if (!this.isPlaying || this.isPaused) {
        this.stopIntervalTimer();
        return;
      }
      const elapsed = Date.now() - startTime;
      const remainingMs = Math.max(0, totalMs - elapsed);
      const remainingSec = Math.ceil(remainingMs / 100) / 10;

      if (this.callbacks.onIntervalCountdown) {
        this.callbacks.onIntervalCountdown(remainingSec);
      }

      if (remainingMs <= 0) {
        this.stopIntervalTimer();
        action();
      }
    }, 100);
  }

  private handleSentenceCompleted() {
    if (this.callbacks.onSentenceFinished) {
      this.callbacks.onSentenceFinished(this.currentSentenceIndex);
    }

    if (!this.autoAdvance) {
      this.pause();
      return;
    }

    // Advance to next sentence
    if (this.currentSentenceIndex < this.playlist.length - 1) {
      this.currentSentenceIndex += 1;
      this.currentRepeatIndex = 1;
      this.currentPhase = this.repeatCount === 4 ? 'en_1' : 'normal';
      // Slight pause between different sentences
      this.waitAndExecute(() => this.executeCurrentStep(), this.pauseInterval * 1.1);
    } else {
      // Finished all sentences!
      this.stop();
    }
  }

  private notifyPlaybackState() {
    if (this.callbacks.onPlaybackStateChange) {
      this.callbacks.onPlaybackStateChange(this.isPlaying, this.isPaused);
    }
  }

  public getCurrentIndex() {
    return this.currentSentenceIndex;
  }

  public getCurrentRepeat() {
    return this.currentRepeatIndex;
  }

  public getCurrentPhase() {
    return this.currentPhase;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  public getIsPaused() {
    return this.isPaused;
  }
}
