import React from 'react';
import {
  BookOpen,
  Volume2,
  Atom,
  FilePlus,
  Eye,
  Settings,
  Flame,
  Award,
  Sparkles
} from 'lucide-react';
import { TranslationDisplayMode, StoryCategory } from '../types';

interface HeaderProps {
  currentCategory: StoryCategory;
  currentStoryId: string;
  translationMode: TranslationDisplayMode;
  completedCount: number;
  totalCount: number;
  onSelectStory: (storyId: string) => void;
  onChangeTranslationMode: (mode: TranslationDisplayMode) => void;
  onOpenScienceModal: () => void;
  onOpenCustomModal: () => void;
  onOpenSettingsModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  currentStoryId,
  translationMode,
  completedCount,
  totalCount,
  onSelectStory,
  onChangeTranslationMode,
  onOpenScienceModal,
  onOpenCustomModal,
  onOpenSettingsModal
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                EchoRead English
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300/60 dark:bg-amber-950/60 dark:text-amber-300">
                3回音読
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              1文3回音読シャドーイング & 瞬時和訳・チャンク直訳
            </p>
          </div>
        </div>

        {/* Story Categories Selector Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs">
          <button
            onClick={() => onSelectStory('snow-white')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentStoryId === 'snow-white'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🍎</span>
            <span>白雪姫</span>
          </button>

          <button
            onClick={() => onSelectStory('cinderella')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentStoryId === 'cinderella'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>👠</span>
            <span>シンデレラ</span>
          </button>

          <button
            onClick={() => onSelectStory('red-riding-hood')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentStoryId === 'red-riding-hood'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🧺</span>
            <span>赤ずきん</span>
          </button>

          <button
            onClick={() => onSelectStory('rapunzel')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentStoryId === 'rapunzel'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🏰</span>
            <span>ラプンツェル</span>
          </button>

          <button
            onClick={() => onSelectStory('alice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentStoryId === 'alice'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>🐇</span>
            <span>アリス</span>
          </button>

          <button
            onClick={() => {
              onSelectStory('science');
              onOpenScienceModal();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentCategory === 'science'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Europe PMC 論文検索 & サイエンス英語"
          >
            <Atom className="w-3.5 h-3.5" />
            <span>科学論文</span>
          </button>

          <button
            onClick={() => {
              onSelectStory('custom');
              onOpenCustomModal();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              currentCategory === 'custom'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="自由な英文を貼り付けて3回音読"
          >
            <FilePlus className="w-3.5 h-3.5" />
            <span>自由入力</span>
          </button>
        </div>

        {/* Translation Mode & Quick Settings */}
        <div className="flex items-center gap-2">
          {/* Translation View Mode Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => onChangeTranslationMode('always')}
              className={`px-2 py-1 rounded-md font-medium transition ${
                translationMode === 'always'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="すべての文の和訳を常時表示"
            >
              全訳常時
            </button>
            <button
              onClick={() => onChangeTranslationMode('active_only')}
              className={`px-2 py-1 rounded-md font-medium transition ${
                translationMode === 'active_only'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="再生中の文のみ和訳を表示"
            >
              再生文のみ
            </button>
            <button
              onClick={() => onChangeTranslationMode('reveal_on_click')}
              className={`px-2 py-1 rounded-md font-medium transition ${
                translationMode === 'reveal_on_click'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="タップして和訳を表示（確認テスト用）"
            >
              タップ表示
            </button>
          </div>

          {/* Stats Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {completedCount} / {totalCount} 文習得
            </span>
          </div>

          <button
            onClick={onOpenSettingsModal}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition"
            title="音声設定"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
