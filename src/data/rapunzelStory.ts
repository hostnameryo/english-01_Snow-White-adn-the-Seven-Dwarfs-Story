import { Story } from '../types';

export const rapunzelStory: Story = {
  id: 'rapunzel',
  title: 'Rapunzel',
  titleJa: 'ラプンツェル（髪長姫）',
  category: 'fairytale',
  description: 'The classic Brothers Grimm fairy tale of Rapunzel and her golden hair. Master natural storytelling, rich descriptive English, and chunk reading.',
  descriptionJa: '動画に登場するグリム童話『ラプンツェル』の全編英文。高い塔に閉じ込められた黄金の髪の少女と王子の冒険を、1文3回音読とチャンク直訳で学びます。',
  level: 'Beginner',
  theme: 'parchment',
  authorOrSource: 'Brothers Grimm / Classic Fairy Tale Adaptation',
  sentences: [
    {
      id: 'rap-1',
      slideNumber: 1,
      text: 'Once upon time there is a couple and they do not have any children. They wish to have one and pray God everyday.',
      translation: '昔々、ある夫婦がおりましたが、子供がいませんでした。ふたりは子供が授かることを願い、毎日神に祈っていました。',
      literalTranslation: '(昔々ある夫婦がいた / そして彼らには子供がいなかった / 彼らは子供を望み / 毎日神に祈った)',
      structure: {
        pattern: 'There is構文 + SVO and SVO',
        subject: 'a couple / they',
        verb: 'is / do not have / wish, pray'
      },
      vocabulary: [
        { word: 'couple', meaning: '夫婦、一組の男女', phonetic: '/ˈkʌp.əl/', pos: '名詞' },
        { word: 'pray', meaning: '祈る、神に祈願する', phonetic: '/preɪ/', pos: '動詞' }
      ],
      grammarPoints: [
        'wish to do：〜することを願う',
        'pray God：神に祈る'
      ]
    },
    {
      id: 'rap-2',
      slideNumber: 2,
      text: 'These people have a little window at the back of their house, from there you can see a splendid garden and it is full of the most beautiful flowers and herbs.',
      translation: 'この夫婦の家の裏手には小さな窓があり、そこからは見事な庭園が見渡せ、この上なく美しい花々や薬草で満ちあふれていました。',
      literalTranslation: '(この人々は小さな窓を持っていた / 家の裏手に / そこから見事な庭を見ることができた / そしてそこは最も美しい花や薬草で満ちていた)',
      structure: {
        pattern: 'SVO + 関係節 + SVC',
        subject: 'These people / you / it',
        verb: 'have / can see / is'
      },
      vocabulary: [
        { word: 'splendid', meaning: '素晴らしい、壮麗な、見事な', phonetic: '/ˈsplen.dɪd/', pos: '形容詞' },
        { word: 'herbs', meaning: '薬草、ハーブ', phonetic: '/hɜːbz/', pos: '名詞' }
      ],
      grammarPoints: [
        'at the back of ~：〜の裏側に',
        'be full of ~：〜でいっぱいである'
      ]
    },
    {
      id: 'rap-3',
      slideNumber: 3,
      text: 'It is, however, surrounded by a high wall, and no one dares to go into it because it belongs to an enchantress, she has great power and all the people in the world is afraid of her.',
      translation: 'しかしながら、その庭は高い壁に囲まれており、魔女のものだったため誰も入ろうとはしませんでした。魔女は強大な魔力を持ち、世の中の誰もが彼女を恐れていたのです。',
      literalTranslation: '(しかしそれは高い壁に囲まれていた / そして誰もあえて入ろうとはしなかった / なぜならそれは魔女のものだったからだ / 彼女は偉大な力を持ち / 世の中のすべての人が彼女を恐れていた)',
      structure: {
        pattern: '受動態 + SV + 理由節',
        subject: 'It / no one / it / she / all the people',
        verb: 'is surrounded / dares / belongs / has / is afraid'
      },
      vocabulary: [
        { word: 'enchantress', meaning: '妖術使い、魔女', phonetic: '/ɪnˈtʃɑːn.trəs/', pos: '名詞' },
        { word: 'surrounded', meaning: '囲まれた', phonetic: '/səˈraʊn.dɪd/', pos: '過去分詞' },
        { word: 'dares', meaning: 'あえて〜する', phonetic: '/deəz/', pos: '動詞' }
      ],
      grammarPoints: [
        'dare to do：思い切って〜する、あえて〜する',
        'belong to ~：〜に所属する、〜のものである',
        'be afraid of ~：〜を恐れている'
      ]
    },
    {
      id: 'rap-4',
      slideNumber: 4,
      text: 'One day the woman is standing by this window and looking down into the garden.',
      translation: 'ある日、その妻がこの窓のそばに立ち、庭を見下ろしていました。',
      literalTranslation: '(ある日その女性はこの窓のそばに立っていた / そして庭を見下ろしていた)',
      structure: {
        pattern: '現在進行形 (is standing and looking down)',
        subject: 'the woman',
        verb: 'is standing and looking down'
      },
      vocabulary: [
        { word: 'looking down', meaning: '見下ろしている', phonetic: '', pos: '句動詞' }
      ],
      grammarPoints: [
        'by this window：この窓のそばで',
        'look down into ~：〜の中を見下ろす'
      ]
    },
    {
      id: 'rap-5',
      slideNumber: 5,
      text: 'She sees a bed, someone plants the most beautiful rapunzel there and it looks so fresh and green that she longs for it, she quite pines away, and begins to look pale and miserable.',
      translation: '彼女は花壇（菜園）を見かけました。そこには誰かが植えた見事なラプンツェル（野萵苣・チシャ）があり、あまりにも瑞々しく青々としていたので彼女はたまらなく欲しくなり、やつれ果て、青白く惨めな顔色になり始めました。',
      literalTranslation: '(彼女は花壇を見た / 誰かがそこに最も美しいラプンツェルを植えていた / そしてそれはとても瑞々しく青々として見えたので / 彼女はそれを熱望した / 彼女はすっかりやつれ果て / 青白く惨めに見え始めた)',
      structure: {
        pattern: 'SVO + SVO + so ... that SV + SV and SV',
        subject: 'She / someone / it / she / she',
        verb: 'sees / plants / looks / longs / pines away, begins'
      },
      vocabulary: [
        { word: 'rapunzel', meaning: 'ラプンツェル（ノヂシャ、キキョウ科の食用野草）', phonetic: '/rəˈpʌn.zəl/', pos: '名詞' },
        { word: 'longs for', meaning: '〜を熱望する、切望する', phonetic: '', pos: '句動詞' },
        { word: 'pines away', meaning: '恋い焦がれてやつれる、衰弱する', phonetic: '', pos: '句動詞' },
        { word: 'pale', meaning: '青白い、血の気のない', phonetic: '/peɪl/', pos: '形容詞' },
        { word: 'miserable', meaning: 'みじめな、やつれた', phonetic: '/ˈmɪz.ər.ə.bəl/', pos: '形容詞' }
      ],
      grammarPoints: [
        'pine away：思い悩んでやつれる',
        'look pale：青ざめて見える（SVC構文）'
      ]
    },
    {
      id: 'rap-6',
      slideNumber: 6,
      text: 'Then her husband is alarmed, and asks. What ails you, dear wife? Ah, she replies, if I can\'t eat some of the rampion and it is in the garden behind our house, I shall die.',
      translation: '夫は驚き、「お前、どうしたというのだ？」と尋ねました。「ああ」と妻は答えました。「うちの裏庭にあるあのランピオン（ラプンツェル）を食べられなければ、私は死んでしまうでしょう。」',
      literalTranslation: '(すると夫は驚いて尋ねた / 「どうしたのだ、愛する妻よ？」 / 「ああ」と彼女は答えた / 「もしあのランピオンを食べられなければ / 我が家の裏庭にある / 私は死んでしまうでしょう」)',
      structure: {
        pattern: 'SVC and SV + 疑問文 + 条件節 (if SV, S shall die)',
        subject: 'her husband / she / I',
        verb: 'is alarmed, asks / replies / can\'t eat, shall die'
      },
      vocabulary: [
        { word: 'alarmed', meaning: '驚いた、心配した', phonetic: '/əˈlɑːmd/', pos: '形容詞' },
        { word: 'ails', meaning: '（病気などで人を）苦しめる', phonetic: '/eɪlz/', pos: '動詞' },
        { word: 'rampion', meaning: 'ランピオン（ラプンツェルの別名）', phonetic: '/ˈræm.pi.ən/', pos: '名詞' }
      ],
      grammarPoints: [
        'What ails you?：何がお前を苦しめているのか？（＝どうしたのか？）',
        'if I can\'t eat ..., I shall die：食べられなければ死んでしまう（切迫した条件文）'
      ]
    },
    {
      id: 'rap-7',
      slideNumber: 7,
      text: 'The man does not want her wife die so he decides to get some from the garden. At twilight, he clambers down over the wall into the garden of the enchantress, hastily clutches a handful of rampion, and takes it to his wife.',
      translation: '妻を死なせたくない夫は、庭から少し取ってこようと決心しました。夕暮れ時、彼は塀をよじ登って魔女の庭へと降り立ち、大急ぎでひと握りのランピオンをもぎ取ると、妻のもとへ持ち帰りました。',
      literalTranslation: '(夫は妻を死なせたくなかった / だから庭からいくらか取ってこようと決めた / 夕暮れに、彼は壁をよじ登って降りた / 魔女の庭へと / 急いで一握りのランピオンをつかみ取り / そしてそれを妻のもとへ持って行った)',
      structure: {
        pattern: 'SVO + S + V1, V2, and V3',
        subject: 'The man / he',
        verb: 'decides / clambers, clutches, takes'
      },
      vocabulary: [
        { word: 'twilight', meaning: '夕暮れ、黄昏', phonetic: '/ˈtwaɪ.laɪt/', pos: '名詞' },
        { word: 'clambers', meaning: 'よじ登る、よじ登って越える', phonetic: '/ˈklæm.bərz/', pos: '動詞' },
        { word: 'hastily', meaning: '急いで、慌てて', phonetic: '/ˈheɪ.stɪ.li/', pos: '副詞' },
        { word: 'handful', meaning: 'ひと握り', phonetic: '/ˈhænd.fʊl/', pos: '名詞' }
      ],
      grammarPoints: [
        'decide to do：〜することを決める',
        'a handful of ~：ひと握りの〜'
      ]
    },
    {
      id: 'rap-8',
      slideNumber: 8,
      text: 'She at once makes herself a salad of it, and eats it greedily. It tastes so good to her that the next day she wants it three times as much as before.',
      translation: '妻はすぐにそれでサラダを作り、むさぼるように食べました。それが彼女にとってあまりにも美味しかったので、翌日には以前の3倍も欲しくなりました。',
      literalTranslation: '(彼女はすぐにそれでサラダを作った / そして貪り食った / それは彼女にとても美味しかったので / 翌日には以前の3倍もそれを欲しがった)',
      structure: {
        pattern: 'SVOO and SVO + so ... that SV (倍数比較)',
        subject: 'She / It / she',
        verb: 'makes / eats / tastes / wants'
      },
      vocabulary: [
        { word: 'greedily', meaning: 'がつがつと、貪欲に', phonetic: '/ˈɡriː.dɪ.li/', pos: '副詞' },
        { word: 'three times as much', meaning: '3倍も多く', phonetic: '', pos: '倍数表現' }
      ],
      grammarPoints: [
        'three times as much as before：以前の3倍（倍数＋as much as）',
        'taste good to ~：〜にとって美味しく感じられる'
      ]
    },
    {
      id: 'rap-9',
      slideNumber: 9,
      text: 'In the gloom of evening he let himself down again, but this time things do not go well, because he sees the enchantress standing before him.',
      translation: '夕暮れの薄闇の中、夫は再び壁を伝って下りていきましたが、今回はうまくいきませんでした。魔女が目の前に立っているのを見たからです。',
      literalTranslation: '(夕暮れの薄暗がりの中で / 彼は再び身を下ろした / しかし今回はうまくいかなかった / なぜなら彼には見えたからだ / 魔女が目の前に立っているのが)',
      structure: {
        pattern: 'SVO + SV + 理由節 (知覚動詞 see O doing)',
        subject: 'he / things / he',
        verb: 'let / do not go / sees'
      },
      vocabulary: [
        { word: 'gloom', meaning: '薄暗がり、暗闇', phonetic: '/ɡluːm/', pos: '名詞' },
        { word: 'let oneself down', meaning: '身を低く下ろす、降りる', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'things do not go well：物事がうまくいかない',
        'see the enchantress standing：魔女が立っているのを見る（知覚動詞＋現在分詞）'
      ]
    },
    {
      id: 'rap-10',
      slideNumber: 10,
      text: 'How can you dare, says she with angry look, descend into my garden and steal my rampion like a thief? You shall suffer for it!',
      translation: '「よくも泥棒のように私の庭へ下りてきて、ランピオンを盗むなどという大胆な真似ができたものだね！」と魔女は怒りの形相で言いました。「痛い目を見せてやるからね！」',
      literalTranslation: '(「よくもそんな大胆な真似ができるね」 / 彼女は怒った顔で言った / 「私の庭へ下りてきて泥棒のようにランピオンを盗むとは / お前はそのためにつらい目に遭うだろう！」)',
      structure: {
        pattern: 'How can you dare to do + SVO',
        subject: 'you / she / You',
        verb: 'can dare / says / shall suffer'
      },
      vocabulary: [
        { word: 'descend', meaning: '下りる、下る', phonetic: '/dɪˈsend/', pos: '動詞' },
        { word: 'thief', meaning: '泥棒', phonetic: '/θiːf/', pos: '名詞' },
        { word: 'suffer', meaning: '苦しむ、報いを受ける', phonetic: '/ˈsʌf.ər/', pos: '動詞' }
      ],
      grammarPoints: [
        'How can you dare ~：よくも平気で〜できるものだ（強い非難）',
        'You shall suffer：痛い目を見ることになる（強い宣告・運命を表すshall）'
      ]
    },
    {
      id: 'rap-11',
      slideNumber: 11,
      text: 'Oh, answers he, let mercy take the place of justice, I only make up my mind to do it out of necessity.',
      translation: '「ああ」と夫は答えました。「どうかお慈悲を！法に照らして罰するのではなく慈悲をお与えください。やむにやまれぬ事情から決心したことなのです。」',
      literalTranslation: '(「ああ」と彼は答えた / 「正義の代わりに慈悲を置いてください / 私はただ止むに止まれずそれをする決心をしたのです」)',
      structure: {
        pattern: '使役命令文 (let O do) + SVO',
        subject: 'he / I',
        verb: 'answers / let / make up'
      },
      vocabulary: [
        { word: 'mercy', meaning: '慈悲、情け', phonetic: '/ˈmɜː.si/', pos: '名詞' },
        { word: 'justice', meaning: '正義、法、正当な処罰', phonetic: '/ˈdʒʌs.tɪs/', pos: '名詞' },
        { word: 'necessity', meaning: '必要性、やむを得ない事情', phonetic: '/nəˈses.ə.ti/', pos: '名詞' }
      ],
      grammarPoints: [
        'take the place of ~：〜の代わりとなる',
        'make up one\'s mind：決心する',
        'out of necessity：必要に迫られて、やむを得ず'
      ]
    },
    {
      id: 'rap-12',
      slideNumber: 12,
      text: 'My wife saw your rampion from the window, and she wanted to eat it so badly. She thinks she will die if she can not eat it.',
      translation: '「私の妻が窓からあなたのランピオンを見て、あまりにも食べたがったのです。それを食べられなければ死んでしまうと思い詰めております。」',
      literalTranslation: '(「私の妻が窓からあなたのランピオンを見ました / そしてそれをとても強く食べたがりました / 彼女はそれを食べられなければ死んでしまうと思っています」)',
      structure: {
        pattern: 'SVO and SVO + SVO (条件節)',
        subject: 'My wife / she / She',
        verb: 'saw / wanted / thinks'
      },
      vocabulary: [
        { word: 'so badly', meaning: 'ひどく、とても強く', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'want to do so badly：とても強く〜したいと思う'
      ]
    },
    {
      id: 'rap-13',
      slideNumber: 13,
      text: 'If you are telling the truth, I will allow you to take away with you as much rampion as you will, only I make one condition.',
      translation: '「もし本当のことを言っているのなら、欲しいだけいくらでもランピオンを持っていくのを許してやろう。ただし、ひとつだけ条件がある。」',
      literalTranslation: '(「もしお前が本当のことを言っているなら / 望むだけのランピオンを持っていくのを許そう / ただし私はひとつ条件を出す」)',
      structure: {
        pattern: '条件節 + SVO to do + as much ... as will',
        subject: 'you / I / I',
        verb: 'are telling / will allow / make'
      },
      vocabulary: [
        { word: 'condition', meaning: '条件', phonetic: '/kənˈdɪʃ.ən/', pos: '名詞' }
      ],
      grammarPoints: [
        'allow O to do：Oが〜するのを許す',
        'as much as you will：あなたが望むだけの（will＝欲する）',
        'only SV：ただし〜（接続詞的用法）'
      ]
    },
    {
      id: 'rap-14',
      slideNumber: 14,
      text: 'If you have a child you must give it to me. I will treat it well and care for it like a mother. The man accepts everything because he is afraid of her.',
      translation: '「お前たちに子供が生まれたら、私に引き渡さねばならない。母親のように大切に育て、世話をしてやろう。」男は魔女を恐れるあまり、すべてを承諾してしまいました。',
      literalTranslation: '(「もし子供が生まれたら / お前はそれを私に渡さねばならない / 私はそれをよく扱い、母親のように世話をしよう」 / 男はすべてを受け入れた / 彼女を恐れていたからだ)',
      structure: {
        pattern: '条件節 + SVOO + SVO and SVO + SVO',
        subject: 'you / I / The man',
        verb: 'must give / will treat, care for / accepts'
      },
      vocabulary: [
        { word: 'care for', meaning: '世話をする、大切にする', phonetic: '', pos: '句動詞' },
        { word: 'accepts', meaning: '受け入れる、承諾する', phonetic: '/əkˈsepts/', pos: '動詞' }
      ],
      grammarPoints: [
        'care for ~ like a mother：母親のように世話をする'
      ]
    },
    {
      id: 'rap-15',
      slideNumber: 15,
      text: 'One day the woman has a child, the enchantress appears at once, gives the child the name of Rapunzel, and takes it away with her. Rapunzel grows into the most beautiful child under the sun. When she is twelve years old, the enchantress shuts her into a tower.',
      translation: 'やがて妻が子供を産むと、魔女がたちまち現れてその子に「ラプンツェル」という名をつけ、連れ去ってしまいました。ラプンツェルはこの世で最も美しい子供へと成長しました。彼女が12歳になったとき、魔女は彼女を高い塔の中に閉じ込めました。',
      literalTranslation: '(ある日その女性が子供を産んだ / 魔女がすぐに現れた / その子にラプンツェルという名を与えた / そして連れ去った / ラプンツェルは太陽の下で最も美しい子供へと育った / 彼女が12歳のとき / 魔女は彼女を塔の中に閉じ込めた)',
      structure: {
        pattern: '複文 (SVO + S + V1, V2, and V3) + SVO + SVO',
        subject: 'the woman / the enchantress / Rapunzel / the enchantress',
        verb: 'has / appears, gives, takes / grows / shuts'
      },
      vocabulary: [
        { word: 'under the sun', meaning: '太陽の下で、この世で', phonetic: '', pos: '成句' },
        { word: 'tower', meaning: '塔', phonetic: '/taʊər/', pos: '名詞' },
        { word: 'shuts', meaning: '閉じ込める、閉める', phonetic: '/ʃʌts/', pos: '動詞' }
      ],
      grammarPoints: [
        'the most beautiful child under the sun：この世で一番美しい子供',
        'shut A into B：AをBの中に閉じ込める'
      ]
    },
    {
      id: 'rap-16',
      slideNumber: 16,
      text: 'The tower lays in a forest, and it has not a door or stairs but quite at the top is a little window. The enchantress places herself beneath it and cries. Rapunzel, Rapunzel, Let down your hair to me. Rapunzel has magnificent long hair, it is fine as spun gold.',
      translation: 'その塔は森の中にあり、扉も階段もなく、一番てっぺんに小さな窓があるだけでした。魔女はその窓の下に立ち、「ラプンツェル、ラプンツェル、お前の髪を下ろしておくれ」と叫びました。ラプンツェルには紡いだ金糸のように美しく見事な長い髪があったのです。',
      literalTranslation: '(塔は森の中にあった / そして扉も階段もなかった / 一番てっぺんに小さな窓があるだけだった / 魔女はその下に立ち叫んだ / 「ラプンツェル、ラプンツェル、髪を私に下ろしておくれ」 / ラプンツェルには見事な長い髪があった / それは紡いだ金のように細く美しかった)',
      structure: {
        pattern: 'SV and SVO + 倒置 + SVO + 命令文 + SVO',
        subject: 'The tower / it / The enchantress / Rapunzel',
        verb: 'lays / has / places and cries / has'
      },
      vocabulary: [
        { word: 'stairs', meaning: '階段', phonetic: '/steəz/', pos: '名詞' },
        { word: 'magnificent', meaning: '壮大な、見事な', phonetic: '/mæɡˈnɪf.ɪ.sənt/', pos: '形容詞' },
        { word: 'spun gold', meaning: '紡がれた金糸', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'Let down your hair：髪を下ろす',
        'as fine as spun gold：紡いだ金のように美しい（同等比較）'
      ]
    },
    {
      id: 'rap-17',
      slideNumber: 17,
      text: 'As she hears the voice of the enchantress she unfastens her braided tresses, winds them round one of the hooks of the window above, and then and the enchantress climbs up the hair falls down, by it.',
      translation: '魔女の声を聞くと、彼女は編んだ髪をほどき、上の窓のフックに巻きつけて垂らし、魔女はその髪を伝ってスルスルと登っていきました。',
      literalTranslation: '(魔女の声を聞くと / 彼女は編んだ髪をほどいた / 窓のフックの一つにそれを巻きつけた / そして髪が垂れ下がり / それを伝って魔女は登っていった)',
      structure: {
        pattern: '従属節 + S + V1, V2 + SV',
        subject: 'she / the enchantress',
        verb: 'unfastens, winds / climbs up'
      },
      vocabulary: [
        { word: 'unfastens', meaning: 'ほどく、外す', phonetic: '/ʌnˈfɑː.sənz/', pos: '動詞' },
        { word: 'tresses', meaning: '房髪、長い髪', phonetic: '/ˈtres.ɪz/', pos: '名詞' },
        { word: 'braided', meaning: '編まれた、おさげの', phonetic: '/ˈbreɪ.dɪd/', pos: '過去分詞' },
        { word: 'hooks', meaning: '留め具、フック', phonetic: '/hʊks/', pos: '名詞' }
      ],
      grammarPoints: [
        'wind round ~：〜の周りに巻きつける',
        'climb up by ~：〜を伝って登る'
      ]
    },
    {
      id: 'rap-18',
      slideNumber: 18,
      text: 'After a year or two, the king\'s son rides through the forest and passes by the tower. Then he hears a song, it is so charming that he stands still and listens. This is Rapunzel. The king\'s son wants to climb up to her, and looks for the door of the tower, but there is no door.',
      translation: '1、2年後、王子が森の中を馬で通り、塔のそばを通りかかりました。そのとき歌声が聞こえてきましたが、あまりにも魅力的な声だったため、彼は足を止めて聞き入りました。それはラプンツェルの歌声でした。王子は彼女のもとへ登りたいと思い、塔の入口を探しましたが、扉などどこにもありませんでした。',
      literalTranslation: '(1、2年後、王子は森を馬で進み / 塔のそばを通りかかった / 歌声が聞こえてきた / それはとても魅力的だったので彼はじっと立って聞き入った / これがラプンツェルだった / 王子は彼女のところへ登りたがり / 塔のドアを探したが / ドアはなかった)',
      structure: {
        pattern: 'SV and SV + SVO + so ... that結果構文 + SVC + SVO',
        subject: 'the king\'s son / he / he / This',
        verb: 'rides, passes / hears / stands and listens / is / wants'
      },
      vocabulary: [
        { word: 'charming', meaning: '魅力的な、人を惹きつける', phonetic: '/ˈtʃɑː.mɪŋ/', pos: '形容詞' },
        { word: 'stands still', meaning: 'じっと立ち止まる', phonetic: '', pos: '動詞句' }
      ],
      grammarPoints: [
        'so charming that SV：とても魅力的だったので〜した',
        'look for ~：〜を探す'
      ]
    },
    {
      id: 'rap-19',
      slideNumber: 19,
      text: 'He rides home, then he likes her song very much, so that very day he goes out into, the forest and listens to it. Once he is standing behind a tree, he sees that an enchantress comes there, and he hears how she cries.',
      translation: '王子は城へ帰りましたが、その歌声が心に残り、その日も森へ出かけて行って聞き入っていました。ある時彼が木の後ろに立っていると、魔女がやって来るのが見え、彼女がどう叫ぶかが聞こえてきました。',
      literalTranslation: '(彼は家へ馬で帰った / しかし彼女の歌がとても気に入った / だからその日も森へ行きそれに聞き入った / あるとき木の後ろに立っていると / 魔女がそこに来るのが見えた / そして彼女がどう叫ぶかが聞こえた)',
      structure: {
        pattern: 'SV and SV + SVO + SVO (知覚動詞 see/hear + 間接節)',
        subject: 'He / he / he',
        verb: 'rides / goes and listens / sees and hears'
      },
      vocabulary: [],
      grammarPoints: [
        'see that SV：〜ということが目に入る',
        'hear how she cries：彼女がどう叫ぶかを聞く'
      ]
    },
    {
      id: 'rap-20',
      slideNumber: 20,
      text: 'Rapunzel, Rapunzel, Let down your hair to me. Then Rapunzel lets down the braids of her hair, and the enchantress climbs up to her. I too will try my fortune tomorrow, says he, and the next day he goes to the tower at evening and cries.',
      translation: '「ラプンツェル、ラプンツェル、髪を下ろしておくれ。」するとラプンツェルはおさげ髪を垂らし、魔女は彼女のところへと登っていきました。「私も明日運を試してみよう」と王子は言い、翌日の夕方に塔へ行って叫びました。',
      literalTranslation: '(「ラプンツェル、ラプンツェル、髪を下ろしておくれ」 / するとラプンツェルは三つ編み髪を下ろした / そして魔女が彼女のもとへ登った / 「私も明日運を試してみよう」と彼は言った / そして翌日の夕方に塔へ行き叫んだ)',
      structure: {
        pattern: '命令文 + SVO and SV + SVO + SV and SV',
        subject: 'Rapunzel / the enchantress / he',
        verb: 'lets down / climbs up / says / goes and cries'
      },
      vocabulary: [
        { word: 'braids', meaning: '三つ編み、おさげ', phonetic: '/breɪdz/', pos: '名詞' },
        { word: 'try my fortune', meaning: '運試しをする', phonetic: '', pos: 'イディオム' }
      ],
      grammarPoints: [
        'try one\'s fortune：運を試す、一か八かやってみる'
      ]
    },
    {
      id: 'rap-21',
      slideNumber: 21,
      text: 'Rapunzel, Rapunzel. Let down your hair to me. Immediately the hair falls down and the king\'s son climbs up. At first Rapunzel is terribly frightened but the king\'s son begins to talk to her quite like a friend, and tells her that he loves her song very much and comes to see her.',
      translation: '「ラプンツェル、ラプンツェル、髪を下ろしておくれ。」たちまち髪がハラリと落ちてきて、王子は登っていきました。最初ラプンツェルは恐ろしさに震えましたが、王子は友人のように優しく語りかけ、彼女の歌を深く愛しており彼女に会いに来たのだと話しました。',
      literalTranslation: '(「ラプンツェル、ラプンツェル、髪を下ろしておくれ」 / 直ちに髪が下りてきて王子が登った / 最初ラプンツェルはひどく怯えたが / 王子は友人のように彼女に話しかけ始めた / そして彼女の歌が大好きで会いに来たのだと伝えた)',
      structure: {
        pattern: 'SV and SV + SVC but SVO and SVOO (that節)',
        subject: 'the hair / the king\'s son / Rapunzel / the king\'s son',
        verb: 'falls / climbs up / is frightened / begins to talk, tells'
      },
      vocabulary: [
        { word: 'frightened', meaning: '怯えた、恐怖に駆られた', phonetic: '/ˈfraɪ.tənd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'quite like a friend：まるで友人のように',
        'tell her that SV：彼女に〜だと伝える'
      ]
    },
    {
      id: 'rap-22',
      slideNumber: 22,
      text: 'Then Rapunzel loses her fear, and the king\'s son asks her to marry him. He is young and handsome, she thinks. He will love me more than old Dame Gothel does.',
      translation: 'するとラプンツェルは恐れを忘れ、王子は彼女に結婚を申し込みました。若くてハンサムな方だわ、と彼女は思いました。あのゴーテルばあさんよりも私のことを愛してくれるに違いないわ。',
      literalTranslation: '(するとラプンツェルは恐れを失った / そして王子は彼女に求婚した / 「彼は若くてハンサムだ」と彼女は思った / 「あのゴーテル婆さんよりも私を愛してくれるだろう」)',
      structure: {
        pattern: 'SVO and SVO to do + SVC + SVO (比較級)',
        subject: 'Rapunzel / the king\'s son / He / He',
        verb: 'loses / asks / is / will love'
      },
      vocabulary: [
        { word: 'handsome', meaning: 'ハンサムな、整った顔立ちの', phonetic: '/ˈhæn.səm/', pos: '形容詞' },
        { word: 'Dame Gothel', meaning: 'ゴーテルおばさん（魔女の名前）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'ask her to marry him：彼女に結婚を申し込む（ask O to do）',
        'love me more than ~ does：〜が愛するよりも多く愛してくれる（比較級＋代動詞does）'
      ]
    },
    {
      id: 'rap-23',
      slideNumber: 23,
      text: 'She says yes, and lays her hand in his. I will go away with you, but I do not know how to get down. Bring with you a skein of silk every time that you come, and I will weave a ladder with it, then I will descend, and you will take me on your horse.',
      translation: '彼女は承諾し、彼の手の上に自分の手を重ねました。「喜んでご一緒しますわ。でもここからどうやって降りたらよいか分からないのです。会いに来てくださるたびに絹の束を持ってきてください。それで梯子を編みますから。そうしたら下りて、あなたの馬に乗せていってくださいな。」',
      literalTranslation: '(彼女ははいと言った / そして彼の手の中に自分の手を置いた / 「あなたと一緒にまいります / でもどう降りればいいか分かりません / 来るたびに絹の糸束を持ってきてください / それで梯子を編みますから / そうしたら降りて / あなたが私を馬に乗せてください」)',
      structure: {
        pattern: 'SV and SVO + 命令文 + and + SV and SV',
        subject: 'She / I / you',
        verb: 'says, lays / will go / Bring / will weave, descend, take'
      },
      vocabulary: [
        { word: 'skein', meaning: '（糸や毛糸の）かせ、束', phonetic: '/skeɪn/', pos: '名詞' },
        { word: 'silk', meaning: '絹、シルク', phonetic: '/sɪlk/', pos: '名詞' },
        { word: 'weave', meaning: '織る、編む', phonetic: '/wiːv/', pos: '動詞' },
        { word: 'descend', meaning: '下りる、降下する', phonetic: '/dɪˈsend/', pos: '動詞' }
      ],
      grammarPoints: [
        'every time that SV：〜するたびに（接続詞節）',
        'weave a ladder：梯子を編む'
      ]
    },
    {
      id: 'rap-24',
      slideNumber: 24,
      text: 'They agree that until that time he will come to her every evening, because the old woman comes by day. The enchantress remarks nothing of this, one day Rapunzel says to her. Dame Gothel, you are so much heavy for me but the young king\'s son is not and he is with me in a moment.',
      translation: 'ふたりはその時まで、魔女が昼間に来るので、王子は毎晩やって来ることで合意しました。魔女はこのことに全く気づいていませんでしたが、ある日ラプンツェルが魔女にうっかり言いました。「ゴーテルおばさん、あなたを引き上げるのはすごく重いけれど、若い王子様は軽くてあっという間に私のところへいらっしゃるわ。」',
      literalTranslation: '(彼らは同意した / その時まで彼が毎晩彼女のもとへ来ると / なぜなら老婆は昼に来るからだ / 魔女はこれに何も気づかなかった / ある日ラプンツェルは彼女に言った / 「ゴーテルさん、あなたはとても重いけれど / 若い王子様はそうではなく / 一瞬で私のもとに来てくださるわ」)',
      structure: {
        pattern: 'SVO (that節) + SVO + SVC',
        subject: 'They / The enchantress / you / the king\'s son',
        verb: 'agree / remarks / are / is'
      },
      vocabulary: [
        { word: 'remarks', meaning: '気づく、注意を払う', phonetic: '/rɪˈmɑːks/', pos: '動詞' },
        { word: 'by day', meaning: '昼間に', phonetic: '', pos: '副詞句' },
        { word: 'in a moment', meaning: 'あっという間に、一瞬で', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'by day / by night：昼間に／夜間に',
        'remarks nothing of this：これに全く気づかない'
      ]
    },
    {
      id: 'rap-25',
      slideNumber: 25,
      text: 'Oh! You wicked child cries the enchantress. What do I hear? I thought I separated you from all the world, and yet you deceived me! In her anger she clutches Rapunzel\'s beautiful tresses, wraps them twice round her left hand, seizes a pair of scissors with the right, and she cuts off, and the lovely braids lay on the ground.',
      translation: '「ああ！なんて邪悪な子だよ！」と魔女は叫びました。「なんと言ったのだい？世界中からお前を引き離したと思っていたのに、私を騙していたのかい！」怒り狂った魔女はラプンツェルの美しい髪をつかみ、左手に二重に巻きつけると、右手にハサミを握りしめてジョキジョキと切り落とし、愛らしい三つ編みは床に散らばりました。',
      literalTranslation: '(「ああ！この悪い子め！」と魔女は叫んだ / 「何ということを聞くのだ！ / お前を世界から引き離したと思っていたのに / お前は私を騙したのだね！」 / 怒りの中で彼女はラプンツェルの美しい髪をつかみ / 左手に2回巻きつけ / 右手でハサミを握り / 切り落とした / そして美しい三つ編みは床に横たわった)',
      structure: {
        pattern: '感嘆文 + SVO + SVO + S + V1, V2, V3, and V4',
        subject: 'the enchantress / she',
        verb: 'cries / clutches, wraps, seizes, cuts off'
      },
      vocabulary: [
        { word: 'deceived', meaning: '騙した、欺いた', phonetic: '/dɪˈsiːvd/', pos: '動詞' },
        { word: 'clutches', meaning: 'ぎゅっとつかむ', phonetic: '/klʌtʃ.ɪz/', pos: '動詞' },
        { word: 'seizes', meaning: 'つかみ取る、奪い取る', phonetic: '/siːz.ɪz/', pos: '動詞' }
      ],
      grammarPoints: [
        'separate A from B：AをBから隔離する',
        'and yet SV：それにもかかわらず'
      ]
    },
    {
      id: 'rap-26',
      slideNumber: 26,
      text: 'And she takes poor Rapunzel into a desert, she has to live in great grief and misery. On the same day she casts out Rapunzel, but the enchantress fastens the braids of hair. King\'s son comes and cries. Rapunzel, Rapunzel, Let down your hair to me. She lets the hair down.',
      translation: '魔女は哀れなラプンツェルを荒野へと連れて行き、彼女は深い悲しみと惨めさの中で暮らさねばなりませんでした。ラプンツェルを追い出したその日の夕方、魔女は切り落とした髪を窓に結びつけました。王子がやって来て「ラプンツェル、髪を下ろしておくれ」と叫ぶと、魔女はその髪を垂らしました。',
      literalTranslation: '(彼女は哀れなラプンツェルを荒野へ連れて行った / 彼女は深い悲しみと惨めさの中で生きねばならなかった / 彼女を追放した同じ日に / 魔女はその髪の三つ編みを結びつけた / 王子が来て叫んだ / 「ラプンツェル、髪を下ろしておくれ」 / 彼女は髪を下ろした)',
      structure: {
        pattern: 'SVO + SVO + SVO + SV and SV + SVO',
        subject: 'she / she / the enchantress / King\'s son / She',
        verb: 'takes / has to live / fastens / comes, cries / lets down'
      },
      vocabulary: [
        { word: 'desert', meaning: '荒野、砂漠', phonetic: '/ˈdez.ət/', pos: '名詞' },
        { word: 'grief', meaning: '深い悲しみ', phonetic: '/ɡriːf/', pos: '名詞' },
        { word: 'casts out', meaning: '追放する、追い出す', phonetic: '', pos: '句動詞' },
        { word: 'fastens', meaning: '固定する、結びつける', phonetic: '/ˈfɑː.sənz/', pos: '動詞' }
      ],
      grammarPoints: [
        'cast out：追い出す、追放する',
        'live in great grief：深い悲哀の中で生きる'
      ]
    },
    {
      id: 'rap-27',
      slideNumber: 27,
      text: 'The king\'s son ascends, but instead of finding his dearest Rapunzel, he finds the enchantress, she gazes at him with wicked and venomous looks. Oh she cries mockingly, you came to fetch your dearest, but the beautiful bird sits no longer singing in the nest, the cat got it, and will out your eyes as well.',
      translation: '王子は登っていきましたが、最愛のラプンツェルを見つける代わりに、邪悪で毒々しい目つきで彼を睨みつける魔女の姿がありました。「ふん」と魔女は嘲笑いました。「愛しい娘を迎えに来たんだろうが、あの美しい小鳥はもう巣で歌ってはいないよ。猫が捕まえてしまったのさ。そしてお前の目玉も掻き出してやるよ！」',
      literalTranslation: '(王子は登った / しかし最愛のラプンツェルを見つける代わりに / 彼は魔女を見出した / 彼女は邪悪で毒のある目つきで彼を見つめた / 「ああ」と彼女はあざ笑った / 「お前は最愛の娘を迎えに来たのだろうが / 美しい鳥はもはや巣で歌ってはいない / 猫が捕まえたのだ / そしてお前の目も引っ掻き出すだろう」)',
      structure: {
        pattern: 'SV but SVO + SV + 対話・嘲笑文',
        subject: 'The king\'s son / he / she',
        verb: 'ascends / finds / gazes / cries'
      },
      vocabulary: [
        { word: 'ascends', meaning: '登る、上昇する', phonetic: '/əˈsendz/', pos: '動詞' },
        { word: 'venomous', meaning: '毒のある、悪意に満ちた', phonetic: '/ˈven.ə.məs/', pos: '形容詞' },
        { word: 'mockingly', meaning: 'あざ笑うように、嘲笑的に', phonetic: '/ˈmɒk.ɪŋ.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'instead of finding ~：〜を見つける代わりに',
        'sits no longer singing：もはや歌うことなく座っている（no longer）'
      ]
    },
    {
      id: 'rap-28',
      slideNumber: 28,
      text: 'Rapunzel is not here; you will never see her again. The king\'s son is beside himself with pain, and in his despair he leaps down from the tower. He escapes with his life, falls into the thorns and they pierces his eyes.',
      translation: '「ラプンツェルはここにはいない。お前はもう二度と彼女に会えないよ。」王子は激痛と悲しみのあまり我を忘れ、絶望のあまり塔から飛び降りました。彼は命拾いしたものの、イバラの茂みの中に落ち、トゲが彼の目を突き刺してしまいました。',
      literalTranslation: '(「ラプンツェルはここにはいない / お前は二度と彼女を見ないだろう」 / 王子は苦痛で我を忘れた / そして絶望の中で塔から飛び降りた / 彼は命からがら逃れたが / イバラの中に落ち、それが彼の目を貫いた)',
      structure: {
        pattern: 'SVC + SVO + SVC + SV and SVO',
        subject: 'Rapunzel / you / The king\'s son / He / they',
        verb: 'is / will see / is beside himself / leaps / escapes, falls, pierces'
      },
      vocabulary: [
        { word: 'beside himself', meaning: '我を忘れて、取り乱して', phonetic: '', pos: '成句' },
        { word: 'despair', meaning: '絶望', phonetic: '/dɪˈspeər/', pos: '名詞' },
        { word: 'thorns', meaning: 'イバラのトゲ、棘', phonetic: '/θɔːnz/', pos: '名詞' },
        { word: 'pierces', meaning: '突き刺す、貫く', phonetic: '/ˈpɪə.sɪz/', pos: '動詞' }
      ],
      grammarPoints: [
        'beside oneself with pain：苦痛で我を忘れて',
        'escape with one\'s life：かろうじて命拾いする'
      ]
    },
    {
      id: 'rap-29',
      slideNumber: 29,
      text: 'Then he wanders quite blind about the forest, eats nothing but roots and berries, and weeps over the loss of his dearest wife. Thus he roams about in misery for some years, and at length comes to the desert Rapunzel has twins, a boy and a girl and they live in wretchedness.',
      translation: '盲目となった王子は森の中をさまよい歩き、木の根や木の実だけを口にしながら、最愛の妻を失ったことを嘆き悲しみました。こうして彼は何年もの間みじめにさまよい続け、ついに双子の男の子と女の子を生んで困窮の中で暮らしていたラプンツェルのいる荒野へとたどり着きました。',
      literalTranslation: '(それから彼はすっかり盲目で森をさまよった / 根や木の実以外は何も食べず / そして最愛の妻の喪失を嘆いた / こうして彼はみじめに数年間さまよった / そしてついに荒野へとやって来た / ラプンツェルが双子の男の子と女の子を持ち / 困窮の中で暮らしていた場所へ)',
      structure: {
        pattern: 'S + V1, V2, and V3 + SV and SV',
        subject: 'he / he / Rapunzel',
        verb: 'wanders, eats, weeps / roams, comes / has'
      },
      vocabulary: [
        { word: 'wanders', meaning: 'さまよい歩く、放浪する', phonetic: '/ˈwɒn.dərz/', pos: '動詞' },
        { word: 'blind', meaning: '目の見えない、盲目の', phonetic: '/blaɪnd/', pos: '形容詞' },
        { word: 'roams', meaning: '放浪する、歩き回る', phonetic: '/rəʊmz/', pos: '動詞' },
        { word: 'twins', meaning: '双子', phonetic: '/twɪnz/', pos: '名詞' }
      ],
      grammarPoints: [
        'eats nothing but ~：〜しか食べない（nothing but＝only）',
        'at length：ついに、ようやく'
      ]
    },
    {
      id: 'rap-30',
      slideNumber: 30,
      text: 'He hears a voice, and it seems so familiar to him, so that he goes towards it. Rapunzel knows him and falls on his neck and weeps. Two of her tears wet his eyes and they grow clear again, and he can see with them as before. He leads her to his kingdom and they live for a long time afterwards, happy and contented.',
      translation: '王子には聞き覚えのある懐かしい声が聞こえ、その声のする方へと歩いていきました。ラプンツェルは彼だと気づき、彼の首にしがみついて涙を流しました。彼女の涙の二滴が彼の目を濡らすと、再び澄み渡り、以前のように目が見えるようになったのです。王子は彼女を自分の王国へと連れて帰り、ふたりはそれから末永く、幸せに満ち足りて暮らしました。',
      literalTranslation: '(彼は声を聞いた / それは彼にとても聞き覚えがあった / だから彼はそちらへ向かった / ラプンツェルは彼だと分かり、首に取りすがって泣いた / 彼女の涙の二滴が彼の目を濡らし / 再び澄み渡った / そして彼は前のように目で見ることができた / 彼は彼女を自分の国へ連れて行き / ふたりはその後長く暮らした / 幸福に満ち足りて)',
      structure: {
        pattern: 'SVO + SVO and SV and SV + SVO and SVC + SVO and SV',
        subject: 'He / Rapunzel / Two of her tears / he / He / they',
        verb: 'hears / knows, falls, weeps / wet / can see / leads / live'
      },
      vocabulary: [
        { word: 'familiar', meaning: '聞き慣れた、見慣れた、懐かしい', phonetic: '/fəˈmɪl.i.ər/', pos: '形容詞' },
        { word: 'falls on his neck', meaning: '彼の首にかじりつく、抱きつく', phonetic: '', pos: 'イディオム' },
        { word: 'contented', meaning: '満ち足りた、満足した', phonetic: '/kənˈten.tɪd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'fall on someone\'s neck：人の首にすがりついて泣く（聖書や古典の表現）',
        'grow clear：澄み渡る（変化を表すgrow）',
        'happy and contented：幸福で満ち足りて（文末の様態補語）'
      ]
    }
  ]
};
