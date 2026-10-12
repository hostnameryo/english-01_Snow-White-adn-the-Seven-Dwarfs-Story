import { Story } from '../types';

export const scienceStories: Story[] = [
  {
    id: 'science-alphafold',
    title: 'AlphaFold and the 3D Molecular Revolution',
    titleJa: 'AlphaFold：生命の3次元分子構造の予測革命',
    category: 'science',
    description: 'How DeepMind revolutionized structural biology by predicting 3D protein structures with atomic accuracy.',
    descriptionJa: 'Nature論文に基づく、生命の基本構成要素であるタンパク質の立体構造予測AI「AlphaFold」の科学的ブレイクスルー。高度な科学英語と論理的構文を学びます。',
    level: 'Intermediate',
    theme: 'science',
    authorOrSource: 'Nature (2021) / DeepMind Science / Europe PMC',
    sourceUrl: 'https://europepmc.org/article/MED/34265844',
    citation: 'Jumper, J., Evans, R., Pritzel, A. et al. Highly accurate protein structure prediction with AlphaFold. Nature 596, 583–589 (2021).',
    peerReviewed: true,
    sentences: [
      {
        id: 'af-1',
        text: 'Proteins are essential to life, yet understanding their three-dimensional structure has challenged scientists for over fifty years.',
        translation: 'タンパク質は生命にとって不可欠ですが、その3次元立体構造を解明することは50年以上にわたり科学者たちを悩ませてきました。',
        structure: {
          pattern: 'SVC, yet SVO',
          subject: 'Proteins / understanding their structure',
          verb: 'are / has challenged',
          complement: 'essential to life',
          object: 'scientists'
        },
        vocabulary: [
          { word: 'essential', meaning: '不可欠な、極めて重要な', phonetic: '/ɪˈsen.ʃəl/', pos: '形容詞' },
          { word: 'three-dimensional', meaning: '3次元の、立体の', phonetic: '/ˌθriː.daɪˈmen.ʃən.əl/', pos: '形容詞' },
          { word: 'challenged', meaning: '難題を突きつけた', phonetic: '/ˈtʃæl.ɪndʒd/', pos: '動詞' }
        ],
        grammarPoints: [
          'essential to ~：〜にとって不可欠な',
          '動名詞主語（understanding ~）：単数扱い',
          '現在完了形（has challenged）：過去から現在に至る継続'
        ]
      },
      {
        id: 'af-2',
        text: 'In 2020, the artificial intelligence system AlphaFold demonstrated atomic accuracy in predicting protein folding.',
        translation: '2020年、人工知能システムAlphaFoldは、タンパク質の折りたたみ構造予測において原子レベルの正確性を実証しました。',
        structure: {
          pattern: 'SVO',
          subject: 'the artificial intelligence system AlphaFold',
          verb: 'demonstrated',
          object: 'atomic accuracy',
          modifiers: 'In 2020 / in predicting protein folding'
        },
        vocabulary: [
          { word: 'artificial intelligence', meaning: '人工知能 (AI)', phonetic: '/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/', pos: '名詞' },
          { word: 'demonstrated', meaning: '実証した、証明した', phonetic: '/ˈdem.ən.streɪ.tɪd/', pos: '動詞' },
          { word: 'accuracy', meaning: '精度、正確性', phonetic: '/ˈæk.jə.rə.si/', pos: '名詞' },
          { word: 'folding', meaning: '折りたたみ、フォールディング', phonetic: '/ˈfəʊl.dɪŋ/', pos: '名詞' }
        ],
        grammarPoints: [
          'in + 動名詞：〜することにおいて',
          'atomic accuracy：原子レベルの精度（科学論文の頻出表現）'
        ]
      },
      {
        id: 'af-3',
        text: 'This technological leap forward accelerates biomedical research, drug discovery, and our fundamental understanding of cellular biology.',
        translation: 'この技術的飛躍は、生物医学研究、新薬開発、そして細胞生物学に対する私たちの根本的な理解を劇的に加速させています。',
        structure: {
          pattern: 'SVO',
          subject: 'This technological leap forward',
          verb: 'accelerates',
          object: 'biomedical research, drug discovery, and our fundamental understanding'
        },
        vocabulary: [
          { word: 'leap forward', meaning: '大飛躍、躍進', phonetic: '/liːp ˈfɔː.wəd/', pos: '名詞' },
          { word: 'accelerates', meaning: '加速させる', phonetic: '/əkˈsel.ə.reɪts/', pos: '動詞' },
          { word: 'biomedical', meaning: '生物医学の', phonetic: '/ˌbaɪ.əʊˈmed.ɪ.kəl/', pos: '形容詞' },
          { word: 'fundamental', meaning: '根本的な、基礎的な', phonetic: '/ˌfʌn.dəˈmen.təl/', pos: '形容詞' }
        ],
        grammarPoints: [
          'leap forward：飛躍的進歩（比ゆ的表現）',
          'A, B, and C の並列構造'
        ]
      },
      {
        id: 'af-4',
        text: 'Today, hundreds of millions of structure predictions are freely accessible to researchers across the entire globe.',
        translation: '今日では、何億もの立体構造予測データが、地球上のあらゆる研究者に完全無料で公開されています。',
        structure: {
          pattern: 'SVC (受動態的SVC)',
          subject: 'hundreds of millions of structure predictions',
          verb: 'are',
          complement: 'freely accessible',
          modifiers: 'to researchers across the entire globe'
        },
        vocabulary: [
          { word: 'accessible', meaning: 'アクセス可能な、利用しやすい', phonetic: '/əkˈses.ə.bəl/', pos: '形容詞' },
          { word: 'predictions', meaning: '予測、予測結果', phonetic: '/prɪˈdɪk.ʃənz/', pos: '名詞' },
          { word: 'entire globe', meaning: '全世界、地球全体', phonetic: '/ɪnˈtaɪər ɡləʊb/', pos: '名詞' }
        ],
        grammarPoints: [
          'hundreds of millions of ~：何億もの〜（桁数の表現）',
          'be accessible to ~：〜にとって利用・閲覧可能である'
        ]
      }
    ]
  },
  {
    id: 'science-crispr',
    title: 'CRISPR-Cas9: Molecular Scissors of Genome Editing',
    titleJa: 'CRISPR-Cas9：生命の設計図を書き換える分子のハサミ',
    category: 'science',
    description: 'Explore the revolutionary gene-editing technology that earned the Nobel Prize in Chemistry.',
    descriptionJa: 'ノーベル化学賞を受賞した画期的なゲノム編集技術「CRISPR-Cas9」。遺伝子治療や農作物改良など現代科学の最前線を英語で学びます。',
    level: 'Intermediate',
    theme: 'science',
    authorOrSource: 'Science / Europe PMC Open Access',
    sourceUrl: 'https://europepmc.org/article/MED/22745249',
    citation: 'Jinek, M., Chylinski, K., Fonfara, I. et al. A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. Science 337, 816–821 (2012).',
    peerReviewed: true,
    sentences: [
      {
        id: 'cr-1',
        text: 'CRISPR-Cas9 is an extraordinary molecular tool originally adapted from a natural bacterial defense mechanism.',
        translation: 'CRISPR-Cas9は、もともと細菌の天然の防御機構から応用された並外れた分子ツールです。',
        structure: {
          pattern: 'SVC',
          subject: 'CRISPR-Cas9',
          verb: 'is',
          complement: 'an extraordinary molecular tool',
          modifiers: 'originally adapted from a natural bacterial defense mechanism'
        },
        vocabulary: [
          { word: 'extraordinary', meaning: '並外れた、驚くべき', phonetic: '/ɪkˈstrɔː.dɪn.ər.i/', pos: '形容詞' },
          { word: 'molecular', meaning: '分子の', phonetic: '/məˈlek.jə.lər/', pos: '形容詞' },
          { word: 'defense mechanism', meaning: '防御機構', phonetic: '', pos: '名詞' }
        ],
        grammarPoints: [
          'adapted from ~：〜から応用・改変された（過去分詞の形容詞的用法）'
        ]
      },
      {
        id: 'cr-2',
        text: 'By using a synthetic guide RNA, the Cas9 enzyme can target and cut specific sequences of DNA with high precision.',
        translation: '人工合成されたガイドRNAを用いることで、Cas9酵素はDNAの特定の配列を高精度で標的化し、切断することができます。',
        structure: {
          pattern: 'SVO',
          subject: 'the Cas9 enzyme',
          verb: 'can target and cut',
          object: 'specific sequences of DNA',
          modifiers: 'By using a synthetic guide RNA / with high precision'
        },
        vocabulary: [
          { word: 'synthetic', meaning: '人工的な、合成の', phonetic: '/sɪnˈθet.ɪk/', pos: '形容詞' },
          { word: 'enzyme', meaning: '酵素', phonetic: '/ˈen.zaɪm/', pos: '名詞' },
          { word: 'precision', meaning: '精密さ、正確度', phonetic: '/prɪˈsɪʒ.ən/', pos: '名詞' }
        ],
        grammarPoints: [
          'By + 動名詞：〜することによって（手段）',
          'with high precision：高い精度で（with + 抽象名詞 ＝ 副詞）'
        ]
      },
      {
        id: 'cr-3',
        text: 'This breakthrough opens unprecedented possibilities for curing hereditary diseases and developing drought-resistant crops.',
        translation: 'この大発見は、遺伝性疾患の治療や耐干ばつ性作物の開発に向け、かつてない可能性を切り拓いています。',
        structure: {
          pattern: 'SVO',
          subject: 'This breakthrough',
          verb: 'opens',
          object: 'unprecedented possibilities',
          modifiers: 'for curing hereditary diseases and developing drought-resistant crops'
        },
        vocabulary: [
          { word: 'breakthrough', meaning: '大躍進、画期的な突破口', phonetic: '/ˈbreɪk.θruː/', pos: '名詞' },
          { word: 'unprecedented', meaning: '前例のない、未曾有の', phonetic: '/ʌnˈpres.ɪ.den.tɪd/', pos: '形容詞' },
          { word: 'hereditary', meaning: '遺伝性の、世襲の', phonetic: '/hɪˈred.ɪ.tər.i/', pos: '形容詞' },
          { word: 'drought-resistant', meaning: '耐干ばつ性の', phonetic: '', pos: '形容詞' }
        ],
        grammarPoints: [
          'open possibilities for ~：〜への可能性を拓く',
          '動名詞の並列：curing ~ and developing ~'
        ]
      }
    ]
  },
  {
    id: 'science-neuroscience',
    title: 'The Neurobiology of Human Memory and Sleep',
    titleJa: '脳神経科学：睡眠が記憶を定着させるメカニズム',
    category: 'science',
    description: 'How synaptic plasticity and slow-wave sleep consolidate memories in the human brain.',
    descriptionJa: '睡眠中に脳内で記憶が整理・定着される神経科学的メカニズム。学習効果を高める科学的知見を英語で理解します。',
    level: 'Intermediate',
    theme: 'science',
    authorOrSource: 'Neuroscience Letters / Europe PMC',
    sourceUrl: 'https://europepmc.org/',
    citation: 'Diekelmann, S. & Born, J. The memory function of sleep. Nat Rev Neurosci 11, 114–126 (2010).',
    peerReviewed: true,
    sentences: [
      {
        id: 'ns-1',
        text: 'During deep sleep, the brain actively replays neural patterns experienced throughout the waking day.',
        translation: '深い睡眠の間、脳は覚醒している日中に経験した神経活動パターンを能動的に再生しています。',
        structure: {
          pattern: 'SVO',
          subject: 'the brain',
          verb: 'actively replays',
          object: 'neural patterns experienced throughout the waking day',
          modifiers: 'During deep sleep'
        },
        vocabulary: [
          { word: 'neural', meaning: '神経の、神経系の', phonetic: '/ˈnjʊə.rəl/', pos: '形容詞' },
          { word: 'replays', meaning: '再生する、繰り返す', phonetic: '/ˌriːˈpleɪz/', pos: '動詞' },
          { word: 'waking day', meaning: '目覚めている一日、日中', phonetic: '', pos: '名詞' }
        ],
        grammarPoints: [
          'experienced throughout ~：過去分詞の後置修飾（日中に経験された）'
        ]
      },
      {
        id: 'ns-2',
        text: 'This continuous dialogue between the hippocampus and the neocortex transforms temporary impressions into durable long-term memories.',
        translation: '海馬と大脳新皮質との間のこの絶え間ない対話が、一時的な印象を持続的な長期記憶へと変換します。',
        structure: {
          pattern: 'SVO',
          subject: 'This continuous dialogue between the hippocampus and the neocortex',
          verb: 'transforms',
          object: 'temporary impressions',
          modifiers: 'into durable long-term memories'
        },
        vocabulary: [
          { word: 'hippocampus', meaning: '海馬（記憶を司る脳部位）', phonetic: '/ˌhɪp.əˈkæm.pəs/', pos: '名詞' },
          { word: 'neocortex', meaning: '新皮質、大脳新皮質', phonetic: '/ˌniː.əʊˈkɔː.teks/', pos: '名詞' },
          { word: 'durable', meaning: '持続性のある、耐久性のある', phonetic: '/ˈdʒʊə.rə.bəl/', pos: '形容詞' }
        ],
        grammarPoints: [
          'transform A into B：AをBに変える・変換する'
        ]
      },
      {
        id: 'ns-3',
        text: 'Consequently, quality rest is not merely passive downtime, but an active biological requirement for effective learning.',
        translation: 'したがって、質の高い休息は単なる受動的な停止時間ではなく、効果的な学習のための能動的な生物学的必須条件なのです。',
        structure: {
          pattern: 'SVC (not merely A, but B)',
          subject: 'quality rest',
          verb: 'is',
          complement: 'not merely passive downtime, but an active biological requirement'
        },
        vocabulary: [
          { word: 'consequently', meaning: 'その結果として、したがって', phonetic: '/ˈkɒn.sɪ.kwənt.li/', pos: '副詞' },
          { word: 'passive', meaning: '受動的な、消極的な', phonetic: '/ˈpæs.ɪv/', pos: '形容詞' },
          { word: 'requirement', meaning: '必要条件、要件', phonetic: '/rɪˈkwaɪə.mənt/', pos: '名詞' }
        ],
        grammarPoints: [
          'not merely A but (also) B：単にAだけでなくBでもある（重要相関構文）'
        ]
      }
    ]
  }
];
