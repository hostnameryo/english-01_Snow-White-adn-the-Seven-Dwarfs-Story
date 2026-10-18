import { Story } from '../types';

export const cinderellaStory: Story = {
  id: 'cinderella',
  title: 'Cinderella, or The Little Glass Slipper',
  titleJa: 'シンデレラ（小さなガラスの靴）',
  category: 'fairytale',
  description: 'The world-famous classic tale of Cinderella. Listen to each sentence 3 times to master rich, elegant English narrative and vocabulary.',
  descriptionJa: '動画に登場する名作童話『シンデレラ』の完全版英文。1文ごとに3回ずつ音読し、格調高い英語表現やチャンク直訳とともに物語を体得します。',
  level: 'Intermediate',
  theme: 'parchment',
  authorOrSource: 'Charles Perrault / Classic Fairy Tale Adaptation',
  sentences: [
    {
      id: 'cin-1',
      slideNumber: 1,
      text: 'Once there was a gentleman who married, for his second wife, the proudest and most haughty woman that was ever seen.',
      translation: '昔ある紳士がおり、後妻として、これまで見られたこともないほど高慢で尊大な女性を迎えました。',
      literalTranslation: '(昔ある紳士がいた / 後妻として結婚した / 最も高慢で最も尊大な女性と / これまで見られた中で)',
      structure: {
        pattern: 'There was + 関係代名詞節 (SVO)',
        subject: 'a gentleman',
        verb: 'married',
        object: 'the proudest and most haughty woman that was ever seen',
        notes: '「for his second wife」が挿入句。「that was ever seen」は最上級を強める関係代名詞節。'
      },
      vocabulary: [
        { word: 'gentleman', meaning: '紳士、名士', phonetic: '/ˈdʒen.təl.mən/', pos: '名詞' },
        { word: 'haughty', meaning: '傲慢な、尊大な', phonetic: '/ˈhɔː.ti/', pos: '形容詞' },
        { word: 'proudest', meaning: '最も高慢な、誇り高い', phonetic: '/ˈpraʊ.dɪst/', pos: '形容詞' }
      ],
      grammarPoints: [
        'for one\'s second wife：後妻として（前置詞for）',
        'that was ever seen：今までに目にした〜（最上級の強調）'
      ]
    },
    {
      id: 'cin-2',
      slideNumber: 2,
      text: 'She had, by a former husband, two daughters of her own humor, who were, indeed, exactly like her in all things.',
      translation: '彼女には前夫との間に自分と同じ気質の2人の娘がおり、彼女たちはまさに万事において母親そっくりでした。',
      literalTranslation: '(彼女にはいた / 前夫との間に / 彼女自身の気質を持った2人の娘が / 彼女たちはまさに / まったく母親そっくりだった / すべてのことにおいて)',
      structure: {
        pattern: 'SVO + 関係代名詞非制限用法',
        subject: 'She',
        verb: 'had',
        object: 'two daughters of her own humor',
        notes: 'humorは古風な語義で「気質・気性」。'
      },
      vocabulary: [
        { word: 'humor', meaning: '気質、気性（古義）', phonetic: '/ˈhjuː.mər/', pos: '名詞' },
        { word: 'former', meaning: '前の、先の', phonetic: '/ˈfɔː.mər/', pos: '形容詞' },
        { word: 'indeed', meaning: '本当に、実に', phonetic: '/ɪnˈdiːd/', pos: '副詞' }
      ],
      grammarPoints: [
        'of one\'s own humor：自分と同じ気質の（所有＋名詞）',
        'who were, indeed, ...：非制限用法の関係代名詞'
      ]
    },
    {
      id: 'cin-3',
      slideNumber: 3,
      text: 'He had likewise, by another wife, a young daughter, but of unparalleled goodness and sweetness of temper, which she took from her mother, who was the best creature in the world.',
      translation: '彼の方にもまた先妻との間に幼い娘がいましたが、比類のない優しさと温和な気性の持ち主で、それは世の中で一番心優しい女性であった実の母親から受け継いだものでした。',
      literalTranslation: '(彼にも同様にいた / 別の妻との間に / 幼い娘が / しかし比類なき善良さと穏やかな気質を持った / それを彼女は実母から受け継いだ / この世で最も素晴らしい女性であった)',
      structure: {
        pattern: 'SVO + 二重関係詞節',
        subject: 'He',
        verb: 'had',
        object: 'a young daughter of unparalleled goodness'
      },
      vocabulary: [
        { word: 'unparalleled', meaning: '比類のない、無双の', phonetic: '/ʌnˈpær.ə.leld/', pos: '形容詞' },
        { word: 'temper', meaning: '気質、気立て', phonetic: '/ˈtem.pər/', pos: '名詞' },
        { word: 'creature', meaning: '人、生き物（愛情や敬意を込めて）', phonetic: '/ˈkriː.tʃər/', pos: '名詞' }
      ],
      grammarPoints: [
        'unparalleled goodness：比類なき善良さ',
        'take from ~：〜から受け継ぐ、似る'
      ]
    },
    {
      id: 'cin-4',
      slideNumber: 4,
      text: 'No sooner were the ceremonies of the wedding over but the mother-in-law began to show herself in her true colors.',
      translation: '婚礼の儀式が終わるやいなや、継母はその本性を現し始めました。',
      literalTranslation: '(婚礼の儀式が終わるやいなや / 継母は自分を現し始めた / 彼女の本当の色（本性）で)',
      structure: {
        pattern: 'No sooner + 倒置 + but/than',
        verb: 'were',
        subject: 'the ceremonies of the wedding',
        notes: '「No sooner had/were ... than/but ...」（〜するやいなや）の重要倒置構文！'
      },
      vocabulary: [
        { word: 'ceremonies', meaning: '儀式、式典', phonetic: '/ˈser.ɪ.mə.niz/', pos: '名詞' },
        { word: 'true colors', meaning: '本性、正体', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'No sooner ... but/than ...：〜するやいなや…（倒置強調構文）',
        'show oneself in one\'s true colors：本性を現す'
      ]
    },
    {
      id: 'cin-5',
      slideNumber: 4,
      text: 'She could not bear the good qualities of this pretty girl, and the less because they made her own daughters appear the more odious.',
      translation: '彼女はこの可憐な少女の美徳に耐えられず、それによって自分の娘たちの醜悪さが一層際立って見えるため、なおさら耐えられませんでした。',
      literalTranslation: '(彼女は耐えられなかった / この可憐な少女の美徳に / そしてなおさら耐えられなかった / それらが彼女の実の娘たちを / 一層忌まわしく見せさせたからだ)',
      structure: {
        pattern: 'SVO + the less because ... the more ...',
        subject: 'She',
        verb: 'could not bear',
        object: 'the good qualities'
      },
      vocabulary: [
        { word: 'bear', meaning: '耐える、我慢する', phonetic: '/beər/', pos: '動詞' },
        { word: 'odious', meaning: 'ひどく嫌な、憎むべき、醜悪な', phonetic: '/ˈəʊ.di.əs/', pos: '形容詞' }
      ],
      grammarPoints: [
        'could not bear：耐えられない',
        'the less because ... the more ...：…であるだけになおさら〜ではない'
      ]
    },
    {
      id: 'cin-6',
      slideNumber: 5,
      text: "She employed her in the meanest work of the house: she scoured the dishes, tables, and scrubbed madam's chamber, and those of misses, her daughters; she lay up in a sorry garret, upon a wretched straw bed, while her sisters lay in fine rooms, with floors all inlaid upon beds of the very newest fashion, and where they had looking-glasses so large that they might see themselves at their full length from head to foot.",
      translation: '継母は彼女を家の中の一番卑しい仕事に就かせました。皿や食卓を磨き上げ、奥様の部屋やその娘たちの部屋を床掃除させました。姉娘たちが最新流行のベッドと寄木細工の床、頭からつま先まで全身が映る大鏡のある豪奢な部屋に寝起きする一方で、彼女は哀れな屋根裏部屋の粗末な藁ベッドに寝かされたのです。',
      literalTranslation: '(彼女は彼女を使った / 家で最も卑しい仕事に / 彼女は皿やテーブルを磨き / 奥様の部屋をこすり洗いした / そして娘たちの部屋も / 彼女は哀れな屋根裏部屋に寝起きした / 惨めな藁ベッドの上で / 一方で姉たちは立派な部屋に寝ていた / 最新流行のベッドと象嵌細工の床のある / そして全身が頭からつま先まで見えるほどの大きな鏡のある部屋で)',
      structure: {
        pattern: '重文・複文の連結',
        subject: 'She',
        verb: 'employed, scoured, scrubbed, lay',
        notes: '対比構文（garret vs fine rooms）。looking-glasses so large that...（全身が映るほど大きな鏡）。'
      },
      vocabulary: [
        { word: 'scoured', meaning: '（鍋や皿を）ゴシゴシ磨いた', phonetic: '/skaʊərd/', pos: '動詞' },
        { word: 'garret', meaning: '屋根裏部屋', phonetic: '/ˈɡær.ɪt/', pos: '名詞' },
        { word: 'wretched', meaning: 'みじめな、粗末な', phonetic: '/ˈretʃ.ɪd/', pos: '形容詞' },
        { word: 'looking-glasses', meaning: '鏡（古風な表現）', phonetic: '/ˈlʊk.ɪŋ ɡlɑː.sɪz/', pos: '名詞' }
      ],
      grammarPoints: [
        'employ A in B：AをBの仕事に従事させる',
        'so large that SV：非常に大きいので〜できる（結果のthat節）',
        'from head to foot：頭から足元まで、全身'
      ]
    },
    {
      id: 'cin-7',
      slideNumber: 6,
      text: 'The poor girl bore all patiently, and dared not tell her father, who would have rattled her off; for his wife governed him entirely.',
      translation: '哀れな少女はすべてを辛抱強く耐え忍び、父親に言いつける勇気もありませんでした。父親に言ったところで叱り飛ばされるだけだったからです。妻が夫を完全に牛耳っていたからです。',
      literalTranslation: '(哀れな少女はすべてを辛抱強く耐えた / そして父親に言う勇気がなかった / 彼は彼女を叱り飛ばしたであろう / なぜなら妻が彼を完全に支配していたからだ)',
      structure: {
        pattern: 'SVO and SV + 関係詞・理由節',
        subject: 'The poor girl',
        verb: 'bore / dared not tell'
      },
      vocabulary: [
        { word: 'patiently', meaning: '辛抱強く、忍耐強く', phonetic: '/ˈpeɪ.ʃənt.li/', pos: '副詞' },
        { word: 'rattled off', meaning: 'ガミガミ叱り飛ばした', phonetic: '', pos: '句動詞' },
        { word: 'governed', meaning: '支配した、牛耳った', phonetic: '/ˈɡʌv.ənd/', pos: '動詞' }
      ],
      grammarPoints: [
        'dared not do：あえて〜しようとしなかった',
        'who would have rattled：〜したであろう（仮定法過去完了の帰結）',
        'for SV：というのも〜だからだ（理由の等位接続詞）'
      ]
    },
    {
      id: 'cin-8',
      slideNumber: 6,
      text: 'When she had done her work, she used to go into the chimney-corner, and sit down among cinders and ashes, which made her commonly be called Cinderwench; but the youngest, who was not so rude and uncivil as the eldest, called her Cinderella.',
      translation: '仕事が終わると、彼女はいつも暖炉の隅へ行き、燃え殻や灰の中に座り込んでいたため、普段は「灰かぶり娘（シンダーウェンチ）」と呼ばれていました。しかし妹娘の方は、姉娘ほど無礼で不作法ではなかったので、彼女を「シンデレラ」と呼びました。',
      literalTranslation: '(彼女が仕事を終えると / 彼女は暖炉の隅へ行ったものだった / そして灰や燃え殻の中に座り込んだ / そのことが普段彼女を「灰かぶり娘」と呼ばせることになった / しかし妹の方は / 姉ほど無礼で不作法ではなかったので / 彼女をシンデレラと呼んだ)',
      structure: {
        pattern: '従属節 + SV and SV + 関係詞 + SVOC',
        subject: 'she / the youngest',
        verb: 'used to go / called'
      },
      vocabulary: [
        { word: 'cinders', meaning: '燃え殻、灰', phonetic: '/ˈsɪn.dərz/', pos: '名詞' },
        { word: 'Cinderwench', meaning: '灰まみれの下女（wenchは娘・下女）', phonetic: '', pos: '固有名詞' },
        { word: 'uncivil', meaning: '不作法な、無作法な', phonetic: '/ʌnˈsɪv.əl/', pos: '形容詞' }
      ],
      grammarPoints: [
        'used to do：よく〜したものだった（過去の習慣）',
        'chimney-corner：暖炉の隅（灰が溜まる場所）',
        'Cinderella：灰（Cinder）と女性名（Ella）を合わせた呼び名'
      ]
    },
    {
      id: 'cin-9',
      slideNumber: 7,
      text: 'However, Cinderella, notwithstanding her mean apparel, was a hundred times handsomer than her sisters, though they were always dressed very richly.',
      translation: 'しかしながら、シンデレラはみすぼらしい身なりにもかかわらず、いつも贅沢に着飾っている義理の姉たちよりも百倍も美しかったのです。',
      literalTranslation: '(しかしながら、シンデレラは / みすぼらしい衣服にもかかわらず / 100倍も美しかった / 彼女の姉たちよりも / 彼女たちが常に非常に贅沢に着飾っていたとしても)',
      structure: {
        pattern: 'SVC (比較構文)',
        subject: 'Cinderella',
        verb: 'was',
        complement: 'a hundred times handsomer than her sisters',
        modifiers: 'notwithstanding her mean apparel'
      },
      vocabulary: [
        { word: 'notwithstanding', meaning: '〜にもかかわらず（前置詞）', phonetic: '/ˌnɒt.wɪðˈstæn.dɪŋ/', pos: '前置詞' },
        { word: 'apparel', meaning: '衣服、身なり', phonetic: '/əˈpær.əl/', pos: '名詞' },
        { word: 'handsomer', meaning: 'より美しい（handsomeの比較級）', phonetic: '/ˈhæn.sə.mər/', pos: '形容詞' }
      ],
      grammarPoints: [
        'a hundred times + 比較級：100倍〜である（倍数表現）',
        'notwithstanding ~：〜にもかかわらず（格調高い前置詞）'
      ]
    },
    {
      id: 'cin-10',
      slideNumber: 7,
      text: "It happened that the King's son gave a ball, and invited all persons of fashion to it.",
      translation: 'ちょうどその頃、国王の王子が舞踏会を催し、身分の高い流行の紳士淑女をすべて招くことになりました。',
      literalTranslation: '(たまたま〜ということが起きた / 王子の息子（王子）が舞踏会を開き / そしてすべての上流社交界の人々をそこへ招待した)',
      structure: {
        pattern: 'It happened that SV (非人称構文)',
        verb: 'happened',
        subject: 'that the King\'s son gave a ball'
      },
      vocabulary: [
        { word: 'ball', meaning: '舞踏会', phonetic: '/bɔːl/', pos: '名詞' },
        { word: 'persons of fashion', meaning: '上流階級の流行に敏感な人々', phonetic: '', pos: '名詞句' }
      ],
      grammarPoints: [
        'It happened that SV：たまたま〜ということがあった',
        'give a ball：舞踏会を開催する'
      ]
    },
    {
      id: 'cin-11',
      slideNumber: 8,
      text: 'Our young misses were also invited, for they cut a very grand figure among the quality.',
      translation: '私たちの娘たち（姉たち）も招待されました。彼女たちは上流社会の中で大層目立っていたからです。',
      literalTranslation: '(私たちの若い娘たちも招待された / なぜなら彼女たちは非常に華々しい姿を見せていたからだ / 上流貴族階級の中で)',
      structure: {
        pattern: 'SVC (受動態) + 理由節',
        subject: 'Our young misses',
        verb: 'were invited'
      },
      vocabulary: [
        { word: 'cut a figure', meaning: '異彩を放つ、目立つ、姿を見せる', phonetic: '', pos: '成句' },
        { word: 'the quality', meaning: '上流階級、貴族（古義）', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'cut a grand figure：堂々とした・華やかな姿を見せる',
        'the quality：上流社会の人々'
      ]
    },
    {
      id: 'cin-12',
      slideNumber: 8,
      text: 'They were mightily delighted at this invitation, and wonderfully busy in choosing out such gowns, petticoats, and head-clothes as might become them.',
      translation: '彼女たち子はこの招待に大喜びし、自分たちによく似合うガウンやペチコート、髪飾りを選び出すのに驚くほど大忙しになりました。',
      literalTranslation: '(彼女たちは大いに喜んだ / この招待に / そして驚くほど忙しかった / そのようなドレスやペチコート、髪飾りを選ぶのに / 自分たちに似合うような)',
      structure: {
        pattern: 'SVC and SVC',
        subject: 'They',
        verb: 'were',
        complement: 'delighted / busy'
      },
      vocabulary: [
        { word: 'mightily', meaning: '大いに、非常に', phonetic: '/ˈmaɪ.tɪ.li/', pos: '副詞' },
        { word: 'petticoats', meaning: 'ペチコート（スカート下着）', phonetic: '/ˈpet.i.kəʊts/', pos: '名詞' },
        { word: 'become', meaning: '〜に似合う（他動詞）', phonetic: '/bɪˈkʌm/', pos: '動詞' }
      ],
      grammarPoints: [
        'be busy in doing：〜するのに忙しい',
        'such A as might become them：彼女たちに似合うようなA'
      ]
    },
    {
      id: 'cin-13',
      slideNumber: 9,
      text: "This was a new trouble to Cinderella; for it was she who ironed her sisters' linen, and plaited their ruffles; they talked all day long of nothing but how they should be dressed.",
      translation: 'これはシンデレラにとって新たな災難でした。姉たちのリネンにアイロンをかけ、フリルをひだ折りにしたのは彼女だったからです。姉たちは一日中、どう着飾るかということしか話しませんでした。',
      literalTranslation: '(これはシンデレラにとって新たな災難だった / なぜなら彼女こそがリネンにアイロンをかけ、フリルを折った者だったからだ / 彼女たちは一日中話していた / どう着飾るべきかということだけを)',
      structure: {
        pattern: 'SVC + 強調構文 (it was she who ...) + SVO',
        subject: 'This',
        verb: 'was',
        complement: 'a new trouble'
      },
      vocabulary: [
        { word: 'plaited', meaning: 'ひだをつけた、編んだ', phonetic: '/plæt.ɪd/', pos: '動詞' },
        { word: 'ruffles', meaning: 'フリル飾り、ひだ襟', phonetic: '/ˈrʌf.əlz/', pos: '名詞' },
        { word: 'linen', meaning: '亜麻布、リネン類（衣類・シーツ）', phonetic: '/ˈlɪn.ɪn/', pos: '名詞' }
      ],
      grammarPoints: [
        'it was she who ...：彼女こそが〜した（分裂文・強調構文）',
        'talk of nothing but ~：〜のことばかり話す（nothing but ＝ only）'
      ]
    },
    {
      id: 'cin-14',
      slideNumber: 10,
      text: '"For my part," said the eldest, "I will wear my red velvet suit with French trimming."',
      translation: '「私の分はね」と姉娘が言いました。「フランス風トリミングのついた赤いベルベットのスーツを着るわ。」',
      literalTranslation: '(「私としてはね」 / と長女は言った / 「私は着るわ / フランス風トリミングのついた赤いベルベットスーツを」)',
      structure: {
        pattern: 'SVO',
        subject: 'I',
        verb: 'will wear',
        object: 'my red velvet suit with French trimming'
      },
      vocabulary: [
        { word: 'velvet', meaning: 'ベルベット、天鵞絨（ビロード）', phonetic: '/ˈvel.vɪt/', pos: '名詞' },
        { word: 'trimming', meaning: '縁飾り、トリミング', phonetic: '/ˈtrɪm.ɪŋ/', pos: '名詞' }
      ],
      grammarPoints: [
        'For my part：私としては、私に関しては'
      ]
    },
    {
      id: 'cin-15',
      slideNumber: 10,
      text: '"And I," said the youngest, "shall have my usual petticoat; but then, to make amends for that, I will put on my gold-flowered manteau, and my diamond stomacher, which is far from being the most ordinary one in the world."',
      translation: '「私の方はね」と妹娘が言いました。「いつものペチコートを着るけれど、その埋め合わせに、金の花模様のマントー（上着）と、世界で一番ありきたりなものなどとは程遠いダイヤモンドの胸飾りをつけるつもりよ。」',
      literalTranslation: '(「そして私は」 / と妹が言った / 「いつものペチコートを着るわ / しかしその埋め合わせとして / 金の花柄のマントーを羽織り / ダイヤモンドの胸飾りをつけるわ / それはこの世で最も普通のものからは程遠いものよ」)',
      structure: {
        pattern: '重文 + 関係代名詞節',
        subject: 'I',
        verb: 'shall have / will put on'
      },
      vocabulary: [
        { word: 'manteau', meaning: 'マントー、女性用の上着・マント', phonetic: '/mænˈtəʊ/', pos: '名詞' },
        { word: 'stomacher', meaning: 'ストマッカー（胸飾り、胴衣の前当て）', phonetic: '/ˈstʌm.ək.ər/', pos: '名詞' },
        { word: 'make amends', meaning: '償いをする、補う', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'make amends for ~：〜の埋め合わせをする',
        'far from being ~：〜であることからは程遠い（強い否定）'
      ]
    },
    {
      id: 'cin-16',
      slideNumber: 11,
      text: 'They sent for the best tire-woman they could get to make up their head-dresses and adjust their double pinners, and they had their red brushes and patches from Mademoiselle de la Poche.',
      translation: '彼女たちは手に入る限りの最高の髪結い師を呼び寄せて髪を結わせ、二重のピン留め帽子を整えさせ、マドモアゼル・ド・ラ・ポッシュから頬紅のブラシや付けぼくろを取り寄せました。',
      literalTranslation: '(彼女たちは呼びにやった / 最高の髪結い師を / 髪飾りを結い、二重の帽子飾りを整えるために / そして頬紅ブラシと付けぼくろを手に入れた / マドモアゼル・ド・ラ・ポッシュから)',
      structure: {
        pattern: 'SVO + SVO',
        subject: 'They',
        verb: 'sent for / had'
      },
      vocabulary: [
        { word: 'tire-woman', meaning: '髪結い師、衣装係（古語）', phonetic: '', pos: '名詞' },
        { word: 'patches', meaning: '付けぼくろ（17〜18世紀ヨーロッパの化粧用装飾）', phonetic: '/pætʃ.ɪz/', pos: '名詞' },
        { word: 'pinners', meaning: '婦人用の頭飾り、ピン留め帽子', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'send for ~：〜を呼びにやる、〜を取り寄せる'
      ]
    },
    {
      id: 'cin-17',
      slideNumber: 12,
      text: 'Cinderella was likewise called up to them to be consulted in all these matters, for she had excellent notions, and advised them always for the best, nay, and offered her services to dress their heads, which they were very willing she should do.',
      translation: 'シンデレラも同様にこれらのことについて意見を求められるために呼び出されました。彼女は素晴らしいセンスを持っており、常に最善の助言を与え、それどころか姉たちの髪を結ってあげることを申し出たからです。姉たちは大喜びでそれをやらせました。',
      literalTranslation: '(シンデレラも同様に呼び出された / これらすべての事柄について相談を受けるために / 彼女は素晴らしい知恵を持っていたからだ / そして常に最善のアドバイスをし / それどころか彼女たちの髪を結う奉仕を申し出た / 姉たちは喜んで彼女にそうさせた)',
      structure: {
        pattern: 'SVC (受動態) + 理由節',
        subject: 'Cinderella',
        verb: 'was called up'
      },
      vocabulary: [
        { word: 'consulted', meaning: '相談された、助言を求められた', phonetic: '/kənˈsʌl.tɪd/', pos: '動詞' },
        { word: 'notions', meaning: '考え、見識、センス', phonetic: '/ˈnəʊ.ʃənz/', pos: '名詞' },
        { word: 'nay', meaning: 'いやそれどころか（古風な強調詞）', phonetic: '/neɪ/', pos: '副詞' }
      ],
      grammarPoints: [
        'be consulted in ~：〜について相談を受ける',
        'nay：いやそれどころか、さらに言えば'
      ]
    },
    {
      id: 'cin-18',
      slideNumber: 12,
      text: 'As she was doing this, they said to her: "Cinderella, would you not be glad to go to the ball?"',
      translation: '彼女が髪を結っている最中、姉たちは言いました。「シンデレラ、お前も舞踏会に行けたら嬉しいんじゃないかい？」',
      literalTranslation: '(彼女がこれをしているとき / 彼女たちは彼女に言った / 「シンデレラ、お前も舞踏会に行けたら嬉しいのではないかい？」)',
      structure: {
        pattern: '従属節 + SVO + 否定疑問文',
        subject: 'they',
        verb: 'said'
      },
      vocabulary: [],
      grammarPoints: [
        'would you not be glad to do：〜できたら嬉しいのではないか（仮定法を用いた誘い・からかい）'
      ]
    },
    {
      id: 'cin-19',
      slideNumber: 13,
      text: '"Alas!" said she, "you only jeer me; it is not for such as I am to go thither."',
      translation: '「ああ！」と彼女は言いました。「からかわないでください。私のような者がそのような場所へ行くなど滅相もありません。」',
      literalTranslation: '(「ああ！」と彼女は言った / 「あなたは私を冷やかすばかりです / 私のような者がそこへ行く筋合いではありません」)',
      structure: {
        pattern: 'OVS + SVO + 形式主語構文',
        subject: 'she / you / it',
        verb: 'said / jeer / is not'
      },
      vocabulary: [
        { word: 'jeer', meaning: '嘲る、冷やかす、からかう', phonetic: '/dʒɪər/', pos: '動詞' },
        { word: 'thither', meaning: 'あそこへ、そこへ（古語）', phonetic: '/ˈðɪð.ər/', pos: '副詞' }
      ],
      grammarPoints: [
        'such as I am：私のような者',
        'thither：そこへ、あちらへ（古英語の方向副詞）'
      ]
    },
    {
      id: 'cin-20',
      slideNumber: 14,
      text: '"Thou art in the right of it," replied they; "it would make the people laugh to see a Cinderwench at a ball."',
      translation: '「お前の言う通りだね」と姉たちは答えました。「舞踏会に灰かぶり娘がいるのを見たら、皆が大笑いするだろうよ。」',
      literalTranslation: '(「そなたの言う通りだ」と彼女たちは答えた / 「人々を笑わせるだろう / 舞踏会で灰かぶり娘を見ることが」)',
      structure: {
        pattern: 'SVC + 形式主語構文 (it would make O do to see ...)',
        subject: 'Thou / it',
        verb: 'art / would make'
      },
      vocabulary: [
        { word: 'thou art', meaning: 'お前は〜だ（you areの古語）', phonetic: '/ðaʊ ɑːt/', pos: '代名詞＋動詞' }
      ],
      grammarPoints: [
        'Thou art in the right：お前の言う通りだ（Thou＝you, art＝are）',
        'make the people laugh：人々を笑わせる（使役動詞make）'
      ]
    },
    {
      id: 'cin-21',
      slideNumber: 14,
      text: 'Anyone but Cinderella would have dressed their heads awry, but she was very good, and dressed them perfectly well they were almost two days without eating, so much were they transported with joy.',
      translation: 'シンデレラ以外の者なら髪をわざと乱雑に結い上げたことでしょうが、彼女はとても心優しく、完璧に髪を整えてあげました。姉たちは喜びに我を忘れるあまり、丸二日ほとんど何も食べないほどでした。',
      literalTranslation: '(シンデレラ以外の誰かなら / 彼女たちの髪を曲げて結っただろう / しかし彼女はとても善良で / 彼女たちを完璧に整えた / 彼女たちはほぼ2日間食事を摂らなかった / それほど彼女たちは喜びに我を忘れていたのだ)',
      structure: {
        pattern: '仮定法過去完了 + 倒置構文 (so much were they ...)',
        subject: 'Anyone but Cinderella / they',
        verb: 'would have dressed / were transported'
      },
      vocabulary: [
        { word: 'awry', meaning: '曲がって、歪んで、おかしな風に', phonetic: '/əˈraɪ/', pos: '副詞' },
        { word: 'transported', meaning: '我を忘れた、有頂天になった', phonetic: '/trænˈspɔː.tɪd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'Anyone but A would have done：A以外の誰かなら〜しただろうに',
        'so much were they transported：あまりに有頂天だったので（so much前置の倒置構文）'
      ]
    },
    {
      id: 'cin-22',
      slideNumber: 15,
      text: 'They broke above a dozen laces in trying to be laced up close, that they might have a fine slender shape, and they were continually at their looking-glass.',
      translation: '美しい細身の体型に見せようとコルセットの紐をぎゅうぎゅうに締め上げようとして、1ダース以上の紐を引きちぎり、絶えず鏡の前に張り付いていました。',
      literalTranslation: '(彼女たちは1ダース以上の紐を切った / きつく締め上げようと試みる中で / ほっそりした見事な体型を手に入れるために / そして絶えず鏡の前にいた)',
      structure: {
        pattern: 'SVO + 目的節(that they might ...) + SV',
        subject: 'They',
        verb: 'broke / were'
      },
      vocabulary: [
        { word: 'laces', meaning: 'コルセットの紐、靴ひも', phonetic: '/leɪ.sɪz/', pos: '名詞' },
        { word: 'slender', meaning: 'ほっそりした、スレンダーな', phonetic: '/ˈslen.dər/', pos: '形容詞' },
        { word: 'continually', meaning: '絶え間なく、ひっきりなしに', phonetic: '/kənˈtɪn.ju.ə.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'that S might do：〜できるように（目的のthat節）',
        'above a dozen：1ダース（12本）以上'
      ]
    },
    {
      id: 'cin-23',
      slideNumber: 16,
      text: 'At last the happy day came; they went to Court, and Cinderella followed them with her eyes as long as she could, and when she had lost sight of them, she fell a-crying.',
      translation: 'ついに待ちに待った日が訪れました。姉たちは王宮へと向かい、シンデレラは見えなくなるまでじっと見送り、彼女たちの姿が見えなくなると、泣き崩れてしまいました。',
      literalTranslation: '(ついに待ち望んだ日がやってきた / 彼女たちは宮廷へ行き / シンデレラは目で追った / できるかぎり長く / そして彼女たちを見失ったとき / 彼女は泣き始めた)',
      structure: {
        pattern: 'SV and SV + 時の副詞節 + SV',
        subject: 'the happy day / they / Cinderella / she',
        verb: 'came / went / followed / fell a-crying'
      },
      vocabulary: [
        { word: 'fell a-crying', meaning: '泣き出した（古風な表現: fall a-doing）', phonetic: '', pos: '動詞句' },
        { word: 'lost sight of', meaning: '〜を見失った', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'follow with one\'s eyes：目で追う',
        'fall a-crying：ワッと泣き出す（a-は動作の進行・突発を表す古風な接頭辞）'
      ]
    },
    {
      id: 'cin-24',
      slideNumber: 17,
      text: 'Her godmother, who saw her all in tears, asked her what was the matter.',
      translation: '涙に暮れている彼女を見た名付け親（仙女）は、どうしたのかと尋ねました。',
      literalTranslation: '(彼女の代母は / 彼女が涙に濡れているのを見た / 彼女に尋ねた / 何があったのかと)',
      structure: {
        pattern: 'SVOO (間接疑問文)',
        subject: 'Her godmother',
        verb: 'asked',
        object: 'her / what was the matter'
      },
      vocabulary: [
        { word: 'godmother', meaning: '代母、名付け親（妖精のおばあさん）', phonetic: '/ˈɡɒdˌmʌð.ər/', pos: '名詞' },
        { word: 'all in tears', meaning: '涙に暮れて、涙で顔を濡らして', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'what was the matter：何があったのか（間接疑問文）'
      ]
    },
    {
      id: 'cin-25',
      slideNumber: 17,
      text: '"I wish I could, I wish I could" she was not able to speak the rest, being interrupted by her tears and sobbing.',
      translation: '「私も行けたら、行けたらいいのに…」涙としゃくりあげに遮られて、彼女はそれ以上言葉を続けることができませんでした。',
      literalTranslation: '(「私もできたらいいのに、できたらいいのに…」 / 彼女は残りを話すことができなかった / 涙とすすり泣きに遮られて)',
      structure: {
        pattern: 'SVO + 分詞構文',
        subject: 'she',
        verb: 'was not able to speak',
        object: 'the rest',
        modifiers: 'being interrupted by her tears and sobbing'
      },
      vocabulary: [
        { word: 'sobbing', meaning: 'すすり泣き、しゃくり上げ', phonetic: '/ˈsɒb.ɪŋ/', pos: '名詞' },
        { word: 'interrupted', meaning: '遮られた、中断された', phonetic: '/ˌɪn.təˈrʌp.tɪd/', pos: '動詞' }
      ],
      grammarPoints: [
        'I wish I could：〜できたらいいのに（願望を表す仮定法過去）',
        'being interrupted by ~：分詞構文（〜によって遮られて）'
      ]
    },
    {
      id: 'cin-26',
      slideNumber: 18,
      text: 'This godmother of hers, who was a fairy, said to her, "Thou wishest thou couldst go to the ball; is it not so?"',
      translation: '実は妖精であった彼女の名付け親は言いました。「お前は舞踏会に行きたいと願っているのだね、そうではないかい？」',
      literalTranslation: '(彼女のこの代母は / 妖精であった / 彼女に言った / 「お前は舞踏会に行けたらと願っているのだね / そうではないかい？」)',
      structure: {
        pattern: 'SVO + 付加疑問文',
        subject: 'This godmother',
        verb: 'said'
      },
      vocabulary: [
        { word: 'fairy', meaning: '妖精、仙女', phonetic: '/ˈfeə.ri/', pos: '名詞' },
        { word: 'thou wishest', meaning: 'お前は願っている（you wishの古語）', phonetic: '', pos: '古語' }
      ],
      grammarPoints: [
        'thou couldst：お前が行くことができる（couldの2人称単数古形）'
      ]
    },
    {
      id: 'cin-27',
      slideNumber: 18,
      text: '"Yes," cried Cinderella, with a great sigh.',
      translation: '「はい」とシンデレラは深いため息をつきながら答えました。',
      literalTranslation: '(「はい」とシンデレラは声を上げた / 深いため息とともに)',
      structure: {
        pattern: 'OVS',
        verb: 'cried',
        subject: 'Cinderella'
      },
      vocabulary: [
        { word: 'sigh', meaning: 'ため息', phonetic: '/saɪ/', pos: '名詞' }
      ],
      grammarPoints: [
        'with a great sigh：深いため息とともに'
      ]
    },
    {
      id: 'cin-28',
      slideNumber: 19,
      text: '"Well," said her godmother, "be but a good girl, and I will contrive that thou shalt go."',
      translation: '「よしよし」と名付け親は言いました。「いい子にしていなさい、お前を行かせてあげるように手筈を整えてあげよう。」',
      literalTranslation: '(「よし」と代母は言った / 「ただ良い子にしていなさい / そうすれば私が計らおう / お前が行けるように」)',
      structure: {
        pattern: '命令文 + and + SVO (that節)',
        verb: 'be',
        notes: '「be but a good girl, and I will...」（命令文＋and構文: 〜しなさい、そうすれば…）。'
      },
      vocabulary: [
        { word: 'contrive', meaning: '工夫する、段取りをつける、計らう', phonetic: '/kənˈtraɪv/', pos: '動詞' },
        { word: 'shalt', meaning: '〜するだろう（shallの2人称単数古形）', phonetic: '/ʃælt/', pos: '助動詞' }
      ],
      grammarPoints: [
        'be but ~：ただ〜でありなさい（but ＝ only）',
        'contrive that SV：〜であるよう取り計らう'
      ]
    },
    {
      id: 'cin-29',
      slideNumber: 19,
      text: 'Then she took her into her chamber, and said to her, "Run into the garden, and bring me a pumpkin."',
      translation: 'それから彼女はシンデレラを自分の部屋へと連れて行き、「庭へ走って行き、カボチャをひとつ持っておいで」と言いました。',
      literalTranslation: '(それから彼女は彼女を部屋へ連れて行った / そして彼女に言った / 「庭へ走って行って / 私にカボチャを持ってきなさい」)',
      structure: {
        pattern: 'SVO and SVOO (命令文)',
        subject: 'she',
        verb: 'took / said'
      },
      vocabulary: [
        { word: 'pumpkin', meaning: 'カボチャ', phonetic: '/ˈpʌmp.kɪn/', pos: '名詞' },
        { word: 'chamber', meaning: '部屋、小部屋', phonetic: '/ˈtʃeɪm.bər/', pos: '名詞' }
      ],
      grammarPoints: [
        'bring me a pumpkin：私にカボチャを持ってくる（SVOO構文）'
      ]
    },
    {
      id: 'cin-30',
      slideNumber: 20,
      text: 'Cinderella went immediately to gather the finest she could get, and brought it to her godmother, not being able to imagine how this pumpkin could make her go to the ball.',
      translation: 'シンデレラは手に入る限りで一番立派なカボチャを摘み取りに急いで行き、名付け親のもとへ持ってきましたが、このカボチャがどうやって自分を舞踏会に行かせてくれるのか想像もつきませんでした。',
      literalTranslation: '(シンデレラはすぐに向かった / 手に入る最も立派なものを収穫するために / そしてそれを代母のもとへ持ってきた / 想像することができないまま / どうやってこのカボチャが自分を舞踏会へ行かせるのかを)',
      structure: {
        pattern: 'SV and SVO + 分詞構文 (not being able to imagine ...)',
        subject: 'Cinderella',
        verb: 'went / brought'
      },
      vocabulary: [
        { word: 'gather', meaning: '集める、収穫する', phonetic: '/ˈɡæð.ər/', pos: '動詞' },
        { word: 'immediately', meaning: '直ちに、すぐに', phonetic: '/ɪˈmiː.di.ət.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'how this pumpkin could make her go：どうしてこのカボチャが彼女を行かせることができるのか（make O do）'
      ]
    },
    {
      id: 'cin-31',
      slideNumber: 21,
      text: 'Her godmother scooped out all the inside of it, having left nothing but the rind; which done, she struck it with her wand, and the pumpkin was instantly turned into a fine coach, gilded all over with gold.',
      translation: '名付け親はその中身をすべてくり抜き、皮だけを残しました。それが済むと、魔法の杖でそれをひと叩きしました。するとカボチャはたちまち、全体に金箔が施された見事な馬車へと姿を変えました。',
      literalTranslation: '(代母はその中身をすべてくり抜いた / 皮以外には何も残さずに / それが終わると / 彼女は杖でそれを叩いた / するとカボチャはたちまち見事な馬車に変わった / 全体に金で装飾された)',
      structure: {
        pattern: 'SVO + 独立分詞構文 (which done) + SVO + 受動態',
        subject: 'Her godmother / the pumpkin',
        verb: 'scooped out / struck / was turned into'
      },
      vocabulary: [
        { word: 'scooped out', meaning: 'くり抜いた、すくい取った', phonetic: '/skuːpt aʊt/', pos: '句動詞' },
        { word: 'rind', meaning: '（果物・カボチャの）外皮', phonetic: '/raɪnd/', pos: '名詞' },
        { word: 'wand', meaning: '魔法の杖', phonetic: '/wɒnd/', pos: '名詞' },
        { word: 'gilded', meaning: '金箔を貼った、金色の', phonetic: '/ˈɡɪl.dɪd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'nothing but ~：〜のみ（only）',
        'which done：それが済むと（関係代名詞を含む絶対的独立分詞構文）',
        'be turned into ~：〜に変身する'
      ]
    },
    {
      id: 'cin-32',
      slideNumber: 22,
      text: 'She then went to look into her mouse-trap, where she found six mice, all alive, and ordered Cinderella to lift up a little the trapdoor, when, giving each mouse, as it went out, a little tap with her wand, the mouse was that moment turned into a fine horse, which altogether made a very fine set of six horses of a beautiful mouse-colored dapple-gray.',
      translation: 'それから彼女はネズミ捕りの中を見に行き、生きた6匹のネズミを見つけると、シンデレラに罠の戸を少し持ち上げるように言いました。そしてネズミが出てくるごとに杖で軽くトンと叩くと、その瞬間ネズミは見事な馬へと変わり、合わせて美しいネズミ色のまだら灰色の見事な6頭立ての馬となりました。',
      literalTranslation: '(彼女はネズミ捕りを覗きに行った / そこには6匹のネズミが生きていた / シンデレラに罠の戸を少し上げるよう命じた / ネズミが出るたびに杖で軽く叩くと / ネズミはその瞬間立派な馬へと変わった / それらが全体で美しいまだら灰色の見事な6頭立ての馬となった)',
      structure: {
        pattern: '複文（関係詞・時・分詞構文の高度な連結）',
        subject: 'She / the mouse',
        verb: 'went / ordered / was turned into'
      },
      vocabulary: [
        { word: 'dapple-gray', meaning: 'まだら模様の灰色（芦毛馬の毛色）', phonetic: '', pos: '名詞/形容詞' },
        { word: 'trapdoor', meaning: '落とし戸、罠の跳ね上げ戸', phonetic: '/ˈtræp.dɔːr/', pos: '名詞' }
      ],
      grammarPoints: [
        'order O to do：Oに〜するよう命じる',
        'all alive：すべて生きたままで（補語的用法）'
      ]
    },
    {
      id: 'cin-33',
      slideNumber: 23,
      text: 'Being at a loss for a coachman, "I will go and see," says Cinderella, "if there is never a rat in the rat-trap-we may make a coachman of him."',
      translation: '御者がいなくて困っていると、シンデレラが言いました。「大ネズミ用の罠にネズミがかかっていないか見てまいります。そのネズミを御者にできるかもしれません。」',
      literalTranslation: '(御者に困っていたので / 「私が見てまいります」とシンデレラは言った / 「もし大ネズミ用の罠にネズミがいれば / 私たちは彼を御者にできるかもしれません」)',
      structure: {
        pattern: '分詞構文 + SVO + 条件節',
        subject: 'Cinderella / we',
        verb: 'will go and see / may make'
      },
      vocabulary: [
        { word: 'coachman', meaning: '御者（馬車を操縦する人）', phonetic: '/ˈkəʊtʃ.mən/', pos: '名詞' },
        { word: 'at a loss', meaning: '途方に暮れて、困って', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'at a loss for ~：〜に困って、途方に暮れて',
        'make A of B：BからAを作る（AをBに仕立てる）'
      ]
    },
    {
      id: 'cin-34',
      slideNumber: 24,
      text: '"Thou art in the right," replied her godmother; "go and look." Cinderella brought the trap to her, and in it there were three huge rats.',
      translation: '「お前の言う通りだね」と名付け親は答えました。「行って見てごらん。」シンデレラが罠を持ってくると、中には3匹の巨大なネズミがいました。',
      literalTranslation: '(「お前の言う通りだ」と代母は答えた / 「行って見てごらん」 / シンデレラはその罠を持ってきて / その中には3匹の巨大なネズミがいた)',
      structure: {
        pattern: 'SVC + 命令文 + SVO + There were構文',
        subject: 'Thou / Cinderella / three huge rats',
        verb: 'art / brought / were'
      },
      vocabulary: [
        { word: 'huge', meaning: '巨大な、非常に大きい', phonetic: '/hjuːdʒ/', pos: '形容詞' }
      ],
      grammarPoints: [
        'go and look：行って見る（口語的な並列命令）'
      ]
    },
    {
      id: 'cin-35',
      slideNumber: 25,
      text: 'The fairy made choice of one of the three which had the largest beard, and, having touched him with her wand, he was turned into a fat, jolly coach-man, who had the smartest whiskers eyes ever beheld.',
      translation: '仙女は一番大きな髭を生やした1匹を選び出し、杖で触れると、彼はこれまで誰も見たことがないほど見事な口髭を蓄えた、太って陽気な御者へと変身しました。',
      literalTranslation: '(妖精は3匹の中で最も立派な髭を持つ1匹を選んだ / そして杖で触れると / 彼は太って陽気な御者へと変えられた / これまでに目が見た中で最も立派な頬髭を持った御者に)',
      structure: {
        pattern: 'SVO + 完了分詞構文 + 受動態 + 関係詞節',
        subject: 'The fairy / he',
        verb: 'made choice of / was turned into'
      },
      vocabulary: [
        { word: 'jolly', meaning: '陽気な、愉快な', phonetic: '/ˈdʒɒl.i/', pos: '形容詞' },
        { word: 'whiskers', meaning: '（男性の）頬髭、ネズミの髭', phonetic: '/ˈwɪs.kərz/', pos: '名詞' },
        { word: 'beheld', meaning: '見つめた、目にした（beholdの過去形）', phonetic: '/bɪˈheld/', pos: '動詞' }
      ],
      grammarPoints: [
        'make choice of ~：〜を選び出す',
        'eyes ever beheld：かつて目が目撃した（詩的・格調高い表現）'
      ]
    },
    {
      id: 'cin-36',
      slideNumber: 26,
      text: 'After that, she said to her; "Go again into the garden, and you will find six lizards behind the watering-pot, bring them to me."',
      translation: 'その後、彼女は言いました。「もう一度庭へ行ってごらん。水差し（じょうろ）の陰に6匹のトカゲがいるから、連れておいで。」',
      literalTranslation: '(そのあと彼女は言った / 「もう一度庭へ行きなさい / そうすれば水差しの後ろに6匹のトカゲが見つかる / 私のところへ連れておいで」)',
      structure: {
        pattern: '命令文 + and + SVO',
        verb: 'Go, find, bring'
      },
      vocabulary: [
        { word: 'lizards', meaning: 'トカゲ', phonetic: '/ˈlɪz.ədz/', pos: '名詞' },
        { word: 'watering-pot', meaning: '水差し、じょうろ', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'behind the watering-pot：じょうろの陰に'
      ]
    },
    {
      id: 'cin-37',
      slideNumber: 27,
      text: 'She had no sooner done so but her godmother turned them into six footmen, who skipped up immediately behind the coach, with their liveries all bedaubed with gold and silver, and clung as close behind each other as if they had done nothing else their whole lives.',
      translation: 'シンデレラがそうするやいなや、名付け親はトカゲたちを6人の従僕（フットマン）に変えました。彼らは金や銀で美しく飾られたお仕着せ（制服）を着て、まるで生まれてこの方それ以外のことは何もしたことがないかのように手際よく馬車の後ろに飛び乗り、ぴったりと寄り添いました。',
      literalTranslation: '(彼女がそうするやいなや / 代母は彼らを6人の従僕に変えた / 彼らは馬車の後ろにすぐさま飛び乗った / 金と銀で装飾された制服を着て / そして互いにぴったり寄り添った / まるで生涯それ以外何もしてこなかったかのように)',
      structure: {
        pattern: 'No sooner ... but ... (倒置・即時構文) + as if仮定法過去完了',
        subject: 'her godmother / footmen',
        verb: 'turned / skipped up and clung'
      },
      vocabulary: [
        { word: 'footmen', meaning: '従僕（馬車の後ろに立つ召使い）', phonetic: '/ˈfʊt.mən/', pos: '名詞' },
        { word: 'liveries', meaning: '召使いの制服、お仕着せ', phonetic: '/ˈlɪv.ər.iz/', pos: '名詞' },
        { word: 'bedaubed', meaning: '塗りたくられた、一面に装飾された', phonetic: '/bɪˈdɔːbd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'as if they had done nothing else：まるで他に何もしたことがないかのように（仮定法過去完了）'
      ]
    },
    {
      id: 'cin-38',
      slideNumber: 28,
      text: 'The Fairy then said to Cinderella; "Well, you see here an equipage fit to go to the ball with; are you not pleased with it?"',
      translation: 'それから仙女はシンデレラに言いました。「さあ、これで舞踏会へ行くのにふさわしい馬車立てが揃ったよ。気に入ったかい？」',
      literalTranslation: '(妖精はそれからシンデレラに言った / 「さあ、ここに舞踏会へ行くのにふさわしい馬車揃えが見えるだろう / 気に入ったかい？」)',
      structure: {
        pattern: 'SVO + 否定疑問文',
        subject: 'you',
        verb: 'see',
        object: 'an equipage fit to go to the ball with'
      },
      vocabulary: [
        { word: 'equipage', meaning: '馬車とお供の一揃え、馬車立て', phonetic: '/ˈek.wɪ.pɪdʒ/', pos: '名詞' },
        { word: 'pleased', meaning: '満足した、気に入った', phonetic: '/pliːzd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'fit to do with：〜するのに適した、ふさわしい',
        'are you not pleased with ~：〜に満足しているのではないかい？'
      ]
    },
    {
      id: 'cin-39',
      slideNumber: 29,
      text: '"Oh! yes," cried she; "but must I go thither as I am, in these nasty rags?" Her godmother only just touched her with her wand, and, at the same instant, her clothes were turned into cloth of gold and silver, all beset with jewels.',
      translation: '「ええ、とても！」と彼女は叫びました。「でも私、このみすぼらしいボロ服を着たこのままの姿で行かなければならないのですか？」名付け親が杖でちょんと触れると、その瞬間、彼女の服は金や銀の布地となり、一面に宝石が散りばめられたドレスへと変わりました。',
      literalTranslation: '(「ええ、はい！」と彼女は叫んだ / 「でも私はこのまま、この汚いボロ布を着て行かねばならないのですか？」 / 代母が杖で彼女にほんの少し触れると / その同じ瞬間に / 彼女の服は金銀の布へと変わり / 宝石で散りばめられた)',
      structure: {
        pattern: 'SVO + 受動態',
        subject: 'she / Her godmother / her clothes',
        verb: 'cried / touched / were turned into'
      },
      vocabulary: [
        { word: 'rags', meaning: 'ぼろ布、ボロ服', phonetic: '/ræɡz/', pos: '名詞' },
        { word: 'beset', meaning: '散りばめられた、囲まれた', phonetic: '/bɪˈset/', pos: '過去分詞' },
        { word: 'instant', meaning: '瞬間', phonetic: '/ˈɪn.stənt/', pos: '名詞' }
      ],
      grammarPoints: [
        'as I am：ありのままの私で',
        'at the same instant：それと同時に、その瞬間に'
      ]
    },
    {
      id: 'cin-40',
      slideNumber: 30,
      text: 'This done, she gave her a pair of glass slippers, the prettiest in the whole world.',
      translation: 'これが済むと、仙女は彼女にこの世で最も美しい一足のガラスの靴を与えました。',
      literalTranslation: '(これが済むと / 彼女は彼女に一足のガラスの靴を与えた / 全世界で最も美しい靴を)',
      structure: {
        pattern: '独立分詞構文 + SVOO + 同格',
        subject: 'she',
        verb: 'gave',
        object: 'her / a pair of glass slippers'
      },
      vocabulary: [
        { word: 'slippers', meaning: '室内履き、靴、スリッパ', phonetic: '/ˈslɪp.ərz/', pos: '名詞' },
        { word: 'glass', meaning: 'ガラス製の', phonetic: '/ɡlɑːs/', pos: '形容詞' }
      ],
      grammarPoints: [
        'This done：これが済むと（絶対的独立分詞構文）',
        'the prettiest in the whole world：世界中で一番美しい（同格の最上級）'
      ]
    },
    {
      id: 'cin-41',
      slideNumber: 30,
      text: 'Being thus decked out, she got up into her coach; but her godmother, above all things, commanded her not to stay till after midnight, telling her, at the same time, that if she stayed one moment longer, the coach would be a pumpkin again, her horses mice, her coachman a rat, her footmen lizards, and her clothes become just as they were before.',
      translation: 'こうして着飾ると、彼女は馬車に乗り込みました。しかし名付け親は何よりも固く、「絶対に真夜中を過ぎるまで居残ってはならない」と命じました。もし一刻でも長く留まれば、馬車は元のカボチャに、馬はネズミに、御者は大ネズミに、従僕たちはトカゲに戻り、ドレスもすべて元の姿に戻ってしまうと言い聞かせたのです。',
      literalTranslation: '(このように着飾ると / 彼女は馬車に乗り込んだ / しかし代母は何よりも強く命じた / 真夜中を過ぎて留まらないようにと / 同時に彼女に告げながら / もし一瞬でも長く留まれば / 馬車は再びカボチャになり / 馬はネズミに、御者は大ネズミに、従僕はトカゲに / そして服は元の姿に戻ってしまうと)',
      structure: {
        pattern: '分詞構文 + SVO + 命令構文 (command O not to do) + 仮定法過去',
        subject: 'her godmother',
        verb: 'commanded',
        object: 'her',
        notes: '「if she stayed ..., the coach would be ...」（仮定法過去の条件文）。動詞省略の並列（her horses [would be] mice...）。'
      },
      vocabulary: [
        { word: 'decked out', meaning: '着飾った、飾り立てられた', phonetic: '/dekt aʊt/', pos: '過去分詞' },
        { word: 'midnight', meaning: '真夜中（午前0時）', phonetic: '/ˈmɪd.naɪt/', pos: '名詞' },
        { word: 'above all things', meaning: '何よりも第一に', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'command O not to do：Oに〜しないよう命じる',
        'stay till after midnight：真夜中を過ぎるまで滞在する'
      ]
    },
    {
      id: 'cin-42',
      slideNumber: 31,
      text: 'She promised her godmother she would not fail of leaving the ball before midnight; and then away she drives, scarce able to contain herself for joy.',
      translation: 'シンデレラは真夜中前には必ず舞踏会を退出すると名付け親に約束し、喜びを抑えきれない様子で馬車を走らせて行きました。',
      literalTranslation: '(彼女は代母に約束した / 必ず真夜中前に舞踏会を退出すると / そして彼女は馬車を走らせて去った / 喜びで我を抑えられないほどで)',
      structure: {
        pattern: 'SVO + 倒置 (away she drives) + 分詞構文',
        subject: 'She',
        verb: 'promised / drives'
      },
      vocabulary: [
        { word: 'scarce', meaning: 'ほとんど〜ない（＝scarcely）', phonetic: '/skeəs/', pos: '副詞' },
        { word: 'contain oneself', meaning: '自分を抑える、自制する', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'not fail of doing：必ず〜する（fail of doingの否定）',
        'away she drives：彼女は車を走らせて去っていった（方向副詞の前置）'
      ]
    },
    {
      id: 'cin-43',
      slideNumber: 32,
      text: 'The King\'s son who was told that a great princess, whom nobody knew, was come, ran out to receive her; he gave her his hand as she alighted out of the coach, and led her into the ball, among all the company.',
      translation: '誰も知らない高貴な王女がお見えになったと告げられた王子は、彼女を出迎えに駆け出しました。彼女が馬車から降りる際に手を差し伸べ、参会者全員がいる舞踏会の広間へとエスコートしました。',
      literalTranslation: '(王子は / 誰も知らない偉大な王女が来られたと告げられて / 彼女を出迎えるために駆け出した / 彼女が馬車から降りるときに手を取り / そして彼女を舞踏会へと導いた / すべての参会者の中に)',
      structure: {
        pattern: 'S + 関係詞節 + V + SVO and SVO',
        subject: 'The King\'s son / he',
        verb: 'ran out / gave / led'
      },
      vocabulary: [
        { word: 'alighted', meaning: '（馬車や乗り物から）降りた', phonetic: '/əˈlaɪ.tɪd/', pos: '動詞' },
        { word: 'company', meaning: '同席者たち、参会者一同', phonetic: '/ˈkʌm.pə.ni/', pos: '名詞' },
        { word: 'was come', meaning: '到着した（古風な完了形: be + 往来発着動詞）', phonetic: '', pos: '動詞句' }
      ],
      grammarPoints: [
        'was come：来られた（be動詞＋過去分詞による状態・完了）',
        'alight out of ~：〜から降り立つ'
      ]
    },
    {
      id: 'cin-44',
      slideNumber: 33,
      text: 'There was immediately a profound silence, they left off dancing, and the violins ceased to play, so attentive was everyone to contemplate the singular beauties of the unknown new-comer.',
      translation: '広間はたちまち深い静寂に包まれ、人々は踊りを止め、バイオリンの演奏も止まりました。誰もが、この名も知らぬ新来の貴婦人の類まれな美しさに見とれてしまったからです。',
      literalTranslation: '(すぐに深い静寂が訪れた / 人々は踊りを止め / バイオリンは演奏をやめた / それほど皆が見とれていたのだ / 名も知れぬ新来者の類まれな美しさをじっと眺めるのに)',
      structure: {
        pattern: 'There was + SV + SV + 倒置構文 (so attentive was everyone ...)',
        subject: 'a profound silence / they / the violins / everyone',
        verb: 'was / left off / ceased / was'
      },
      vocabulary: [
        { word: 'profound', meaning: '深い、深遠な', phonetic: '/prəˈfaʊnd/', pos: '形容詞' },
        { word: 'contemplate', meaning: 'じっと見つめる、熟覧する', phonetic: '/ˈkɒn.təm.pleɪt/', pos: '動詞' },
        { word: 'singular', meaning: '類まれな、比類なき', phonetic: '/ˈsɪŋ.ɡjə.lər/', pos: '形容詞' }
      ],
      grammarPoints: [
        'leave off doing：〜するのをやめる',
        'so attentive was everyone：あまりに皆が心を奪われていた（so + 形容詞の倒置構文）'
      ]
    },
    {
      id: 'cin-45',
      slideNumber: 34,
      text: 'Nothing was then heard but a confused noise of; "Ha! how handsome she is! Ha! how handsome she is!"',
      translation: 'そのとき聞こえたのは、「ああ、なんてお美しいのだろう！なんと美しいお方だ！」というざわめき声ばかりでした。',
      literalTranslation: '(そのとき聞こえたものは何もなかった / ざわめく声の他には / 「ああ！なんと彼女は美しいのだろう！」という)',
      structure: {
        pattern: '受動態 + 感嘆文',
        subject: 'Nothing',
        verb: 'was heard',
        modifiers: 'but a confused noise of ...'
      },
      vocabulary: [
        { word: 'confused noise', meaning: 'ざわめき、入り混じった物音', phonetic: '', pos: '名詞句' }
      ],
      grammarPoints: [
        'Nothing was heard but ~：〜の他には何も聞こえなかった（but ＝ except）',
        'how handsome she is!：彼女はなんと美しいことか（感嘆文）'
      ]
    },
    {
      id: 'cin-46',
      slideNumber: 35,
      text: 'The King himself, old as he was, could not help watching her, and telling the Queen softly that it was a long time since he had seen so beautiful and lovely a creature.',
      translation: '高齢の国王自身も彼女から目を離すことができず、「これほど美しく愛らしい女性を見たのは実に久しぶりだ」と王妃にそっと囁いたほどでした。',
      literalTranslation: '(国王自身も / 年老いていたとはいえ / 彼女を見つめずにはいられなかった / そして王妃にそっと言った / これほど美しく愛らしい人を見たのは久しぶりだと)',
      structure: {
        pattern: '譲歩構文 (old as he was) + cannot help doing',
        subject: 'The King himself',
        verb: 'could not help watching and telling'
      },
      vocabulary: [
        { word: 'softly', meaning: 'そっと、静かに', phonetic: '/ˈsɒft.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'old as he was：老齢ではあったけれども（形容詞＋as＋S＋Vの譲歩構文）',
        'cannot help doing：〜せずにはいられない',
        'so + 形容詞 + a + 名詞：so beautiful and lovely a creature（語順に注意）'
      ]
    },
    {
      id: 'cin-47',
      slideNumber: 36,
      text: 'All the ladies were busied in considering her clothes and headdress, that they might have some made next day after the same pattern, provided they could meet with such fine material and as able hands to make them.',
      translation: '婦人たちは皆、翌日同じ型で作らせることができるよう彼女の衣装と髪飾りに見入るのに夢中でした。もちろん、そのような立派な生地と腕利きの職人が見つかればの話ですが。',
      literalTranslation: '(すべての貴婦人たちは熱心に見入っていた / 彼女の服と髪飾りに / 翌日同じ型で仕立てさせられるように / もしそのような上質な生地と腕利きの職人に出会えればの話だが)',
      structure: {
        pattern: 'SVC + 目的節 + 条件節 (provided SV)',
        subject: 'All the ladies',
        verb: 'were busied'
      },
      vocabulary: [
        { word: 'provided', meaning: '〜という条件で、もし〜ならば', phonetic: '/prəˈvaɪ.dɪd/', pos: '接続詞' },
        { word: 'pattern', meaning: '型、パターン', phonetic: '/ˈpæt.ən/', pos: '名詞' }
      ],
      grammarPoints: [
        'have some made：仕立てさせる（使役動詞have + O + 過去分詞）',
        'provided that SV：もし〜ならば（条件の接続詞）'
      ]
    },
    {
      id: 'cin-48',
      slideNumber: 37,
      text: 'The King\'s son conducted her to the most honorable seat, and afterward took her out to dance with him; she danced so very gracefully that they all more and more admired her.',
      translation: '王子は彼女を最も上座の席へと案内し、その後一緒に踊るために彼女の手を取りました。彼女はあまりにも優美に踊ったため、皆はいっそう彼女に感嘆しました。',
      literalTranslation: '(王子は彼女を最も名誉ある席へと案内した / そしてその後彼女を連れ出して一緒に踊った / 彼女はとても優雅に踊ったので / 皆がますます彼女を称賛した)',
      structure: {
        pattern: 'SVO and SVO + so ... that SV (結果)',
        subject: 'The King\'s son / she',
        verb: 'conducted / took out / danced'
      },
      vocabulary: [
        { word: 'conducted', meaning: '案内した、先導した', phonetic: '/kənˈdʌk.tɪd/', pos: '動詞' },
        { word: 'gracefully', meaning: '優雅に、しとやかに', phonetic: '/ˈɡreɪs.fəl.i/', pos: '副詞' },
        { word: 'admired', meaning: '感嘆した、見とれた', phonetic: '/ədˈmaɪəd/', pos: '動詞' }
      ],
      grammarPoints: [
        'so very gracefully that SV：とても優雅に踊ったので〜だ（so...that構文）',
        'more and more：ますます、いっそう'
      ]
    },
    {
      id: 'cin-49',
      slideNumber: 38,
      text: 'A fine collation was served up, whereof the young prince ate not a morsel, so intently was he busied in gazing on her.',
      translation: '豪勢な夜食が振る舞われましたが、若い王子は一口も口にしませんでした。彼女を見つめるのにあまりにも夢中だったからです。',
      literalTranslation: '(立派なご馳走が供された / そのうち若い王子は一口も食べなかった / それほど彼は夢中になっていたのだ / 彼女を見つめることに)',
      structure: {
        pattern: '受動態 + 関係副詞節 (whereof ...) + 倒置構文 (so intently was he ...)',
        subject: 'A fine collation / the young prince / he',
        verb: 'was served up / ate / was'
      },
      vocabulary: [
        { word: 'collation', meaning: '軽い食事、夜食、ご馳走（古語）', phonetic: '/kɒˈleɪ.ʃən/', pos: '名詞' },
        { word: 'morsel', meaning: '（食べ物の）一口、一片', phonetic: '/ˈmɔː.səl/', pos: '名詞' },
        { word: 'whereof', meaning: 'それについて、そのうち（古風な関係詞）', phonetic: '/weərˈɒv/', pos: '関係詞' }
      ],
      grammarPoints: [
        'ate not a morsel：一口も食べなかった（強い否定）',
        'so intently was he busied：あまりにも一心に見つめていた（so + 副詞の倒置）'
      ]
    },
    {
      id: 'cin-50',
      slideNumber: 39,
      text: 'She went and sat down by her sisters, showing them a thousand civilities, giving them part of the oranges and citrons which the Prince had presented her with, which very much surprised them, for they did not know her.',
      translation: 'シンデレラは姉たちの隣へ行って座り、この上なく礼儀正しく接し、王子から賜ったオレンジやシトロン（レモン類）を彼女たちにお裾分けしました。姉たちは大いに驚きました。自分たちには誰だか分からなかったからです。',
      literalTranslation: '(彼女は行って姉たちの隣に座った / 彼女たちにこの上ない礼儀を尽くし / オレンジやシトロンの一部を分け与えながら / それは王子が彼女に贈ったものだった / そのことは彼女たちを大いに驚かせた / 彼女を知らなかったからだ)',
      structure: {
        pattern: 'SV + 分詞構文（showing / giving）+ 関係代名詞非制限用法',
        subject: 'She',
        verb: 'went and sat down'
      },
      vocabulary: [
        { word: 'civilities', meaning: '礼儀正しさ、親切な振る舞い', phonetic: '/sɪˈvɪl.ə.tiz/', pos: '名詞' },
        { word: 'citrons', meaning: 'シトロン（柑橘類）', phonetic: '/ˈsɪt.rənz/', pos: '名詞' },
        { word: 'presented with', meaning: '〜を贈った', phonetic: '', pos: '動詞句' }
      ],
      grammarPoints: [
        'a thousand civilities：数々の礼儀正しい振る舞い（千の〜＝無数の）',
        'present A with B：AにBを贈呈する'
      ]
    },
    {
      id: 'cin-51',
      slideNumber: 40,
      text: 'While Cinderella was thus amusing her sisters, she heard the clock strike eleven and three-quarters, whereupon she immediately made a courtesy to the company and hasted away as fast as she could.',
      translation: 'シンデレラがこうして姉たちをもてなしていると、時計が11時45分を打つのが聞こえました。そこで彼女はすぐに一同へお辞儀をし、できる限り速く立ち去りました。',
      literalTranslation: '(シンデレラがこうして姉たちを楽しませている間に / 時計が11時45分を打つのが聞こえた / するとすぐに彼女は一同にお辞儀をし / できる限り速く急ぎ去った)',
      structure: {
        pattern: '従属節 + SVO (知覚動詞 hear O do) + SV',
        subject: 'Cinderella / she',
        verb: 'heard / made and hasted away'
      },
      vocabulary: [
        { word: 'eleven and three-quarters', meaning: '11時45分（11時と4分の3）', phonetic: '', pos: '名詞' },
        { word: 'whereupon', meaning: 'そこで、するとすぐに', phonetic: '/ˌweər.əˈpɒn/', pos: '接続詞' },
        { word: 'courtesy', meaning: 'お辞儀、カーテシー（curtsyの古綴り）', phonetic: '/ˈkɜː.tə.si/', pos: '名詞' }
      ],
      grammarPoints: [
        'hear the clock strike ~：時計が〜時を打つのを聞く（知覚動詞＋原形不定詞）',
        'as fast as she could：全速力で'
      ]
    },
    {
      id: 'cin-52',
      slideNumber: 41,
      text: "When she got home she ran to seek out her godmother, and, after having thanked her, she said she could not but heartily wish she might go next day to the ball, because the King's son had desired her.",
      translation: '家に帰り着くと、彼女は名付け親のところへ駆け寄り、お礼を述べた後、王子からぜひ来てほしいと乞われたので、明日もぜひ舞踏会に行きたいと心から願わずにはいられないと言いました。',
      literalTranslation: '(家に帰り着くと / 彼女は代母を探しに走り / お礼を言った後で / 彼女は心から願わずにはいられないと言った / 翌日も舞踏会に行けることを / 王子が彼女を望んでくださったからだ)',
      structure: {
        pattern: 'SV + SVO (could not but wish ...)',
        subject: 'she',
        verb: 'ran / said'
      },
      vocabulary: [
        { word: 'heartily', meaning: '心から、心底', phonetic: '/ˈhɑː.tɪ.li/', pos: '副詞' },
        { word: 'desired', meaning: '強く望んだ、求めた', phonetic: '/dɪˈzaɪəd/', pos: '動詞' }
      ],
      grammarPoints: [
        'could not but do：〜せずにはいられない',
        'seek out ~：〜を探し出す'
      ]
    },
    {
      id: 'cin-53',
      slideNumber: 42,
      text: 'As she was eagerly telling her godmother whatever had passed at the ball, her two sisters knocked at the door, which Cinderella ran and opened.',
      translation: '舞踏会で起きた一部始終を熱心に名付け親に話している最中、2人の姉がドアをノックし、シンデレラは走って行って開けました。',
      literalTranslation: '(彼女が熱心に代母に話しているとき / 舞踏会で起きたすべてのことを / 2人の姉がドアをノックした / シンデレラは走って行って開けた)',
      structure: {
        pattern: '従属節 + SVO + 関係代名詞節',
        subject: 'she / her two sisters / Cinderella',
        verb: 'was telling / knocked / ran and opened'
      },
      vocabulary: [
        { word: 'eagerly', meaning: '熱心に、しきりに', phonetic: '/ˈiː.ɡəl.i/', pos: '副詞' }
      ],
      grammarPoints: [
        'whatever had passed：起こったすべてのこと（複合関係代名詞）'
      ]
    },
    {
      id: 'cin-54',
      slideNumber: 43,
      text: '"How long you have stayed!" cried she, gaping, rubbing her eyes and stretching herself as if she had been just waked out of her sleep; she had not, however, any manner of inclination to sleep since they went from home.',
      translation: '「まあ、ずいぶん長居なさいましたね！」彼女はあくびをし、目をこすり、まるで今起きたばかりのように伸びをしながら叫びました。しかし彼女には、姉たちが出かけてから眠気など微塵もありませんでした。',
      literalTranslation: '(「なんと長く居られたのでしょう！」と彼女は叫んだ / あくびをし、目をこすり、背伸びをしながら / まるで今眠りから起こされたばかりのように / しかし彼女には全く眠気などなかった / 彼女たちが家を出てから)',
      structure: {
        pattern: '感嘆文 + 分詞構文 + as if構文 + SVO',
        subject: 'she',
        verb: 'cried / had not'
      },
      vocabulary: [
        { word: 'gaping', meaning: '大きく口を開けてあくびをしながら', phonetic: '/ˈɡeɪ.pɪŋ/', pos: '分詞' },
        { word: 'inclination', meaning: '気乗り、傾向、眠気', phonetic: '/ˌɪn.klɪˈneɪ.ʃən/', pos: '名詞' }
      ],
      grammarPoints: [
        'How long you have stayed!：なんと長居をしたことか（感嘆文）',
        'as if she had been just waked：まるで起こされたばかりのように（仮定法過去完了）'
      ]
    },
    {
      id: 'cin-55',
      slideNumber: 44,
      text: '"If thou hadst been at the ball," said one of her sisters, "thou wouldst not have been tired with it. There came thither the finest princess, the most beautiful ever was seen with mortal eyes; she showed us a thousand civilities, and gave us oranges and citrons."',
      translation: '「お前も舞踏会にいたらね」と姉のひとりが言いました。「退屈などしなかっただろうに。人間の目でこれまでに見たこともないほどこの上なく美しい王女がお見えになってね、私たちにこの上なく親切にしてくれて、オレンジやシトロンをくださったのよ。」',
      literalTranslation: '(「もしお前が舞踏会にいたなら」 / 姉のひとりは言った / 「退屈などしなかっただろう / そこへ最も見事な王女が来られたのだ / 人間の目でこれまで見られた中で最も美しい / 彼女は私たちに無数の親切を示し / オレンジやシトロンをくれたのだ」)',
      structure: {
        pattern: '仮定法過去完了 (If had been, would have been) + 倒置 + SVOO',
        subject: 'thou / one of her sisters / she',
        verb: 'said / showed / gave'
      },
      vocabulary: [
        { word: 'mortal eyes', meaning: '人間の目、現世の者の目', phonetic: '', pos: '名詞句' }
      ],
      grammarPoints: [
        'If thou hadst been ... thou wouldst not have been ...：もしいたなら〜でなかっただろう（仮定法過去完了の古形）',
        'There came thither the finest princess：そこへ最も見事な王女がやって来た（倒置構文）'
      ]
    },
    {
      id: 'cin-56',
      slideNumber: 45,
      text: "Cinderella seemed very indifferent in the matter; indeed, she asked them the name of that princess; but they told her they did not know it, and that the King's son was very uneasy on her account and would give all the world to know who she was.",
      translation: 'シンデレラはそのことについて無関心を装い、その王女のお名前を尋ねてみました。しかし姉たちは名前は知らないとし、王子は彼女のことで気もそぞろで、彼女が誰なのかを知るためなら全世界を差し出してもよいと思っているのだと話しました。',
      literalTranslation: '(シンデレラはその件にとても無関心に見えた / 彼女は彼女たちにその王女の名前を尋ねた / しかし彼女たちは知らないと言った / そして王子は彼女のことでとてもやきもきしており / 彼女が誰かを知るためなら全世界を差し出すだろうと言った)',
      structure: {
        pattern: 'SVC + SVOO + SVO (that節の並列)',
        subject: 'Cinderella / they',
        verb: 'seemed / asked / told'
      },
      vocabulary: [
        { word: 'indifferent', meaning: '無関心な、平気な', phonetic: '/ɪnˈdɪf.ər.ənt/', pos: '形容詞' },
        { word: 'uneasy', meaning: '落ち着かない、やきもきした', phonetic: '/ʌnˈiː.zi/', pos: '形容詞' },
        { word: 'give all the world', meaning: '世界中のすべてを差し出す（何を犠牲にしてもよい）', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'on her account：彼女のために、彼女のことで',
        'would give all the world to do：何を引き換えにしてでも〜したい'
      ]
    },
    {
      id: 'cin-57',
      slideNumber: 46,
      text: 'At this Cinderella, smiling, replied: "She must, then, be very beautiful indeed; how happy you have been! Could not I see her? Ah! dear Miss Charlotte, do lend me your yellow suit of clothes which you wear every day."',
      translation: 'これを聞いてシンデレラは微笑みながら答えました。「それでは、その方は本当に美しいお方なのでしょうね。お姉様方はなんと幸せだったことでしょう！私にもお目にかかれないかしら？ああ、シャーロットお姉様、あなたが普段お召しになっている黄色のお召し物を貸してくださいな。」',
      literalTranslation: '(これを聞いてシンデレラは微笑んで答えた / 「それなら本当に美しいお方に違いないわ / あなた方はなんと幸せだったことでしょう！ / 私には彼女を見ることができないかしら？ / ああ、シャーロットお姉様、どうか私に黄色い服を貸してください / あなたが普段着ている服を」)',
      structure: {
        pattern: 'SVC + 感嘆文 + 助動詞疑問文 + 強調命令文 (do lend me ...)',
        subject: 'Cinderella / She / you / I',
        verb: 'replied / must be / have been / see / lend'
      },
      vocabulary: [
        { word: 'Miss Charlotte', meaning: 'シャーロット嬢（義姉の名前）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'how happy you have been!：なんと幸せだったことか（感嘆文）',
        'do lend me ~：どうか私に貸してください（強調の助動詞do）'
      ]
    },
    {
      id: 'cin-58',
      slideNumber: 47,
      text: '"Ay, to be sure!" cried Miss Charlotte; "lend my clothes to such a dirty Cinderwench as thou art! I should be a fool."',
      translation: '「まあ、よくもそんなことを！」とシャーロットは叫びました。「お前のような薄汚い灰かぶり娘に私の服を貸すですって！そんなことをしたら私が馬鹿者になってしまうわ。」',
      literalTranslation: '(「ええ、もちろんとも！（皮肉）」とシャーロットは叫んだ / 「私の服をお前のような薄汚い灰かぶり娘に貸すですって！ / 私が馬鹿者になってしまうわ」)',
      structure: {
        pattern: '感嘆詞 + 命令文 + SVC (仮定法)',
        subject: 'Miss Charlotte / I',
        verb: 'cried / should be'
      },
      vocabulary: [
        { word: 'Ay, to be sure', meaning: 'まったくそうだとも（皮肉・反語）', phonetic: '', pos: '慣用句' },
        { word: 'fool', meaning: '愚か者、馬鹿者', phonetic: '/fuːl/', pos: '名詞' }
      ],
      grammarPoints: [
        'I should be a fool：私が馬鹿者になってしまう（仮定法の帰結節）'
      ]
    },
    {
      id: 'cin-59',
      slideNumber: 48,
      text: 'Cinderella, indeed, expected well such answer, and was very glad of the refusal; for she would have been sadly put to it if her sister had lent her what she asked for jestingly.',
      translation: 'シンデレラは実のところ、まさにそのような返事を予想しており、断られて大喜びでした。もし冗談半分で頼んだ服を姉が本当に貸してくれたら、途方に暮れて困り果てていたはずだったからです。',
      literalTranslation: '(シンデレラは実にそのような返答をよく予想していた / そして断られたことをとても喜んだ / なぜなら彼女はひどく困り果てていただろうからだ / もし姉が彼女に貸してくれたなら / 彼女が冗談で求めたものを)',
      structure: {
        pattern: 'SVO and SVC + 仮定法過去完了 (would have been ... if had lent)',
        subject: 'Cinderella',
        verb: 'expected / was'
      },
      vocabulary: [
        { word: 'refusal', meaning: '拒絶、断り', phonetic: '/rɪˈfjuː.zəl/', pos: '名詞' },
        { word: 'put to it', meaning: '（困窮や困難に）窮する、困り果てる', phonetic: '', pos: 'イディオム' },
        { word: 'jestingly', meaning: '冗談で、ふざけて', phonetic: '', pos: '副詞' }
      ],
      grammarPoints: [
        'be put to it：困り果てる、窮地に陥る',
        'if her sister had lent ... would have been：もし貸してくれていたら〜だったろう（仮定法過去完了）'
      ]
    },
    {
      id: 'cin-60',
      slideNumber: 49,
      text: 'The next day the two sisters were at the ball, and so was Cinderella, but dressed more magnificently than before.',
      translation: '翌日、2人の姉は再び舞踏会へ行き、シンデレラもまた、前日よりもいっそう豪華に着飾って舞踏会へ行きました。',
      literalTranslation: '(翌日、2人の姉は舞踏会にいた / そしてシンデレラもそうだった / しかし前よりもさらに豪華に着飾って)',
      structure: {
        pattern: 'SV and 倒置 (so was S)',
        subject: 'the two sisters / Cinderella',
        verb: 'were / was'
      },
      vocabulary: [
        { word: 'magnificently', meaning: '壮麗に、豪華に', phonetic: '/mæɡˈnɪf.ɪ.sənt.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'and so was Cinderella：そしてシンデレラもそうであった（倒置構文）',
        'dressed more magnificently than before：前よりも一層豪華に着飾って'
      ]
    },
    {
      id: 'cin-61',
      slideNumber: 50,
      text: 'The King\'s son was always by her, and never ceased his compliments and kind speeches to her; to whom all this was so far from being tiresome that she quite forgot what her godmother had recommended to her; so that she, at last, counted the clock striking twelve when she took it to be no more than eleven; she then rose up and fled, as nimble as a deer.',
      translation: '王子はずっと彼女の傍らに寄り添い、賛辞と優しい言葉を絶え間なくかけ続けました。シンデレラにとってこれらは退屈どころかあまりにも楽しく、名付け親の言いつけをすっかり忘れてしまい、11時を過ぎたくらいだと思っていた時計がついに12時を打つのを聞いたのです。彼女は跳び起き、鹿のように敏捷に逃げ去りました。',
      literalTranslation: '(王子は常に彼女の傍らにいた / そして賛辞と優しい言葉をやめなかった / 彼女にとってこれらすべては退屈であるどころか / 名付け親が勧めたことをすっかり忘れてしまった / その結果彼女はついに時計が12時を打つのを聞いた / まだ11時を少し過ぎたばかりだと思っていたときに / 彼女は立ち上がり逃げ去った / 鹿のように素早く)',
      structure: {
        pattern: '重文・複文の高度な連続 (so far from ... that ... so that ...)',
        subject: 'The King\'s son / she',
        verb: 'was / ceased / forgot / counted / rose up and fled'
      },
      vocabulary: [
        { word: 'ceased', meaning: 'やめた、途絶えさせた', phonetic: '/siːst/', pos: '動詞' },
        { word: 'tiresome', meaning: '退屈な、うんざりする', phonetic: '/ˈtaɪə.səm/', pos: '形容詞' },
        { word: 'nimble', meaning: '敏捷な、すばしこい', phonetic: '/ˈnɪm.bəl/', pos: '形容詞' },
        { word: 'deer', meaning: '鹿（しか）', phonetic: '/dɪər/', pos: '名詞' }
      ],
      grammarPoints: [
        'so far from being ~ that SV：〜であるどころか…（強調構文）',
        'so that SV：その結果〜（結果構文）',
        'as nimble as a deer：鹿のように素早く（直喩）'
      ]
    },
    {
      id: 'cin-62',
      slideNumber: 51,
      text: 'The Prince followed, but could not overtake her. She left behind one of her glass slippers, which the Prince took up most carefully.',
      translation: '王子は後を追いましたが、彼女に追いつくことはできませんでした。彼女はガラスの靴の片方を落としていき、王子はそれを極めて大切に拾い上げました。',
      literalTranslation: '(王子は追いかけた / しかし彼女に追いつけなかった / 彼女はガラスの靴の片方を残していった / 王子はそれを最も大切に拾い上げた)',
      structure: {
        pattern: 'SV but SV + SVO + 関係詞節',
        subject: 'The Prince / She',
        verb: 'followed / could not overtake / left behind'
      },
      vocabulary: [
        { word: 'overtake', meaning: '追いつく、追い抜く', phonetic: '/ˌəʊ.vəˈteɪk/', pos: '動詞' },
        { word: 'left behind', meaning: '置き去りにした、残していった', phonetic: '', pos: '句動詞' }
      ],
      grammarPoints: [
        'take up：拾い上げる',
        'most carefully：極めて慎重に（絶対的最上級）'
      ]
    },
    {
      id: 'cin-63',
      slideNumber: 52,
      text: 'She got home but quite out of breath, and in her nasty old clothes, having nothing left her of all her finery but one of the little slippers, fellow to that she dropped.',
      translation: 'シンデレラは息を切らせて家へ逃げ帰りましたが、みすぼらしい昔の服のままで、落とした靴の片割れであるもう一方の小さな靴を除いては、あの華麗な装身具は何もかも残っていませんでした。',
      literalTranslation: '(彼女は家に着いた / しかしすっかり息を切らして / そして汚い昔の服を着て / すべての華麗な衣装から何も残っていなかった / あの小さな靴の片方を除いては / 彼女が落とした靴の片割れである靴を)',
      structure: {
        pattern: 'SV + 分詞構文 (having nothing left ...)',
        subject: 'She',
        verb: 'got home'
      },
      vocabulary: [
        { word: 'out of breath', meaning: '息を切らして', phonetic: '', pos: 'イディオム' },
        { word: 'finery', meaning: '華美な装飾品、晴れ着', phonetic: '/ˈfaɪ.nər.i/', pos: '名詞' },
        { word: 'fellow', meaning: '相棒、片割れ（古義）', phonetic: '/ˈfel.əʊ/', pos: '名詞' }
      ],
      grammarPoints: [
        'out of breath：息を切らして',
        'nothing left ... but ~：〜以外何も残っていない',
        'fellow to ~：〜の片割れ、相棒'
      ]
    },
    {
      id: 'cin-64',
      slideNumber: 53,
      text: 'The guards at the palace gate were asked, If they had not seen a princess go out. Who said: They had seen nobody go out but a young girl, very meanly dressed, and who had more the air of a poor country wench than a gentlewoman.',
      translation: '宮殿の門番たちは、王女が出ていくのを見かけなかったかと尋ねられました。門番たちは、みすぼらしい身なりをした若い娘の他には誰も出ていかなかったと答えました。その娘は貴婦人というよりも、貧しい田舎娘のような風貌だったとのことでした。',
      literalTranslation: '(宮殿の門の警衛たちは尋ねられた / 王女が出ていくのを見なかったかと / 彼らは言った： / 誰も出ていくのを見なかったと / みすぼらしい服を着た若い娘の他には / 貴婦人というよりは貧しい田舎娘の風貌を持った娘の他には)',
      structure: {
        pattern: '受動態 + SVO (知覚動詞 see O do) + 比較構文',
        subject: 'The guards / They',
        verb: 'were asked / said'
      },
      vocabulary: [
        { word: 'guards', meaning: '衛兵、門番', phonetic: '/ɡɑːdz/', pos: '名詞' },
        { word: 'country wench', meaning: '田舎の娘、田舎女', phonetic: '', pos: '名詞句' },
        { word: 'gentlewoman', meaning: '身分の高い婦人、貴婦人', phonetic: '/ˈdʒen.təlˌwʊm.ən/', pos: '名詞' }
      ],
      grammarPoints: [
        'see nobody go out but ~：〜の他には誰も出ていくのを見ない',
        'more the air of A than B：BというよりはむしろAの雰囲気'
      ]
    },
    {
      id: 'cin-65',
      slideNumber: 54,
      text: 'When the two sisters returned from the ball Cinderella asked them: If they had been well diverted, and if the fine lady had been there.',
      translation: '2人の姉が舞踏会から戻ると、シンデレラは楽しかったかどうか、そしてあの美しい貴婦人が来ていたかどうかを尋ねました。',
      literalTranslation: '(2人の姉が舞踏会から戻ったとき / シンデレラは彼女たちに尋ねた / 楽しく過ごせたかどうか / そしてあの美しい貴婦人がそこに来ていたかどうかを)',
      structure: {
        pattern: '従属節 + SVOO (if節の並列)',
        subject: 'the two sisters / Cinderella',
        verb: 'returned / asked'
      },
      vocabulary: [
        { word: 'diverted', meaning: '楽しんだ、気晴らしをした', phonetic: '/daɪˈvɜː.tɪd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'well diverted：大いに楽しんだ',
        'ask if ... and if ...：〜かどうか、そして〜かどうかを尋ねる'
      ]
    },
    {
      id: 'cin-66',
      slideNumber: 54,
      text: 'They told her: Yes, but that she hurried away immediately when it struck twelve, and with so much haste that she dropped one of her little glass slippers, the prettiest in the world, which the King\'s son had taken up; that he had done nothing but look at her all the time at the ball, and that most certainly he was very much in love with the beautiful person who owned the glass slipper.',
      translation: '姉たちは言いました。来ていたけれど、12時を打つと同時に大急ぎで立ち去ってしまい、世界で一番美しいガラスの靴の片方を落としていき、それを王子が拾い上げたこと、王子は舞踏会の間中ずっと彼女ばかり見つめていて、ガラスの靴の持ち主であるあの美女にすっかり恋をしてしまったに違いないことなどを話しました。',
      literalTranslation: '(彼女たちは彼女に言った： / ええ、でも12時を打つとすぐに立ち去ってしまったと / そして急ぐあまり世界で最も美しい小さなガラスの靴を落としたと / それを王子が拾い上げたと / 王子は舞踏会の間中彼女を見ることしかしなかったと / そしてガラスの靴の持ち主である美女に深く恋をしていることは確実だと)',
      structure: {
        pattern: 'SVO + that節の並列 (so ... that結果構文含む)',
        subject: 'They',
        verb: 'told',
        object: 'her'
      },
      vocabulary: [
        { word: 'haste', meaning: '急ぎ、慌ただしさ', phonetic: '/heɪst/', pos: '名詞' },
        { word: 'in love with', meaning: '〜に恋をして', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'with so much haste that SV：あまりに急いだので〜した',
        'do nothing but look at ~：〜を見ることしかしない（〜ばかり見ている）'
      ]
    },
    {
      id: 'cin-67',
      slideNumber: 56,
      text: 'What they said was very true; for a few days after the King\'s son caused it to be proclaimed, by sound of trumpet, that he would marry her whose foot the slipper would just fit.',
      translation: '姉たちの言ったことは誠に真実でした。数日後、王子はトランペットの音と共に「この靴に足がぴったり合う女性と結婚する」との布告を出させたからです。',
      literalTranslation: '(彼女たちが言ったことは極めて真実だった / なぜなら数日後、王子は布告させたからだ / トランペットの響きによって / その靴がちょうど足に合う女性と結婚すると)',
      structure: {
        pattern: '主語節(What they said) + SVC + 使役構文 (caused it to be proclaimed)',
        subject: 'What they said / the King\'s son',
        verb: 'was / caused'
      },
      vocabulary: [
        { word: 'proclaimed', meaning: '布告された、宣言された', phonetic: '/prəˈkleɪmd/', pos: '過去分詞' },
        { word: 'trumpet', meaning: 'トランペット、ラッパ', phonetic: '/ˈtrʌm.pɪt/', pos: '名詞' }
      ],
      grammarPoints: [
        'What they said：彼女たちが言ったこと（関係代名詞what）',
        'cause A to be done：Aを〜させる（使役）',
        'whose foot the slipper would just fit：関係代名詞whose'
      ]
    },
    {
      id: 'cin-68',
      slideNumber: 57,
      text: 'They whom he employed began to try it upon the princesses, then the duchesses and all the Court, but in vain; it was brought to the two sisters, who did all they possibly could to thrust their foot into the slipper, but they could not effect it.',
      translation: '王子の使者たちは王女たち、次いで公爵夫人たち、そして宮廷のすべての女性たちに靴を試させ始めましたが、無駄でした。靴はあの2人の姉たちのところへも運ばれ、彼女たちは足を靴に押し込もうとあらゆる手を尽くしましたが、どうしても履くことはできませんでした。',
      literalTranslation: '(彼が雇った使者たちはそれを試し始めた / 王女たちに、それから公爵夫人たちや宮廷すべての人々に / しかし無駄だった / 靴は2人の姉のもとへ運ばれた / 彼女たちは足を押入れようとできる限りのことをした / しかし成し遂げることはできなかった)',
      structure: {
        pattern: 'SVO + 受動態 + SVO',
        subject: 'They whom he employed / it / the two sisters',
        verb: 'began to try / was brought / did / could not effect'
      },
      vocabulary: [
        { word: 'duchesses', meaning: '公爵夫人たち', phonetic: '/ˈdʌtʃ.ɪ.sɪz/', pos: '名詞' },
        { word: 'in vain', meaning: '無駄に、効果なく', phonetic: '', pos: 'イディオム' },
        { word: 'thrust', meaning: '力任せに押し込む、突き刺す', phonetic: '/θrʌst/', pos: '動詞' },
        { word: 'effect', meaning: '（目的を）成し遂げる、達成する（動詞）', phonetic: '/ɪˈfekt/', pos: '動詞' }
      ],
      grammarPoints: [
        'in vain：無駄に、甲斐なく',
        'all they possibly could：彼らができる限りのこと'
      ]
    },
    {
      id: 'cin-69',
      slideNumber: 58,
      text: 'Cinderella, who saw all this, and knew her slipper, said to them, laughing: "Let me see if it will not fit me."',
      translation: 'これらの一部始終を見て自分の靴だと分かっていたシンデレラは、笑いながら言いました。「私に合うかどうか、試させていただけないかしら。」',
      literalTranslation: '(シンデレラは / これらすべてを見て自分の靴だと知っていた / 彼女たちに笑いながら言った / 「私に合わないかどうか試させてください」)',
      structure: {
        pattern: 'S + 関係詞節 + V + 使役命令文 (Let me see if ...)',
        subject: 'Cinderella',
        verb: 'said'
      },
      vocabulary: [],
      grammarPoints: [
        'Let me see if ~：〜かどうか見させてください（試させてください）'
      ]
    },
    {
      id: 'cin-70',
      slideNumber: 59,
      text: 'Her sisters burst out a-laughing, and began to banter her. The gentleman who was sent to try the slipper looked earnestly at Cinderella, and, finding her very handsome, said: It was but just that she should try, and that he had orders to let everyone make trial.',
      translation: '姉たちはどっと吹き出し、彼女をからかい始めました。しかし靴を試すために派遣された使者の紳士は、シンデレラをまじまじと見つめ、彼女がとても美しいことに気づいてこう言いました。「彼女が試すのは当然の権利です。私にはすべての人に試してもらうようにとの命令が出ておりますから。」',
      literalTranslation: '(姉たちはワッと笑い出し / 彼女をからかい始めた / 靴を試すために派遣された紳士は / シンデレラを真剣に見つめた / そして彼女がとても美しいと気づき、言った： / 彼女が試すのは当然であり / 自分には皆に試させる命令があると)',
      structure: {
        pattern: 'SV and SV + S + 分詞構文 + V',
        subject: 'Her sisters / The gentleman',
        verb: 'burst out and began / looked and said'
      },
      vocabulary: [
        { word: 'banter', meaning: 'からかう、冷やかす', phonetic: '/ˈbæn.tər/', pos: '動詞' },
        { word: 'earnestly', meaning: '真剣に、熱心に', phonetic: '/ˈɜː.nɪst.li/', pos: '副詞' },
        { word: 'make trial', meaning: '試みる、試用する', phonetic: '', pos: '動詞句' }
      ],
      grammarPoints: [
        'burst out a-laughing：ワッと笑い出す',
        'It was but just that SV：〜するのは極めて正当・当然である'
      ]
    },
    {
      id: 'cin-71',
      slideNumber: 60,
      text: 'He obliged Cinderella to sit down, and, putting the slipper to her foot, he found it went on very easily, and fitted her as if it had been made of wax.',
      translation: '彼はシンデレラに腰掛けるよう勧め、靴を足に当ててみると、驚くほどすんなりと入り、まるで蝋で作られたかのように足にぴったりと吸い付きました。',
      literalTranslation: '(彼はシンデレラに座るよう促し / そして靴を彼女の足に当てると / それがとても容易に入るのを見出した / そしてまるで蝋で作られたかのように彼女にぴったり合った)',
      structure: {
        pattern: 'SVO to do + SVO + as if仮定法過去完了',
        subject: 'He / he',
        verb: 'obliged / found and fitted'
      },
      vocabulary: [
        { word: 'obliged', meaning: '〜させた、促した（好意的な促し）', phonetic: '/əˈblaɪdʒd/', pos: '動詞' },
        { word: 'wax', meaning: '蝋（ろう）', phonetic: '/wæks/', pos: '名詞' }
      ],
      grammarPoints: [
        'oblige O to do：Oに〜するよう促す・義務づける',
        'fit as if it had been made of wax：蝋で作られたかのようにぴったり吸い付く（伝統的な比喩）'
      ]
    },
    {
      id: 'cin-72',
      slideNumber: 61,
      text: 'The astonishment her two sisters were in was excessively great, but still abundantly greater when Cinderella pulled out of her pocket the other slipper, and put it on her foot.',
      translation: '2人の姉たちの驚きは途方もないものでしたが、シンデレラがポケットからもう片方のガラスの靴を取り出し、自分の足に履いてみせたとき、その驚愕はさらに一層大きなものとなりました。',
      literalTranslation: '(2人の姉が陥った驚愕は途方もなく大きかった / しかしさらに一層大きくなった / シンデレラがポケットからもう一方の靴を取り出し / そしてそれを足に履いたときには)',
      structure: {
        pattern: 'SVC, but SVC (比較構文)',
        subject: 'The astonishment / it',
        verb: 'was / was'
      },
      vocabulary: [
        { word: 'astonishment', meaning: '驚愕、驚き', phonetic: '/əˈstɒn.ɪʃ.mənt/', pos: '名詞' },
        { word: 'excessively', meaning: '極度に、過度に', phonetic: '/ɪkˈses.ɪv.li/', pos: '副詞' },
        { word: 'abundantly', meaning: '豊かに、はるかに', phonetic: '/əˈbʌn.dənt.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'the astonishment they were in：彼女たちが陥っていた驚愕（関係代名詞目的格省略）',
        'pulled out of her pocket the other slipper：ポケットからもう一方の靴を取り出す（目的語後置）'
      ]
    },
    {
      id: 'cin-73',
      slideNumber: 62,
      text: 'Thereupon, in came her godmother, who, having touched with her wand Cinderella\'s clothes, made them richer and more magnificent than any of those she had before.',
      translation: 'そこへ名付け親の仙女が現れ、杖でシンデレラの服に触れると、これまで彼女が着ていたどんな衣装よりも豪華で豪奢なドレスへと変えました。',
      literalTranslation: '(そこへ彼女の代母が入ってきた / 杖でシンデレラの服に触れて / それらをさらに豪華で華麗に変えた / 以前持っていたどんな服よりも)',
      structure: {
        pattern: '倒置構文 (Thereupon, in came S) + 関係代名詞節 (made O C)',
        subject: 'her godmother',
        verb: 'came in / made'
      },
      vocabulary: [
        { word: 'Thereupon', meaning: 'そこで、それですぐに', phonetic: '/ˌðeə.rəˈpɒn/', pos: '副詞' }
      ],
      grammarPoints: [
        'in came her godmother：彼女の名付け親が入ってきた（方向副詞の前置倒置）',
        'made them richer than ~：それらを〜より豪華にした（SVOC構文）'
      ]
    },
    {
      id: 'cin-74',
      slideNumber: 63,
      text: 'And now her two sisters found her to be that fine, beautiful lady whom they had seen at the ball. They threw themselves at her feet to beg pardon for all the ill-treatment they had made her undergo.',
      translation: 'そして今や2人の姉たちは、彼女こそがあの舞踏会で目にした美しく気品ある貴婦人その人であると気づきました。彼女たちはシンデレラの足元に身を投げ出し、これまで彼女に強いてきた数々の辛い仕打ちを詫びて許しを請いました。',
      literalTranslation: '(そして今や2人の姉は気づいた / 彼女があの舞踏会で見た美しい貴婦人その人だと / 彼女たちは彼女の足元にひれ伏した / これまで彼女に耐えさせてきた過酷な仕打ちの許しを乞うために)',
      structure: {
        pattern: 'SVOC + SVO + 不定詞副詞的用法',
        subject: 'her two sisters / They',
        verb: 'found / threw'
      },
      vocabulary: [
        { word: 'ill-treatment', meaning: '虐待、ひどい扱い、冷遇', phonetic: '', pos: '名詞' },
        { word: 'undergo', meaning: '経験する、耐え忍ぶ', phonetic: '/ˌʌn.dəˈɡəʊ/', pos: '動詞' },
        { word: 'beg pardon', meaning: '許しを請う', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'find A to be B：AがBであると気づく・知る',
        'throw oneself at one\'s feet：〜の足元にひれ伏す',
        'make her undergo：彼女に耐えさせる（使役動詞make）'
      ]
    },
    {
      id: 'cin-75',
      slideNumber: 64,
      text: 'Cinderella took them up, and, as she embraced them, cried: That she forgave them with all her heart, and desired them always to love her.',
      translation: 'シンデレラは彼女たちを抱き起こし、抱擁を交わしながら叫びました。心の底からすべてを許し、これからもずっと自分を愛してほしいと願っている、と。',
      literalTranslation: '(シンデレラは彼女たちを起こした / そして抱きしめながら叫んだ / 心の底から彼女たちを許すと / そしていつも自分を愛してほしいと願っていると)',
      structure: {
        pattern: 'SVO and SV (that節の並列)',
        subject: 'Cinderella',
        verb: 'took up / cried'
      },
      vocabulary: [
        { word: 'embraced', meaning: '抱擁した、抱きしめた', phonetic: '/ɪmˈbreɪst/', pos: '動詞' },
        { word: 'forgave', meaning: '許した（forgiveの過去形）', phonetic: '/fəˈɡeɪv/', pos: '動詞' }
      ],
      grammarPoints: [
        'with all her heart：心から、誠心誠意',
        'desire O to do：Oが〜することを願う'
      ]
    },
    {
      id: 'cin-76',
      slideNumber: 65,
      text: 'She was conducted to the young prince, dressed as she was; he thought her more charming than ever, and, a few days after, married her. Cinderella, who was no less good than beautiful, gave her two sisters lodgings in the palace.',
      translation: 'シンデレラはその豪奢なドレスのまま若き王子の前へと案内されました。王子は彼女がかつてないほど魅力的だと思い、数日後に結婚しました。美しさに劣らず心根の優しかったシンデレラは、2人の姉たちにも宮殿内に住まいを与えました。',
      literalTranslation: '(彼女は若き王子の前へ案内された / その装いのままで / 彼は彼女がかつてなく魅力的だと思った / そして数日後に彼女と結婚した / 美しさに劣らず心優しかったシンデレラは / 2人の姉たちに宮殿内の宿舎を与えた)',
      structure: {
        pattern: '受動態 + SVOC and SVO + SVOO',
        subject: 'She / he / Cinderella',
        verb: 'was conducted / thought / married / gave'
      },
      vocabulary: [
        { word: 'charming', meaning: '魅力的な、愛らしい', phonetic: '/ˈtʃɑː.mɪŋ/', pos: '形容詞' },
        { word: 'lodgings', meaning: '部屋、宿舎、住まい', phonetic: '/ˈlɒdʒ.ɪŋz/', pos: '名詞' }
      ],
      grammarPoints: [
        'thought her more charming than ever：彼女をかつてなく魅力的だと思った（SVOC）',
        'no less A than B：Bに劣らずAである（重要クジラ構文的比較表現）'
      ]
    }
  ]
};
