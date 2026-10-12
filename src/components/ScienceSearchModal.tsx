import React, { useState } from 'react';
import { Search, X, BookOpen, ExternalLink, Sparkles, Loader2, Award } from 'lucide-react';
import { Story } from '../types';

interface ScienceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScienceStory: (story: Story) => void;
}

export const ScienceSearchModal: React.FC<ScienceSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectScienceStory
}) => {
  const [query, setQuery] = useState('AlphaFold');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const quickTopics = [
    { label: '🧬 AlphaFold', q: 'AlphaFold protein structure' },
    { label: '✂️ CRISPR', q: 'CRISPR Cas9 genome editing' },
    { label: '🧠 神経科学・記憶', q: 'Neuroscience synaptic plasticity memory' },
    { label: '🌱 光合成', q: 'Photosynthesis molecular mechanisms' },
    { label: '🚀 宇宙・ジェームズウェッブ', q: 'James Webb Space Telescope astronomy' },
    { label: '💉 mRNAワクチン', q: 'mRNA vaccine immunology' }
  ];

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const res = await fetch(`/api/science-search?query=${encodeURIComponent(searchQuery)}&pageSize=6`);
      if (res.ok) {
        const data = await res.json();
        setArticles(data.results || []);
      }
    } catch (err) {
      console.error('Failed to search Europe PMC:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadArticle = async (article: any) => {
    setIsLoading(true);
    try {
      // Parse abstract into sentences via backend translation route
      const res = await fetch('/api/parse-custom-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: article.abstract,
          title: article.title
        })
      });

      if (res.ok) {
        const data = await res.json();
        const scienceStory: Story = {
          id: `science-${article.id || Date.now()}`,
          title: article.title,
          titleJa: `【学術論文】${article.journal || 'Europe PMC 収録論文'} (${article.year || ''})`,
          category: 'science',
          description: `Authors: ${article.authors}`,
          descriptionJa: `Europe PMC査読済みオープンアクセス論文のアブストラクト英文。正確な科学論理と専門語彙を1文ずつ3回音読してマスターします。`,
          level: 'Advanced',
          theme: 'science',
          authorOrSource: `${article.journal || 'Scientific Journal'} (${article.year})`,
          sourceUrl: article.url,
          citation: `${article.authors}. ${article.title}. ${article.journal} (${article.year}).`,
          peerReviewed: true,
          sentences: data.sentences
        };
        onSelectScienceStory(scienceStory);
        onClose();
      }
    } catch (err) {
      console.error('Failed to convert article into story:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-3xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Europe PMC 科学論文検索
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  Science Skills
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                4,300万件以上の国際査読済み生命科学・先端論文から英文を検索して3回音読
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar & Quick chips */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) handleSearch(query.trim());
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="興味のある科学トピックを入力（例: AlphaFold, CRISPR, Mitochondria, Memory...）"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm disabled:opacity-50 flex items-center gap-1.5"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : '検索'}
            </button>
          </form>

          {/* Quick topic pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px] font-medium mr-1">おすすめテーマ:</span>
            {quickTopics.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(item.q);
                  handleSearch(item.q);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 text-slate-600 dark:text-slate-300 transition text-[11px] font-medium border border-slate-200/60 dark:border-slate-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {isLoading && (
            <div className="py-16 text-center text-slate-400 flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              <p className="text-xs">Europe PMCからオープンアクセス論文を取得中…</p>
            </div>
          )}

          {!isLoading && hasSearched && articles.length === 0 && (
            <div className="py-16 text-center text-slate-400 text-sm">
              一致する論文が見つかりませんでした。別のキーワードでお試しください。
            </div>
          )}

          {!isLoading &&
            articles.map((art) => (
              <div
                key={art.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-800/60 transition shadow-sm space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {art.title}
                  </h3>
                  {art.openAccess && (
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                      Open Access
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2">
                  <span className="font-medium text-slate-600 dark:text-slate-300">
                    {art.authors || 'Unknown Authors'}
                  </span>
                  <span>•</span>
                  <span>{art.journal || 'Europe PMC'}</span>
                  {art.year && <span>({art.year})</span>}
                  {art.citedBy > 0 && (
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">
                      被引用: {art.citedBy}回
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {art.abstract}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs">
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 flex items-center gap-1 font-mono text-[11px]"
                  >
                    DOI / PubMed 原文 ↗
                  </a>

                  <button
                    onClick={() => handleLoadArticle(art)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    この論文で3回音読を開始
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
