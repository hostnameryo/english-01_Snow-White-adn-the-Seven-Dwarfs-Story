/**
 * Speech & Repeat Engine
 * Controls reading aloud each sentence 3 times sequentially with countdown intervals
 */

export interface SpeechEngineCallbacks {
  onSentenceStart?: (index: number) => void;
  onRepeatChange?: (repeatIndex: number, totalRepeats: number) => void; // 1, 2, 3
  onIntervalCountdown?: (remainingSec: number) => void;
  onSentenceFinished?: (index: number) => void;
  onPlaybackStateChange?: (isPlaying: boolean, isPaused: boolean) => void;
  onError?: (msg: string) => void;
}

export class SpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPlaying = false;
  private isPaused = false;
  private currentSentenceIndex = 0;
  private currentRepeatIndex = 1; // 1 to repeatCount
  private sentences: string[] = [];
  private callbacks: SpeechEngineCallbacks = {};

  // Settings
  public rate = 1.0;
  public pitch = 1.0;
  public repeatCount = 3; // 3回音読
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

  public selectBestDefaultVoice(): SpeechSynthesisVoice | null {
    const enVoices = this.getVoices();
    if (enVoices.length === 0) return null;

    // Prefer high quality US or UK voices
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

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine') {
    try {
      if (!this.audioCtx) {
        const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
      // AudioContext might be blocked or unavailable, safe ignore
    }
  }

  public playRepeatChime(repeatNum: number) {
    // Soft melodic chime indicating repeat 1, 2, or 3
    const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5
    const f = freqs[(repeatNum - 1) % freqs.length] || 587.33;
    this.playTone(f, 0.15, 'sine');
  }

  public start(sentences: string[], startIndex = 0) {
    this.stop();
    this.sentences = sentences;
    this.currentSentenceIndex = Math.max(0, Math.min(startIndex, sentences.length - 1));
    this.currentRepeatIndex = 1;
    this.isPlaying = true;
    this.isPaused = false;
    this.notifyPlaybackState();
    this.speakCurrentRepeat();
  }

  public jumpToSentence(index: number) {
    if (index < 0 || index >= this.sentences.length) return;
    this.stopIntervalTimer();
    if (this.synth) this.synth.cancel();

    this.currentSentenceIndex = index;
    this.currentRepeatIndex = 1;
    if (this.isPlaying) {
      this.speakCurrentRepeat();
    } else {
      this.isPlaying = true;
      this.isPaused = false;
      this.notifyPlaybackState();
      this.speakCurrentRepeat();
    }
  }

  public nextSentence() {
    if (this.currentSentenceIndex < this.sentences.length - 1) {
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
    this.speakCurrentRepeat();
  }

  public togglePlayPause() {
    if (!this.isPlaying) {
      if (this.sentences.length > 0) {
        this.start(this.sentences, this.currentSentenceIndex);
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

  private speakCurrentRepeat() {
    if (!this.synth || !this.isPlaying || this.isPaused) return;

    if (this.currentSentenceIndex >= this.sentences.length) {
      this.stop();
      return;
    }

    const textToSpeak = this.sentences[this.currentSentenceIndex]?.trim();
    if (!textToSpeak) {
      this.handleSentenceCompleted();
      return;
    }

    // Notify callbacks
    if (this.callbacks.onSentenceStart) {
      this.callbacks.onSentenceStart(this.currentSentenceIndex);
    }
    if (this.callbacks.onRepeatChange) {
      this.callbacks.onRepeatChange(this.currentRepeatIndex, this.repeatCount);
    }

    // Play tone for repetition
    this.playRepeatChime(this.currentRepeatIndex);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    utterance.lang = 'en-US';

    // Set voice if chosen
    if (this.voiceName) {
      const v = this.getVoices().find((x) => x.name === this.voiceName);
      if (v) utterance.voice = v;
    } else {
      const best = this.selectBestDefaultVoice();
      if (best) utterance.voice = best;
    }

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;
      this.handleRepeatEnded();
    };

    utterance.onerror = (ev) => {
      // If utterance was canceled purposefully, don't trigger error
      if (ev.error === 'canceled' || ev.error === 'interrupted') return;
      if (this.callbacks.onError) {
        this.callbacks.onError(`音声再生エラー (${ev.error})`);
      }
      this.handleRepeatEnded();
    };

    this.currentUtterance = utterance;
    this.synth.cancel(); // clear queue
    this.synth.speak(utterance);
  }

  private handleRepeatEnded() {
    if (!this.isPlaying || this.isPaused) return;

    if (this.currentRepeatIndex < this.repeatCount) {
      // Move to next repeat of the SAME sentence after pause interval!
      this.currentRepeatIndex += 1;
      this.waitAndSpeakNextRepeat();
    } else {
      // Completed all 3 repetitions for this sentence!
      this.handleSentenceCompleted();
    }
  }

  private waitAndSpeakNextRepeat() {
    const totalMs = Math.max(400, this.pauseInterval * 1000);
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
        this.speakCurrentRepeat();
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
    if (this.currentSentenceIndex < this.sentences.length - 1) {
      this.currentSentenceIndex += 1;
      this.currentRepeatIndex = 1;
      // Slight pause between different sentences (pauseInterval * 1.2)
      this.waitAndSpeakNextRepeat();
    } else {
      // Finished entire text!
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

  public getIsPlaying() {
    return this.isPlaying;
  }

  public getIsPaused() {
    return this.isPaused;
  }
}
