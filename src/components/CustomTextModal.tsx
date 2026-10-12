import React, { useState } from 'react';
import { X, FileText, Sparkles, Loader2 } from 'lucide-react';
import { Story } from '../types';

interface CustomTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadCustomStory: (story: Story) => void;
}

export const CustomTextModal: React.FC<CustomTextModalProps> = ({
  isOpen,
  onClose,
  onLoadCustomStory
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const sampleTexts = [
    {
      label: '日常英会話 (Cafe Ordering)',
      title: 'A Morning at the Coffee Shop',
      content:
        'Every morning, I walk down the street to my favorite neighborhood cafe. The barista always greets me with a warm smile and asks how my day is going. I usually order a hot cappuccino with an oat milk croissant. Sitting by the window, I watch the city slowly wake up.'
    },
    {
      label: 'ビジネス英語 (Product Launch)',
      title: 'Product Strategy Announcement',
      content:
        'We are thrilled to announce the official launch of our next-generation software platform. Our engineering team has worked tirelessly to optimize performance and enhance user experience. Customer feedback has been overwhelmingly positive across all target demographics. We look forward to continuous growth in the upcoming fiscal quarter.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/parse-custom-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: text.trim(),
          title: title.trim() || 'My English Practice'
        })
      });

      if (res.ok) {
        const data = await res.json();
        const customStory: Story = {
          id: `custom-${Date.now()}`,
          title: data.title,
          titleJa: '自由入力テキスト（3回音読用）',
          category: 'custom',
          description: 'User provided custom English text.',
          descriptionJa: '貼り付けた英文をピリオド単位で自動分割し、3回音読シャドーイングを行います。',
          level: 'Intermediate',
          theme: 'modern',
          sentences: data.sentences
        };
        onLoadCustomStory(customStory);
        onClose();
      } else {
        alert('英文の解析に失敗しました。文章にピリオド(.)が含まれているか確認してください。');
      }
    } catch (err) {
      console.error('Error parsing custom text:', err);
      alert('通信エラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                好きな英文を貼り付けて3回音読
              </h2>
              <p className="text-xs text-slate-500">
                1文（.で終わる文）ごとに自動分割し、瞬時和訳つきで音読を開始します
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

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              タイトル（任意）
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例: TEDトークの要約、TOEIC練習文など"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                英文テキスト本文 <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span>サンプル:</span>
                {sampleTexts.map((st, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setTitle(st.title);
                      setText(st.content);
                    }}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="練習したい英文を入力またはペーストしてください。ピリオド(.)で終わる文ごとに1つずつ取り出し、3回音読します。"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white leading-relaxed resize-none"
              required
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isLoading || !text.trim()}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm disabled:opacity-50 flex items-center gap-1.5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  英文を解析・和訳中…
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  解析して3回音読を開始
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
