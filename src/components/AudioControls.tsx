import React from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Volume2,
  Settings,
  Flame,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { AudioSettings } from '../types';

interface AudioControlsProps {
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSentences: number;
  currentRepeat: number;
  repeatCount: number;
  intervalCountdown: number;
  settings: AudioSettings;
  availableVoices: SpeechSynthesisVoice[];
  onTogglePlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onRestartCurrent: () => void;
  onUpdateSettings: (newSettings: Partial<AudioSettings>) => void;
  onOpenSettingsModal: () => void;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  isPaused,
  currentIndex,
  totalSentences,
  currentRepeat,
  repeatCount,
  intervalCountdown,
  settings,
  availableVoices,
  onTogglePlayPause,
  onNext,
  onPrevious,
  onRestartCurrent,
  onUpdateSettings,
  onOpenSettingsModal
}) => {
  const repeatLabels = [
    { num: 1, label: '1回目', desc: 'リスニング & 音の把握' },
    { num: 2, label: '2回目', desc: 'シャドーイング & リピート' },
    { num: 3, label: '3回目', desc: '定着 & 意味の確認' }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] py-3 px-4 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col gap-2.5">
        {/* Top Mini Progress Bar & Repetition Status */}
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">
              第 {currentIndex + 1} 文 / 全 {totalSentences} 文
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px] text-slate-500">
              ({Math.round(((currentIndex + 1) / Math.max(1, totalSentences)) * 100)}% 完了)
            </span>
          </div>

          {/* Repetition 3-Step Badges */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: Math.min(5, repeatCount) }, (_, i) => i + 1).map((r) => {
              const isActive = isPlaying && !isPaused && currentRepeat === r;
              const isDone = isPlaying && currentRepeat > r;
              return (
                <div
                  key={r}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300/60 dark:ring-amber-500/40 scale-105 animate-pulse'
                      : isDone
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  <span>{r}回目</span>
                  {r === 1 && <span className="hidden sm:inline text-[10px] font-normal opacity-90">(聞く)</span>}
                  {r === 2 && <span className="hidden sm:inline text-[10px] font-normal opacity-90">(真似る)</span>}
                  {r === 3 && <span className="hidden sm:inline text-[10px] font-normal opacity-90">(話す)</span>}
                </div>
              );
            })}

            {intervalCountdown > 0 && (
              <span className="ml-2 text-[11px] text-amber-600 dark:text-amber-400 font-mono font-bold bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800 animate-pulse">
                次の音読まで {intervalCountdown}s
              </span>
            )}
          </div>
        </div>

        {/* Sentence Timeline Progress Line */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / Math.max(1, totalSentences)) * 100}%`
            }}
          />
        </div>

        {/* Control Buttons & Setting Toggles */}
        <div className="flex items-center justify-between gap-3">
          {/* Left: Speed & Repeat Count Selectors */}
          <div className="flex items-center gap-2">
            {/* Repeat count button selector */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              {[1, 2, 3, 5].map((cnt) => (
                <button
                  key={cnt}
                  onClick={() => onUpdateSettings({ repeatCount: cnt })}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    settings.repeatCount === cnt
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title={`${cnt}回ずつ音読`}
                >
                  {cnt}回
                </button>
              ))}
            </div>

            {/* Speed pills */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              {[0.75, 0.85, 1.0, 1.2].map((spd) => (
                <button
                  key={spd}
                  onClick={() => onUpdateSettings({ rate: spd })}
                  className={`px-2 py-1 rounded-md font-semibold transition ${
                    Math.abs(settings.rate - spd) < 0.01
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title={`再生速度 ${spd === 1 ? '1x' : `${spd}x`}`}
                >
                  {spd === 1 ? '1x' : `${spd}x`}
                </button>
              ))}
            </div>
          </div>

          {/* Center: Main Playback Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onPrevious}
              disabled={currentIndex <= 0}
              title="前の文章へ"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={onRestartCurrent}
              title="現在の文を最初から再生"
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlayPause}
              className={`p-3.5 rounded-full text-white shadow-md transition-all transform active:scale-95 ${
                isPlaying && !isPaused
                  ? 'bg-amber-600 hover:bg-amber-700 ring-4 ring-amber-100 dark:ring-amber-950/60'
                  : 'bg-indigo-600 hover:bg-indigo-700 ring-4 ring-indigo-100 dark:ring-indigo-950/60'
              }`}
              title={isPlaying && !isPaused ? '一時停止 (Space)' : '3回音読スタート (Space)'}
            >
              {isPlaying && !isPaused ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={onNext}
              disabled={currentIndex >= totalSentences - 1}
              title="次の文章へ"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Audio Settings & Auto Advance Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateSettings({ autoAdvance: !settings.autoAdvance })}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
                settings.autoAdvance
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
              }`}
              title="3回音読完了後に自動で次の文へ進む"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              自動送り
            </button>

            <button
              onClick={onOpenSettingsModal}
              title="音声・間隔の詳細設定"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
