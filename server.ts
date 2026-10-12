import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini SDK if key is present
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Route: Analyze sentence structure, grammar, and nuance using Gemini AI
 */
app.post('/api/analyze-sentence', async (req: Request, res: Response) => {
  try {
    const { sentence, context } = req.body;
    if (!sentence || typeof sentence !== 'string') {
      res.status(400).json({ error: 'Sentence is required' });
      return;
    }

    if (!ai) {
      // Graceful fallback with rule-based heuristics if API key is not yet set
      res.json({
        structure: {
          pattern: 'SVO',
          notes: '文頭の主語と動詞、および修飾語句からなる標準的な英語文です。'
        },
        nuance: '自然な英語表現です。文末のピリオドに向けてイントネーションが下降します。',
        grammarPoints: [
          '主語と動詞の一致に注意して発音してください。',
          '意味のまとまり（チャンク）ごとに息継ぎを意識して3回音読しましょう。'
        ],
        aiGenerated: false
      });
      return;
    }

    const prompt = `You are an expert English language teacher and linguistic analyst for Japanese English learners.
Analyze the following English sentence:
"${sentence}"
${context ? `Context of paragraph: "${context}"` : ''}

Provide a structured JSON output with the following exact keys:
{
  "translation": "Natural Japanese translation (自然な和訳)",
  "literalTranslation": "チャンクごとの直訳。スラッシュ/で区切り、必ず全体を丸括弧()で閉じること。例: (昔々 / 白雪姫という名の王女が / 城に住んでいた / 父親の国王と一緒に)",
  "structure": {
    "pattern": "e.g. SVO, SVC, SVOO, SVOC, 倒置構文, 分詞構文, etc.",
    "subject": "Main subject phrase in English",
    "verb": "Main verb phrase in English",
    "object": "Object or complement if any",
    "notes": "Brief Japanese explanation of the grammatical skeleton"
  },
  "grammarPoints": [
    "Key grammar point 1 in Japanese",
    "Key grammar point 2 in Japanese"
  ],
  "vocabulary": [
    {
      "word": "key word/idiom",
      "meaning": "Japanese meaning",
      "phonetic": "/IPA/",
      "pos": "品詞"
    }
  ],
  "nuanceExplanation": "Linguistic nuance, tone, and spoken rhythm/pronunciation advice for shadowing in Japanese (2-3 sentences)"
}
Return ONLY pure JSON without markdown backticks or commentary.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text || '{}';
    const parsed = JSON.parse(text);
    res.json({ ...parsed, aiGenerated: true });
  } catch (error: unknown) {
    console.error('Error analyzing sentence:', error);
    res.status(500).json({
      error: 'Failed to analyze sentence',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

/**
 * Route: Parse custom English text into sentences and generate instant translations
 */
app.post('/api/parse-custom-text', async (req: Request, res: Response) => {
  try {
    const { text, title } = req.body;
    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Text is required' });
      return;
    }

    // Split text into sentences ending with . ! ?
    const rawSentences = text
      .replace(/\r\n/g, '\n')
      .split(/(?<=[.?!])\s+(?=[A-Z0-9"'])/)
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0);

    if (rawSentences.length === 0) {
      res.status(400).json({ error: 'No valid sentences found in text.' });
      return;
    }

    // If Gemini is available, generate translations in batch for high quality
    if (ai) {
      const prompt = `Translate each of the following English sentences into natural Japanese, and also provide a chunk-by-chunk literal translation (語順通りの直訳/スラッシュリーディング) enclosed in parentheses (...).
Sentences:
${JSON.stringify(rawSentences, null, 2)}

Return a JSON array of objects with the exact schema:
[
  {
    "index": 0,
    "text": "original sentence",
    "translation": "自然な日本語訳",
    "literalTranslation": "(チャンクごとの直訳 / スラッシュ区切り。必ず全体を丸括弧で閉じる)"
  }
]
Return pure JSON only.`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: { responseMimeType: 'application/json' }
        });

        const parsed = JSON.parse(response.text || '[]');
        const sentences = rawSentences.map((sent: string, i: number) => {
          const match = Array.isArray(parsed) ? parsed.find((p: { index?: number; text?: string }) => p.index === i || p.text === sent) : null;
          return {
            id: `custom-${i + 1}`,
            text: sent,
            translation: match?.translation || '（和訳読み込み完了）',
            literalTranslation: match?.literalTranslation || '(語順通りの直訳 / チャンク音読用)',
            structure: {
              pattern: 'SVO',
              notes: '3回音読してフレーズのリズムを体得しましょう。'
            }
          };
        });

        res.json({
          title: title || 'Custom Practice Text',
          sentences
        });
        return;
      } catch (e) {
        console.warn('Gemini translation failed, using fallback sentence splitting:', e);
      }
    }

    // Fallback if AI not available or errored
    const sentences = rawSentences.map((sent: string, i: number) => ({
      id: `custom-${i + 1}`,
      text: sent,
      translation: 'タップしてAI文法・和訳解説を表示',
      structure: {
        pattern: 'SV',
        notes: '1文ずつ3回音読してシャドーイングしましょう。'
      }
    }));

    res.json({
      title: title || 'Custom English Material',
      sentences
    });
  } catch (error: unknown) {
    console.error('Error parsing custom text:', error);
    res.status(500).json({
      error: 'Failed to parse text',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

/**
 * Route: Search Science Literature via Europe PMC REST API (Science Skill)
 */
app.get('/api/science-search', async (req: Request, res: Response) => {
  try {
    const query = (req.query.query as string) || 'AlphaFold OR CRISPR';
    const pageSize = Number(req.query.pageSize) || 8;

    const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(
      query + ' AND HAS_ABSTRACT:y AND OPEN_ACCESS:y'
    )}&resultType=core&pageSize=${pageSize}&format=json`;

    const upstream = await fetch(url, {
      headers: {
        'User-Agent': 'EchoRead-English/1.0 (Google AI Studio Build; polite science reader)'
      }
    });

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: 'Europe PMC upstream error' });
      return;
    }

    const data = await upstream.json();
    const results = (data.resultList?.result || []).map((item: {
      id?: string;
      title?: string;
      authorString?: string;
      journalTitle?: string;
      pubYear?: string;
      pmid?: string;
      pmcid?: string;
      doi?: string;
      abstractText?: string;
      isOpenAccess?: string;
      citedByCount?: number;
    }) => ({
      id: item.id || item.pmid,
      title: item.title?.replace(/<[^>]+>/g, '') || '',
      authors: item.authorString || '',
      journal: item.journalTitle || '',
      year: item.pubYear || '',
      pmid: item.pmid,
      pmcid: item.pmcid,
      doi: item.doi,
      abstract: item.abstractText?.replace(/<[^>]+>/g, '') || '',
      openAccess: item.isOpenAccess === 'Y',
      citedBy: item.citedByCount || 0,
      url: item.doi
        ? `https://doi.org/${item.doi}`
        : item.pmid
        ? `https://europepmc.org/article/MED/${item.pmid}`
        : 'https://europepmc.org'
    }));

    res.json({ results });
  } catch (error: unknown) {
    console.error('Error searching Europe PMC:', error);
    res.status(500).json({
      error: 'Failed to search science papers',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

/**
 * Server static assets and Vite middleware
 */
async function setupServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

setupServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
