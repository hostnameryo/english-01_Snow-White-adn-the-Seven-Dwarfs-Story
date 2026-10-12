import React, { useRef, useEffect } from 'react';
import {
  Volume2,
  BookOpen,
  Sparkles,
  Check,
  ChevronRight,
  Eye,
  EyeOff,
  Mic,
  Bookmark,
  Share2
} from 'lucide-react';
import { SentenceItem, Story, TranslationDisplayMode } from '../types';
import { getSentenceLiteralTranslation } from '../data/literalTranslations';

interface SentenceReaderProps {
  story: Story;
  sentences: SentenceItem[];
  currentIndex: number;
  currentRepeat: number;
  isPlaying: boolean;
  isPaused: boolean;
  translationMode: TranslationDisplayMode;
  revealedSentences: Set<string>;
  completedSentences: Set<string>;
  onSelectSentence: (index: number) => void;
  onSpeakSentence: (text: string) => void;
  onWordClick: (word: string, event: React.MouseEvent) => void;
  onOpenAnalysis: (sentence: SentenceItem) => void;
  onToggleRevealTranslation: (sentenceId: string) => void;
}

export const SentenceReader: React.FC<SentenceReaderProps> = ({
  story,
  sentences,
  currentIndex,
  currentRepeat,
  isPlaying,
  isPaused,
  translationMode,
  revealedSentences,
  completedSentences,
  onSelectSentence,
  onSpeakSentence,
  onWordClick,
  onOpenAnalysis,
  onToggleRevealTranslation
}) => {
  const activeSentenceRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to active sentence smoothly
  useEffect(() => {
    if (activeSentenceRef.current) {
      activeSentenceRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentIndex]);

  const isParchment = story.theme === 'parchment';

  return (
    <div
      className={`rounded-2xl transition-all shadow-sm border p-4 sm:p-8 ${
        isParchment
          ? 'bg-[#fcf7ed] border-[#e8dcc4] text-[#2c221e] shadow-amber-900/5'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100'
      }`}
    >
      {/* Story Metadata Header */}
      <div
        className={`pb-6 mb-6 border-b ${
          isParchment
            ? 'border-[#e8dcc4]/80'
            : 'border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                story.category === 'fairytale'
                  ? 'bg-amber-100 text-amber-800 border border-amber-300/60'
                  : story.category === 'science'
                  ? 'bg-blue-100 text-blue-800 border border-blue-300/60'
                  : 'bg-indigo-100 text-indigo-800 border border-indigo-300/60'
              }`}
            >
              {story.category === 'fairytale'
                ? '童話・ストーリー音読'
                : story.category === 'science'
                ? '科学論文・サイエンス英語'
                : '学習テキスト'}
            </span>
            {story.peerReviewed && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                Peer-reviewed (査読済み)
              </span>
            )}
            <span
              className={`text-xs font-mono font-medium ${
                isParchment ? 'text-[#8a7566]' : 'text-slate-400'
              }`}
            >
              全 {sentences.length} 文
            </span>
          </div>

          {story.sourceUrl && (
            <a
              href={story.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium"
            >
              出典・原典を見る ↗
            </a>
          )}
        </div>

        <h1
          className={`text-2xl sm:text-3xl font-bold tracking-tight mb-1.5 ${
            isParchment ? 'font-serif text-[#3a271d]' : 'text-slate-900 dark:text-white'
          }`}
        >
          {story.title}
        </h1>
        <p
          className={`text-sm font-medium ${
            isParchment ? 'text-[#7d6554]' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          {story.titleJa}
        </p>

        {story.citation && (
          <div className="mt-3 text-[11px] font-mono text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
            📚 {story.citation}
          </div>
        )}
      </div>

      {/* Sentence List */}
      <div className="space-y-4 sm:space-y-6">
        {sentences.map((sent, index) => {
          const isActive = index === currentIndex;
          const isDone = completedSentences.has(sent.id);
          const isRevealed =
            translationMode === 'always' ||
            (translationMode === 'active_only' && isActive) ||
            revealedSentences.has(sent.id);

          return (
            <div
              key={sent.id}
              ref={isActive ? activeSentenceRef : null}
              className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
                isActive
                  ? isParchment
                    ? 'bg-[#f7edd8] border-amber-600/50 shadow-md ring-2 ring-amber-500/20'
                    : 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500/60 shadow-md ring-2 ring-indigo-500/20'
                  : isParchment
                  ? 'bg-[#fffaf0]/80 hover:bg-[#fbf1dc] border-[#e5d6bc]/80'
                  : 'bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Top metadata pill row */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectSentence(index)}
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md transition ${
                      isActive
                        ? 'bg-amber-600 text-white'
                        : isParchment
                        ? 'bg-[#eadeca] text-[#5c493c] hover:bg-amber-600 hover:text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white'
                    }`}
                    title="この文から再生"
                  >
                    #{String(index + 1).padStart(2, '0')}
                  </button>

                  {sent.slideNumber && (
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                        isParchment
                          ? 'bg-[#eee4cf] text-[#735e4e]'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      スライド {sent.slideNumber}
                    </span>
                  )}

                  {isDone && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      <Check className="w-3 h-3" />
                      3回音読済
                    </span>
                  )}
                </div>

                {/* Active Sentence 3-Times Repetition Badge */}
                {isActive && (
                  <div className="flex items-center gap-1.5 animate-in fade-in duration-150">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-sm animate-pulse">
                      <span>{currentRepeat} / 3 回目</span>
                      {currentRepeat === 1 && (
                        <span className="hidden sm:inline text-[10px] opacity-90">
                          (リスニング)
                        </span>
                      )}
                      {currentRepeat === 2 && (
                        <span className="hidden sm:inline text-[10px] opacity-90">
                          (シャドーイング)
                        </span>
                      )}
                      {currentRepeat === 3 && (
                        <span className="hidden sm:inline text-[10px] opacity-90">
                          (定着音読)
                        </span>
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Main English Text (Words are interactive clickable tokens) */}
              <div
                className={`text-lg sm:text-xl font-medium leading-relaxed tracking-wide mb-3 ${
                  isParchment ? 'font-serif text-[#261c16]' : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {sent.text.split(/(\s+)/).map((segment, segIdx) => {
                  if (/^\s+$/.test(segment)) {
                    return <span key={segIdx}>{segment}</span>;
                  }
                  // Clean word for dictionary lookup
                  const cleanWord = segment.replace(/^[“"'(]+|[.,!?;:’”")]+$/g, '');
                  return (
                    <span
                      key={segIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        onWordClick(cleanWord, e);
                      }}
                      className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 hover:underline decoration-amber-400 decoration-2 underline-offset-4 rounded transition inline-block"
                      title="クリックで瞬時辞書を表示"
                    >
                      {segment}
                    </span>
                  );
                })}
              </div>

              {/* Instant Japanese Translation (和訳) & Chunk Literal Translation (直訳) */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                {isRevealed ? (
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`text-sm sm:text-base font-medium leading-relaxed ${
                          isParchment
                            ? 'text-[#5e4b3e]'
                            : 'text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {sent.translation}
                      </p>
                      {translationMode === 'reveal_on_click' && (
                        <button
                          onClick={() => onToggleRevealTranslation(sent.id)}
                          className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded shrink-0"
                          title="和訳を隠す"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    {/* チャンクごとの直訳 (スラッシュ区切り・丸括弧) */}
                    {getSentenceLiteralTranslation(sent) && (
                      <p
                        className={`text-xs sm:text-sm font-mono leading-relaxed tracking-wide ${
                          isParchment
                            ? 'text-[#876a54]'
                            : 'text-indigo-600/90 dark:text-indigo-400/90'
                        }`}
                      >
                        {getSentenceLiteralTranslation(sent)}
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onToggleRevealTranslation(sent.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-100/70 hover:bg-amber-200/80 text-amber-900 border border-amber-300/60 transition shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    タップして和訳・直訳を瞬時表示
                  </button>
                )}
              </div>

              {/* Action Toolbar for Sentence */}
              <div className="mt-3 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onSpeakSentence(sent.text)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium transition"
                    title="この文を1回音読再生"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    再生
                  </button>

                  <button
                    onClick={() => onOpenAnalysis(sent)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-100/80 dark:bg-indigo-950/60 hover:bg-indigo-200 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-200/80 dark:border-indigo-800 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    文構造・文法解説
                  </button>

                  <button
                    onClick={() => onOpenAnalysis(sent)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100/80 dark:bg-emerald-950/60 hover:bg-emerald-200 text-emerald-800 dark:text-emerald-300 font-medium border border-emerald-200/80 dark:border-emerald-800 transition"
                    title="マイクで録音して発音チェック"
                  >
                    <Mic className="w-3.5 h-3.5" />
                    シャドーイング録音
                  </button>
                </div>

                <button
                  onClick={() => onSelectSentence(index)}
                  className="text-xs text-amber-700 dark:text-amber-400 font-semibold hover:underline flex items-center gap-0.5"
                >
                  ここから3回音読
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
