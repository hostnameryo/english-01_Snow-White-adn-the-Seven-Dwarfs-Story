import { Story } from '../types';

export const redRidingHoodStory: Story = {
  id: 'red-riding-hood',
  title: 'Little Red Riding Hood',
  titleJa: '赤ずきんちゃん',
  category: 'fairytale',
  description: 'The beloved Brothers Grimm tale of Little Red Riding Hood. Master storytelling, natural English conversation, and chunk-by-chunk reading.',
  descriptionJa: '動画に登場するグリム童話『赤ずきん』の全編英文。1文ごとに3回ずつ音読し、自然な英会話表現やチャンク直訳とともに楽しく学びます。',
  level: 'Beginner',
  theme: 'parchment',
  authorOrSource: 'Brothers Grimm / Classic Storybook Adaptation',
  sentences: [
    {
      id: 'rrh-1',
      slideNumber: 1,
      text: 'Once upon a time there was a dear little girl who was loved by every one who looked at her, but most of all by her grandmother, and there was nothing that she would not have given to the child.',
      translation: '昔々、見た人誰もから愛される愛らしい少女がいました。中でもおばあさんは彼女を一番可愛がっており、その子の頼みなら何一つ与えないものはないほどでした。',
      literalTranslation: '(昔々愛らしい少女がいた / 彼女を見たすべての人から愛されていた / しかし誰よりも彼女のおばあさんから / そして何一つなかった / 彼女がその子に与えなかったであろうものは)',
      structure: {
        pattern: 'There was + 二重関係詞節 (who was loved ... who looked ...)',
        subject: 'a dear little girl',
        verb: 'was',
        notes: '「there was nothing that she would not have given」（二重否定による強い肯定＝何でもあげた）。'
      },
      vocabulary: [
        { word: 'dear', meaning: '愛らしい、愛しい', phonetic: '/dɪər/', pos: '形容詞' },
        { word: 'grandmother', meaning: '祖母、おばあさん', phonetic: '/ˈɡrænˌmʌð.ər/', pos: '名詞' }
      ],
      grammarPoints: [
        'Once upon a time：昔々（童話の決まり文句）',
        'most of all：何よりも、とりわけ',
        'would not have given：与えなかったであろう（仮定法過去完了）'
      ]
    },
    {
      id: 'rrh-2',
      slideNumber: 2,
      text: 'Once she gave her a little cap of red velvet, which suited her so well that she would never wear anything else. So she was always called Little Red Riding Hood.',
      translation: 'ある時、おばあさんは彼女に赤いビロードの頭巾（キャップ）を贈りました。それがとてもよく似合っていたので、彼女は他の帽子を全く被ろうとしませんでした。そのため彼女はいつも「赤ずきんちゃん」と呼ばれていました。',
      literalTranslation: '(あるとき彼女は少女に小さな赤いビロードの頭巾をあげた / それは彼女にとてもよく似合っていたので / 彼女は他のものを決して身につけようとしなかった / だから彼女はいつも呼ばれていた / 「赤ずきんちゃん」と)',
      structure: {
        pattern: 'SVOO + 非制限関係代名詞節 (so ... that SV) + 受動態',
        subject: 'she / she',
        verb: 'gave / was called'
      },
      vocabulary: [
        { word: 'velvet', meaning: 'ベルベット、ビロード', phonetic: '/ˈvel.vɪt/', pos: '名詞' },
        { word: 'suited', meaning: '似合った（suitの過去形）', phonetic: '/ˈsuː.tɪd/', pos: '動詞' },
        { word: 'Little Red Riding Hood', meaning: '赤ずきん（物語の主人公）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'suited her so well that SV：とてもよく似合っていたので〜だ（so...that構文）',
        'Riding Hood：乗馬用の頭巾、フード'
      ]
    },
    {
      id: 'rrh-3',
      slideNumber: 3,
      text: 'One day her mother said to her, "Come, Little Red Riding Hood, here is a piece of cake and a bottle of wine. Take them to your grandmother, she is ill and weak, and they will do her good."',
      translation: 'ある日、お母さんが彼女に言いました。「さあ赤ずきんや、ここにケーキ切れとワインが一本ありますよ。おばあさんのところへ持っていっておくれ。おばあさんは病気で体が弱っているから、きっと元気になるでしょう。」',
      literalTranslation: '(ある日お母さんが彼女に言った / 「おいで、赤ずきんや / ここにケーキ一切れとワインが1本あるよ / それらをおばあさんのところへ持っていきなさい / 彼女は病気で弱っている / そしてそれらは彼女のためになるだろう」)',
      structure: {
        pattern: 'SVO + Here is構文 + 命令文 + SVOO',
        subject: 'her mother / they',
        verb: 'said / will do'
      },
      vocabulary: [
        { word: 'wine', meaning: 'ワイン、葡萄酒', phonetic: '/waɪn/', pos: '名詞' },
        { word: 'ill', meaning: '病気の、具合の悪い', phonetic: '/ɪl/', pos: '形容詞' },
        { word: 'weak', meaning: '衰弱した、弱い', phonetic: '/wiːk/', pos: '形容詞' }
      ],
      grammarPoints: [
        'do someone good：人の健康・ためになる（SVOO構文）',
        'a piece of cake：一切れのケーキ'
      ]
    },
    {
      id: 'rrh-4',
      slideNumber: 4,
      text: 'Set out before it gets hot, and when you are going, walk nicely and quietly and do not run off the path, or you may fall and break the bottle, and then your grandmother will get nothing.',
      translation: '暑くなる前に出発しなさいね。行くときは道をお行儀よく静かに歩き、道から外れて走ったりしてはいけませんよ。さもないと転んで瓶を割ってしまい、おばあさんが何ももらえなくなってしまいますから。',
      literalTranslation: '(暑くなる前に出発しなさい / そして行くときは / お行儀よく静かに歩きなさい / そして道から外れて走ってはいけない / さもないと転んで瓶を割ってしまうかもしれない / そうすればおばあさんは何も手に入らないだろう)',
      structure: {
        pattern: '命令文 + and + 否定命令文 + or（さもないと）+ SV',
        verb: 'Set out, walk, do not run',
        notes: '「命令文 ..., or ...」（〜しなさい、さもないと…）。'
      },
      vocabulary: [
        { word: 'set out', meaning: '出発する、旅立つ', phonetic: '/set aʊt/', pos: '句動詞' },
        { word: 'path', meaning: '小道、通り道', phonetic: '/pɑːθ/', pos: '名詞' },
        { word: 'quietly', meaning: '静かに、落ち着いて', phonetic: '/ˈkwaɪət.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'before it gets hot：暑くなる前に',
        'run off the path：小道から外れて走る',
        'A, or B：Aしなさい、さもないとBになる'
      ]
    },
    {
      id: 'rrh-5',
      slideNumber: 5,
      text: 'And when you go into her room, don\'t forget to say, good-morning, and don\'t peep into every corner before you do it. "I will take great care," said Little Red Riding Hood to her mother, and gave her hand on it.',
      translation: '「そしておばあさんの部屋に入ったら、『おはようございます』と挨拶するのを忘れてはいけませんよ。挨拶する前に部屋の隅々を覗き回ったりしてはだめですよ。」「気をつけるわ」と赤ずきんは母親に言い、約束の手を差し出しました。',
      literalTranslation: '(そしておばあさんの部屋に入るとき / 挨拶するのを忘れてはいけないよ / そして部屋の隅々を覗き込んではいけない / 挨拶をする前に / 「よく気をつけるわ」と赤ずきんは母親に言った / そして約束の手を握った)',
      structure: {
        pattern: '否定命令文 (don\'t forget to do) + SVO',
        subject: 'Little Red Riding Hood',
        verb: 'said / gave'
      },
      vocabulary: [
        { word: 'peep', meaning: '覗き見る、盗み見る', phonetic: '/piːp/', pos: '動詞' },
        { word: 'corner', meaning: '部屋の隅、角', phonetic: '/ˈkɔː.nər/', pos: '名詞' }
      ],
      grammarPoints: [
        'don\'t forget to do：〜することを忘れてはならない',
        'give one\'s hand on it：〜に誓って手を握る、約束する'
      ]
    },
    {
      id: 'rrh-6',
      slideNumber: 6,
      text: 'The grandmother lived out in the wood, half a league from the village, and just as Little Red Riding Hood entered the wood, a wolf met her. Little Red Riding Hood did not know what a wicked creature he was, and was not at all afraid of him.',
      translation: 'おばあさんは村から半リーグ（約2キロ）離れた森の中に住んでいました。そして赤ずきんがちょうど森に入ったとき、狼に出会いました。赤ずきんは狼がどれほど邪悪な生き物か知らなかったので、少しも怖がりませんでした。',
      literalTranslation: '(おばあさんは森の中に住んでいた / 村から半リーグ離れた場所に / そして赤ずきんが森に入ったまさにその時 / 狼が彼女に出会った / 赤ずきんは知らなかった / 彼がどれほど邪悪な生き物であるかを / そして彼を全く恐れていなかった)',
      structure: {
        pattern: 'SV + 時の接続詞節 + SVO + SVO (感嘆の間接疑問文) and SVC',
        subject: 'The grandmother / a wolf / Little Red Riding Hood',
        verb: 'lived / met / did not know / was not afraid'
      },
      vocabulary: [
        { word: 'league', meaning: 'リーグ（旧距離単位、約4.8km）', phonetic: '/liːɡ/', pos: '名詞' },
        { word: 'wicked', meaning: '邪悪な、悪辣な', phonetic: '/ˈwɪk.ɪd/', pos: '形容詞' },
        { word: 'creature', meaning: '生き物、怪物', phonetic: '/ˈkriː.tʃər/', pos: '名詞' }
      ],
      grammarPoints: [
        'half a league：半リーグ（約2.4キロ）',
        'what a wicked creature he was：彼がなんと邪悪な生き物であるか（感嘆節の間接疑問文）',
        'not at all afraid of ~：〜を全く恐れていない'
      ]
    },
    {
      id: 'rrh-7',
      slideNumber: 7,
      text: '"Good-day, Little Red Riding Hood," said he. "Thank you kindly, wolf." "Whither away so early, Little Red Riding Hood?" "To my grandmother\'s." "What have you got in your apron?"',
      translation: '「こんにちは、赤ずきんちゃん」と狼が言いました。「ご親切にありがとう、狼さん。」「こんなに朝早くからどこへ行くんだい？」「おばあちゃんのところよ。」「エプロンの中に何を持っているんだい？」',
      literalTranslation: '(「こんにちは、赤ずきんちゃん」と彼は言った / 「ご親切にありがとう、狼さん」 / 「こんなに早くどこへ行くのかい？」 / 「おばあちゃんのところへよ」 / 「エプロンの中に何を持っているんだい？」)',
      structure: {
        pattern: '対話文 (OVS + 疑問文)',
        subject: 'he',
        verb: 'said'
      },
      vocabulary: [
        { word: 'whither', meaning: 'どこへ（whereの古語）', phonetic: '/ˈwɪð.ər/', pos: '副詞' },
        { word: 'apron', meaning: 'エプロン、前掛け', phonetic: '/ˈeɪ.prən/', pos: '名詞' }
      ],
      grammarPoints: [
        'Whither away：どこへ行くのか（古風な問いかけ）',
        'To my grandmother\'s：おばあちゃんの家へ（houseの省略）'
      ]
    },
    {
      id: 'rrh-8',
      slideNumber: 8,
      text: '"Cake and wine. Yesterday was baking-day, so poor sick grandmother is to have something good, to make her stronger." "Where does your grandmother live, Little Red Riding Hood?"',
      translation: '「ケーキとワインよ。昨日はパン焼きの日だったから、かわいそうに病気のおばあちゃんに何か良いものを召し上がってもらって、元気になってもらうの。」「おばあさんはどこに住んでいるんだい、赤ずきんちゃん？」',
      literalTranslation: '(「ケーキとワインよ / 昨日はパン焼きの日だったの / だから病気のおばあちゃんに良いものを食べてもらうの / 元気になってもらうために」 / 「おばあさんはどこに住んでいるんだい、赤ずきんちゃん？」)',
      structure: {
        pattern: 'SVC + be to構文 + 疑問文',
        subject: 'Yesterday / grandmother',
        verb: 'was / is to have'
      },
      vocabulary: [
        { word: 'baking-day', meaning: 'パン焼きの日', phonetic: '', pos: '名詞' },
        { word: 'stronger', meaning: 'より元気に、より強く', phonetic: '/ˈstrɒŋ.ɡər/', pos: '形容詞' }
      ],
      grammarPoints: [
        'is to have：食べることになっている（be to 不定詞の予定・運命）',
        'make her stronger：彼女をより元気にする（make O C）'
      ]
    },
    {
      id: 'rrh-9',
      slideNumber: 9,
      text: '"A good quarter of a league farther on in the wood. Her house stands under the three large oak-trees, the nut-trees are just below. You surely must know it," replied Little Red Riding Hood.',
      translation: '「森をさらに4分の1リーグ（約1キロ強）進んだところよ。お家は3本の大きなカシの木の下にあって、すぐ下にはクルミの木があるわ。きっと知っているはずよ」と赤ずきんは答えました。',
      literalTranslation: '(「森のさらに4分の1リーグ進んだところよ / 彼女の家は3本の大きなカシの木の下に立っている / クルミの木がすぐ下にあるわ / あなたはきっと知っているに違いないわ」 / と赤ずきんは答えた)',
      structure: {
        pattern: 'SV + SV + SVO',
        subject: 'Her house / the nut-trees / You / Little Red Riding Hood',
        verb: 'stands / are / must know / replied'
      },
      vocabulary: [
        { word: 'quarter', meaning: '4分の1', phonetic: '/ˈkwɔː.tər/', pos: '名詞' },
        { word: 'oak-trees', meaning: 'カシ（オーク）の木', phonetic: '/ˈəʊk ˌtriːz/', pos: '名詞' },
        { word: 'nut-trees', meaning: 'ナッツ（クルミやハシバミ）の木', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'A good quarter of a league：たっぷり4分の1リーグ（good＝十分な、たっぷり）',
        'must know：知っているに違いない（確信の推量）'
      ]
    },
    {
      id: 'rrh-10',
      slideNumber: 10,
      text: 'The wolf thought to himself, "What a tender young creature. What a nice plump mouthful, she will be better to eat than the old woman. I must act craftily, so as to catch both."',
      translation: '狼は心の中で思いました。「なんて柔らかく瑞々しい若娘だろう。丸々と太って一口で食べ応えがありそうだ。あの老婆よりもずっと美味いに違いない。ふたりとも捕まえるために、狡猾に立ち回らねばならんぞ。」',
      literalTranslation: '(狼は心の中で思った / 「なんて柔らかい幼い生き物だろう / なんて丸々とした美味そうな一口だろう / 彼女は老婆より食べるのにはるかに良い / 狡猾に行動せねばならない / 両方を捕まえるために」)',
      structure: {
        pattern: 'SVO + 感嘆文 + SVC (比較) + SVO',
        subject: 'The wolf / she / I',
        verb: 'thought / will be / must act'
      },
      vocabulary: [
        { word: 'tender', meaning: '柔らかい、瑞々しい', phonetic: '/ˈten.dər/', pos: '形容詞' },
        { word: 'plump', meaning: 'ふっくらとした、肉付きの良い', phonetic: '/plʌmp/', pos: '形容詞' },
        { word: 'craftily', meaning: 'ずる賢く、狡猾に', phonetic: '/ˈkrɑːf.tɪ.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'What a tender young creature!：なんて柔らかい生き物だ（感嘆文）',
        'so as to do：〜するために（目的の不定詞構文）'
      ]
    },
    {
      id: 'rrh-11',
      slideNumber: 11,
      text: 'So he walked for a short time by the side of Little Red Riding Hood, and then he said, "see Little Red Riding Hood, how pretty the flowers are about here. Why do you not look round?"',
      translation: 'そこで狼はしばらく赤ずきんの隣を並んで歩いていましたが、やがて言いました。「ねえ赤ずきんちゃん、このあたりのお花がどんなに綺麗か見てごらんよ。どうして周りを見渡さないんだい？」',
      literalTranslation: '(そこで彼はしばらく歩いた / 赤ずきんの傍らに並んで / そして彼は言った / 「ごらん、赤ずきんちゃん、このあたりの花がどんなに綺麗か / どうして周りを見回さないんだい？」)',
      structure: {
        pattern: 'SV and SVO + 命令文 + 疑問文',
        subject: 'he',
        verb: 'walked / said'
      },
      vocabulary: [
        { word: 'by the side of', meaning: '〜の傍らに、隣に', phonetic: '', pos: '前置詞句' }
      ],
      grammarPoints: [
        'how pretty the flowers are：花がどれほど綺麗か（感嘆・間接疑問）',
        'Why do you not ~：どうして〜しないのか'
      ]
    },
    {
      id: 'rrh-12',
      slideNumber: 12,
      text: '"I believe, too, that you do not hear how sweetly the little birds are singing. You walk gravely along as if you were going to school, while everything else out here in the wood is merry."',
      translation: '「小鳥たちがどんなに愛らしく歌っているかも聞こえていないようだね。森の他のすべてのものが楽しげなのに、まるでお学校にでも行くみたいに深刻な顔でトボトボ歩いているじゃないか。」',
      literalTranslation: '(「私は思うよ、お前には聞こえていないのだと / 小鳥たちがどんなに美しく歌っているかを / お前は深刻そうに歩いている / まるで学校へ行くかのように / 森の他のすべてがこんなに陽気である一方で」)',
      structure: {
        pattern: 'SVO + SV + as if仮定法過去 + 対比節 (while ...)',
        subject: 'I / You / everything else',
        verb: 'believe / walk / is'
      },
      vocabulary: [
        { word: 'sweetly', meaning: '美しく、心地よく', phonetic: '/ˈswiːt.li/', pos: '副詞' },
        { word: 'gravely', meaning: '重々しく、深刻そうに', phonetic: '/ˈɡreɪv.li/', pos: '副詞' },
        { word: 'merry', meaning: '陽気な、楽しげな', phonetic: '/ˈmer.i/', pos: '形容詞' }
      ],
      grammarPoints: [
        'as if you were going to school：まるで学校へ行くかのように（仮定法過去）',
        'while everything else is merry：他のすべてが陽気である一方で（対比のwhile）'
      ]
    },
    {
      id: 'rrh-13',
      slideNumber: 13,
      text: 'That would please her too. It is so early in the day that I shall still get there in good time. And so she ran from the path into the wood to look for flowers.',
      translation: '「お花を持っていったら、おばあちゃんもきっと喜ぶわ。まだ朝早いから、十分間に合うように着けるはずだもの。」そうして赤ずきんは小道から森の中へと花を探しに走っていきました。',
      literalTranslation: '(「それもおばあちゃんを喜ばせるだろう / まだ一日のとても早い時間だから / 私は十分に間に合ってそこに着くだろう」 / そして彼女は小道から森へと走った / 花を探すために)',
      structure: {
        pattern: 'SVO + so ... that SV + SV',
        subject: 'That / It / she',
        verb: 'would please / is / ran'
      },
      vocabulary: [
        { word: 'in good time', meaning: '時間に十分余裕をもって、間に合って', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'That would please her：それは彼女を喜ばせるだろう（推量のwould）',
        'in good time：余裕を持って、早く'
      ]
    },
    {
      id: 'rrh-14',
      slideNumber: 14,
      text: 'And whenever she had picked one, she fancied that she saw a still prettier one farther on, and ran after it, and so got deeper and deeper into the wood.',
      translation: 'そして一輪摘むたびに、もっと先のほうにさらにもっと綺麗な花があるように思えてその後を追いかけ、そうやってどんどん森の奥深くへと入り込んでいってしまいました。',
      literalTranslation: '(そして一輪摘むたびに / 彼女は思った / さらに先にもっと綺麗な花が見えると / そしてそれを追って走った / そして森のより深く、より深くへと入っていった)',
      structure: {
        pattern: '譲歩/時節 (whenever SV) + SVO + SV and SV',
        subject: 'she',
        verb: 'fancied, ran, got'
      },
      vocabulary: [
        { word: 'fancied', meaning: '思い込んだ、想像した', phonetic: '/ˈfæn.sid/', pos: '動詞' },
        { word: 'still', meaning: 'いっそう、さらに（比較級の強調）', phonetic: '/stɪl/', pos: '副詞' }
      ],
      grammarPoints: [
        'whenever SV：〜するたびにはいつでも',
        'still prettier：さらにいっそう美しい（still + 比較級）',
        'deeper and deeper：ますます深く（比較級 and 比較級）'
      ]
    },
    {
      id: 'rrh-15',
      slideNumber: 15,
      text: 'Meanwhile the wolf ran straight to the grandmother\'s house and knocked at the door. "Who is there?" "Little Red Riding Hood," replied the wolf. "She is bringing cake and wine. Open the door."',
      translation: 'その間に狼は一直線におばあさんの家へと駆けつけ、ドアをノックしました。「どなたですか？」「赤ずきんだよ」と狼は答えました。「ケーキとワインを持ってきたの。ドアを開けて。」',
      literalTranslation: '(その間、狼はおばあさんの家へまっすぐ走った / そしてドアをノックした / 「どなたですか？」 / 「赤ずきんだよ」と狼は答えた / 「ケーキとワインを持ってきたの / ドアを開けて」)',
      structure: {
        pattern: 'SV and SV + 対話文',
        subject: 'the wolf',
        verb: 'ran / knocked / replied'
      },
      vocabulary: [
        { word: 'meanwhile', meaning: 'その間に、一方では', phonetic: '/ˈmiːn.waɪl/', pos: '副詞' },
        { word: 'straight', meaning: 'まっすぐに、一直線に', phonetic: '/streɪt/', pos: '副詞' }
      ],
      grammarPoints: [
        'knock at the door：ドアをノックする',
        'Who is there?：誰かそこにいるのですか？'
      ]
    },
    {
      id: 'rrh-16',
      slideNumber: 16,
      text: '"Lift the latch," called out the grandmother, "I am too weak, and cannot get up." The wolf lifted the latch, the door sprang open, and without saying a word he went straight to the grandmother\'s bed, and devoured her.',
      translation: '「掛け金を押し上げておくれ」とおばあさんは声をあげました。「弱り果てて起き上がれないのだよ。」狼が掛け金を上げるとドアが跳ね開き、狼は一言も発することなくおばあさんのベッドへまっしぐらに進み、おばあさんを呑み込んでしまいました。',
      literalTranslation: '(「掛け金を上げなさい」とおばあさんは叫んだ / 「体が弱くて起き上がれないのだよ」 / 狼は掛け金を上げた / ドアはパッと開き / 一言も言わずに彼は直行した / おばあさんのベッドへ / そして彼女を丸呑みにしてしまった)',
      structure: {
        pattern: '命令文 + SVC + SVO + SV + SV and SVO',
        subject: 'The wolf / the door / he',
        verb: 'lifted / sprang open / went / devoured'
      },
      vocabulary: [
        { word: 'latch', meaning: '（ドアの）掛け金、ラッチ', phonetic: '/lætʃ/', pos: '名詞' },
        { word: 'sprang open', meaning: '勢いよくパッと開いた', phonetic: '', pos: '動詞句' },
        { word: 'devoured', meaning: 'むさぼり食った、丸呑みにした', phonetic: '/dɪˈvaʊəd/', pos: '動詞' }
      ],
      grammarPoints: [
        'too weak to get up（too...to構文のバリエーション）',
        'without saying a word：一言も口にせずに'
      ]
    },
    {
      id: 'rrh-17',
      slideNumber: 17,
      text: 'Then he put on her clothes, dressed himself in her cap, laid himself in bed and drew the curtains.',
      translation: 'それから狼はおばあさんの服を着て、ナイトキャップ（頭巾）を被り、ベッドに潜り込んでカーテンを引きました。',
      literalTranslation: '(それから彼は彼女の服を着た / 彼女の帽子を身につけた / ベッドに身を横たえ / そしてカーテンを引いた)',
      structure: {
        pattern: 'S + V1, V2, V3, and V4 (再帰代名詞構文)',
        subject: 'he',
        verb: 'put on, dressed, laid, drew'
      },
      vocabulary: [
        { word: 'curtains', meaning: '（ベッドの）天蓋カーテン', phonetic: '/ˈkɜː.tənz/', pos: '名詞' }
      ],
      grammarPoints: [
        'dress oneself in ~：〜を着る',
        'lay oneself in bed：ベッドに横たわる'
      ]
    },
    {
      id: 'rrh-18',
      slideNumber: 18,
      text: 'Little Red Riding Hood, however, had been running about picking flowers and when she had gathered so many that she could carry no more, she remembered her grandmother, and set out on the way to her.',
      translation: 'しかし赤ずきんは花を摘んで走り回っており、これ以上持てないほどたくさんの花を集めたとき、おばあさんのことを思い出して、おばあさんの家へと向かって出発しました。',
      literalTranslation: '(赤ずきんはしかし / 花を摘んで走り回っていた / そしてこれ以上持てないほどたくさん集めたとき / 彼女はおばあさんを思い出し / 彼女の家への道に出発した)',
      structure: {
        pattern: '過去完了進行形 + so ... that結果節 + SVO and SV',
        subject: 'Little Red Riding Hood / she',
        verb: 'had been running / remembered / set out'
      },
      vocabulary: [
        { word: 'gathered', meaning: '集めた、摘み集めた', phonetic: '/ˈɡæð.əd/', pos: '動詞' }
      ],
      grammarPoints: [
        'had been running about：走り回っていた（過去完了進行形）',
        'so many that she could carry no more：これ以上持てないほどたくさん'
      ]
    },
    {
      id: 'rrh-19',
      slideNumber: 19,
      text: 'She was surprised to find the cottage-door standing open, and when she went into the room, she had such a strange feeling that she said to herself, oh dear, how uneasy I feel to-day, and at other times I like being with grandmother so much.',
      translation: '小屋のドアが開け放しになっているのを見て彼女は驚き、部屋に入るとあまりにも奇妙な胸騒ぎがしたため、「おやまあ、今日はなんて不安な気持ちになるのかしら。いつもはおばあちゃんと一緒にいるのがこんなに大好きなのに」と心の中で呟きました。',
      literalTranslation: '(彼女は驚いた / 小屋のドアが開いたまま立っているのを見つけて / そして部屋に入ったとき / 彼女はとても奇妙な胸騒ぎを覚えたので / 彼女は自分自身に言った / 「おやまあ、今日はなんて落ち着かないのだろう / いつもはおばあさんと一緒にいるのが大好きなのに」)',
      structure: {
        pattern: 'SVC (感情の原因不定詞) + such ... that結果構文',
        subject: 'She / she',
        verb: 'was surprised / had'
      },
      vocabulary: [
        { word: 'standing open', meaning: '開け放しのままになっている', phonetic: '', pos: '分詞句' },
        { word: 'uneasy', meaning: '不安な、胸騒ぎのする', phonetic: '/ʌnˈiː.zi/', pos: '形容詞' }
      ],
      grammarPoints: [
        'surprised to find：見つけて驚く（感情の原因を表す不定詞）',
        'such a strange feeling that SV：あまりに奇妙な感じがしたので〜だ',
        'how uneasy I feel：なんて不安を感じることか（感嘆文）'
      ]
    },
    {
      id: 'rrh-20',
      slideNumber: 20,
      text: 'She called out, "Good morning," but received no answer. So she went to the bed and drew back the curtains. There lay her grandmother with her cap pulled far over her face, and looking very strange.',
      translation: '「おはようございます」と声をかけましたが、返事はありませんでした。そこで彼女はベッドに近づきカーテンを開けました。そこにはおばあさんが帽子を目深に引き下げて横たわっていましたが、その姿はひどく異様に見えました。',
      literalTranslation: '(彼女は叫んだ / 「おはようございます」と / しかし返事はなかった / そこで彼女はベッドへ行き、カーテンを開けた / そこにおばあさんが横たわっていた / 帽子を顔の上深くまで引っ張り / ひどく奇妙に見えながら)',
      structure: {
        pattern: 'SV but SVO + SV and SVO + 倒置構文 (There lay S)',
        subject: 'She / her grandmother',
        verb: 'called out / received / went / drew back / lay'
      },
      vocabulary: [
        { word: 'drew back', meaning: '（カーテンなどを）引いて開けた', phonetic: '', pos: '句動詞' },
        { word: 'strange', meaning: '奇妙な、見慣れない', phonetic: '/streɪndʒ/', pos: '形容詞' }
      ],
      grammarPoints: [
        'There lay her grandmother：そこにおばあさんが横たわっていた（場所の副詞Thereによる倒置）',
        'with her cap pulled far over her face：帽子を目深に被って（付帯状況のwith＋過去分詞）'
      ]
    },
    {
      id: 'rrh-21',
      slideNumber: 21,
      text: '"Oh, grandmother," she said, "what big ears you have." "The better to hear you with, my child," was the reply.',
      translation: '「まあ、おばあちゃん」と赤ずきんは言いました。「なんて大きなお耳なのかしら。」「お前の声をよく聞くためだよ、お前さん」という返事でした。',
      literalTranslation: '(「まあ、おばあちゃん」と彼女は言った / 「なんて大きな耳を持っているの」 / 「お前の声をもっとよく聞くためだよ、我が子よ」 / と返事があった)',
      structure: {
        pattern: '感嘆文 + 省略構文 (The better to do with)',
        subject: 'you / was',
        verb: 'have / was'
      },
      vocabulary: [
        { word: 'reply', meaning: '返答、返事', phonetic: '/rɪˈplaɪ/', pos: '名詞' }
      ],
      grammarPoints: [
        'what big ears you have!：なんて大きな耳なんだろう（感嘆文）',
        'The better to hear you with：[They are] the better to hear you with（〜するためにより好都合なのだ）'
      ]
    },
    {
      id: 'rrh-22',
      slideNumber: 22,
      text: '"But, grandmother, what big eyes you have," she said. "The better to see you with, my dear."',
      translation: '「でもおばあちゃん、なんて大きなお目々なのかしら」と彼女が言いました。「お前の姿をよく見るためだよ、可愛い子や。」',
      literalTranslation: '(「でもおばあちゃん、なんて大きな目を持っているの」と彼女は言った / 「お前をもっとよく見るためだよ、お前さん」)',
      structure: {
        pattern: '感嘆文 + 省略不定詞構文',
        subject: 'you',
        verb: 'have'
      },
      vocabulary: [],
      grammarPoints: [
        'The better to see you with：お前をよりよく見るためだ'
      ]
    },
    {
      id: 'rrh-23',
      slideNumber: 23,
      text: '"But, grandmother, what large hands you have." "The better to hug you with."',
      translation: '「でもおばあちゃん、なんて大きなお手々なのかしら。」「お前をしっかり抱きしめるためだよ。」',
      literalTranslation: '(「でもおばあちゃん、なんて大きな手を持っているの」 / 「お前をしっかり抱きしめるためだよ」)',
      structure: {
        pattern: '感嘆文 + 不定詞目的構文',
        subject: 'you',
        verb: 'have'
      },
      vocabulary: [
        { word: 'hug', meaning: '抱きしめる、ハグする', phonetic: '/hʌɡ/', pos: '動詞' }
      ],
      grammarPoints: [
        'The better to hug you with：お前をもっとよく抱きしめるためだ'
      ]
    },
    {
      id: 'rrh-24',
      slideNumber: 24,
      text: '"Oh, but, grandmother, what a terrible big mouth you have." "The better to eat you with."',
      translation: '「ああ、でもおばあちゃん、なんて恐ろしく大きな口なのかしら。」「お前を丸呑みにして食べるためだよ！」',
      literalTranslation: '(「ああ、でもおばあちゃん、なんて恐ろしく大きな口を持っているの」 / 「お前を食べるためだよ！」)',
      structure: {
        pattern: '感嘆文 (what a terrible big mouth ...) + 目的構文',
        subject: 'you',
        verb: 'have'
      },
      vocabulary: [
        { word: 'terrible', meaning: '恐ろしい、ものすごい', phonetic: '/ˈter.ə.bəl/', pos: '形容詞' }
      ],
      grammarPoints: [
        'what a terrible big mouth!：なんて恐ろしい大口だろう（名詞を強調する感嘆文）',
        'The better to eat you with：お前を美味しく食べるためだ'
      ]
    },
    {
      id: 'rrh-25',
      slideNumber: 25,
      text: 'And scarcely had the wolf said this, than with one bound he was out of bed and swallowed up Little Red Riding Hood.',
      translation: 'そして狼がこの言葉を口にするやいなや、ひと跳びでベッドから飛び出し、赤ずきんを丸呑みにしてしまいました。',
      literalTranslation: '(狼がこれを言うやいなや / ひと跳びで彼はベッドから飛び出し / そして赤ずきんを丸呑みにした)',
      structure: {
        pattern: 'Scarcely had S done than/when ... (倒置・即時構文)',
        verb: 'had said',
        subject: 'the wolf',
        notes: '「Scarcely had S + p.p. than/when ...」（〜するやいなや…）の重要倒置構文！'
      },
      vocabulary: [
        { word: 'scarcely', meaning: '〜するやいなや、ほとんど〜ない', phonetic: '/ˈskeəs.li/', pos: '副詞' },
        { word: 'bound', meaning: '跳躍、ひと跳び', phonetic: '/baʊnd/', pos: '名詞' },
        { word: 'swallowed up', meaning: '飲み込んだ、丸呑みにした', phonetic: '', pos: '句動詞' }
      ],
      grammarPoints: [
        'Scarcely had S + p.p. than/when SV：〜するやいなや…（倒置構文）',
        'with one bound：ひと跳びで'
      ]
    },
    {
      id: 'rrh-26',
      slideNumber: 26,
      text: 'When the wolf had appeased his appetite, he lay down again in the bed, fell asleep and began to snore very loud.',
      translation: '食欲を満たした狼は再びベッドに横になり、眠りに落ちてものすごい大いびきをかき始めました。',
      literalTranslation: '(狼が食欲を満たしたとき / 彼は再びベッドに横たわり / 眠りに落ち、非常に大きな音でいびきをかき始めた)',
      structure: {
        pattern: '従属節 (When had appeased) + 主節 (S + V1, V2, and V3)',
        subject: 'the wolf / he',
        verb: 'had appeased / lay down, fell asleep, began'
      },
      vocabulary: [
        { word: 'appeased', meaning: '（食欲や怒りを）なだめた、満たした', phonetic: '/əˈpiːzd/', pos: '動詞' },
        { word: 'appetite', meaning: '食欲', phonetic: '/ˈæp.ə.taɪt/', pos: '名詞' },
        { word: 'snore', meaning: 'いびきをかく', phonetic: '/snɔːr/', pos: '動詞' }
      ],
      grammarPoints: [
        'appease one\'s appetite：食欲を満たす',
        'snore very loud：大声でいびきをかく（loudは副詞的用法）'
      ]
    },
    {
      id: 'rrh-27',
      slideNumber: 27,
      text: 'The huntsman was just passing the house, and thought to himself, how the old woman is snoring. I must just see if she wants anything.',
      translation: 'ちょうど狩人が家の前を通りかかり、「あのおばあさん、なんという大いびきをかいているんだ。何か必要なものはないかちょっと見てみよう」と心の中で思いました。',
      literalTranslation: '(狩人はちょうどその家の前を通りかかっていた / そして心の中で思った / なんといういびきをお婆さんがかいているのだろうと / 何か必要なものがないか見てみなければ)',
      structure: {
        pattern: '過去進行形 and SV + 感嘆間接話法 + SVO',
        subject: 'The huntsman',
        verb: 'was passing and thought / must see'
      },
      vocabulary: [
        { word: 'huntsman', meaning: '狩人、猟師', phonetic: '/ˈhʌnts.mən/', pos: '名詞' }
      ],
      grammarPoints: [
        'thought to himself：心の中で思った',
        'see if SV：〜かどうか確かめる'
      ]
    },
    {
      id: 'rrh-28',
      slideNumber: 28,
      text: 'So he went into the room, and when he came to the bed, he saw that the wolf was lying in it. "Do I find you here, you old sinner," said he. "I have long sought you."',
      translation: 'そこで部屋に入りベッドへ近づくと、狼がベッドに寝そべっているのが見えました。「こんなところでお目にかかるとはな、この悪党め！」と彼は言いました。「長いことお前を探し求めていたぞ。」',
      literalTranslation: '(そこで彼は部屋に入った / そしてベッドに近づいたとき / 狼がその中に横たわっているのを見た / 「ここで貴様を見つけるとはな、この大悪党め」と彼は言った / 「長い間お前を探していたのだ」)',
      structure: {
        pattern: 'SV + 時の節 + SVO (that節) + 対話文',
        subject: 'he',
        verb: 'went, saw, said, have sought'
      },
      vocabulary: [
        { word: 'sinner', meaning: '罪人、悪党、罰当たり', phonetic: '/ˈsɪn.ər/', pos: '名詞' },
        { word: 'sought', meaning: '探し求めた（seekの過去分詞）', phonetic: '/sɔːt/', pos: '動詞' }
      ],
      grammarPoints: [
        'I have long sought you：ずっとお前を追い求めていた（完了形＋副詞long）'
      ]
    },
    {
      id: 'rrh-29',
      slideNumber: 29,
      text: 'Then just as he was going to fire at him, it occurred to him that the wolf might have devoured the grandmother, and that she might still be saved, so he did not fire, but took a pair of scissors, and began to cut open the stomach of the sleeping wolf.',
      translation: 'まさに発砲しようとしたその時、狼はおばあさんを呑み込んでしまったのかもしれず、まだ助け出せるかもしれないという考えが浮かびました。そこで彼は撃つのをやめ、ハサミを手に取ると、眠っている狼のお腹を切り開き始めました。',
      literalTranslation: '(まさに彼が撃とうとしたとき / 彼に思い浮かんだ / 狼はおばあさんを丸呑みにしたかもしれず / 彼女はまだ救えるかもしれないと / だから彼は発砲せず / 一丁のハサミを取り / 眠っている狼の胃を切り開き始めた)',
      structure: {
        pattern: 'It occurred to him that節 + so S did not ... but took and began ...',
        subject: 'it / he',
        verb: 'occurred / did not fire, took, began'
      },
      vocabulary: [
        { word: 'occurred to', meaning: '（考えが）ふと心に浮かんだ', phonetic: '/əˈkɜːd/', pos: '動詞' },
        { word: 'scissors', meaning: 'ハサミ', phonetic: '/ˈsɪz.əz/', pos: '名詞' },
        { word: 'stomach', meaning: '胃、腹部', phonetic: '/ˈstʌm.ək/', pos: '名詞' }
      ],
      grammarPoints: [
        'It occurred to him that SV：〜という考えが心に浮かんだ',
        'might have devoured：呑み込んだかもしれない（過去の推量）',
        'a pair of scissors：ハサミ一丁'
      ]
    },
    {
      id: 'rrh-30',
      slideNumber: 30,
      text: 'When he had made two snips, he saw the Little Red Riding Hood shining, and then he made two snips more, and the little girl sprang out, crying, "Ah, how frightened I have been. How dark it was inside the wolf."',
      translation: 'ハサミをチョキチョキと2回入れると、赤いずきんが光って見えました。さらにもう2回ハサミを入れると、小さな女の子が飛び出してきて叫びました。「ああ、なんて怖かったことでしょう！狼の中はなんて真っ暗だったのかしら！」',
      literalTranslation: '(彼が2回チョキチョキと切ったとき / 彼は赤ずきんが輝いているのを見た / そしてさらに2回ハサミを入れた / すると少女は跳び出してきた / 叫びながら / 「ああ、なんて私は怖かったことでしょう / 狼の中はなんと暗かったことか」)',
      structure: {
        pattern: '従属節 + SVO (知覚動詞 see O doing) + SV + SV + 分詞構文 + 感嘆文',
        subject: 'he / the little girl',
        verb: 'saw / made / sprang out'
      },
      vocabulary: [
        { word: 'snips', meaning: 'ハサミでチョキリと切ること', phonetic: '/snɪps/', pos: '名詞' },
        { word: 'sprang out', meaning: '飛び出した（springの過去形）', phonetic: '', pos: '句動詞' },
        { word: 'frightened', meaning: '怯えた、恐怖を感じた', phonetic: '/ˈfraɪ.tənd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'how frightened I have been!：なんて私は怖かったことか（感嘆文＋現在完了形）',
        'How dark it was：なんと暗かったことか'
      ]
    },
    {
      id: 'rrh-31',
      slideNumber: 31,
      text: 'And after that the aged grandmother came out alive also, but scarcely able to breathe.',
      translation: 'そしてその後、年老いたおばあさんも生きて出てきましたが、息も絶え絶えの息苦しい状態でした。',
      literalTranslation: '(そしてそのあと、年老いたおばあさんもまた生きて出てきた / しかしほとんど息ができない状態で)',
      structure: {
        pattern: 'SV + 付帯補語 (alive) + 形容詞句 (scarcely able to breathe)',
        subject: 'the aged grandmother',
        verb: 'came out',
        complement: 'alive'
      },
      vocabulary: [
        { word: 'aged', meaning: '年老いた、高齢の', phonetic: '/ˈeɪ.dʒɪd/', pos: '形容詞' },
        { word: 'alive', meaning: '生きて、生存して', phonetic: '/əˈlaɪv/', pos: '形容詞' },
        { word: 'breathe', meaning: '息をする、呼吸する', phonetic: '/briːð/', pos: '動詞' }
      ],
      grammarPoints: [
        'came out alive：生きた状態で出てきた（準補語）',
        'scarcely able to breathe：かろうじて息ができる程度で（否定副詞scarcely）'
      ]
    },
    {
      id: 'rrh-32',
      slideNumber: 32,
      text: 'Little Red Riding Hood, however, quickly fetched great stones with which they filled the wolf\'s belly, and when he awoke, he wanted to run away, but the stones were so heavy that he collapsed at once, and fell dead.',
      translation: 'しかし赤ずきんは大急ぎで大きな石を取ってきて、みんなでそれを狼のお腹いっぱいに詰め込みました。そして狼が目を覚まして逃げ出そうとしたとき、石があまりにも重かったため、狼はその場で崩れ落ちて息絶えました。',
      literalTranslation: '(赤ずきんはしかし / すばやく大きな石を取ってきた / それで彼らは狼の腹を満たした / そして彼が目覚めたとき / 彼は逃げ出そうとした / しかし石があまりに重かったので / 彼は直ちに崩れ落ち / 死んで倒れた)',
      structure: {
        pattern: 'SVO + 関係代名詞節 + SVO + so ... that結果構文 (collapsed and fell dead)',
        subject: 'Little Red Riding Hood / he / the stones',
        verb: 'fetched / wanted / were heavy / collapsed and fell'
      },
      vocabulary: [
        { word: 'fetched', meaning: '取ってきた、連れてきた', phonetic: '/fetʃt/', pos: '動詞' },
        { word: 'belly', meaning: '腹、胃袋', phonetic: '/ˈbel.i/', pos: '名詞' },
        { word: 'collapsed', meaning: '崩れ落ちた、倒れた', phonetic: '/kəˈlæpst/', pos: '動詞' }
      ],
      grammarPoints: [
        'with which they filled ~：それらを用いて満たした（前置詞＋関係代名詞）',
        'so heavy that SV：あまりに重かったので〜（結果構文）',
        'fell dead：倒れて息絶えた（状態の変化を表すSVC）'
      ]
    },
    {
      id: 'rrh-33',
      slideNumber: 33,
      text: 'Then all three were delighted. The huntsman drew off the wolf\'s skin and went home with it.',
      translation: '3人は大喜びしました。狩人は狼の毛皮を剥ぎ取り、それを持って家へ帰っていきました。',
      literalTranslation: '(そのとき3人全員が大喜びした / 狩人は狼の皮を剥ぎ取った / そしてそれを持って家へ帰った)',
      structure: {
        pattern: 'SVC + SVO and SV',
        subject: 'all three / The huntsman',
        verb: 'were / drew off and went'
      },
      vocabulary: [
        { word: 'delighted', meaning: '大喜びした', phonetic: '/dɪˈlaɪ.tɪd/', pos: '形容詞' },
        { word: 'drew off', meaning: '剥ぎ取った、脱がせた', phonetic: '', pos: '句動詞' },
        { word: 'skin', meaning: '毛皮、皮', phonetic: '/skɪn/', pos: '名詞' }
      ],
      grammarPoints: [
        'all three：3人とも（同格名詞句）',
        'draw off the skin：皮を剥ぐ'
      ]
    },
    {
      id: 'rrh-34',
      slideNumber: 34,
      text: 'The grandmother ate the cake and drank the wine which Little Red Riding Hood had brought, and revived, but Little Red Riding Hood thought to herself, as long as I live, I will never by myself leave the path, to run into the wood, when my mother has forbidden me to do so.',
      translation: 'おばあさんは赤ずきんが持ってきたケーキを食べワインを飲んで元気を取り戻しました。しかし赤ずきんは心の中で思いました。「生きている限り、お母さんがだめだと禁じたときは、自分勝手に道を外れて森の中に駆け込んだり絶対にしないわ。」',
      literalTranslation: '(おばあさんはケーキを食べワインを飲んだ / 赤ずきんが持ってきたものを / そして元気を取り戻した / しかし赤ずきんは心の中で思った / 「私が生きている限り / 決して一人で小道を離れないわ / 森の中へ走るために / お母さんがそうするのを禁じたときには」)',
      structure: {
        pattern: 'SVO + SVO + 条件/制限節 (as long as I live) + 否定誓い (I will never ...)',
        subject: 'The grandmother / Little Red Riding Hood',
        verb: 'ate and drank / thought'
      },
      vocabulary: [
        { word: 'revived', meaning: '生き返った、元気を取り戻した', phonetic: '/rɪˈvaɪvd/', pos: '動詞' },
        { word: 'forbidden', meaning: '禁じた（forbidの過去分詞）', phonetic: '/fəˈbɪd.ən/', pos: '動詞' }
      ],
      grammarPoints: [
        'as long as I live：私が生きている限り（条件・期間の接続詞）',
        'forbid O to do：Oが〜するのを禁じる'
      ]
    },
    {
      id: 'rrh-35',
      slideNumber: 35,
      text: 'It is also related that once when Little Red Riding Hood was again taking cakes to the old grandmother, another wolf spoke to her, and tried to entice her from the path.',
      translation: 'また後日、赤ずきんが再び年老いたおばあさんのところへケーキを持っていったとき、別の狼が彼女に声をかけ、道からおびき出そうとしたというお話も伝えられています。',
      literalTranslation: '(また〜ということも語られている / かつて赤ずきんが再びケーキを持っていっていたとき / 年老いたおばあさんのもとへ / 別の狼が彼女に話しかけ / そして彼女を道から誘惑しようと試みたのだと)',
      structure: {
        pattern: '形式主語構文 (It is related that ...) + SVO and SVO',
        verb: 'is related',
        subject: 'that once when ... another wolf spoke and tried'
      },
      vocabulary: [
        { word: 'related', meaning: '語られている、伝えられている', phonetic: '/rɪˈleɪ.tɪd/', pos: '動詞' },
        { word: 'entice', meaning: '誘惑する、おびき寄せる', phonetic: '/ɪnˈtaɪs/', pos: '動詞' }
      ],
      grammarPoints: [
        'It is related that SV：〜だと伝えられている',
        'entice A from B：AをBから誘惑しておびき出す'
      ]
    },
    {
      id: 'rrh-36',
      slideNumber: 36,
      text: 'Little Red Riding Hood, however, was on her guard, and went straight forward on her way, and told her grandmother that she had met the wolf',
      translation: 'しかし赤ずきんはしっかりと用心しており、まっすぐに自分の道を進み続け、おばあさんに狼に出会ったことを話しました。',
      literalTranslation: '(赤ずきんはしかし / 警戒していた / そして自分の道をまっすぐに進んだ / そしておばあさんに話した / 狼に出会ったと)',
      structure: {
        pattern: 'SVC and SV and SVOO (that節)',
        subject: 'Little Red Riding Hood',
        verb: 'was on her guard / went / told'
      },
      vocabulary: [
        { word: 'on her guard', meaning: '警戒して、油断なく用心して', phonetic: '', pos: 'イディオム' },
        { word: 'straight forward', meaning: 'まっすぐに前へ', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'be on one\'s guard：用心している、警戒している'
      ]
    },
    {
      id: 'rrh-37',
      slideNumber: 37,
      text: 'and that he had said good-morning to her, but with such a wicked look in his eyes, that if they had not been on the public road she was certain he would have eaten her up. "Well," said the grandmother, "we will shut the door, that he may not come in."',
      translation: 'その狼が「おはよう」と挨拶してきたものの、その目つきがあまりにも邪悪だったため、もし人通りのある公道でなかったら絶対に食べられてしまっていただろうと言いました。「よしよし」とおばあさんは言いました。「狼が入ってこれないように、ドアをしっかり閉めておきましょう。」',
      literalTranslation: '(そして彼が彼女に挨拶してきたと / しかしあまりに邪悪な目つきだったので / もし公道にいなかったなら / 彼女は確信していた、彼が彼女を食べていただろうと / 「よし」とおばあさんは言った / 「ドアを閉めておこう / 彼が入ってこれないように」)',
      structure: {
        pattern: 'that節の継続 + such ... that構文 (if仮定法過去完了) + SVO + 目的節',
        subject: 'he / they / the grandmother',
        verb: 'had said / would have eaten / said / will shut'
      },
      vocabulary: [
        { word: 'public road', meaning: '公道、往来、人通りのある道', phonetic: '', pos: '名詞' },
        { word: 'certain', meaning: '確信している', phonetic: '/ˈsɜː.tən/', pos: '形容詞' }
      ],
      grammarPoints: [
        'such a wicked look that SV：あまりに邪悪な目つきだったので〜',
        'that he may not come in：彼が入ってこれないように（目的のthat節＝so that）'
      ]
    },
    {
      id: 'rrh-38',
      slideNumber: 38,
      text: 'Soon afterwards the wolf knocked, and cried, "open the door, grandmother, I am Little Red Riding Hood, and am bringing you some cakes."',
      translation: 'まもなく狼がやって来てノックし、「おばあちゃん、ドアを開けて。赤ずきんだよ、ケーキを持ってきたの」と叫びました。',
      literalTranslation: '(まもなく狼がノックした / そして叫んだ / 「ドアを開けて、おばあちゃん / 私は赤ずきんだよ / ケーキをいくつか持ってきたの」)',
      structure: {
        pattern: 'SV and SV + 命令文 + SVC and SVOO',
        subject: 'the wolf / I',
        verb: 'knocked, cried / am, am bringing'
      },
      vocabulary: [
        { word: 'afterwards', meaning: 'その後、まもなく', phonetic: '/ˈɑːf.tə.wədz/', pos: '副詞' }
      ],
      grammarPoints: [
        'Soon afterwards：そのすぐ後に'
      ]
    },
    {
      id: 'rrh-39',
      slideNumber: 39,
      text: 'But they did not speak, or open the door, so the grey-beard stole twice or thrice round the house, and at last jumped on the roof, intending to wait until Little Red Riding Hood went home in the evening, and then to steal after her and devour her in the darkness.',
      translation: 'しかしふたりは声も出さず、ドアも開けませんでした。そのためこの老獪な灰色狼（グレイビアード）は家の周りを2、3度こっそり忍び回り、ついに屋根の上に飛び乗りました。夕方に赤ずきんが家へ帰るのを待ち伏せし、後ろから忍び寄って暗闇の中で食い殺そうと企んだのです。',
      literalTranslation: '(しかし彼女たちは話さず、ドアを開けもしなかった / だから灰色髭の狼は家の周りを2、3度忍び足で回った / そしてついに屋根の上に跳び乗った / 赤ずきんが夕方に帰るまで待つつもりで / そして彼女の後を忍んで追い、暗闇の中で彼女を呑み込むつもりで)',
      structure: {
        pattern: 'SV + so S + V1, V2 + 分詞構文 (intending to wait ... and to steal ...)',
        subject: 'they / the grey-beard',
        verb: 'did not speak / stole / jumped'
      },
      vocabulary: [
        { word: 'grey-beard', meaning: '灰色髭（ここでは狡猾な老狼のあだ名）', phonetic: '', pos: '名詞' },
        { word: 'twice or thrice', meaning: '2度か3度', phonetic: '', pos: '副詞句' },
        { word: 'intending', meaning: '〜する意図で、〜するつもりで', phonetic: '/ɪnˈten.dɪŋ/', pos: '現在分詞' }
      ],
      grammarPoints: [
        'stole round the house：家の周りを忍び足で回った（steal＝こっそり忍び歩く）',
        'intending to do：〜しようと企みながら（分詞構文）'
      ]
    },
    {
      id: 'rrh-40',
      slideNumber: 40,
      text: 'But the grandmother saw what was in his thoughts. In front of the house was a great stone trough, so she said to the child, take the pail, Little Red Riding Hood. I made some sausages yesterday, so carry the water in which I boiled them to the trough.',
      translation: 'しかしおばあさんは狼の企みを見抜いていました。家の前には大きな石の飼い葉桶（水槽）があったので、おばあさんは子供に言いました。「赤ずきんや、手桶を持ってきておくれ。昨日ソーセージを作ったから、それを茹でた煮汁をあの水槽に運んでおくれ。」',
      literalTranslation: '(しかしおばあさんには分かっていた / 彼の考えの中にあるものが / 家の正面には大きな石の水槽があった / だから彼女は子供に言った / 「バケツを持ってきなさい、赤ずきんや / 私は昨日ソーセージを作ったのだ / だからそれを煮た水を水槽へと運んでおくれ」)',
      structure: {
        pattern: 'SVO + 倒置 (In front of the house was S) + SVOO + 命令文',
        subject: 'the grandmother / a great stone trough / she / I',
        verb: 'saw / was / said / made / carry'
      },
      vocabulary: [
        { word: 'trough', meaning: '水槽、飼い葉桶', phonetic: '/trɒf/', pos: '名詞' },
        { word: 'pail', meaning: '手桶、バケツ', phonetic: '/peɪl/', pos: '名詞' },
        { word: 'sausages', meaning: 'ソーセージ', phonetic: '/ˈsɒs.ɪ.dʒɪz/', pos: '名詞' }
      ],
      grammarPoints: [
        'In front of the house was a great stone trough：場所の副詞句前置による倒置構文',
        'the water in which I boiled them：前置詞＋関係代名詞'
      ]
    },
    {
      id: 'rrh-41',
      slideNumber: 41,
      text: 'Little Red Riding Hood carried until the great trough was quite full. Then the smell of the sausages reached the wolf, and he sniffed and peeped down, and at last stretched out his neck',
      translation: '赤ずきんは大きな水槽がいっぱいになるまで煮汁を運び続けました。するとソーセージの美味しそうな匂いが屋根の上の狼まで届き、狼は鼻をクンクン鳴らして下を覗き込み、ついに首をぐっと伸ばしました。',
      literalTranslation: '(赤ずきんは運んだ / 大きな水槽がすっかり満杯になるまで / するとソーセージの匂いが狼に届いた / そして彼は鼻を鳴らし下を覗き込んだ / そしてついに首を伸ばした)',
      structure: {
        pattern: 'SV + 時の節 (until ...) + SVO and S + V1, V2, and V3',
        subject: 'Little Red Riding Hood / the smell / he',
        verb: 'carried / reached / sniffed, peeped, stretched out'
      },
      vocabulary: [
        { word: 'sniffed', meaning: 'クンクン鼻を鳴らした', phonetic: '/snɪft/', pos: '動詞' },
        { word: 'peeped down', meaning: '下を覗き込んだ', phonetic: '', pos: '句動詞' },
        { word: 'stretched out', meaning: '伸ばした、突き出した', phonetic: '', pos: '句動詞' }
      ],
      grammarPoints: [
        'until the trough was quite full：水槽がすっかり満杯になるまで'
      ]
    },
    {
      id: 'rrh-42',
      slideNumber: 42,
      text: 'so far that he could no longer keep his footing and began to slip, and slipped down from the roof straight into the great trough, and was drowned.',
      translation: '首をあまりにも長く伸ばしすぎたため、足元を保つことができなくなって滑り始め、屋根から大きな水槽の中へまっ逆さまに滑り落ちて、溺れ死んでしまいました。',
      literalTranslation: '(あまりに遠くまで伸ばしたので / 彼はもはや足場を保つことができず / 滑り始めた / そして屋根からまっすぐに大きな水槽へと滑り落ちた / そして溺死した)',
      structure: {
        pattern: 'so far that結果構文 (could no longer keep ... slipped ... and was drowned)',
        subject: 'he',
        verb: 'could keep / began / slipped / was drowned'
      },
      vocabulary: [
        { word: 'footing', meaning: '足場、足の置き所', phonetic: '/ˈfʊt.ɪŋ/', pos: '名詞' },
        { word: 'drowned', meaning: '溺死した、水死した', phonetic: '/draʊnd/', pos: '動詞' }
      ],
      grammarPoints: [
        'so far that SV：あまりに遠くまで〜したので…だ',
        'no longer：もはや〜ない',
        'be drowned：溺死する'
      ]
    },
    {
      id: 'rrh-43',
      slideNumber: 43,
      text: 'But Little Red Riding Hood went joyously home, and no one ever did anything to harm her again.',
      translation: '赤ずきんは喜びに溢れて家へ帰りました。そしてそれ以後、彼女に危害を加えようとする者は二度と現れませんでした。',
      literalTranslation: '(しかし赤ずきんは喜んで家へ帰った / そして誰も二度と何もしなかった / 彼女を害するようなことは)',
      structure: {
        pattern: 'SV and SVO',
        subject: 'Little Red Riding Hood / no one',
        verb: 'went / did'
      },
      vocabulary: [
        { word: 'joyously', meaning: '喜びに満ちて、嬉しそうに', phonetic: '/ˈdʒɔɪ.əs.li/', pos: '副詞' },
        { word: 'harm', meaning: '害する、傷つける', phonetic: '/hɑːm/', pos: '動詞' }
      ],
      grammarPoints: [
        'went joyously home：嬉しそうに家へ帰った',
        'no one ever did anything to harm her again：誰も二度と彼女を害することはしなかった'
      ]
    }
  ]
};
