import React from 'react';
import { Volume2, X, BookOpen } from 'lucide-react';
import { DictEntry } from '../data/dictionary';

interface WordDictionaryPopoverProps {
  entry: DictEntry | null;
  word: string;
  position: { x: number; y: number } | null;
  onClose: () => void;
  onSpeakWord: (word: string) => void;
}

export const WordDictionaryPopover: React.FC<WordDictionaryPopoverProps> = ({
  entry,
  word,
  position,
  onClose,
  onSpeakWord
}) => {
  if (!position) return null;

  return (
    <div
      className="fixed z-50 transform -translate-x-1/2 -translate-y-full mb-3"
      style={{
        left: `${Math.max(120, Math.min(window.innerWidth - 140, position.x))}px`,
        top: `${Math.max(80, position.y - 12)}px`
      }}
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-xl shadow-2xl p-4 w-72 text-sm transition-all animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-amber-300 font-mono">{word}</span>
            {entry?.pos && (
              <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {entry.pos}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onSpeakWord(word)}
              title="単語を発音"
              className="p-1 rounded-md text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {entry?.phonetic && (
          <div className="text-xs text-slate-400 font-mono mb-2">
            発音: <span className="text-slate-300">{entry.phonetic}</span>
          </div>
        )}

        <div className="text-slate-200 font-medium leading-relaxed mb-2">
          {entry ? entry.meaning : '単語の意味を検索中… または語彙リストをご確認ください'}
        </div>

        {entry?.explanation && (
          <div className="text-xs text-amber-200/80 bg-amber-950/40 p-2 rounded border border-amber-800/30">
            💡 {entry.explanation}
          </div>
        )}

        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-amber-400" />
            瞬時辞書
          </span>
          <span className="text-slate-500">クリックで音声再生</span>
        </div>
      </div>
      {/* Downward triangle arrow */}
      <div className="w-3 h-3 bg-slate-900 border-r border-b border-slate-700/80 transform rotate-45 mx-auto -mt-1.5 shadow-md"></div>
    </div>
  );
};
