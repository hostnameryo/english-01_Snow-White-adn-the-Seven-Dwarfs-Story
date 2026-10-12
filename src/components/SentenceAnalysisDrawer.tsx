import React, { useState, useRef } from 'react';
import {
  X,
  Volume2,
  Sparkles,
  Mic,
  Square,
  Play,
  RotateCcw,
  BookOpen,
  Layers,
  HelpCircle,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { SentenceItem } from '../types';
import { getSentenceLiteralTranslation } from '../data/literalTranslations';

interface SentenceAnalysisDrawerProps {
  sentence: SentenceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
}

export const SentenceAnalysisDrawer: React.FC<SentenceAnalysisDrawerProps> = ({
  sentence,
  isOpen,
  onClose,
  onSpeak
}) => {
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  if (!isOpen || !sentence) return null;

  const handleRequestAiAnalysis = async () => {
    setIsAiLoading(true);
    try {
      const res = await fetch('/api/analyze-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence: sentence.text })
      });
      if (res.ok) {
        const data = await res.json();
        setAiAnalysis(data);
      }
    } catch (err) {
      console.error('Failed to analyze sentence with AI:', err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
        // Stop all tracks to release mic
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Microphone access denied:', err);
      alert('マイクへのアクセスが許可されていません。ブラウザ設定をご確認ください。');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
                文構造・意味の詳細解説
              </h2>
              <p className="text-xs text-slate-500">Sentence Analysis & Shadowing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Target Sentence Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/40 dark:from-indigo-950/30 dark:to-slate-800/40 border border-indigo-100 dark:border-indigo-900/40">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-600 text-white">
                対象英文
              </span>
              <button
                onClick={() => onSpeak(sentence.text)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-sm transition"
              >
                <Volume2 className="w-3.5 h-3.5" />
                ネイティブ音声
              </button>
            </div>
            <p className="text-lg font-serif font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-4">
              "{sentence.text}"
            </p>
            <div className="pt-3 border-t border-indigo-100/80 dark:border-indigo-900/40">
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 block mb-1">
                瞬時和訳（日本語の意味）:
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-2.5">
                {aiAnalysis?.translation || sentence.translation}
              </p>
              {(() => {
                const lit = aiAnalysis?.literalTranslation
                  ? aiAnalysis.literalTranslation.trim().startsWith('(')
                    ? aiAnalysis.literalTranslation.trim()
                    : `(${aiAnalysis.literalTranslation.trim()})`
                  : getSentenceLiteralTranslation(sentence);
                if (!lit) return null;
                return (
                  <div className="pt-2 border-t border-indigo-100/60 dark:border-indigo-900/30">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                      チャンクごとの直訳（語順通り）:
                    </span>
                    <p className="text-xs font-mono text-indigo-950 dark:text-indigo-300 leading-relaxed bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-indigo-100 dark:border-indigo-900/40">
                      {lit}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Shadowing Voice Recorder */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Mic className="w-4 h-4 text-emerald-500" />
              シャドーイング録音 & 発音チェック
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
              3回の音読後に自分の声を録音し、ネイティブのお手本と聞き比べてみましょう。
            </p>
            <div className="flex items-center gap-3">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition shadow-sm"
                >
                  <Mic className="w-4 h-4" />
                  録音開始
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium animate-pulse transition shadow-sm"
                >
                  <Square className="w-4 h-4" />
                  録音停止
                </button>
              )}

              {recordedAudioUrl && (
                <div className="flex items-center gap-2">
                  <audio src={recordedAudioUrl} controls className="h-8 max-w-[200px]" />
                  <button
                    onClick={() => setRecordedAudioUrl(null)}
                    title="再録音"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SVO Structure Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              文構造・構文骨格 (Sentence Structure)
            </h3>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {(aiAnalysis?.structure?.pattern || sentence.structure?.pattern) && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-500">文型パターン:</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                    {aiAnalysis?.structure?.pattern || sentence.structure?.pattern}
                  </span>
                </div>
              )}

              {(aiAnalysis?.structure?.subject || sentence.structure?.subject) && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-500 mb-1">主語 (Subject - S):</div>
                  <div className="font-mono text-slate-800 dark:text-slate-200 font-medium">
                    {aiAnalysis?.structure?.subject || sentence.structure?.subject}
                  </div>
                </div>
              )}

              {(aiAnalysis?.structure?.verb || sentence.structure?.verb) && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-500 mb-1">述語動詞 (Verb - V):</div>
                  <div className="font-mono text-slate-800 dark:text-slate-200 font-medium">
                    {aiAnalysis?.structure?.verb || sentence.structure?.verb}
                  </div>
                </div>
              )}

              {(aiAnalysis?.structure?.object || sentence.structure?.object) && (
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-slate-500 mb-1">目的語/補語 (O / C):</div>
                  <div className="font-mono text-slate-800 dark:text-slate-200 font-medium">
                    {aiAnalysis?.structure?.object || sentence.structure?.object}
                  </div>
                </div>
              )}

              {(aiAnalysis?.structure?.notes || sentence.structure?.notes) && (
                <div className="p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                  💡 {aiAnalysis?.structure?.notes || sentence.structure?.notes}
                </div>
              )}
            </div>
          </div>

          {/* Grammar Points */}
          {((aiAnalysis?.grammarPoints && aiAnalysis.grammarPoints.length > 0) ||
            (sentence.grammarPoints && sentence.grammarPoints.length > 0)) && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                文法・語法の重要ポイント
              </h3>
              <ul className="space-y-2">
                {(aiAnalysis?.grammarPoints || sentence.grammarPoints || []).map(
                  (pt: string, idx: number) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="font-bold text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Key Vocabulary */}
          {((aiAnalysis?.vocabulary && aiAnalysis.vocabulary.length > 0) ||
            (sentence.vocabulary && sentence.vocabulary.length > 0)) && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-500" />
                重要単語・イディオム一覧
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(aiAnalysis?.vocabulary || sentence.vocabulary || []).map(
                  (v: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm">
                          {v.word}
                        </span>
                        {v.pos && (
                          <span className="text-[10px] text-slate-400 uppercase bg-slate-200 dark:bg-slate-700 px-1 rounded">
                            {v.pos}
                          </span>
                        )}
                      </div>
                      {v.phonetic && (
                        <div className="text-[11px] text-slate-400 font-mono mb-1">{v.phonetic}</div>
                      )}
                      <div className="text-slate-700 dark:text-slate-300 font-medium">{v.meaning}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* AI In-depth Linguistic Nuance Section */}
          <div className="pt-2">
            {!aiAnalysis ? (
              <button
                onClick={handleRequestAiAnalysis}
                disabled={isAiLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                {isAiLoading ? 'AIがニュアンスと文法を詳細解析中…' : 'AIによる詳細なニュアンス・発音アドバイスを取得'}
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50/60 to-indigo-50/40 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/80 dark:border-purple-900/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300">
                  <Sparkles className="w-4 h-4" />
                  ネイティブのニュアンス & 音読リズム解説 (AI分析)
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {aiAnalysis.nuanceExplanation || aiAnalysis.nuance}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
