import { Story } from '../types';

export const aliceStory: Story = {
  id: 'alice',
  title: "Alice's Adventures in Wonderland",
  titleJa: '不思議の国のアリス',
  category: 'fairytale',
  description: 'The world-famous adventure of Alice following the White Rabbit down the rabbit-hole into Wonderland.',
  descriptionJa: '動画に登場する名作『不思議の国のアリス』の全編英文（Chapter 1〜7）。1文3回音読とチャンク直訳で、生き生きとした英語表現と会話を体得します。',
  level: 'Beginner',
  theme: 'parchment',
  authorOrSource: 'Lewis Carroll / Classic Graded Reader Adaptation',
  sentences: [
    // Chapter 1: Down the Rabbit-Hole
    {
      id: 'al-1',
      slideNumber: 1,
      text: 'Alice was beginning to get very bored.',
      translation: 'アリスはとても退屈し始めていました。',
      literalTranslation: '(アリスは〜になり始めていた / とても退屈に)',
      vocabulary: [
        { word: 'bored', meaning: '退屈した、飽きた', phonetic: '/bɔːd/', pos: '形容詞' }
      ],
      grammarPoints: ['begin to do：〜し始める', 'get + 形容詞：〜になる']
    },
    {
      id: 'al-2',
      slideNumber: 2,
      text: 'She and her sister were sitting under the trees.',
      translation: '彼女と姉は木の下に座っていました。',
      literalTranslation: '(彼女と彼女の姉は / 木の下に座っていた)',
      vocabulary: [
        { word: 'sitting', meaning: '座っている', phonetic: '/ˈsɪt.ɪŋ/', pos: '動詞' }
      ],
      grammarPoints: ['過去進行形：were sitting（座っていた）']
    },
    {
      id: 'al-3',
      slideNumber: 3,
      text: 'Her sister was reading, but Alice had nothing to do.',
      translation: '姉は本を読んでいましたが、アリスには何もすることがありませんでした。',
      literalTranslation: '(彼女の姉は読んでいたが / アリスには何もすることがなかった)',
      vocabulary: [
        { word: 'nothing', meaning: '何も〜ない', phonetic: '/ˈnʌθ.ɪŋ/', pos: '代名詞' }
      ],
      grammarPoints: ['have nothing to do：することが何もない（不定詞の形容詞的用法）']
    },
    {
      id: 'al-4',
      slideNumber: 4,
      text: "Once or twice she looked into her sister's book, but it had no pictures or conversations in it.",
      translation: '一、二度姉の本を覗き込みましたが、そこには絵も会話もありませんでした。',
      literalTranslation: '(一、二度 / 彼女は姉の本を覗き込んだ / しかしそこには絵も会話も入っていなかった)',
      vocabulary: [
        { word: 'conversation', meaning: '会話、対話', phonetic: '/ˌkɒn.vəˈseɪ.ʃən/', pos: '名詞' }
      ],
      grammarPoints: ['once or twice：1、2度', 'look into：〜を覗き込む']
    },
    {
      id: 'al-5',
      slideNumber: 5,
      text: "'And what is the use of a book,' thought Alice, 'without pictures or conversations?'",
      translation: '「絵も会話もない本なんて、いったい何の役に立つの？」とアリスは思いました。',
      literalTranslation: '(「そして本の何の役に立つのか」 / アリスは思った / 「絵や会話なしで」)',
      vocabulary: [
        { word: 'use', meaning: '効用、使い道、役立ち', phonetic: '/juːs/', pos: '名詞' }
      ],
      grammarPoints: ['what is the use of ~?：〜に何の役立ち/意味があるのか']
    },
    {
      id: 'al-6',
      slideNumber: 6,
      text: 'She tried to think of something to do, but it was a hot day and she felt very sleepy and stupid.',
      translation: '何かすることを思いつこうとしましたが、暑い日で、とても眠くて頭がぼんやりしていました。',
      literalTranslation: '(彼女は何かすることを考え出そうとした / しかし暑い日だった / そして彼女はとても眠くぼんやりした気分だった)',
      vocabulary: [
        { word: 'sleepy', meaning: '眠い、眠気を誘う', phonetic: '/ˈsliː.pi/', pos: '形容詞' },
        { word: 'stupid', meaning: '頭が働かない、ぼんやりした', phonetic: '/ˈstjuː.pɪd/', pos: '形容詞' }
      ],
      grammarPoints: ['try to do：〜しようと試みる', 'feel + 形容詞：〜の気分がする']
    },
    {
      id: 'al-7',
      slideNumber: 7,
      text: 'She was still sitting and thinking when suddenly a White Rabbit with pink eyes ran past her.',
      translation: 'まだ座って考えていると、突然、ピンクの目をした白ウサギが彼女のそばを走り抜けていきました。',
      literalTranslation: '(彼女がまだ座って考えていたとき / 突然ピンクの目の白ウサギが / 彼女のそばを走り抜けた)',
      vocabulary: [
        { word: 'suddenly', meaning: '突然に、不意に', phonetic: '/ˈsʌd.ən.li/', pos: '副詞' },
        { word: 'past', meaning: '〜のそばを通り過ぎて', phonetic: '/pɑːst/', pos: '前置詞' }
      ],
      grammarPoints: ['run past someone：人のそばを走り抜ける']
    },
    {
      id: 'al-8',
      slideNumber: 8,
      text: 'There was nothing really strange about seeing a rabbit.',
      translation: 'ウサギを見かけること自体は、特に不思議なことではありませんでした。',
      literalTranslation: '(本当に奇妙なことは何もなかった / ウサギを見ることについて)',
      vocabulary: [
        { word: 'strange', meaning: '奇妙な、不思議な', phonetic: '/streɪndʒ/', pos: '形容詞' }
      ],
      grammarPoints: ['nothing + 形容詞：〜なものは何もない']
    },
    {
      id: 'al-9',
      slideNumber: 9,
      text: "And Alice was not very surprised when the Rabbit said, 'Oh dear! Oh dear! I shall be late!'",
      translation: 'そしてウサギが「大変だ！大変だ！遅刻しちゃうぞ！」と言ったときも、アリスはそれほど驚きませんでした。',
      literalTranslation: '(そしてアリスはあまり驚かなかった / ウサギが言ったとき / 「おやまあ！遅刻してしまう！」と)',
      vocabulary: [
        { word: 'surprised', meaning: '驚いた', phonetic: '/səˈpraɪzd/', pos: '形容詞' }
      ],
      grammarPoints: ['Oh dear!：おやまあ！大変だ！', 'I shall be late：遅刻するだろう']
    },
    {
      id: 'al-10',
      slideNumber: 10,
      text: 'Perhaps it was a little strange, Alice thought later, but at the time she was not surprised.',
      translation: '（後から考えれば少し奇妙だったかもしれないとアリスは思いましたが、その時は驚かなかったのです。）',
      literalTranslation: '(たぶん少し奇妙だった / アリスは後で思った / しかしその時は彼女は驚かなかった)',
      vocabulary: [
        { word: 'perhaps', meaning: 'ことによると、おそらく', phonetic: '/pəˈhæps/', pos: '副詞' }
      ],
      grammarPoints: ['at the time：その時は、当時は']
    },
    {
      id: 'al-11',
      slideNumber: 11,
      text: 'But then the Rabbit took a watch out of its pocket, looked at it, and hurried on.',
      translation: 'しかしその時、ウサギがポケットから時計を取り出し、それを見て急ぎ足で先へ進みました。',
      literalTranslation: '(しかしその時ウサギは時計を取り出した / ポケットから / それを見て / そして急いで先へ行った)',
      vocabulary: [
        { word: 'pocket', meaning: 'ポケット、服の袋', phonetic: '/ˈpɒk.ɪt/', pos: '名詞' },
        { word: 'hurried', meaning: '急いだ', phonetic: '/ˈhʌr.id/', pos: '動詞 (過去形)' }
      ],
      grammarPoints: ['take A out of B：BからAを取り出す', 'hurry on：先を急ぐ']
    },
    {
      id: 'al-12',
      slideNumber: 12,
      text: 'At once Alice jumped to her feet.',
      translation: 'アリスはすぐに飛び起きました。',
      literalTranslation: '(すぐに / アリスはサッと立ち上がった)',
      vocabulary: [
        { word: 'jumped', meaning: '飛び跳ねた', phonetic: '/dʒʌmpt/', pos: '動詞' }
      ],
      grammarPoints: ['at once：すぐに、直ちに', 'jump to one\'s feet：サッと立ち上がる']
    },
    {
      id: 'al-13',
      slideNumber: 13,
      text: "'I've never before seen a rabbit with either a pocket, or a watch to take out of it,' she thought.",
      translation: '「ポケットがついているウサギも、そこから取り出す時計を持っているウサギも、今まで見たことがないわ！」と彼女は思いました。',
      literalTranslation: '(「私はこれまでに見たことがない / ポケットやそこから取り出す時計を持つウサギを」 / 彼女は思った)',
      vocabulary: [
        { word: 'either', meaning: 'どちらかの、どちらも', phonetic: '/ˈaɪ.ðər/', pos: '接続詞' }
      ],
      grammarPoints: ['either A or B：AかBのどちらか', 'never before seen：今まで一度も見たことがない（現在完了経験）']
    },
    {
      id: 'al-14',
      slideNumber: 14,
      text: 'And she ran quickly across the field after the Rabbit.',
      translation: 'そして彼女はウサギの後を追って野原を素早く走りました。',
      literalTranslation: '(そして彼女は素早く走った / 野原を横切って / ウサギの後を追って)',
      vocabulary: [
        { word: 'field', meaning: '野原、畑、原っぱ', phonetic: '/fiːld/', pos: '名詞' }
      ],
      grammarPoints: ['run after ~：〜を追いかける', 'across the field：野原を横切って']
    },
    {
      id: 'al-15',
      slideNumber: 15,
      text: 'She did not stop to think, and when the Rabbit ran down a large rabbit-hole, Alice followed it immediately.',
      translation: '立ち止まって考えることもせず、ウサギが大きなウサギの穴に駆け下りると、アリスはすぐにその後をついていきました。',
      literalTranslation: '(彼女は立ち止まって考えなかった / そしてウサギが大きな穴へ駆け下りたとき / アリスはすぐにそれにつづいた)',
      vocabulary: [
        { word: 'immediately', meaning: 'ただちに、即座に', phonetic: '/ɪˈmiː.di.ət.li/', pos: '副詞' }
      ],
      grammarPoints: ['stop to think：立ち止まって考える（stop to do）', 'follow：後を追う']
    },
    {
      id: 'al-16',
      slideNumber: 16,
      text: 'After a little way the rabbit-hole suddenly went down, deep into the ground.',
      translation: '少し進むと、ウサギの穴は突然、地面の奥深くへとまっすぐ落ち込んでいました。',
      literalTranslation: '(少し進んだあと / ウサギの穴は突然下へと向かった / 地中深くへと)',
      vocabulary: [
        { word: 'ground', meaning: '地面、大地', phonetic: '/ɡraʊnd/', pos: '名詞' }
      ],
      grammarPoints: ['after a little way：少し進んだところで', 'deep into：〜の奥深くに']
    },
    {
      id: 'al-17',
      slideNumber: 17,
      text: 'Alice could not stop herself falling, and down she went, too.',
      translation: 'アリスは落ちるのを止めることができず、彼女もまた下へと落ちていきました。',
      literalTranslation: '(アリスは自分が落ちるのを止められなかった / そして彼女もまた下へと落ちていった)',
      vocabulary: [
        { word: 'falling', meaning: '落下すること', phonetic: '/ˈfɔː.lɪŋ/', pos: '動名詞' }
      ],
      grammarPoints: ['stop oneself doing：〜するのを思いとどまる・止める', 'down she went：倒置表現']
    },
    {
      id: 'al-18',
      slideNumber: 18,
      text: 'It was a very strange hole.',
      translation: 'それはとても奇妙な穴でした。',
      literalTranslation: '(それはとても奇妙な穴だった)',
      vocabulary: [
        { word: 'hole', meaning: '穴、洞穴', phonetic: '/həʊl/', pos: '名詞' }
      ],
      grammarPoints: ['SVC第2文型']
    },
    {
      id: 'al-19',
      slideNumber: 19,
      text: 'Alice was falling very slowly, and she had time to think and to look around her.',
      translation: 'アリスはとてもゆっくりと落ちていたので、考えたり周りを見回したりする時間がありました。',
      literalTranslation: '(アリスはとてもゆっくり落ちていた / そして考える時間と周りを見る時間があった)',
      vocabulary: [
        { word: 'slowly', meaning: 'ゆっくりと', phonetic: '/ˈsləʊ.li/', pos: '副詞' }
      ],
      grammarPoints: ['have time to do：〜する時間がある']
    },
    {
      id: 'al-20',
      slideNumber: 20,
      text: 'She could see nothing below her because it was so dark.',
      translation: 'あまりにも暗かったため、彼女には足元の下が何も見えませんでした。',
      literalTranslation: '(彼女は自分の下に何も見えなかった / とても暗かったので)',
      vocabulary: [
        { word: 'below', meaning: '〜の下に', phonetic: '/bɪˈləʊ/', pos: '前置詞' }
      ],
      grammarPoints: ['because節による理由説明']
    },
    {
      id: 'al-21',
      slideNumber: 21,
      text: 'But when she looked at the sides of the hole, she could see cupboards and books and pictures on the walls.',
      translation: 'しかし穴の壁面を見ると、食器棚や本、壁にかけられた絵が見えました。',
      literalTranslation: '(しかし穴の側面を見たとき / 食器棚や本や絵が見えた / 壁にかかった)',
      vocabulary: [
        { word: 'cupboards', meaning: '食器棚、戸棚', phonetic: '/ˈkʌb.ədz/', pos: '名詞' }
      ],
      grammarPoints: ['on the walls：壁に']
    },
    {
      id: 'al-22',
      slideNumber: 22,
      text: 'She had time to take things out of a cupboard, look at them, and then put them back in a cupboard lower down.',
      translation: '戸棚から物を取り出し、それを眺め、もっと下にある戸棚へ戻す時間さえありました。',
      literalTranslation: '(彼女には戸棚から物を取り出す時間があった / それらを眺め / そしてさらに下の戸棚へ戻す時間も)',
      vocabulary: [
        { word: 'lower', meaning: 'より低い、下の', phonetic: '/ˈləʊ.ər/', pos: '形容詞' }
      ],
      grammarPoints: ['put back：元の場所に戻す', 'lower down：さらに下方に']
    },
    {
      id: 'al-23',
      slideNumber: 23,
      text: "'Well!' thought Alice. 'After a fall like this, I can fall anywhere!'",
      translation: '「まあ！」とアリスは思いました。「こんな風に落ちた後なら、どこから落ちたってへっちゃらだわ！」',
      literalTranslation: '(「まあ！」アリスは思った / 「このような落下の後なら / 私はどこにだって落ちられるわ！」)',
      vocabulary: [
        { word: 'anywhere', meaning: 'どこにでも、どこでも', phonetic: '/ˈen.i.weər/', pos: '副詞' }
      ],
      grammarPoints: ['after a fall like this：このような落下の後では']
    },
    {
      id: 'al-24',
      slideNumber: 24,
      text: "I can fall downstairs at home, and I won't cry or say a word about it!",
      translation: '家で階段から落ちたって、泣いたり一言も文句を言ったりしないわ！',
      literalTranslation: '(家で階段を転がり落ちても / 私は泣かないし / それについて一言も言わないわ！)',
      vocabulary: [
        { word: 'downstairs', meaning: '階段下へ、階下へ', phonetic: '/ˌdaʊnˈsteəz/', pos: '副詞' }
      ],
      grammarPoints: ['say a word：一言口にする', 'fall downstairs：階段から落ちる']
    },
    {
      id: 'al-25',
      slideNumber: 25,
      text: 'Down, down, down. Would she ever stop falling?',
      translation: '下へ、下へ、どこまでも下へ。いったい落ち止まることがあるのでしょうか？',
      literalTranslation: '(下へ、下へ、下へ / 彼女は落ちるのをやめることがあるのだろうか？)',
      vocabulary: [
        { word: 'ever', meaning: 'かつて、いったい', phonetic: '/ˈev.ər/', pos: '副詞' }
      ],
      grammarPoints: ['stop falling：落下するのをやめる（stop doing）']
    },
    {
      id: 'al-26',
      slideNumber: 26,
      text: "'How far have I fallen now?' Alice said aloud to herself.",
      translation: '「今どれくらい落ちてきたのかしら？」とアリスは声に出して独り言を言いました。',
      literalTranslation: '(「今どれくらい遠くまで落ちたかしら？」 / アリスは自分に声に出して言った)',
      vocabulary: [
        { word: 'aloud', meaning: '声に出して、大声で', phonetic: '/əˈlaʊd/', pos: '副詞' }
      ],
      grammarPoints: ['say to oneself：独り言を言う', 'How far：どのくらいの距離']
    },
    {
      id: 'al-27',
      slideNumber: 27,
      text: "'Perhaps I'm near the centre of the earth. Let me think ... That's four thousand miles down.'",
      translation: '「たぶん地球の中心の近くだわ。ええと…深さ4000マイルね。」',
      literalTranslation: '(「たぶん私は地球の中心の近くにいる / 考えさせて… / それは4000マイル下だわ」)',
      vocabulary: [
        { word: 'centre', meaning: '中心、真ん中', phonetic: '/ˈsen.tər/', pos: '名詞' },
        { word: 'earth', meaning: '地球、大地', phonetic: '/ɜːθ/', pos: '名詞' }
      ],
      grammarPoints: ['let me think：ええと、考えさせて']
    },
    {
      id: 'al-28',
      slideNumber: 28,
      text: 'Alice was very good at her school lessons and could remember a lot of things like this.',
      translation: '（アリスは学校の勉強がとても得意で、このようなことをたくさん覚えていたのです。）',
      literalTranslation: '(アリスは学校の授業がとても得意だった / そしてこのようなことをたくさん覚えていられた)',
      vocabulary: [
        { word: 'lessons', meaning: '授業、学科', phonetic: '/ˈles.ənz/', pos: '名詞' }
      ],
      grammarPoints: ['be good at ~：〜が得意である']
    },
    {
      id: 'al-29',
      slideNumber: 29,
      text: 'Alice was very nearly asleep when, suddenly, she was sitting on the ground.',
      translation: 'アリスがもう眠ってしまいそうになったその時、不意に彼女は地面の上に座っていました。',
      literalTranslation: '(アリスがほとんど眠りかけたとき / 突然 / 彼女は地面に座っていた)',
      vocabulary: [
        { word: 'nearly', meaning: 'ほとんど、もう少しで', phonetic: '/ˈnɪə.li/', pos: '副詞' }
      ],
      grammarPoints: ['nearly asleep：ほとんど眠って']
    },
    {
      id: 'al-30',
      slideNumber: 30,
      text: 'Quickly, she jumped to her feet and looked around.',
      translation: '素早く彼女は飛び起き、周りを見回しました。',
      literalTranslation: '(素早く / 彼女は立ち上がり / 周りを見回した)',
      vocabulary: [
        { word: 'around', meaning: '周囲を、あたりを', phonetic: '/əˈraʊnd/', pos: '副詞' }
      ],
      grammarPoints: ['look around：周囲を見回す']
    },
    {
      id: 'al-31',
      slideNumber: 31,
      text: 'She could see the White Rabbit, who was hurrying away and still talking to himself.',
      translation: '急いで立ち去りながら、まだ独り言を言っている白ウサギの姿が見えました。',
      literalTranslation: '(彼女には白ウサギが見えた / 急いで去りながら / まだ独り言を言っている)',
      vocabulary: [
        { word: 'hurrying', meaning: '急いでいる', phonetic: '/ˈhʌr.i.ɪŋ/', pos: '現在分詞' }
      ],
      grammarPoints: ['who was hurrying away：関係代名詞の非制限的用法']
    },
    {
      id: 'al-32',
      slideNumber: 32,
      text: "'Oh my ears and whiskers!' he was saying. 'How late it's getting!'",
      translation: '「おや、耳とヒゲにかけて！なんて遅くなってきているんだ！」とウサギは言っていました。',
      literalTranslation: '(「おや私の耳とヒゲよ！」彼は言っていた / 「どれほど遅くなってきていることか！」)',
      vocabulary: [
        { word: 'whiskers', meaning: '（動物の）頬ヒゲ', phonetic: '/ˈwɪs.kərz/', pos: '名詞' }
      ],
      grammarPoints: ['How late it is getting!：感嘆文（なんと遅くなっていることか）']
    },
    {
      id: 'al-33',
      slideNumber: 33,
      text: 'Alice ran after him like the wind.',
      translation: 'アリスは風のように彼の後を追って走りました。',
      literalTranslation: '(アリスは彼の後を走った / 風のように)',
      vocabulary: [
        { word: 'wind', meaning: '風', phonetic: '/wɪnd/', pos: '名詞' }
      ],
      grammarPoints: ['like the wind：風のように素早く']
    },
    {
      id: 'al-34',
      slideNumber: 34,
      text: 'She was getting very near him when he suddenly turned a corner.',
      translation: 'もう少しで追いつきそうになったとき、ウサギは突然角を曲がりました。',
      literalTranslation: '(彼女は彼にとても近づいていた / 彼が突然角を曲がったとき)',
      vocabulary: [
        { word: 'corner', meaning: '角、曲がり角', phonetic: '/ˈkɔː.nər/', pos: '名詞' }
      ],
      grammarPoints: ['turn a corner：角を曲がる']
    },
    {
      id: 'al-35',
      slideNumber: 35,
      text: 'Alice ran round the corner too, and then stopped.',
      translation: 'アリスも角を曲がって走り、そして立ち止まりました。',
      literalTranslation: '(アリスも角を回って走った / そして立ち止まった)',
      vocabulary: [
        { word: 'stopped', meaning: '止まった', phonetic: '/stɒpt/', pos: '動詞' }
      ],
      grammarPoints: ['run round the corner：角を回って走る']
    },
    {
      id: 'al-36',
      slideNumber: 36,
      text: 'She was now in a long, dark room with doors all round the walls, and she could not see the White Rabbit anywhere.',
      translation: '彼女は今や、壁一面にドアが並ぶ長くて暗い部屋におり、白ウサギの姿はどこにも見当たりませんでした。',
      literalTranslation: '(彼女は今や長くて暗い部屋にいた / 壁一面にドアがある / そして白ウサギをどこにも見ることができなかった)',
      vocabulary: [
        { word: 'anywhere', meaning: 'どこにも（〜ない）', phonetic: '/ˈen.i.weər/', pos: '副詞' }
      ],
      grammarPoints: ['with doors all round the walls：付帯状況のwith']
    },
    {
      id: 'al-37',
      slideNumber: 37,
      text: 'She tried to open the doors, but they were all locked.',
      translation: 'ドアを開けようとしましたが、すべて鍵がかかっていました。',
      literalTranslation: '(彼女はドアを開けようとした / しかしそれらはすべて鍵がかかっていた)',
      vocabulary: [
        { word: 'locked', meaning: '施錠された', phonetic: '/lɒkt/', pos: '形容詞' }
      ],
      grammarPoints: ['all locked：すべて鍵がかかって']
    },
    {
      id: 'al-38',
      slideNumber: 38,
      text: "'How will I ever get out again?' she thought sadly.",
      translation: '「いったいどうやってまた出られるのかしら？」と彼女は悲しく思いました。',
      literalTranslation: '(「どうやって私は再び出られるのかしら？」 / 彼女は悲しそうに思った)',
      vocabulary: [
        { word: 'sadly', meaning: '悲しそうに', phonetic: '/ˈsæd.li/', pos: '副詞' }
      ],
      grammarPoints: ['get out：外に出る']
    },
    {
      id: 'al-39',
      slideNumber: 39,
      text: 'Then she saw a little glass table with three legs, and on the top of it was a very small gold key.',
      translation: 'その時、3本脚の小さなガラスのテーブルが見え、その上にはごく小さな金の鍵が置いてありました。',
      literalTranslation: '(そのとき彼女は小さなガラスのテーブルを見た / 3本脚の / そしてその上にはとても小さな金の鍵があった)',
      vocabulary: [
        { word: 'legs', meaning: '（テーブルなどの）脚', phonetic: '/leɡz/', pos: '名詞' },
        { word: 'gold', meaning: '金の、黄金の', phonetic: '/ɡəʊld/', pos: '形容詞' }
      ],
      grammarPoints: ['on the top of it was ~：場所を表す前置詞句の倒置']
    },
    {
      id: 'al-40',
      slideNumber: 40,
      text: 'Alice quickly took the key and tried it in all the doors, but oh dear!',
      translation: 'アリスは素早く鍵を取り、すべてのドアで試してみましたが、何ということでしょう！',
      literalTranslation: '(アリスは素早く鍵を取り / すべてのドアで試した / しかしおやまあ！)',
      vocabulary: [
        { word: 'tried', meaning: '試した', phonetic: '/traɪd/', pos: '動詞' }
      ],
      grammarPoints: ['try in ~：〜で試す']
    },
    {
      id: 'al-41',
      slideNumber: 41,
      text: 'Either the locks were too big, or the key was too small, but she could not open any of the doors.',
      translation: '鍵穴が大きすぎるか、鍵が小さすぎるかで、どのドアも開けることができませんでした。',
      literalTranslation: '(錠前が大きすぎるか / あるいは鍵が小さすぎるかで / 彼女はどのドアも開けられなかった)',
      vocabulary: [
        { word: 'locks', meaning: '錠前、鍵穴', phonetic: '/lɒks/', pos: '名詞' }
      ],
      grammarPoints: ['Either A or B：AかBのいずれか', 'too + 形容詞：〜すぎる']
    },
    {
      id: 'al-42',
      slideNumber: 42,
      text: 'Then she saw another door, a door that was only forty centimetres high.',
      translation: 'その時、もう1つのドア、高さわずか40センチほどのドアを見つけました。',
      literalTranslation: '(そのとき彼女はもう一つのドアを見た / わずか40センチの高さしかないドアを)',
      vocabulary: [
        { word: 'centimetres', meaning: 'センチメートル', phonetic: '/ˈsen.tɪˌmiː.təz/', pos: '名詞' }
      ],
      grammarPoints: ['that was only forty centimetres high：関係代名詞that']
    },
    {
      id: 'al-43',
      slideNumber: 43,
      text: 'The little gold key unlocked this door easily, but of course Alice could not get through it she was much too big.',
      translation: '小さな金の鍵はそのドアを簡単に開けましたが、アリスは体が大きすぎて通り抜けることができませんでした。',
      literalTranslation: '(小さな金の鍵はそのドアを簡単に開けた / しかしもちろんアリスはそこを通り抜けられなかった / あまりに大きすぎたのだ)',
      vocabulary: [
        { word: 'unlocked', meaning: '開錠した', phonetic: '/ʌnˈlɒkt/', pos: '動詞' }
      ],
      grammarPoints: ['get through：通り抜ける', 'much too big：あまりに大きすぎる']
    },
    {
      id: 'al-44',
      slideNumber: 44,
      text: 'So she lay on the floor and looked through the open door, into a beautiful garden with green trees and bright flowers.',
      translation: 'そこで彼女は床に身を横たえ、開いたドアの向こう、緑の木々と鮮やかな花々が咲き誇る美しい庭園を覗き込みました。',
      literalTranslation: '(そこで彼女は床に横たわり / 開いたドアを通して覗いた / 緑の木々と鮮やかな花のある美しい庭の中を)',
      vocabulary: [
        { word: 'bright', meaning: '鮮やかな、明るい', phonetic: '/braɪt/', pos: '形容詞' }
      ],
      grammarPoints: ['lay：横たわった（lieの過去形）', 'look through：〜を通して見る']
    },
    {
      id: 'al-45',
      slideNumber: 45,
      text: "Poor Alice was very unhappy. 'What a wonderful garden!' she said to herself. 'I'd like to be out there - not in this dark room. Why can't I get smaller?'",
      translation: 'かわいそうなアリスはとても悲しくなりました。「なんて素敵な庭かしら！この暗い部屋ではなく、あそこに出られたらいいのに。どうして私は小さくなれないのかしら？」',
      literalTranslation: '(かわいそうなアリスはとても悲しかった / 「なんて素敵な庭でしょう！」彼女は独り言を言った / 「あそこに出られたらいいのに / この暗い部屋ではなく / なぜ小さくなれないのかしら？」)',
      vocabulary: [
        { word: 'unhappy', meaning: '不幸な、悲しい', phonetic: '/ʌnˈhæp.i/', pos: '形容詞' },
        { word: 'wonderful', meaning: '素晴らしい、素敵な', phonetic: '/ˈwʌn.də.fəl/', pos: '形容詞' }
      ],
      grammarPoints: ["What a + 形容詞 + 名詞!：感嘆文", "I'd like to do：〜したい"]
    },
    {
      id: 'al-46',
      slideNumber: 46,
      text: 'It was already a very strange day, and Alice was beginning to think that anything was possible.',
      translation: 'すでにとても不思議な一日だったので、アリスは何だって起こり得ると考え始めていました。',
      literalTranslation: '(それはすでにとても奇妙な一日だった / そしてアリスは思い始めていた / 何事も可能であると)',
      vocabulary: [
        { word: 'possible', meaning: '可能な、あり得る', phonetic: '/ˈpɒs.ə.bəl/', pos: '形容詞' }
      ],
      grammarPoints: ['anything is possible：何でも可能である']
    },
    {
      id: 'al-47',
      slideNumber: 47,
      text: 'After a while she locked the door again, got up and went back to the glass table.',
      translation: 'しばらくして彼女はドアに再び鍵をかけ、立ち上がってガラスのテーブルへと戻りました。',
      literalTranslation: '(しばらくして彼女はドアに再び鍵をかけた / 立ち上がり / ガラスのテーブルへ戻った)',
      vocabulary: [
        { word: 'again', meaning: '再び、もう一度', phonetic: '/əˈɡen/', pos: '副詞' }
      ],
      grammarPoints: ['after a while：しばらくして', 'go back to：〜へ戻る']
    },
    {
      id: 'al-48',
      slideNumber: 48,
      text: 'The taste was very nice, like chocolate and oranges and hot sweet coffee, and very soon Alice finished the bottle.',
      translation: '味はチョコレートやオレンジ、温かく甘いコーヒーのようでとても美味しく、アリスはすぐにその小瓶を飲み干してしまいました。',
      literalTranslation: '(味はとても良かった / チョコレートやオレンジや甘い温かいコーヒーのようで / そしてまもなくアリスはその瓶を飲み干した)',
      vocabulary: [
        { word: 'taste', meaning: '味、風味', phonetic: '/teɪst/', pos: '名詞' },
        { word: 'bottle', meaning: '小瓶、ボトル', phonetic: '/ˈbɒt.əl/', pos: '名詞' }
      ],
      grammarPoints: ['finish the bottle：小瓶を飲み干す']
    },
    {
      id: 'al-49',
      slideNumber: 49,
      text: "'What a strange feeling!' said Alice. 'I think I'm getting smaller and smaller every second.' And she was.",
      translation: '「なんて不思議な感覚なの！」とアリスは言いました。「1秒ごとにどんどん小さくなっている気がするわ。」そして、本当にその通りでした。',
      literalTranslation: '(「なんて奇妙な感覚かしら！」アリスは言った / 「私は毎秒ますます小さくなっていると思うわ」 / そして実際そうだった)',
      vocabulary: [
        { word: 'feeling', meaning: '感覚、気持ち', phonetic: '/ˈfiː.lɪŋ/', pos: '名詞' }
      ],
      grammarPoints: ['smaller and smaller：ますます小さく（比較級 and 比較級）', 'every second：一秒ごとに']
    },
    {
      id: 'al-50',
      slideNumber: 50,
      text: 'A few minutes later she was only twentyfive centimetres high.',
      translation: '数分後、彼女の身長はわずか25センチになっていました。',
      literalTranslation: '(数分後 / 彼女はわずか25センチの高さだった)',
      vocabulary: [
        { word: 'twentyfive', meaning: '25', phonetic: '/ˌtwen.tiˈfaɪv/', pos: '数詞' }
      ],
      grammarPoints: ['a few minutes later：数分後', 'twentyfive centimetres high：高さ25センチ']
    },
    {
      id: 'al-51',
      slideNumber: 51,
      text: "'And now,' she said happily, 'I can get through the little door into that beautiful garden.'",
      translation: '「これで、」と彼女は嬉しそうに言いました。「あの小さなドアを通って、あの美しい庭へ行けるわ。」',
      literalTranslation: '(「そして今や」彼女は嬉しそうに言った / 「私は小さなドアを通って行けるわ / あの美しい庭の中へ」)',
      vocabulary: [
        { word: 'happily', meaning: '嬉しそうに、幸福に', phonetic: '/ˈhæp.əl.i/', pos: '副詞' }
      ],
      grammarPoints: ['get through ~ into ...：〜を通って…に入る']
    },
    {
      id: 'al-52',
      slideNumber: 52,
      text: 'She ran at once to the door. When she got there, she remembered that the little gold key was back on the glass table.',
      translation: '彼女はすぐにドアへ走りました。そこに着いたとき、小さな金の鍵がガラスのテーブルの上に置いたままだったことを思い出しました。',
      literalTranslation: '(彼女はすぐにドアへ走った / そこに着いたとき / 彼女は思い出した / 小さな金の鍵がガラスのテーブルに戻ったままだと)',
      vocabulary: [
        { word: 'remembered', meaning: '思い出した', phonetic: '/rɪˈmem.bəd/', pos: '動詞' }
      ],
      grammarPoints: ['when she got there：そこに着いたとき']
    },
    {
      id: 'al-53',
      slideNumber: 53,
      text: 'She ran back to the table for it, but of course, she was now much too small!',
      translation: 'それを取りにテーブルへ走って戻りましたが、もちろん、今の彼女は小さすぎました！',
      literalTranslation: '(彼女はそれを取りにテーブルへ走って戻った / しかしもちろん / 彼女は今やあまりに小さすぎた！)',
      vocabulary: [
        { word: 'course', meaning: 'もちろん（of course）', phonetic: '/kɔːs/', pos: '名詞' }
      ],
      grammarPoints: ['ran back for it：それを取りに戻った']
    },
    {
      id: 'al-54',
      slideNumber: 54,
      text: 'There was the key, high above her, on top of the table. She tried very hard to climb up the table leg, but she could not do it.',
      translation: '鍵は彼女のずっと頭上高く、テーブルの上にありました。テーブルの脚を登ろうと懸命に試みましたが、登ることはできませんでした。',
      literalTranslation: '(鍵があった / 彼女のずっと高い頭上に / テーブルの上の / 彼女は一生懸命登ろうとした / テーブルの脚を / しかし彼女にはできなかった)',
      vocabulary: [
        { word: 'climb', meaning: '登る、よじ登る', phonetic: '/klaɪm/', pos: '動詞' }
      ],
      grammarPoints: ['try hard to do：懸命に〜しようとする']
    },
    {
      id: 'al-55',
      slideNumber: 55,
      text: 'At last, tired and unhappy, Alice sat down on the floor and cried.',
      translation: 'とうとう疲れ果てて悲しくなり、アリスは床に座り込んで泣きました。',
      literalTranslation: '(ついに / 疲れ悲しくなって / アリスは床に座り込んで泣いた)',
      vocabulary: [
        { word: 'tired', meaning: '疲れた', phonetic: '/taɪəd/', pos: '形容詞' }
      ],
      grammarPoints: ['at last：ついに、とうとう', 'tired and unhappy：分詞構文的補語']
    },
    {
      id: 'al-56',
      slideNumber: 56,
      text: "But after a while she spoke to herself angrily. 'Come now,' she said. 'Stop crying at once. What's the use of crying?'",
      translation: 'しかししばらくして、彼女は自分に怒ったように言い聞かせました。「さあ、泣くのはすぐにおやめ。泣いたって何の役にも立たないじゃない？」',
      literalTranslation: '(しかししばらくして彼女は自分に怒って話しかけた / 「さあ」彼女は言った / 「泣くのをすぐにやめなさい / 泣くことに何の使い道があるの？」)',
      vocabulary: [
        { word: 'angrily', meaning: '怒って、腹を立てて', phonetic: '/ˈæŋ.ɡrəl.i/', pos: '副詞' }
      ],
      grammarPoints: ['stop crying：泣くのをやめる', 'come now：さあさあ、いいかげんにして']
    },
    {
      id: 'al-57',
      slideNumber: 57,
      text: 'She was a strange child, and often talked to herself like this.',
      translation: '彼女は少し変わった子どもで、よくこうして独り言を言っていました。',
      literalTranslation: '(彼女は奇妙な子どもだった / そしてしばしば自分にこのように話しかけた)',
      vocabulary: [
        { word: 'often', meaning: 'しばしば、よく', phonetic: '/ˈɒf.ən/', pos: '副詞' }
      ],
      grammarPoints: ['like this：このように']
    },
    {
      id: 'al-58',
      slideNumber: 58,
      text: 'Soon she saw a little glass box near her on the floor. She opened it, and found a very small cake with the words EAT ME on it.',
      translation: 'まもなく、床の近くに小さなガラスの箱があるのが見えました。開けてみると、そこに「私を食べて」という文字がついたごく小さなケーキが入っていました。',
      literalTranslation: '(まもなく彼女は小さなガラスの箱を見た / 床の自分の近くに / 彼女はそれを開けた / そしてとても小さなケーキを見つけた / 「私を食べて」という言葉がついた)',
      vocabulary: [
        { word: 'words', meaning: '言葉、文字', phonetic: '/wɜːdz/', pos: '名詞' }
      ],
      grammarPoints: ['with the words EAT ME on it：付帯状況のwith']
    },
    {
      id: 'al-59',
      slideNumber: 59,
      text: "Nothing could surprise Alice now. 'Well, I'll eat it,' she said.",
      translation: 'もう今のアリスには何も驚きではありませんでした。「よし、食べてみよう」と彼女は言いました。',
      literalTranslation: '(今は何もアリスを驚かせることができなかった / 「ええい、食べてみるわ」彼女は言った)',
      vocabulary: [
        { word: 'surprise', meaning: '驚かせる', phonetic: '/səˈpraɪz/', pos: '動詞' }
      ],
      grammarPoints: ['nothing could surprise：何ものも驚かせられない']
    },
    {
      id: 'al-60',
      slideNumber: 60,
      text: "'If I get taller, I can take the key off the table. And if I get smaller, I can get under the door.'",
      translation: '「もし背が伸びたら、テーブルの鍵を取れる。もしもっと小さくなったら、ドアの下をくぐり抜けられるわ。」',
      literalTranslation: '(「もし背が高くなれば / テーブルから鍵を取ることができる / そしてもし小さくなれば / ドアの下をくぐることができる」)',
      vocabulary: [
        { word: 'taller', meaning: 'より背が高い', phonetic: '/ˈtɔː.lər/', pos: '形容詞 (比較級)' }
      ],
      grammarPoints: ['get taller：背が高くなる', 'take off：〜から取り外す']
    },
    {
      id: 'al-61',
      slideNumber: 61,
      text: "'One way or another, I'll get into the garden. So it doesn't matter what happens!'",
      translation: '「どうにかして庭に入るんだから。だから何が起きたってかまわないわ！」',
      literalTranslation: '(「どちらかの方法で / 私は庭に入るわ / だから何が起ころうと問題ではない！」)',
      vocabulary: [
        { word: 'matter', meaning: '問題である、重要である', phonetic: '/ˈmæt.ər/', pos: '動詞' }
      ],
      grammarPoints: ['one way or another：あれこれの方法で、どうにかして', "it doesn't matter：問題ではない"]
    },
    {
      id: 'al-62',
      slideNumber: 62,
      text: 'She ate a bit of the cake, and then put her hand on top of her head.',
      translation: '彼女はケーキを少し食べ、それから頭の上に手を置きました。',
      literalTranslation: '(彼女はケーキを少し食べた / そして頭の上に手を置いた)',
      vocabulary: [
        { word: 'head', meaning: '頭、頭部', phonetic: '/hed/', pos: '名詞' }
      ],
      grammarPoints: ['a bit of ~：少しの〜']
    },
    {
      id: 'al-63',
      slideNumber: 63,
      text: "'Which way? Which way?' she asked herself, a little afraid.",
      translation: '「どっち？どっちに伸びるのかしら？」と彼女は少し怖がりながら自問しました。',
      literalTranslation: '(「どちらの向き？どちらの向き？」彼女は自分に尋ねた / 少し怯えて)',
      vocabulary: [
        { word: 'afraid', meaning: '恐れて、心配して', phonetic: '/əˈfreɪd/', pos: '形容詞' }
      ],
      grammarPoints: ['ask oneself：自問する', 'a little afraid：少し怖がりながら']
    },
    {
      id: 'al-64',
      slideNumber: 64,
      text: 'Nothing happened. This was not really surprising. People don\'t usually get taller or shorter when they eat cake.',
      translation: '何も起こりませんでした。それは実際驚くことでもありません。人は普段、ケーキを食べたからといって背が伸びたり縮んだりしないからです。',
      literalTranslation: '(何も起こらなかった / これは本当に驚くべきことではなかった / 人は普通背が高くなったり低くなったりしない / ケーキを食べるとき)',
      vocabulary: [
        { word: 'usually', meaning: '普段は、普通は', phonetic: '/ˈjuː.ʒu.ə.li/', pos: '副詞' },
        { word: 'shorter', meaning: 'より背が低い', phonetic: '/ˈʃɔː.tər/', pos: '形容詞' }
      ],
      grammarPoints: ['get taller or shorter：背が高くなったり低くなったりする']
    },
    {
      id: 'al-65',
      slideNumber: 65,
      text: "But a lot of strange things were happening to Alice today. 'It will be very boring,' she said, 'if nothing happens.' So she went on eating, and very soon the cake was finished.",
      translation: 'しかし今日のアリスにはたくさんの不思議なことが起きていました。「何も起きないなんてとても退屈だわ」と彼女は言いました。そこで食べ続け、やがてケーキはなくなりました。',
      literalTranslation: '(しかし今日のアリスには多くの奇妙なことが起きていた / 「とても退屈だわ」彼女は言った / 「もし何も起きなければ」 / そこで彼女は食べ続け / まもなくケーキはなくなった)',
      vocabulary: [
        { word: 'boring', meaning: '退屈な', phonetic: '/ˈbɔː.rɪŋ/', pos: '形容詞' }
      ],
      grammarPoints: ['go on doing：〜し続ける', 'finished：終わった、なくなった']
    },

    // Chapter 2: The Pool of Tears
    {
      id: 'al-66',
      slideNumber: 66,
      text: "'Curiouser and curiouser!' said Alice. (She was very surprised, and for a minute she forgot how to speak good English.)",
      translation: '「ますます奇妙だわ！」とアリスは言いました。（あまりの驚きに、一瞬きちんとした英語の話し方を忘れてしまったのです。）',
      literalTranslation: '(「ますます奇妙奇天烈だわ！」アリスは言った / (彼女はとても驚いていた / そして少しの間正しい英語の話し方を忘れてしまった))',
      vocabulary: [
        { word: 'curiouser', meaning: '奇妙な（アリスの作った造語比較級）', phonetic: '/ˈkjʊə.ri.ə.sər/', pos: '形容詞' }
      ],
      grammarPoints: ['curiouser and curiouser：アリスの名台詞造語', 'how to speak：話し方']
    },
    {
      id: 'al-67',
      slideNumber: 67,
      text: "'I shall be as tall as a house in a minute,' she said.",
      translation: '「もうすぐ家と同じくらいの背の高さになっちゃうわ」と彼女は言いました。',
      literalTranslation: '(「もうすぐ家と同じ背の高さになるでしょう」彼女は言った)',
      vocabulary: [
        { word: 'house', meaning: '家、建物', phonetic: '/haʊs/', pos: '名詞' }
      ],
      grammarPoints: ['as tall as ~：〜と同じくらい背が高い', 'in a minute：すぐに、まもなく']
    },
    {
      id: 'al-68',
      slideNumber: 68,
      text: "She tried to look down at her feet, and could only just see them. 'Goodbye, feet!' she called.",
      translation: '足元を見下ろそうとしましたが、かろうじて見えるくらいでした。「さようなら、私の足！」と彼女は呼びかけました。',
      literalTranslation: '(彼女は自分の足を見下ろそうとした / そしてかろうじてそれらが見えるだけだった / 「さようなら、足さん！」彼女は叫んだ)',
      vocabulary: [
        { word: 'feet', meaning: '足（footの複数形）', phonetic: '/fiːt/', pos: '名詞' }
      ],
      grammarPoints: ['look down at：〜を見下ろす', 'only just：かろうじて〜だけ']
    },
    {
      id: 'al-69',
      slideNumber: 69,
      text: "'Who will put on your shoes now? Oh dear! What nonsense I'm talking!' Just then her head hit the ceiling of the room.",
      translation: '「これからは誰があなたの靴を履かせてくれるの？まあ！なんてくだらないことを言っているのかしら！」ちょうどその時、彼女の頭が部屋の天井にぶつかりました。',
      literalTranslation: '(「今は誰が靴を履かせてくれるの？ / おやまあ！ / なんて馬鹿げたことを言っているの！」 / ちょうどその時彼女の頭が天井に当たった)',
      vocabulary: [
        { word: 'nonsense', meaning: '無意味なこと、たわ言', phonetic: '/ˈnɒn.səns/', pos: '名詞' },
        { word: 'ceiling', meaning: '天井', phonetic: '/ˈsiː.lɪŋ/', pos: '名詞' }
      ],
      grammarPoints: ['put on：身につける、履く', 'hit the ceiling：天井にぶつかる']
    },
    {
      id: 'al-70',
      slideNumber: 70,
      text: 'She was now about three metres high. Quickly, she took the little gold key from the table and hurried to the garden door.',
      translation: '彼女の身長は今や約3メートルになっていました。急いでテーブルから小さな金の鍵を取り、庭のドアへと駆け寄りました。',
      literalTranslation: '(彼女は今や約3メートルの高さだった / 素早く彼女は小さな金の鍵をテーブルから取った / そして庭のドアへ急いだ)',
      vocabulary: [
        { word: 'metres', meaning: 'メートル', phonetic: '/ˈmiː.təz/', pos: '名詞' }
      ],
      grammarPoints: ['three metres high：高さ3メートル']
    },
    {
      id: 'al-71',
      slideNumber: 71,
      text: 'Poor Alice! She lay on the floor and looked into the garden with one eye. She could not even put her head through the door.',
      translation: 'かわいそうなアリス！彼女は床に横たわり、片目で庭を覗き込みました。頭をドアに通すことさえできませんでした。',
      literalTranslation: '(かわいそうなアリス！ / 彼女は床に横たわり片目で庭を覗いた / 彼女は頭をドアに通すことさえできなかった)',
      vocabulary: [
        { word: 'even', meaning: '〜でさえ', phonetic: '/ˈiː.vən/', pos: '副詞' }
      ],
      grammarPoints: ['could not even do：〜することさえできなかった']
    },
    {
      id: 'al-72',
      slideNumber: 72,
      text: 'She began to cry again, and went on crying and crying. The tears ran down her face, and soon there was a large pool of water all around her on the floor.',
      translation: '彼女はまた泣き始め、泣いて泣いて泣き続けました。涙が頬を伝い落ち、やがて床一面の彼女の周りに大きな水たまりができました。',
      literalTranslation: '(彼女は再び泣き始めた / そして泣いて泣き続けた / 涙が顔を流れ落ちた / そしてまもなく床の彼女の周り中に大きな水たまりができた)',
      vocabulary: [
        { word: 'tears', meaning: '涙', phonetic: '/tɪəz/', pos: '名詞' },
        { word: 'pool', meaning: '水たまり、プール', phonetic: '/puːl/', pos: '名詞' }
      ],
      grammarPoints: ['go on doing：〜し続ける', 'pool of tears：涙の池']
    },
    {
      id: 'al-73',
      slideNumber: 73,
      text: "Suddenly she heard a voice, and she stopped crying to listen. 'Oh, the Duchess, the Duchess! She'll be so angry! I'm late and she's waiting for me. Oh dear, oh dear!'",
      translation: '突然声が聞こえ、彼女は聞くために泣き止みました。「おお、公爵夫人、公爵夫人！ひどくお怒りになるだろう！遅刻して待たせている！大変だ、大変だ！」',
      literalTranslation: '(突然彼女は声を聞いた / そして耳を傾けるために泣くのをやめた / 「おお公爵夫人、公爵夫人！ / 彼女はとても怒るだろう！ / 私は遅刻して彼女が待っている / 大変だ、大変だ！」)',
      vocabulary: [
        { word: 'Duchess', meaning: '公爵夫人', phonetic: '/ˈdʌtʃ.ɪs/', pos: '名詞' }
      ],
      grammarPoints: ['stop crying to listen：聞くために泣くのを止める']
    },
    {
      id: 'al-74',
      slideNumber: 74,
      text: 'It was the White Rabbit again. He was hurrying down the long room with some white gloves in one hand and a large fan in the other hand.',
      translation: 'また白ウサギでした。片手に白い手袋、もう一方の手に大きな扇子を持って、長い部屋を急ぎ足で歩いていました。',
      literalTranslation: '(再び白ウサギだった / 彼は長い部屋を急いでいた / 片手に白い手袋を持ち / もう片方の手に大きな扇子を持って)',
      vocabulary: [
        { word: 'gloves', meaning: '手袋（複数形）', phonetic: '/ɡlʌvz/', pos: '名詞' },
        { word: 'fan', meaning: '扇子、うちわ', phonetic: '/fæn/', pos: '名詞' }
      ],
      grammarPoints: ['in one hand ..., in the other hand ...：一方の手に…、もう一方の手に…']
    },
    {
      id: 'al-75',
      slideNumber: 75,
      text: "Alice was afraid, but she needed help. She spoke in a quiet voice. 'Oh, please, sir—' The Rabbit jumped wildly, dropped the gloves and the fan, and hurried away as fast as he could.",
      translation: 'アリスは怖かったのですが、助けが必要でした。静かな声で話しかけました。「あの、お願いです、旦那様—」ウサギは飛び上がって驚き、手袋と扇子を取り落とし、大急ぎで逃げ去りました。',
      literalTranslation: '(アリスは怖かったが助けを必要とした / 彼女は静かな声で話した / 「あの、お願いです旦那様—」 / ウサギは激しく跳び上がり / 手袋と扇子を落とし / できる限り速く急ぎ去った)',
      vocabulary: [
        { word: 'wildly', meaning: '激しく、取り乱して', phonetic: '/ˈwaɪld.li/', pos: '副詞' },
        { word: 'dropped', meaning: '落とした', phonetic: '/drɒpt/', pos: '動詞' }
      ],
      grammarPoints: ['as fast as he could：できるかぎり速く']
    },
    {
      id: 'al-76',
      slideNumber: 76,
      text: "Alice picked up the fan and the gloves. The room was very hot, so she began to fan herself while she talked. 'Oh dear! How strange everything is today!'",
      translation: 'アリスは扇子と手袋を拾い上げました。部屋がとても暑かったので、独り言を言いながら自分を扇ぎ始めました。「まあ！今日はなんて何もかも奇妙なんでしょう！」',
      literalTranslation: '(アリスは扇子と手袋を拾い上げた / 部屋はとても暑かった / だから話しながら自分を扇ぎ始めた / 「おやまあ！今日はすべてがなんて奇妙なんでしょう！」)',
      vocabulary: [
        { word: 'picked', meaning: '拾い上げた（pick up）', phonetic: '/pɪkt/', pos: '動詞' }
      ],
      grammarPoints: ['fan oneself：自分を扇ぐ', 'while she talked：話しながら']
    },
    {
      id: 'al-77',
      slideNumber: 77,
      text: "'Did I change in the night? Am I a different person today? But if I'm a different person, then the next question is - who am I? Ah, that's the mystery.'",
      translation: '「夜の間に変わってしまったのかしら？今日の私は違う人なの？でも違う人だとしたら、次の問題は——私は誰なのかしら？ああ、それこそが謎だわ。」',
      literalTranslation: '(「私は夜の間に変わったの？ / 私は今日違う人間なの？ / しかしもし違う人なら / 次の問いは—私は誰？ / ああ、それこそが謎ね」)',
      vocabulary: [
        { word: 'mystery', meaning: '謎、神秘', phonetic: '/ˈmɪs.tər.i/', pos: '名詞' }
      ],
      grammarPoints: ['in the night：夜の間に', 'different person：別人']
    },
    {
      id: 'al-78',
      slideNumber: 78,
      text: "She began to feel very unhappy again, but then she looked down at her hand. She was wearing one of the Rabbit's white gloves.",
      translation: 'またとても悲しくなり始めましたが、そのとき手元を見下ろしました。ウサギの白い手袋の片方をはめていたのです。',
      literalTranslation: '(彼女は再びとても悲しくなり始めた / しかしそのとき手を見下ろした / 彼女はウサギの白い手袋の片方を身につけていた)',
      vocabulary: [
        { word: 'wearing', meaning: '身につけている', phonetic: '/ˈweə.rɪŋ/', pos: '動詞' }
      ],
      grammarPoints: ['wear：身につける、はめる']
    },
    {
      id: 'al-79',
      slideNumber: 79,
      text: "'How did I get it on my hand?' she thought. 'Oh, I'm getting smaller again!' She looked round the room. 'I'm already less than a metre high. And getting smaller every second! How can I stop it?'",
      translation: '「どうやって手にはめたのかしら？」と彼女は思いました。「あら、私、また小さくなっているわ！」部屋を見回しました。「もう1メートルもない。しかも1秒ごとに小さくなっている！どうやって止めればいいの？」',
      literalTranslation: '(「どうやって私は手にはめたの？」彼女は思った / 「あら、私はまた小さくなっている！」 / 彼女は部屋を見回した / 「もう1メートル以下だわ / そして毎秒小さくなっている！ / どうやって止められるの？」)',
      vocabulary: [
        { word: 'already', meaning: 'すでに、もう', phonetic: '/ɔːlˈred.i/', pos: '副詞' }
      ],
      grammarPoints: ['less than ~：〜未満', 'get smaller every second：毎秒小さくなる']
    },
    {
      id: 'al-80',
      slideNumber: 80,
      text: 'She saw the fan in her other hand and quickly dropped it. She was now very, very small and the little garden door was locked again, and the little gold key was lying on the glass table.',
      translation: 'もう一方の手に扇子があるのを見て、素早く落としました。彼女は今やとても小さくなり、庭の小さなドアはまた鍵がかかっており、小さな金の鍵はガラスのテーブルの上に置かれたままでした。',
      literalTranslation: '(彼女はもう一方の手に扇子があるのを見た / そして素早く落とした / 彼女は今やとても小さかった / そして庭の小さなドアは再び施錠されていた / そして小さな金の鍵はガラスのテーブルの上に横たわっていた)',
      vocabulary: [
        { word: 'lying', meaning: '横たわっている（lieの現在分詞）', phonetic: '/ˈlaɪ.ɪŋ/', pos: '現在分詞' }
      ],
      grammarPoints: ['in her other hand：もう一方の手に', 'lying on the table：テーブルの上に置かれて']
    },
    {
      id: 'al-81',
      slideNumber: 81,
      text: "'Things are worse than ever,' thought poor Alice. She turned away from the door, and fell into salt water, right up to her neck.",
      translation: '「事態はこれまで以上に悪化しちゃったわ」とかわいそうなアリスは思いました。ドアから背を向けた途端、首まで浸かるほどの塩水に落ちてしまいました。',
      literalTranslation: '(「状況はこれまで以上に悪いわ」かわいそうなアリスは思った / 彼女はドアから背を向けた / そして塩水に落ちた / ちょうど首の高さまで)',
      vocabulary: [
        { word: 'worse', meaning: 'より悪い（badの比較級）', phonetic: '/wɜːs/', pos: '形容詞' },
        { word: 'neck', meaning: '首', phonetic: '/nek/', pos: '名詞' }
      ],
      grammarPoints: ['worse than ever：これまで以上に悪い', 'right up to：〜のところまで']
    },
    {
      id: 'al-82',
      slideNumber: 82,
      text: 'At first she thought it was the sea, but then she saw it was the pool of tears. Her tears. Crying makes a lot of tears when you are three metres tall.',
      translation: '最初は海かと思いましたが、やがて涙の池だと分かりました。彼女自身の涙です。身長3メートルのときには、泣くと大量の涙が出るのです。',
      literalTranslation: '(最初彼女はそれが海だと思った / しかし涙の池だと分かった / 彼女の涙だ / 泣くことは多くの涙を生む / 身長3メートルのときには)',
      vocabulary: [
        { word: 'sea', meaning: '海', phonetic: '/siː/', pos: '名詞' }
      ],
      grammarPoints: ['at first：最初は', 'three metres tall：身長3メートル']
    },
    {
      id: 'al-83',
      slideNumber: 83,
      text: "'Oh, why did I cry so much?' said Alice. She swam around and looked for a way out, but the pool was very big.",
      translation: '「ああ、どうしてあんなにたくさん泣いてしまったのかしら？」とアリスは言いました。彼女は泳ぎ回り出口を探しましたが、池はとても広大でした。',
      literalTranslation: '(「ああ、なぜ私はあんなに泣いたのかしら？」アリスは言った / 彼女は泳ぎ回り出口を探した / しかし池はとても大きかった)',
      vocabulary: [
        { word: 'swam', meaning: '泳いだ（swimの過去形）', phonetic: '/swæm/', pos: '動詞' }
      ],
      grammarPoints: ['look for：〜を探す', 'a way out：出口、逃げ道']
    },
    {
      id: 'al-84',
      slideNumber: 84,
      text: "Just then she saw an animal in the water near her. It looked like a large animal to Alice, but it was only a mouse. 'Shall I speak to it?' thought Alice.",
      translation: 'ちょうどその時、近くの水の中に動物が見えました。アリスには大きな動物に見えましたが、ただのネズミでした。「話しかけてみようかしら？」とアリスは思いました。',
      literalTranslation: '(ちょうどその時彼女は水中に動物を見た / 彼女の近くで / アリスには大きな動物に見えた / しかしそれは単なるネズミだった / 「話しかけてみようかしら？」アリスは思った)',
      vocabulary: [
        { word: 'animal', meaning: '動物', phonetic: '/ˈæn.ɪ.məl/', pos: '名詞' },
        { word: 'mouse', meaning: 'ネズミ', phonetic: '/maʊs/', pos: '名詞' }
      ],
      grammarPoints: ['look like ~：〜のように見える', 'Shall I do?：〜しましょうか']
    },
    {
      id: 'al-85',
      slideNumber: 85,
      text: "'Everything's very strange down here, so perhaps a mouse can talk.' So she began: 'Oh Mouse, do you know the way out of this pool? I am very tired of swimming, oh Mouse!'",
      translation: '「ここでは何もかも奇妙だから、ネズミだって話せるかもしれないわ。」そこで彼女はこう切り出しました。「ネズミさん、この池から出る道をご存知ですか？私、泳ぎ疲れてしまったのです、ネズミさん！」',
      literalTranslation: '(「ここではすべてがとても奇妙だ / だからおそらくネズミも話せるわ」 / そこで彼女は始めた / 「ねえネズミさん、この池の出口を知っていますか？ / 私は泳ぐのにとても疲れました、ネズミさん！」)',
      vocabulary: [
        { word: 'tired of', meaning: '〜に飽きて、〜に疲れて', phonetic: '/taɪəd/', pos: '熟語' }
      ],
      grammarPoints: ['be tired of doing：〜するのにうんざりしている・疲れている']
    },
    {
      id: 'al-86',
      slideNumber: 86,
      text: 'Alice did not know if this was the right way to speak to a mouse. But she wanted to be polite.',
      translation: '（これがネズミに対する正しい話しかけ方なのかアリスには分かりませんでしたが、礼儀正しくありたかったのです。）',
      literalTranslation: '(アリスは分からなかった / これがネズミに話しかける正しい方法かどうか / しかし彼女は礼儀正しくありたかった)',
      vocabulary: [
        { word: 'polite', meaning: '礼儀正しい、丁寧な', phonetic: '/pəˈlaɪt/', pos: '形容詞' }
      ],
      grammarPoints: ['know if ~：〜かどうか知る', 'the right way to do：〜する正しい方法']
    },
    {
      id: 'al-87',
      slideNumber: 87,
      text: "The mouse looked at her with its little eyes, but it said nothing. 'Perhaps it doesn't understand English,' thought Alice. 'Perhaps it's a French mouse.'",
      translation: 'ネズミは小さな目で彼女を見ましたが、何も言いませんでした。「たぶん英語が分からないんだわ」とアリスは思いました。「フランスのネズミかもしれないわ。」',
      literalTranslation: '(ネズミはその小さな目で彼女を見た / しかし何も言わなかった / 「おそらく英語が理解できないのね」アリスは思った / 「おそらくフランスのネズミだわ」)',
      vocabulary: [
        { word: 'French', meaning: 'フランスの、フランス人の', phonetic: '/frentʃ/', pos: '形容詞' }
      ],
      grammarPoints: ['understand English：英語を理解する']
    },
    {
      id: 'al-88',
      slideNumber: 88,
      text: "So she began again, and said in French: 'Where is my cat?' (This was the first sentence in her French lesson-book.)",
      translation: 'そこで彼女はフランス語で「私の猫はどこ？」と言い直しました。（これは彼女のフランス語の教科書の最初の文でした。）',
      literalTranslation: '(そこで彼女は再び始めた / そしてフランス語で言った / 「私の猫はどこ？」 / (これは彼女のフランス語の教科書の最初の文だった))',
      vocabulary: [
        { word: 'sentence', meaning: '文章、文', phonetic: '/ˈsen.təns/', pos: '名詞' }
      ],
      grammarPoints: ['in French：フランス語で']
    },
    {
      id: 'al-89',
      slideNumber: 89,
      text: "The mouse jumped half out of the water and looked at her angrily. 'Oh, I'm so sorry!' cried Alice quickly. 'Of course, you don't like cats, do you?'",
      translation: 'ネズミは水から半分飛び上がり、怒って彼女を睨みつけました。「ああっ、ごめんなさい！」アリスは慌てて叫びました。「もちろん猫はお好きじゃないですよね？」',
      literalTranslation: '(ネズミは水から半分飛び上がった / そして怒って彼女を見た / 「ああ、本当にごめんなさい！」アリスは素早く叫んだ / 「もちろん猫は好きじゃないですよね？」)',
      vocabulary: [
        { word: 'angrily', meaning: '怒って', phonetic: '/ˈæŋ.ɡrəl.i/', pos: '副詞' }
      ],
      grammarPoints: ['half out of the water：水から半分出て', '付加疑問文：..., do you?']
    },
    {
      id: 'al-90',
      slideNumber: 90,
      text: "'Like cats?' cried the mouse in a high, angry voice. 'Does any mouse like cats?' 'Well, perhaps not,' Alice began kindly.",
      translation: '「猫が好きですって？」とネズミはかん高い怒った声で叫びました。「猫を好きなネズミがどこにいるっていうんだい？」「ええ、確かにそうですね」とアリスは優しく言い始めました。',
      literalTranslation: '(「猫が好きだと？」ネズミは叫んだ / 高く怒った声で / 「猫が好きなネズミがいるかい？」 / 「そうですね、たぶんいないわね」アリスは優しく言った)',
      vocabulary: [
        { word: 'kindly', meaning: '親切に、優しく', phonetic: '/ˈkaɪnd.li/', pos: '副詞' }
      ],
      grammarPoints: ['in a high voice：甲高い声で']
    },
    {
      id: 'al-91',
      slideNumber: 91,
      text: 'But the mouse was now swimming quickly away, and soon Alice was alone again.',
      translation: 'しかしネズミはもう素早く泳ぎ去ってしまい、まもなくアリスはまた一人ぼっちになりました。',
      literalTranslation: '(しかしネズミは今やすばやく泳ぎ去っていた / そしてまもなくアリスは再び一人になった)',
      vocabulary: [
        { word: 'alone', meaning: 'ひとりで、孤立して', phonetic: '/əˈləʊn/', pos: '形容詞' }
      ],
      grammarPoints: ['swim away：泳ぎ去る']
    },
    {
      id: 'al-92',
      slideNumber: 92,
      text: 'At last she found her way out of the pool and sat down on the ground. She felt very lonely and unhappy.',
      translation: 'ついに彼女は池からの脱出路を見つけ、地面の上に座りました。とても孤独で悲しい気持ちでした。',
      literalTranslation: '(ついに彼女は池からの出口を見つけた / そして地面に座った / 彼女はとても孤独で悲しく感じた)',
      vocabulary: [
        { word: 'lonely', meaning: '孤独な、寂しい', phonetic: '/ˈləʊn.li/', pos: '形容詞' }
      ],
      grammarPoints: ['find one\'s way out：出口を見つける']
    },

    // Chapter 3: Advice from a Caterpillar
    {
      id: 'al-93',
      slideNumber: 93,
      text: "But after a while the White Rabbit came past again, looking for his white gloves and his fan. 'The Duchess! The Duchess! Oh my ears and whiskers! She'll cut my head off, I know she will! Oh, where did I drop my gloves?'",
      translation: 'しかししばらくすると、白ウサギが白い手袋と扇子を探しながら、再び通りかかりました。「公爵夫人！公爵夫人！おや私の耳とヒゲにかけて！首をはねられてしまう、絶対にそうだ！ああ、どこに手袋を落としたんだ？」',
      literalTranslation: '(しかししばらくして白ウサギが再び通りかかった / 白い手袋と扇子を探しながら / 「公爵夫人！公爵夫人！ / おや私の耳とヒゲよ！ / 首を切り落とされるぞ、絶対に！ / ああ、どこで手袋を落としたんだ？」)',
      vocabulary: [
        { word: 'cut off', meaning: '切り落とす、切断する', phonetic: '/kʌt/', pos: '熟語' }
      ],
      grammarPoints: ['looking for ~：分詞構文（〜を探しながら）']
    },
    {
      id: 'al-94',
      slideNumber: 94,
      text: "Then he saw Alice. 'Why, Mary Ann, what are you doing here? Run home at once, and bring me some gloves and a fan. Quick, now!' Alice hurried away.",
      translation: 'そのときウサギはアリスを見つけました。「おや、メアリー・アン、ここで何をしているんだ？すぐに走って家に帰り、手袋と扇子を持ってくるんだ。さあ早く！」アリスは急いで立ち去りました。',
      literalTranslation: '(そのとき彼はアリスを見た / 「おや、メアリー・アン、ここで何をしている？ / すぐに家へ走って / 手袋と扇子を持ってきなさい / さあ早く！」 / アリスは急いで立ち去った)',
      vocabulary: [
        { word: 'bring', meaning: '持ってくる', phonetic: '/brɪŋ/', pos: '動詞' }
      ],
      grammarPoints: ['run home：家へ走って帰る', 'at once：直ちに']
    },
    {
      id: 'al-95',
      slideNumber: 95,
      text: "'But where is his house?' she thought while she ran. Strangely, she was no longer in the long room with the little door, but outside in a wood.",
      translation: '「でも彼の家はどこかしら？」と走りながら思いました。不思議なことに、彼女はもう小さなドアのある長い部屋にはおらず、外の森の中にいました。',
      literalTranslation: '(「でも彼の家はどこ？」走りながら彼女は思った / 不思議なことに彼女はもはや長い部屋にはいなかった / 小さなドアのある / 森の屋外にいた)',
      vocabulary: [
        { word: 'strangely', meaning: '不思議なことに、奇妙に', phonetic: '/ˈstreɪndʒ.li/', pos: '副詞' }
      ],
      grammarPoints: ['no longer：もはや〜ない', 'while she ran：走りながら']
    },
    {
      id: 'al-96',
      slideNumber: 96,
      text: 'She ran and ran but could not see a house anywhere, so she sat down under a mushroom to rest, where was a large caterpillar, smoking a pipe.',
      translation: '走って走って走りましたが、どこにも家は見当たらず、休むためにキノコの下に座りました。そこにはパイプをくゆらす大きなイモムシがいました。',
      literalTranslation: '(彼女は走り続けたが家はどこにも見えなかった / そこで彼女は休むためにキノコの下に座った / そこにはパイプを吸う大きなイモムシがいた)',
      vocabulary: [
        { word: 'caterpillar', meaning: 'イモムシ、毛虫', phonetic: '/ˈkæt.ə.pɪl.ər/', pos: '名詞' },
        { word: 'pipe', meaning: 'パイプ、煙管', phonetic: '/paɪp/', pos: '名詞' },
        { word: 'mushroom', meaning: 'キノコ', phonetic: '/ˈmʌʃ.ruːm/', pos: '名詞' }
      ],
      grammarPoints: ['ran and ran：走り続けた', 'smoking a pipe：パイプを吸っている']
    },
    {
      id: 'al-97',
      slideNumber: 97,
      text: "After a while, the Caterpillar took the pipe out of its mouth and said to Alice in a slow, sleepy voice, 'Who are you?' 'I don't really know, sir,' said Alice.",
      translation: 'しばらくして、イモムシは口からパイプを外し、ゆっくりとした眠そうな声でアリスに言いました。「お前は誰だ？」「それが、自分でもよく分からないのです」とアリスは言いました。',
      literalTranslation: '(しばらくしてイモムシは口からパイプを外した / そしてアリスにゆっくり眠そうな声で言った / 「お前は誰だ？」 / 「本当によく分からないのです」アリスは言った)',
      vocabulary: [
        { word: 'sleepy', meaning: '眠そうな', phonetic: '/ˈsliː.pi/', pos: '形容詞' }
      ],
      grammarPoints: ['in a slow voice：ゆっくりとした声で']
    },
    {
      id: 'al-98',
      slideNumber: 98,
      text: "'I know who I was when I got up this morning, but I have changed so often since then. I think I am a different person now.'",
      translation: '「今朝起きた時は自分が誰だったか知っていましたが、それ以来何度も姿が変わってしまって。今の私は違う人間なんだと思います。」',
      literalTranslation: '(「今朝起きたとき自分が誰かは知っていました / しかしそれ以来とても頻繁に変わってしまったのです / 今の私は別人だと思います」)',
      vocabulary: [
        { word: 'changed', meaning: '変わった', phonetic: '/tʃeɪndʒd/', pos: '動詞' }
      ],
      grammarPoints: ['since then：それ以来', 'have changed：現在完了（変化）']
    },
    {
      id: 'al-99',
      slideNumber: 99,
      text: "'What do you mean by that?' said the Caterpillar. 'Explain yourself!' 'I can't explain myself, sir,' said Alice, 'because I'm not myself, you know.'",
      translation: '「それはどういう意味だ？」とイモムシは言いました。「自分を説明しろ！」「自分を説明することなんてできません」とアリスは言いました。「だって今の私は自分自身ではないのですから。」',
      literalTranslation: '(「それによって何を意味している？」イモムシは言った / 「自分自身を説明しろ！」 / 「自分を説明できません」アリスは言った / 「なぜなら自分自身ではないからです」)',
      vocabulary: [
        { word: 'explain', meaning: '説明する、解明する', phonetic: '/ɪkˈspleɪn/', pos: '動詞' }
      ],
      grammarPoints: ['What do you mean by that?：それはどういう意味ですか？', 'not myself：いつもの自分でない']
    },
    {
      id: 'al-100',
      slideNumber: 100,
      text: "'One minute I'm very small, the next minute I'm as tall as a house, then I'm small again. Usually, I stay the same all day, and changing so often feels very strange to me.'",
      translation: '「ある時はとても小さく、次の瞬間には家ほども背が高くなり、そしてまた小さくなるのです。普段は一日中同じままで、こんなに頻繁に変わるのはとても奇妙に感じられます。」',
      literalTranslation: '(「ある分はとても小さく / 次の分には家と同じ高さになり / それからまた小さくなるのです / 普段は一日中同じままで / そんなに頻繁に変わることはとても奇妙に感じます」)',
      vocabulary: [
        { word: 'usually', meaning: '通常、普段は', phonetic: '/ˈjuː.ʒu.ə.li/', pos: '副詞' }
      ],
      grammarPoints: ['stay the same：同じままでいる', 'changing so often：動名詞主語']
    },
    {
      id: 'al-101',
      slideNumber: 101,
      text: "The Caterpillar said, 'One side will make you taller, and the other side will make you shorter.' 'One side of what?' thought Alice. 'Of the mushroom,' said the Caterpillar.",
      translation: 'イモムシは「片側がお前を背を高くし、もう片側がお前を背を低くする」と言いました。「何の片側？」とアリスが心の中で思うと、「キノコのだ」とイモムシが答えました。',
      literalTranslation: '(イモムシは言った / 「片側はお前の背を高くし / もう片側はお前の背を低くする」 / 「何の片側？」アリスは思った / 「キノコのだ」イモムシは言った)',
      vocabulary: [
        { word: 'opposite', meaning: '反対の、逆の', phonetic: '/ˈɒp.ə.zɪt/', pos: '形容詞' }
      ],
      grammarPoints: ['make + O + C：OをCにする（使役・使役的状態変化）']
    },
    {
      id: 'al-102',
      slideNumber: 102,
      text: 'Alice broke off a piece in each hand from opposite sides of the mushroom, and very carefully she ate first from one hand, then from the other, until she was about twentyfive centimetres high.',
      translation: 'アリスはキノコの反対側からそれぞれの手で破片をちぎり取り、慎重に片方の手から、それからもう片方から食べて、約25センチの高さになりました。',
      literalTranslation: '(アリスはキノコの反対側からそれぞれの手で破片をもぎ取った / そしてとても慎重にまず一方の手から食べ / 次にもう一方から食べた / 身長約25センチになるまで)',
      vocabulary: [
        { word: 'piece', meaning: 'かけら、破片', phonetic: '/piːs/', pos: '名詞' },
        { word: 'carefully', meaning: '慎重に、注意深く', phonetic: '/ˈkeə.fəl.i/', pos: '副詞' }
      ],
      grammarPoints: ['break off：ちぎり取る', 'from opposite sides：反対側から']
    },

    // Chapter 4: The Pig and Pepper / Duchess & Cheshire Cat
    {
      id: 'al-103',
      slideNumber: 103,
      text: 'She began to walk through the wood, and after a while she came to a little house.',
      translation: '彼女は森を歩き始め、しばらくすると小さな家にたどり着きました。',
      literalTranslation: '(彼女は森を通って歩き始めた / そしてしばらくして小さな家へやって来た)',
      vocabulary: [
        { word: 'through', meaning: '〜を通って、通り抜けて', phonetic: '/θruː/', pos: '前置詞' }
      ],
      grammarPoints: ['walk through：〜を歩き抜ける']
    },
    {
      id: 'al-104',
      slideNumber: 104,
      text: 'She opened the door and walked in. She found herself in a kitchen, which was full of smoke.',
      translation: '彼女はドアを開けて中に入りました。気がつくと煙でいっぱいの台所にいました。',
      literalTranslation: '(彼女はドアを開けて中に入った / 気がつくと台所にいた / そこは煙で充満していた)',
      vocabulary: [
        { word: 'kitchen', meaning: '台所、キッチン', phonetic: '/ˈkɪtʃ.ɪn/', pos: '名詞' },
        { word: 'smoke', meaning: '煙', phonetic: '/sməʊk/', pos: '名詞' }
      ],
      grammarPoints: ['find oneself in ~：気がつくと〜にいる', 'be full of ~：〜でいっぱいである']
    },
    {
      id: 'al-105',
      slideNumber: 105,
      text: 'There was a very angry cook by the fire, and in the middle of the room sat the Duchess, holding a screaming baby.',
      translation: '火のそばにはひどく怒った料理人がおり、部屋の真ん中には金切り声を上げる赤ん坊を抱いた公爵夫人が座っていました。',
      literalTranslation: '(火のそばにとても怒った料理人がいた / そして部屋の中央には公爵夫人が座っていた / 叫んでいる赤ん坊を抱いて)',
      vocabulary: [
        { word: 'cook', meaning: '料理人、コック', phonetic: '/kʊk/', pos: '名詞' },
        { word: 'screaming', meaning: '叫んでいる、金切り声を上げる', phonetic: '/ˈskriː.mɪŋ/', pos: '現在分詞' }
      ],
      grammarPoints: ['holding a screaming baby：付帯状況の分詞構文']
    },
    {
      id: 'al-106',
      slideNumber: 106,
      text: "There was also a large cat, which was sitting on a chair and grinning from ear to ear. 'It's a Cheshire Cat,' said the Duchess. 'That's why.'",
      translation: 'また、椅子の上に座って耳まで届くような満面の笑みを浮かべている大きな猫もいました。「チェシャ猫だよ」と公爵夫人は言いました。「だから笑っているのさ。」',
      literalTranslation: '(大きな猫もまたいた / 椅子に座って口を耳まで広げてニヤニヤ笑っていた / 「それはチェシャ猫さ」公爵夫人は言った / 「だからだよ」)',
      vocabulary: [
        { word: 'grinning', meaning: 'ニヤニヤ笑っている', phonetic: '/ˈɡrɪn.ɪŋ/', pos: '現在分詞' },
        { word: 'Cheshire', meaning: 'チェシャ（英国の地名）', phonetic: '/ˈtʃeʃ.ər/', pos: '固有名詞' }
      ],
      grammarPoints: ['grin from ear to ear：口を耳まで広げてニヤリと笑う']
    },
    {
      id: 'al-107',
      slideNumber: 107,
      text: "The baby began to make strange noises. But a few minutes later, there was no mistake. It was a pig! Alice put it carefully on the ground, and it ran away into the wood.",
      translation: '赤ん坊は奇妙な声を出し始めました。しかし数分後、間違いありませんでした。それは豚だったのです！アリスはそっと地面に下ろすと、豚は森へと走り去っていきました。',
      literalTranslation: '(赤ん坊は奇妙な音を立て始めた / しかし数分後、間違いはなかった / それは豚だった！ / アリスはそれを注意深く地面に置いた / すると森の中へ走っていった)',
      vocabulary: [
        { word: 'mistake', meaning: '間違い、誤り', phonetic: '/mɪˈsteɪk/', pos: '名詞' },
        { word: 'pig', meaning: '豚、ブタ', phonetic: '/pɪɡ/', pos: '名詞' }
      ],
      grammarPoints: ['there was no mistake：間違いなかった']
    },
    {
      id: 'al-108',
      slideNumber: 108,
      text: "She suddenly saw the Cheshire Cat in a tree. 'Please,' she said, 'can you tell me which way to go from here?' 'That depends on where you want to get to,' said the Cat.",
      translation: '彼女は不意に木の中にチェシャ猫を見つけました。「すみません、ここからどっちの道へ行けばいいか教えてくださる？」「それはお前がどこへ行きたいかによるね」と猫は言いました。',
      literalTranslation: '(彼女は突然木の中にチェシャ猫を見た / 「お願いです」彼女は言った / 「ここからどちらへ行くべきか教えてくれますか？」 / 「どこへ行きたいかによるね」猫は言った)',
      vocabulary: [
        { word: 'depends', meaning: '〜次第である（depend on）', phonetic: '/dɪˈpendz/', pos: '動詞' }
      ],
      grammarPoints: ['which way to go：どちらへ行くべきか（疑問詞 + 不定詞）', 'depend on：〜に左右される']
    },
    {
      id: 'al-109',
      slideNumber: 109,
      text: "'To the left,' the Cat said, 'lives a Hatter. And to the right, lives a March Hare. You can visit either of them. They're both mad.'",
      translation: '「左には」と猫は言いました。「帽子屋が住んでいる。右には三月ウサギが住んでいる。どちらを訪ねてもいいよ。どちらも狂っているからね。」',
      literalTranslation: '(「左には」猫は言った / 「帽子屋が住んでいる / そして右には三月ウサギが住んでいる / どちらを訪ねてもいい / ふたりとも狂っているから」)',
      vocabulary: [
        { word: 'Hatter', meaning: '帽子屋、帽子職人', phonetic: '/ˈhæt.ər/', pos: '名詞' },
        { word: 'Hare', meaning: '野ウサギ', phonetic: '/heər/', pos: '名詞' },
        { word: 'mad', meaning: '狂った、気が狂った', phonetic: '/mæd/', pos: '形容詞' }
      ],
      grammarPoints: ['To the left lives a Hatter：方向を表す倒置構文', 'mad as a March hare / mad as a hatter：当時の英語のことわざ']
    },
    {
      id: 'al-110',
      slideNumber: 110,
      text: "'Well! I've often seen a cat without a grin,' thought Alice, 'but never a grin without a cat!'",
      translation: '「まあ！笑わない猫ならよく見かけるけれど、猫のいない笑いなんて一度も見たことがないわ！」とアリスは思いました。',
      literalTranslation: '(「まあ！笑いのない猫はよく見たことがある」アリスは思った / 「しかし猫のいない笑いなんて決して見たことがない！」)',
      vocabulary: [
        { word: 'without', meaning: '〜なしで、〜を持たない', phonetic: '/wɪˈðaʊt/', pos: '前置詞' }
      ],
      grammarPoints: ['never A without B：BなしのAは決してない（名台詞）']
    },

    // Chapter 5: A Mad Tea-Party
    {
      id: 'al-111',
      slideNumber: 111,
      text: 'There was a table under a tree outside the house, and the March Hare and the Hatter were having tea. A Dormouse was sitting between them, asleep.',
      translation: '家の外の木の下にテーブルがあり、三月ウサギと帽子屋がお茶会を開いていました。ふたりの間にはヤマネが座って眠っていました。',
      literalTranslation: '(家の外の木の下にテーブルがあった / そして三月ウサギと帽子屋はお茶を飲んでいた / ヤマネがふたりの間に座っていた / 眠りながら)',
      vocabulary: [
        { word: 'Dormouse', meaning: 'ヤマネ（小型の齧歯類）', phonetic: '/ˈdɔː.maʊs/', pos: '名詞' }
      ],
      grammarPoints: ['having tea：お茶を飲んでいる', 'between them：彼らの間に']
    },
    {
      id: 'al-112',
      slideNumber: 112,
      text: "The Hatter asked, 'Why is a bird like a desk?' 'Do you mean you know the answer?' said the March Hare. 'Yes,' said Alice. 'Then you must say what you mean.'",
      translation: '帽子屋が尋ねました。「カラスと机はなぜ似ている？」「答えを知っているという意味かい？」と三月ウサギが言いました。「ええ」とアリス。「なら、思っていることを口にしなきゃだめだよ。」',
      literalTranslation: '(帽子屋は尋ねた / 「なぜ鳥は机のようであるのか？」 / 「答えを知っているという意味かい？」三月ウサギは言った / 「ええ」アリスは言った / 「それなら思っていることを言うべきだ」)',
      vocabulary: [
        { word: 'desk', meaning: '机', phonetic: '/desk/', pos: '名詞' }
      ],
      grammarPoints: ['say what you mean：思っていることを言う', 'famous riddle：有名ななぞなぞ']
    },
    {
      id: 'al-113',
      slideNumber: 113,
      text: "The Hatter took out his watch, shook it, then looked at it sadly. 'Two days slow! I told you that butter wasn't good for watches!' 'It was the best butter,' said the March Hare sadly.",
      translation: '帽子屋は時計を取り出し、振り、そして悲しそうに見つめました。「2日も遅れている！バターを時計に塗っちゃいけないと言っただろう！」「一番上等なバターだったんだがね」と三月ウサギは悲しそうに言いました。',
      literalTranslation: '(帽子屋は時計を取り出し、振って / 悲しそうに見つめた / 「2日遅れている！バターは時計によくないと言ったのに！」 / 「最高のバターだったんだが」三月ウサギは悲しそうに言った)',
      vocabulary: [
        { word: 'butter', meaning: 'バター', phonetic: '/ˈbʌt.ər/', pos: '名詞' }
      ],
      grammarPoints: ['two days slow：2日遅れて', 'wasn\'t good for：〜によくなかった']
    },
    {
      id: 'al-114',
      slideNumber: 114,
      text: "'It's always six o'clock here,' said the Hatter. 'It's always tea-time here, and you go on moving round the table.'",
      translation: '「ここではいつでも6時なのさ」と帽子屋は言いました。「いつでもお茶の時間だから、テーブルの周りを次々に移動し続けているんだ。」',
      literalTranslation: '(「ここではいつも6時なんだ」帽子屋は言った / 「ここではいつもお茶の時間だ / そしてテーブルの周りを移動し続けるんだ」)',
      vocabulary: [
        { word: 'tea-time', meaning: 'お茶の時間、ティータイム', phonetic: '/ˈtiː.taɪm/', pos: '名詞' }
      ],
      grammarPoints: ['go on doing：〜し続ける', 'moving round the table：テーブルを回って移動する']
    },
    {
      id: 'al-115',
      slideNumber: 115,
      text: "Alice decided to leave and walked away into the wood. 'Well, I won't go there again,' said Alice. 'What a stupid tea-party it was!'",
      translation: 'アリスは立ち去ることに決め、森の中へと歩いていきました。「もう二度とあそこには行かないわ！」とアリスは言いました。「なんて馬鹿げたお茶会だったのかしら！」',
      literalTranslation: '(アリスは立ち去ることに決め / 森の中へ歩いていった / 「もう二度とあそこへは行かないわ」アリスは言った / 「なんて愚かなお茶会だったのかしら！」)',
      vocabulary: [
        { word: 'decided', meaning: '決心した', phonetic: '/dɪˈsaɪ.dɪd/', pos: '動詞' }
      ],
      grammarPoints: ['decide to do：〜することを決める', 'What a stupid ~ it was!：感嘆文']
    },
    {
      id: 'al-116',
      slideNumber: 116,
      text: 'Just then she saw a door in one of the trees. She went in, unlocked the little door into the garden, ate a piece of mushroom, and at last was in the beautiful garden!',
      translation: 'ちょうどその時、木の1本にドアがあるのを見つけました。入ってみると、庭への小さなドアを開け、キノコを食べて、ついにあの美しい庭に入ることができました！',
      literalTranslation: '(ちょうどその時木の一つにドアを見た / 彼女は中に入り / 庭への小さなドアを開錠し / キノコの小片を食べ / ついに美しい庭の中に入った！)',
      vocabulary: [
        { word: 'curious', meaning: '奇妙な、好奇心をそそる', phonetic: '/ˈkjʊə.ri.əs/', pos: '形容詞' }
      ],
      grammarPoints: ['at last：ついに、とうとう']
    },

    // Chapter 6: The Queen's Croquet-Ground
    {
      id: 'al-117',
      slideNumber: 117,
      text: 'Near the door there was a rose-tree and three gardeners, who were painting white roses red because the Queen only liked red roses.',
      translation: 'ドアの近くにバラの木と3人の庭師がおり、女王が赤いバラしか好まないため、白いバラを赤く塗っていました。',
      literalTranslation: '(ドアの近くにバラの木と3人の庭師がいた / 彼らは白いバラを赤く塗っていた / 女王が赤いバラしか好まなかったからだ)',
      vocabulary: [
        { word: 'gardeners', meaning: '庭師たち', phonetic: '/ˈɡɑː.dən.əz/', pos: '名詞' },
        { word: 'roses', meaning: 'バラの花（複数形）', phonetic: '/ˈrəʊ.zɪz/', pos: '名詞' }
      ],
      grammarPoints: ['paint A B：AをB（の色）に塗る']
    },
    {
      id: 'al-118',
      slideNumber: 118,
      text: "A great crowd of people came walking through the garden: it was a pack of cards, with soldiers, Kings and Queens, and last of all, the King and Queen of Hearts.",
      translation: '大勢の群衆が庭を歩いてやって来ました。トランプのカードの行列で、兵士や王や王妃たち、そして最後にハートの国王と女王がやって来ました。',
      literalTranslation: '(大勢の人々が庭を通って歩いてやって来た / それはトランプの一組だった / 兵士たち、王や王妃たち / そして最後にはハートの国王と女王がいた)',
      vocabulary: [
        { word: 'pack', meaning: '一揃い、一組（a pack of cards＝トランプ一組）', phonetic: '/pæk/', pos: '名詞' },
        { word: 'Hearts', meaning: 'トランプのハート', phonetic: '/hɑːts/', pos: '名詞' }
      ],
      grammarPoints: ['a pack of cards：トランプの1パック', 'last of all：一番最後に']
    },
    {
      id: 'al-119',
      slideNumber: 119,
      text: "The Queen saw the white roses, and shouted, 'Off with their heads!' Then she turned to Alice and shouted, 'Can you play croquet?' 'Yes!' shouted Alice.",
      translation: '女王は白いバラを見て「あの者たちの首をはねよ！」と叫びました。それからアリスに向き直り「クロッケーはできるか？」と叫び、アリスは「はい！」と答えました。',
      literalTranslation: '(女王は白いバラを見た / そして叫んだ「あいつらの首を切り落とせ！」 / それから彼女はアリスに向き直り叫んだ / 「お前はクロッケーができるか？」 / 「はい！」アリスは叫んだ)',
      vocabulary: [
        { word: 'croquet', meaning: 'クロッケー（芝生球技）', phonetic: '/ˈkrəʊ.keɪ/', pos: '名詞' }
      ],
      grammarPoints: ['Off with their heads!：首をはねろ！（女王の決まり文句）']
    },
    {
      id: 'al-120',
      slideNumber: 120,
      text: 'It was the strangest game of croquet in Alice\'s life! The balls were hedgehogs, the mallets were flamingoes, and the hoops were made by soldiers.',
      translation: 'それはアリスの人生で最も奇妙なクロッケーの試合でした！ボールはハリネズミ、木槌はフラミンゴ、ゲート（フープ）は兵士たちが体を丸めて作っていたのです。',
      literalTranslation: '(それはアリスの人生で最も奇妙なクロッケーの試合だった！ / ボールはハリネズミだった / マレット（木槌）はフラミンゴだった / そしてフープは兵士たちによって作られていた)',
      vocabulary: [
        { word: 'hedgehogs', meaning: 'ハリネズミ（複数形）', phonetic: '/ˈhedʒ.hɒɡz/', pos: '名詞' },
        { word: 'mallets', meaning: '小槌、マレット', phonetic: '/ˈmæl.ɪts/', pos: '名詞' },
        { word: 'flamingoes', meaning: 'フラミンゴ（複数形）', phonetic: '/fləˈmɪŋ.ɡəʊz/', pos: '名詞' }
      ],
      grammarPoints: ['the strangest game：最上級', 'were made by soldiers：受動態']
    },
    {
      id: 'al-121',
      slideNumber: 121,
      text: 'The players all played at the same time, arguing and fighting, and the Queen went around shouting \'Off with his head!\' or \'Off with her head!\' about once a minute.',
      translation: 'プレイヤー全員が一斉に口論や奪い合いをしながらプレイし、女王は1分に1回ほど「あいつの首をはねよ！」と怒鳴り散らして回っていました。',
      literalTranslation: '(プレイヤー全員が同時にプレイした / 口論し争いながら / そして女王は歩き回って叫んでいた / 「彼の首をはねろ！」「彼女の首をはねろ！」と / 約1分に1回)',
      vocabulary: [
        { word: 'arguing', meaning: '言い争っている', phonetic: '/ˈɑːɡ.juː.ɪŋ/', pos: '現在分詞' },
        { word: 'fighting', meaning: '喧嘩している、争っている', phonetic: '/ˈfaɪ.tɪŋ/', pos: '現在分詞' }
      ],
      grammarPoints: ['at the same time：同時に', 'about once a minute：約1分に1度']
    },
    {
      id: 'al-122',
      slideNumber: 122,
      text: "The Cheshire Cat's head appeared in the air. When the King and Queen ordered the executioner to cut off its head, the executioner said he could not cut off a head if there wasn't a body to cut it off from!",
      translation: 'チェシャ猫の頭だけが空中に現れました。国王と女王が首を切り落とすよう死刑執行人に命じると、執行人は「切り離す胴体がないのに首なんて切れません！」と言いました。',
      literalTranslation: '(チェシャ猫の頭が空中に現れた / 国王と女王が死刑執行人に首を切るよう命じたとき / 執行人は言った / 首を切ることはできないと / それを切り離す胴体がないならば！)',
      vocabulary: [
        { word: 'executioner', meaning: '死刑執行人、首切り役人', phonetic: '/ˌek.sɪˈkjuː.ʃən.ər/', pos: '名詞' },
        { word: 'ordered', meaning: '命じた', phonetic: '/ˈɔː.dəd/', pos: '動詞' }
      ],
      grammarPoints: ['order someone to do：人に〜するよう命じる']
    },
    {
      id: 'al-123',
      slideNumber: 123,
      text: 'Then Alice met the Gryphon and the Mock Turtle, who were very friendly and sang songs and told her stories about their school days down in the sea.',
      translation: 'それからアリスはグリフォンとウミガメモドキに出会いました。ふたりはとても親切で、歌を歌い、海の底での学校生活の話を聞かせてくれました。',
      literalTranslation: '(それからアリスはグリフォンとウミガメモドキに出会った / 彼らはとても友好的だった / そして歌を歌い物語を聞かせてくれた / 海の底での学校生活についての)',
      vocabulary: [
        { word: 'Gryphon', meaning: 'グリフォン（上半身が鷲、下半身が獅子の伝説獣）', phonetic: '/ˈɡrɪf.ən/', pos: '固有名詞' },
        { word: 'Mock Turtle', meaning: 'ウミガメモドキ（にせ海亀）', phonetic: '/mɒk ˈtɜː.təl/', pos: '固有名詞' }
      ],
      grammarPoints: ['who were very friendly：関係代名詞の非制限用法']
    },

    // Chapter 7: Who Stole the Tarts? / The Trial
    {
      id: 'al-124',
      slideNumber: 124,
      text: "'The trial is beginning!' cried the Gryphon, and it took Alice by the hand and ran to the court.",
      translation: '「裁判が始まるぞ！」とグリフォンが叫び、アリスの手を取って法廷へと駆け出しました。',
      literalTranslation: '(「裁判が始まっているぞ！」グリフォンは叫んだ / そしてアリスの手を取って法廷へ走った)',
      vocabulary: [
        { word: 'trial', meaning: '裁判、公判', phonetic: '/traɪəl/', pos: '名詞' },
        { word: 'court', meaning: '法廷、裁判所', phonetic: '/kɔːt/', pos: '名詞' }
      ],
      grammarPoints: ['take someone by the hand：人の手を取る']
    },
    {
      id: 'al-125',
      slideNumber: 125,
      text: 'The King and Queen of Hearts were on their thrones, with a great crowd of cards and animals. In the middle of the room was a large plate of tarts.',
      translation: 'ハートの国王と女王が玉座に座り、大勢のトランプや動物たちが集まっていました。部屋の中央にはタルトの大きな皿が置かれていました。',
      literalTranslation: '(ハートの国王と女王は玉座にいた / トランプや動物たちの大群衆とともに / 部屋の中央にはタルトの大皿があった)',
      vocabulary: [
        { word: 'thrones', meaning: '玉座（複数形）', phonetic: '/θrəʊnz/', pos: '名詞' },
        { word: 'tarts', meaning: 'タルト（焼き菓子）', phonetic: '/tɑːts/', pos: '名詞' }
      ],
      grammarPoints: ['In the middle of the room was ~：場所句前置の倒置']
    },
    {
      id: 'al-126',
      slideNumber: 126,
      text: "The White Rabbit blew his trumpet and read: 'The Queen of Hearts, she made some tarts, all on a summer day; The Knave of Hearts, he stole those tarts, and took them all away.'",
      translation: '白ウサギがトランペットを吹き鳴らし、読み上げました。「ハートの女王、タルトを作った、夏の日のこと。ハートのジャック、そのタルトを盗み、すっかり持ち去った。」',
      literalTranslation: '(白ウサギはトランペットを吹き、読んだ / 「ハートの女王はタルトを作った、夏の日中に / ハートのジャックはそのタルトを盗み、持ち去った」)',
      vocabulary: [
        { word: 'trumpet', meaning: 'トランペット、ラッパ', phonetic: '/ˈtrʌm.pɪt/', pos: '名詞' },
        { word: 'Knave', meaning: '従者、トランプのジャック、悪党', phonetic: '/neɪv/', pos: '名詞' },
        { word: 'stole', meaning: '盗んだ（stealの過去形）', phonetic: '/stəʊl/', pos: '動詞' }
      ],
      grammarPoints: ['stole those tarts：マザーグースの伝承童謡']
    },
    {
      id: 'al-127',
      slideNumber: 127,
      text: "The first witness was the Hatter, who came in holding a teacup and a piece of bread-and-butter, shaking with fear.",
      translation: '最初の証人は帽子屋で、ティーカップとバターつきパンを手に持ち、恐怖に震えながら入ってきました。',
      literalTranslation: '(最初の証人は帽子屋だった / 彼はティーカップと一切れのバターパンを持ち / 恐怖で震えながら入ってきた)',
      vocabulary: [
        { word: 'witness', meaning: '証人、目撃者', phonetic: '/ˈwɪt.nəs/', pos: '名詞' },
        { word: 'fear', meaning: '恐怖、恐れ', phonetic: '/fɪər/', pos: '名詞' }
      ],
      grammarPoints: ['shaking with fear：恐怖で震えながら']
    },
    {
      id: 'al-128',
      slideNumber: 128,
      text: 'Just then Alice began growing larger again, and the Dormouse complained that she was squashing him.',
      translation: 'ちょうどその時アリスは再び大きくなり始め、ヤマネは彼女に押しつぶされそうだと不平を言いました。',
      literalTranslation: '(ちょうどその時アリスは再び大きくなり始めた / そしてヤマネは彼女が自分を押しつぶしていると不平を言った)',
      vocabulary: [
        { word: 'complained', meaning: '不平を言った、苦情を述べた', phonetic: '/kəmˈpleɪnd/', pos: '動詞' }
      ],
      grammarPoints: ['begin growing：大きくなり始める', 'squashing him：彼を押しつぶしている']
    },
    {
      id: 'al-129',
      slideNumber: 129,
      text: "Then the White Rabbit called out loudly, 'Alice!' 'Here!' cried Alice, jumping to her feet.",
      translation: 'すると白ウサギが大声で「アリス！」と呼びました。「はい！」とアリスは飛び起きながら叫びました。',
      literalTranslation: '(そのとき白ウサギは大声で叫んだ「アリス！」 / 「はい！」アリスは叫んだ、飛び起きながら)',
      vocabulary: [
        { word: 'loudly', meaning: '大声で', phonetic: '/ˈlaʊd.li/', pos: '副詞' }
      ],
      grammarPoints: ['jumping to her feet：分詞構文（サッと立ち上がりながら）']
    },
    {
      id: 'al-130',
      slideNumber: 130,
      text: "The Queen shouted, 'All people a mile high must leave the room!' 'I'm not a mile high,' said Alice, 'and I won't leave!'",
      translation: '女王は「身長1マイルの者は全員退廷せよ！」と叫びました。「私は1マイルもありませんし、出ていきません！」とアリスは言いました。',
      literalTranslation: '(女王は叫んだ / 「身長1マイルの者は全員部屋を出なければならない！」 / 「私は1マイルもありません」アリスは言った / 「そして出ていきません！」)',
      vocabulary: [
        { word: 'mile', meaning: 'マイル（約1.6キロメートル）', phonetic: '/maɪl/', pos: '名詞' }
      ],
      grammarPoints: ['must leave：退去しなければならない', "won't leave：絶対に出ていかない（拒絶のwill not）"]
    },
    {
      id: 'al-131',
      slideNumber: 131,
      text: "The Queen screamed, 'Off with her head!' but Alice was not afraid at all.",
      translation: '女王は「あの娘の首をはねよ！」と金切り声を上げましたが、アリスはまったく怖くありませんでした。',
      literalTranslation: '(女王は叫んだ「この娘の首をはねろ！」 / しかしアリスはまったく恐れていなかった)',
      vocabulary: [
        { word: 'screamed', meaning: '金切り声を上げた、叫んだ', phonetic: '/skriːmd/', pos: '動詞' }
      ],
      grammarPoints: ['not ... at all：まったく〜ない']
    },
    {
      id: 'al-132',
      slideNumber: 132,
      text: "'It doesn't matter what you say,' shouted Alice. 'You're nothing but a pack of cards!'",
      translation: '「あなたが何を言おうと知ったことじゃないわ！」とアリスは叫びました。「あなたたちなんて、ただのトランプの束にすぎないじゃない！」',
      literalTranslation: '(「あなたが何を言おうと関係ないわ！」アリスは叫んだ / 「あなたたちは単なるトランプの束にすぎないわ！」)',
      vocabulary: [
        { word: 'nothing but', meaning: '〜にすぎない、ただの〜だけ', phonetic: '/ˈnʌθ.ɪŋ bʌt/', pos: '熟語' }
      ],
      grammarPoints: ['nothing but：〜にすぎない（only）', 'famous climax：アリスの象徴的名言']
    },
    {
      id: 'al-133',
      slideNumber: 133,
      text: 'At this the whole pack rose up into the air, and came flying down upon her.',
      translation: 'するとトランプの束全体が空へと舞い上がり、彼女の上にバタバタと降りかかってきました。',
      literalTranslation: '(これを聞いて一組全体が空中へ舞い上がった / そして彼女の上に飛んで落ちてきた)',
      vocabulary: [
        { word: 'whole', meaning: '全体の、すべての', phonetic: '/həʊl/', pos: '形容詞' }
      ],
      grammarPoints: ['at this：これを聞いて、これに対して', 'came flying down：飛んで落ちてきた']
    },
    {
      id: 'al-134',
      slideNumber: 134,
      text: 'She gave a little scream and woke up. She was lying next to her sister under the trees, and some dead leaves were falling on her face.',
      translation: '彼女は小さく悲鳴を上げて目を覚ましました。木の下でお姉さんの隣に横たわっており、落ち葉が顔の上にハラハラと落ちていたのでした。',
      literalTranslation: '(彼女は小さく悲鳴を上げて目を覚ました / 彼女は木の下で姉の隣に横たわっていた / そしていくつかの落ち葉が彼女の顔の上に落ちていた)',
      vocabulary: [
        { word: 'scream', meaning: '悲鳴、叫び声', phonetic: '/skriːm/', pos: '名詞' },
        { word: 'leaves', meaning: '木の葉（leafの複数形）', phonetic: '/liːvz/', pos: '名詞' }
      ],
      grammarPoints: ['wake up：目を覚ます', 'lying next to：〜の隣に横たわって']
    },
    {
      id: 'al-135',
      slideNumber: 135,
      text: "'Wake up, Alice dear,' said her sister. 'You've been asleep a long time.'",
      translation: '「起きて、アリスちゃん」とお姉さんが言いました。「ずいぶん長いこと眠っていたのね。」',
      literalTranslation: '(「起きて、アリス」彼女の姉は言った / 「ずいぶん長い間眠っていたわよ」)',
      vocabulary: [
        { word: 'dear', meaning: '親愛なる人、かわいい子', phonetic: '/dɪər/', pos: '名詞' }
      ],
      grammarPoints: ['have been asleep：眠った状態が続いている（現在完了）']
    },
    {
      id: 'al-136',
      slideNumber: 136,
      text: "'Oh, I've had a very curious dream!' said Alice, and she told her sister all about the strange adventures in her wonderful dream.",
      translation: '「ああ、とても不思議な夢を見たの！」とアリスは言い、素晴らしい夢の中で起きた奇妙な冒険の数々を、お姉さんにすっかり話して聞かせました。',
      literalTranslation: '(「ああ、とても不思議な夢を見たわ！」アリスは言った / そして彼女は姉にすべて話した / 素晴らしい夢の中の奇妙な冒険について)',
      vocabulary: [
        { word: 'adventures', meaning: '冒険、波乱万丈の体験', phonetic: '/ədˈven.tʃəz/', pos: '名詞' },
        { word: 'dream', meaning: '夢', phonetic: '/driːm/', pos: '名詞' }
      ],
      grammarPoints: ['tell someone all about ~：人に〜のことを何もかも話す']
    }
  ]
};
