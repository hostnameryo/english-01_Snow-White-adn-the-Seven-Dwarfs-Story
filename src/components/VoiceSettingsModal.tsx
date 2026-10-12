import React from 'react';
import { X, Settings, Volume2, Clock, Gauge, Sliders } from 'lucide-react';
import { AudioSettings } from '../types';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AudioSettings;
  voices: SpeechSynthesisVoice[];
  onUpdateSettings: (newSettings: Partial<AudioSettings>) => void;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  voices,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              <Settings className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                音読・リピート設定
              </h2>
              <p className="text-xs text-slate-500">音声速度やリピート間隔をカスタマイズ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Pause interval between repetitions (Shadowing time) */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                リピート間の待機時間 (シャドーイング間隔)
              </span>
              <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
                {settings.pauseIntervalSeconds.toFixed(1)} 秒
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2">
              1回読み終わった後、自分が声に出してリピートするためのポーズ時間です。
            </p>
            <input
              type="range"
              min="0.5"
              max="3.5"
              step="0.1"
              value={settings.pauseIntervalSeconds}
              onChange={(e) =>
                onUpdateSettings({ pauseIntervalSeconds: parseFloat(e.target.value) })
              }
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Speech Rate */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-indigo-500" />
                音声の再生速度
              </span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                {settings.rate.toFixed(2)}x
              </span>
            </div>
            <input
              type="range"
              min="0.6"
              max="1.3"
              step="0.05"
              value={settings.rate}
              onChange={(e) => onUpdateSettings({ rate: parseFloat(e.target.value) })}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            {/* Quick Speed Preset Buttons */}
            <div className="flex items-center gap-1.5 mt-2">
              {[0.75, 0.85, 1.0, 1.2].map((spd) => (
                <button
                  key={spd}
                  type="button"
                  onClick={() => onUpdateSettings({ rate: spd })}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                    Math.abs(settings.rate - spd) < 0.01
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {spd === 1 ? '1x' : `${spd}x`}
                </button>
              ))}
            </div>
          </div>

          {/* Voice selector */}
          <div>
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-blue-500" />
              英語音声モデル (Speech Synthesis Voice)
            </label>
            <select
              value={settings.voiceName}
              onChange={(e) => onUpdateSettings({ voiceName: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
            >
              <option value="">推奨音声（自動選択）</option>
              {voices.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Auto advance toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                自動で次の文章へ進む
              </div>
              <div className="text-[11px] text-slate-500">
                3回の音読が完了した後に次の文へ自動遷移します
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.autoAdvance}
              onChange={(e) => onUpdateSettings({ autoAdvance: e.target.checked })}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition"
          >
            完了
          </button>
        </div>
      </div>
    </div>
  );
};
