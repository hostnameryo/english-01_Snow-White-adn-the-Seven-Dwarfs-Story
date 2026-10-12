export interface VocabularyItem {
  word: string;
  meaning: string;
  phonetic?: string;
  pos?: string; // Part of speech (noun, verb, adj, etc.)
  example?: string;
}

export interface SentenceStructure {
  subject?: string;
  verb?: string;
  object?: string;
  complement?: string;
  modifiers?: string;
  pattern?: string; // e.g. SVO, SVOO, SVOC, SVC, SV
  notes?: string;
}

export interface SentenceItem {
  id: string;
  text: string;
  translation: string;
  slideNumber?: number;
  structure?: SentenceStructure;
  vocabulary?: VocabularyItem[];
  grammarPoints?: string[];
  nuanceExplanation?: string;
}

export type StoryCategory = 'fairytale' | 'science' | 'classic' | 'custom';
export type VisualTheme = 'parchment' | 'modern' | 'science';

export interface Story {
  id: string;
  title: string;
  titleJa: string;
  category: StoryCategory;
  description: string;
  descriptionJa: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  theme: VisualTheme;
  authorOrSource?: string;
  sourceUrl?: string;
  citation?: string;
  peerReviewed?: boolean;
  sentences: SentenceItem[];
}

export type TranslationDisplayMode = 'always' | 'active_only' | 'reveal_on_click';

export interface AudioSettings {
  rate: number; // 0.6 - 1.3
  pitch: number; // 0.8 - 1.2
  repeatCount: number; // default 3
  pauseIntervalSeconds: number; // 0.8 - 3.0
  autoAdvance: boolean;
  voiceName: string;
}

export interface ShadowingRecording {
  sentenceId: string;
  audioBlob: Blob;
  audioUrl: string;
  timestamp: number;
}
