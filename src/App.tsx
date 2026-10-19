import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { snowWhiteStory } from './data/snowWhiteStory';
import { cinderellaStory } from './data/cinderellaStory';
import { redRidingHoodStory } from './data/redRidingHoodStory';
import { rapunzelStory } from './data/rapunzelStory';
import { aliceStory } from './data/aliceStory';
import { scienceStories } from './data/scienceStories';
import { lookupWord, DictEntry } from './data/dictionary';
import { Story, SentenceItem, TranslationDisplayMode, AudioSettings, StoryCategory } from './types';
import { SpeechEngine, SpeechPhase, PlayableItem } from './services/speechService';
import { getSentenceLiteralTranslation } from './data/literalTranslations';

import { Header } from './components/Header';
import { SentenceReader } from './components/SentenceReader';
import { AudioControls } from './components/AudioControls';
import { WordDictionaryPopover } from './components/WordDictionaryPopover';
import { SentenceAnalysisDrawer } from './components/SentenceAnalysisDrawer';
import { ScienceSearchModal } from './components/ScienceSearchModal';
import { CustomTextModal } from './components/CustomTextModal';
import { VoiceSettingsModal } from './components/VoiceSettingsModal';

export default function App() {
  const [currentStory, setCurrentStory] = useState<Story>(snowWhiteStory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [currentPhase, setCurrentPhase] = useState<SpeechPhase>('en_1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalCountdown, setIntervalCountdown] = useState(0);

  const [translationMode, setTranslationMode] = useState<TranslationDisplayMode>('always');
  const [revealedSentences, setRevealedSentences] = useState<Set<string>>(new Set());
  const [completedSentences, setCompletedSentences] = useState<Set<string>>(new Set());

  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [settings, setSettings] = useState<AudioSettings>({
    rate: 1.0,
    pitch: 1.0,
    repeatCount: 4, // 4回再生が標準仕様（英語2回 → 和訳 → 直訳 → 英語2回）
    pauseIntervalSeconds: 1.2,
    autoAdvance: true,
    voiceName: ''
  });

  // Modals & Drawers state
  const [analysisSentence, setAnalysisSentence] = useState<SentenceItem | null>(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isScienceModalOpen, setIsScienceModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // Word Dictionary Popover state
  const [popoverWord, setPopoverWord] = useState<string>('');
  const [popoverEntry, setPopoverEntry] = useState<DictEntry | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number } | null>(null);

  // Engine ref
  const engineRef = useRef<SpeechEngine | null>(null);

  useEffect(() => {
    const engine = new SpeechEngine({
      onSentenceStart: (idx) => {
        setCurrentIndex(idx);
      },
      onRepeatChange: (repeatIdx, _total, phase) => {
        setCurrentRepeat(repeatIdx);
        if (phase) setCurrentPhase(phase);
      },
      onIntervalCountdown: (sec) => {
        setIntervalCountdown(sec);
      },
      onSentenceFinished: (idx) => {
        const sentence = currentStory.sentences[idx];
        if (sentence) {
          setCompletedSentences((prev) => new Set(prev).add(sentence.id));
        }
        if (idx === currentStory.sentences.length - 1) {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      },
      onPlaybackStateChange: (playing, paused) => {
        setIsPlaying(playing);
        setIsPaused(paused);
      },
      onError: (msg) => {
        console.warn('Speech engine warning:', msg);
      }
    });

    engineRef.current = engine;

    // Load voices
    const loadVoices = () => {
      const voices = engine.getVoices();
      setAvailableVoices(voices);
    };

    loadVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      engine.stop();
    };
  }, [currentStory]);

  // Sync settings into engine
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.rate = settings.rate;
      engineRef.current.pitch = settings.pitch;
      engineRef.current.repeatCount = settings.repeatCount;
      engineRef.current.pauseInterval = settings.pauseIntervalSeconds;
      engineRef.current.autoAdvance = settings.autoAdvance;
      engineRef.current.voiceName = settings.voiceName;
    }
  }, [settings]);

  // Keyboard shortcut (Space: Play/Pause, ArrowLeft: Prev, ArrowRight: Next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        isScienceModalOpen ||
        isCustomModalOpen ||
        isSettingsModalOpen
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleTogglePlayPause();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNextSentence();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePreviousSentence();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isPaused, currentIndex, currentStory]);

  const getPlayableItems = (): PlayableItem[] => {
    return currentStory.sentences.map((s) => ({
      text: s.text,
      translation: s.translation,
      literalTranslation: getSentenceLiteralTranslation(s) || s.literalTranslation,
    }));
  };

  const handleTogglePlayPause = () => {
    if (!engineRef.current) return;
    const items = getPlayableItems();
    if (!isPlaying) {
      engineRef.current.start(items, currentIndex);
    } else {
      engineRef.current.togglePlayPause();
    }
  };

  const handleSelectSentence = (idx: number) => {
    setCurrentIndex(idx);
    if (!engineRef.current) return;
    const items = getPlayableItems();
    if (isPlaying) {
      engineRef.current.jumpToSentence(idx);
    } else {
      engineRef.current.start(items, idx);
    }
  };

  const handleNextSentence = () => {
    if (!engineRef.current) return;
    if (currentIndex < currentStory.sentences.length - 1) {
      handleSelectSentence(currentIndex + 1);
    }
  };

  const handlePreviousSentence = () => {
    if (!engineRef.current) return;
    if (currentIndex > 0) {
      handleSelectSentence(currentIndex - 1);
    }
  };

  const handleRestartCurrent = () => {
    if (!engineRef.current) return;
    engineRef.current.restartCurrentSentence();
  };

  const handleSpeakSingleSentence = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = settings.rate;
      u.lang = 'en-US';
      if (settings.voiceName) {
        const v = availableVoices.find((x) => x.name === settings.voiceName);
        if (v) u.voice = v;
      }
      window.speechSynthesis.speak(u);
    }
  };

  const handleWordClick = (rawWord: string, event: React.MouseEvent) => {
    const entry = lookupWord(rawWord);
    setPopoverWord(rawWord);
    setPopoverEntry(entry);
    setPopoverPosition({ x: event.clientX, y: event.clientY });
  };

  const handleSelectStory = (storyId: string) => {
    if (storyId === 'snow-white') {
      setCurrentStory(snowWhiteStory);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    } else if (storyId === 'cinderella') {
      setCurrentStory(cinderellaStory);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    } else if (storyId === 'red-riding-hood') {
      setCurrentStory(redRidingHoodStory);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    } else if (storyId === 'rapunzel') {
      setCurrentStory(rapunzelStory);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    } else if (storyId === 'alice') {
      setCurrentStory(aliceStory);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    } else if (storyId === 'science') {
      // Pick default science story
      setCurrentStory(scienceStories[0]);
      setCurrentIndex(0);
      setCurrentRepeat(1);
      if (engineRef.current) engineRef.current.stop();
    }
  };

  const handleSelectCategory = (cat: StoryCategory) => {
    if (cat === 'fairytale') {
      handleSelectStory('snow-white');
    } else if (cat === 'science') {
      handleSelectStory('science');
    }
  };

  const handleSelectScienceStory = (story: Story) => {
    setCurrentStory(story);
    setCurrentIndex(0);
    setCurrentRepeat(1);
    if (engineRef.current) engineRef.current.stop();
  };

  const handleLoadCustomStory = (story: Story) => {
    setCurrentStory(story);
    setCurrentIndex(0);
    setCurrentRepeat(1);
    if (engineRef.current) engineRef.current.stop();
  };

  const handleToggleReveal = (sentId: string) => {
    setRevealedSentences((prev) => {
      const next = new Set(prev);
      if (next.has(sentId)) next.delete(sentId);
      else next.add(sentId);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors pb-32">
      {/* Top Navbar */}
      <Header
        currentCategory={currentStory.category}
        currentStoryId={currentStory.id}
        translationMode={translationMode}
        completedCount={completedSentences.size}
        totalCount={currentStory.sentences.length}
        onSelectStory={handleSelectStory}
        onChangeTranslationMode={setTranslationMode}
        onOpenScienceModal={() => setIsScienceModalOpen(true)}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
      />

      {/* Main Reading Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 sm:py-8">
        {/* Story Selector Quick Chips */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold text-[11px] mr-1">教材切り替え:</span>
          <button
            onClick={() => handleSelectStory('snow-white')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
              currentStory.id === 'snow-white'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400'
            }`}
          >
            🍎 白雪姫 (全47文)
          </button>

          <button
            onClick={() => handleSelectStory('cinderella')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
              currentStory.id === 'cinderella'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400'
            }`}
          >
            👠 シンデレラ (全76文)
          </button>

          <button
            onClick={() => handleSelectStory('red-riding-hood')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
              currentStory.id === 'red-riding-hood'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-rose-400'
            }`}
          >
            🧺 赤ずきん (全43文)
          </button>

          <button
            onClick={() => handleSelectStory('rapunzel')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
              currentStory.id === 'rapunzel'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400'
            }`}
          >
            🏰 ラプンツェル (全30スライド)
          </button>

          <button
            onClick={() => handleSelectStory('alice')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
              currentStory.id === 'alice'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-sky-400'
            }`}
          >
            🐇 アリス (全7章)
          </button>

          {scienceStories.map((sci) => (
            <button
              key={sci.id}
              onClick={() => handleSelectScienceStory(sci)}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                currentStory.id === sci.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              🧬 {sci.title.split(':')[0]}
            </button>
          ))}

          <button
            onClick={() => setIsScienceModalOpen(true)}
            className="px-3 py-1.5 rounded-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition flex items-center gap-1"
          >
            🔍 Europe PMC論文検索…
          </button>

          <button
            onClick={() => setIsCustomModalOpen(true)}
            className="px-3 py-1.5 rounded-xl font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition flex items-center gap-1"
          >
            ✏️ 自前の英文を貼付…
          </button>
        </div>

        {/* Feature Banner: 4-Times Repetition Instructions */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-blue-500/10 border border-amber-300/40 dark:border-amber-600/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🎧</span>
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100 block flex items-center gap-2">
                <span>1文（.で終わる文）を4回再生する反復学習法</span>
                <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">標準仕様</span>
              </span>
              <span className="text-slate-600 dark:text-slate-400 text-[11px] block mt-0.5">
                英語2回（リスニング・シャドーイング） → 🇯🇵和訳発音 → 🇯🇵直訳発音 → 英語2回（定着音読・総仕上げ）
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>スペースキーで再生 / 停止</span>
          </div>
        </div>

        {/* Sentence Reader Component */}
        <SentenceReader
          story={currentStory}
          sentences={currentStory.sentences}
          currentIndex={currentIndex}
          currentRepeat={currentRepeat}
          repeatCount={settings.repeatCount}
          currentPhase={currentPhase}
          isPlaying={isPlaying}
          isPaused={isPaused}
          translationMode={translationMode}
          revealedSentences={revealedSentences}
          completedSentences={completedSentences}
          onSelectSentence={handleSelectSentence}
          onSpeakSentence={handleSpeakSingleSentence}
          onWordClick={handleWordClick}
          onOpenAnalysis={(sent) => {
            setAnalysisSentence(sent);
            setIsAnalysisOpen(true);
          }}
          onToggleRevealTranslation={handleToggleReveal}
        />
      </main>

      {/* Floating Bottom Audio Playback Controller */}
      <AudioControls
        isPlaying={isPlaying}
        isPaused={isPaused}
        currentIndex={currentIndex}
        totalSentences={currentStory.sentences.length}
        currentRepeat={currentRepeat}
        repeatCount={settings.repeatCount}
        currentPhase={currentPhase}
        intervalCountdown={intervalCountdown}
        settings={settings}
        availableVoices={availableVoices}
        onTogglePlayPause={handleTogglePlayPause}
        onNext={handleNextSentence}
        onPrevious={handlePreviousSentence}
        onRestartCurrent={handleRestartCurrent}
        onUpdateSettings={(newSettings) => setSettings((s) => ({ ...s, ...newSettings }))}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
      />

      {/* Word Dictionary Popover */}
      <WordDictionaryPopover
        word={popoverWord}
        entry={popoverEntry}
        position={popoverPosition}
        onClose={() => setPopoverPosition(null)}
        onSpeakWord={(w) => handleSpeakSingleSentence(w)}
      />

      {/* Sentence Analysis Drawer */}
      <SentenceAnalysisDrawer
        sentence={analysisSentence}
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
        onSpeak={(t) => handleSpeakSingleSentence(t)}
      />

      {/* Europe PMC Science Literature Search Modal */}
      <ScienceSearchModal
        isOpen={isScienceModalOpen}
        onClose={() => setIsScienceModalOpen(false)}
        onSelectScienceStory={handleSelectScienceStory}
      />

      {/* Custom Text Paste Modal */}
      <CustomTextModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onLoadCustomStory={handleLoadCustomStory}
      />

      {/* Voice & Interval Settings Modal */}
      <VoiceSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        voices={availableVoices}
        onUpdateSettings={(newSettings) => setSettings((s) => ({ ...s, ...newSettings }))}
      />
    </div>
  );
}
