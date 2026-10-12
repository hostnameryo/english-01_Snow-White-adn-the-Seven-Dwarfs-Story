import { Story } from '../types';

export const snowWhiteStory: Story = {
  id: 'snow-white',
  title: 'Snow White and the Seven Dwarfs',
  titleJa: '白雪姫と7人の小人たち',
  category: 'fairytale',
  description: 'The classic beloved fairy tale. Listen to each sentence 3 times to master natural English storytelling and rhythm.',
  descriptionJa: '動画に登場する名作童話『白雪姫』の全編英文。1文ごとに3回ずつ音読し、物語の情景とともに自然な英語表現とリズムを体得します。',
  level: 'Beginner',
  theme: 'parchment',
  authorOrSource: 'Brothers Grimm / Classic Storybook Adaptation',
  sentences: [
    {
      id: 'sw-1',
      slideNumber: 1,
      text: 'Once upon a time, a princess named Snow White lived in a castle with her father, the King, and her stepmother, the Queen.',
      translation: '昔々、白雪姫という名の王女が、父親である国王と継母の王妃と共に城で暮らしていました。',
      structure: {
        pattern: 'SV',
        subject: 'a princess named Snow White',
        verb: 'lived',
        modifiers: 'in a castle with her father, the King, and her stepmother, the Queen',
        notes: '「named Snow White」は過去分詞でprincessを修飾。「Once upon a time」は物語の定番導入句。'
      },
      vocabulary: [
        { word: 'princess', meaning: '王女、プリンセス', phonetic: '/ˈprɪn.ses/', pos: '名詞' },
        { word: 'castle', meaning: '城', phonetic: '/ˈkæs.əl/', pos: '名詞' },
        { word: 'stepmother', meaning: '継母（ままはは）', phonetic: '/ˈstepˌmʌð.ər/', pos: '名詞' }
      ],
      grammarPoints: [
        'Once upon a time：昔々（おとぎ話の決まり文句）',
        'named A：〜と名付けられた（過去分詞の形容詞的用法）',
        'the King / the Queen：同格（カンマで名詞を並べて説明）'
      ]
    },
    {
      id: 'sw-2',
      slideNumber: 1,
      text: 'Her father had always said to his daughter that she must be fair to everyone at court.',
      translation: '父親はいつも娘に、宮廷のすべての人に対して公平でなければならないと言い聞かせていました。',
      structure: {
        pattern: 'SVO',
        subject: 'Her father',
        verb: 'had always said',
        object: 'that she must be fair to everyone at court',
        modifiers: 'to his daughter',
        notes: '過去完了形（had said）により、以前からの習慣的言動を表しています。'
      },
      vocabulary: [
        { word: 'fair', meaning: '公平な、公正な、美しい', phonetic: '/feər/', pos: '形容詞' },
        { word: 'court', meaning: '宮廷、法廷', phonetic: '/kɔːrt/', pos: '名詞' },
        { word: 'daughter', meaning: '娘', phonetic: '/ˈdɔː.tər/', pos: '名詞' }
      ],
      grammarPoints: [
        'say to 人 that SV：人に〜だと言う',
        'had always said：過去完了形（過去のある時点までの継続的行為）',
        'be fair to ~：〜に対して公平である'
      ]
    },
    {
      id: 'sw-3',
      slideNumber: 2,
      text: 'Said he: "People come here to the castle when they have a problem."',
      translation: '父親はこう言いました。「人々は困ったことがあると、この城へやって来るのだ。」',
      structure: {
        pattern: 'SV (倒置)',
        verb: 'Said',
        subject: 'he',
        notes: '物語文特有の倒置構文。「He said」の代わりに動詞Saidが前に出ています。'
      },
      vocabulary: [
        { word: 'problem', meaning: '問題、困りごと', phonetic: '/ˈprɒb.ləm/', pos: '名詞' }
      ],
      grammarPoints: [
        'Said he：彼は言った（文学的な倒置表現）',
        'when they have a problem：時を表す副詞節'
      ]
    },
    {
      id: 'sw-4',
      slideNumber: 2,
      text: 'They need the ruler to make a fair decision.',
      translation: '人々は統治者に公正な判断を下してもらうことを必要としているのだ。',
      structure: {
        pattern: 'SVO to do',
        subject: 'They',
        verb: 'need',
        object: 'the ruler',
        complement: 'to make a fair decision',
        notes: '「need O to do」で「Oに〜してもらう必要がある」'
      },
      vocabulary: [
        { word: 'ruler', meaning: '統治者、支配者', phonetic: '/ˈruː.lər/', pos: '名詞' },
        { word: 'decision', meaning: '決定、判断', phonetic: '/dɪˈsɪʒ.ən/', pos: '名詞' }
      ],
      grammarPoints: [
        'need O to do：Oが〜することを必要とする',
        'make a decision：決定を下す、決断する'
      ]
    },
    {
      id: 'sw-5',
      slideNumber: 2,
      text: 'Nothing is more important than to be fair.',
      translation: '公平であること以上に大切なことは何もないのだ。',
      structure: {
        pattern: 'SVC (比較)',
        subject: 'Nothing',
        verb: 'is',
        complement: 'more important than to be fair',
        notes: '否定主語＋比較級で最上級の意味を表す重要構文。'
      },
      vocabulary: [
        { word: 'important', meaning: '重要な、大切な', phonetic: '/ɪmˈpɔː.tənt/', pos: '形容詞' }
      ],
      grammarPoints: [
        'Nothing is more A than B：BよりAなものはない（＝Bが最もAである）',
        'to be fair：公平であること（不定詞の名詞的用法）'
      ]
    },
    {
      id: 'sw-6',
      slideNumber: 3,
      text: "The Queen, Snow White's stepmother, knew how much this meant to her husband.",
      translation: '白雪姫の継母である王妃は、これが夫にとってどれほど重大な意味を持つか知っていました。',
      structure: {
        pattern: 'SVO',
        subject: "The Queen, Snow White's stepmother",
        verb: 'knew',
        object: 'how much this meant to her husband'
      },
      vocabulary: [
        { word: 'meant', meaning: '意味した（meanの過去形）', phonetic: '/ment/', pos: '動詞' },
        { word: 'husband', meaning: '夫', phonetic: '/ˈhʌz.bənd/', pos: '名詞' }
      ],
      grammarPoints: [
        'how much SV：どれほど〜であるか（間接疑問文の目的語節）',
        'mean a lot to ~：〜にとって大きな意味を持つ'
      ]
    },
    {
      id: 'sw-7',
      slideNumber: 3,
      text: 'At the first chance, she rushed to her magic mirror.',
      translation: '最初の機会が訪れるやいなや、彼女は自分の魔法の鏡のもとへと駆け寄りました。',
      structure: {
        pattern: 'SV',
        subject: 'she',
        verb: 'rushed',
        modifiers: 'At the first chance / to her magic mirror'
      },
      vocabulary: [
        { word: 'rushed', meaning: '急いで向かった、突進した', phonetic: '/rʌʃt/', pos: '動詞' },
        { word: 'mirror', meaning: '鏡', phonetic: '/ˈmɪr.ər/', pos: '名詞' },
        { word: 'magic', meaning: '魔法の、不思議な', phonetic: '/ˈmædʒ.ɪk/', pos: '形容詞' }
      ],
      grammarPoints: [
        'At the first chance：機会を見つけるとすぐに、最初のチャンスで',
        'rush to ~：〜へ急行する・駆け込む'
      ]
    },
    {
      id: 'sw-8',
      slideNumber: 4,
      text: '"Mirror, mirror, on the wall," said the Queen.',
      translation: '「壁の鏡よ、鏡さん」と王妃は言いました。',
      structure: {
        pattern: 'OVS (倒置)',
        object: 'Mirror, mirror, on the wall',
        verb: 'said',
        subject: 'the Queen'
      },
      vocabulary: [
        { word: 'wall', meaning: '壁', phonetic: '/wɔːl/', pos: '名詞' }
      ],
      grammarPoints: [
        'Mirror, mirror, on the wall：白雪姫の象徴的な呼びかけフレーズ'
      ]
    },
    {
      id: 'sw-9',
      slideNumber: 4,
      text: '"Who is the fairest of them all?"',
      translation: '「この世でいちばん美しい（公平な）のは誰？」',
      structure: {
        pattern: 'SVC',
        subject: 'Who',
        verb: 'is',
        complement: 'the fairest of them all'
      },
      vocabulary: [
        { word: 'fairest', meaning: '最も美しい、最も公正な（fairの最上級）', phonetic: '/ˈfeə.rɪst/', pos: '形容詞' }
      ],
      grammarPoints: [
        'the + 最上級 + of them all：すべての中で最も〜（「公平な」「美しい」の両義を含む言葉遊び）'
      ]
    },
    {
      id: 'sw-10',
      slideNumber: 4,
      text: '"Snow White is the fairest of them all!" said the Magic Mirror.',
      translation: '「白雪姫こそが、すべての中でいちばん美しく公平でございます！」と魔法の鏡は答えました。',
      structure: {
        pattern: 'OVS',
        object: 'Snow White is the fairest of them all',
        verb: 'said',
        subject: 'the Magic Mirror'
      },
      vocabulary: [
        { word: 'magic mirror', meaning: '魔法の鏡', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'said the Magic Mirror：発言を先頭に置く物語形式'
      ]
    },
    {
      id: 'sw-11',
      slideNumber: 5,
      text: '"What?!" yelled the Queen.',
      translation: '「なんですって？！」と王妃は叫びました。',
      structure: {
        pattern: 'OVS',
        verb: 'yelled',
        subject: 'the Queen'
      },
      vocabulary: [
        { word: 'yelled', meaning: '大声で叫んだ（yellの過去形）', phonetic: '/jeld/', pos: '動詞' }
      ],
      grammarPoints: [
        'yell：怒りや驚きで大声を張り上げる'
      ]
    },
    {
      id: 'sw-12',
      slideNumber: 5,
      text: '"No one is more fair than I!"',
      translation: '「私より美しい（公平な）者などいるはずがない！」',
      structure: {
        pattern: 'SVC',
        subject: 'No one',
        verb: 'is',
        complement: 'more fair than I'
      },
      vocabulary: [
        { word: 'no one', meaning: '誰も〜ない', phonetic: '/ˌnəʊ ˈwʌn/', pos: '代名詞' }
      ],
      grammarPoints: [
        'No one is more A than B：BよりAな人はいない',
        'than I：古典的・格調高い表現（口語では than me も多い）'
      ]
    },
    {
      id: 'sw-13',
      slideNumber: 5,
      text: 'The Queen must have the best of everything - everyone knows that.',
      translation: '王妃はあらゆる最高のものを手に入れて当然なのだ。誰だってそんなことは知っている。',
      structure: {
        pattern: 'SVO',
        subject: 'The Queen',
        verb: 'must have',
        object: 'the best of everything'
      },
      vocabulary: [
        { word: 'everything', meaning: 'すべてのもの', phonetic: '/ˈev.ri.θɪŋ/', pos: '代名詞' }
      ],
      grammarPoints: [
        'the best of everything：何もかもすべての最上のもの',
        'must have：〜を持っていなければならない（義務・当然）'
      ]
    },
    {
      id: 'sw-14',
      slideNumber: 5,
      text: 'What could be more fair?',
      translation: 'それのどこが不公平だというの？（これ以上公平なことなどあり得るだろうか？）',
      structure: {
        pattern: 'SVC (修辞疑問文)',
        subject: 'What',
        verb: 'could be',
        complement: 'more fair'
      },
      vocabulary: [],
      grammarPoints: [
        '修辞疑問文（反語）：これ以上のことがあるだろうか（＝ない）'
      ]
    },
    {
      id: 'sw-15',
      slideNumber: 5,
      text: '"Snow White is the fairest of them all!" repeated the Magic Mirror.',
      translation: '「白雪姫こそが、すべての中でいちばん美しく公平でございます！」と魔法の鏡は繰り返しました。',
      structure: {
        pattern: 'OVS',
        verb: 'repeated',
        subject: 'the Magic Mirror'
      },
      vocabulary: [
        { word: 'repeated', meaning: '繰り返した', phonetic: '/rɪˈpiː.tɪd/', pos: '動詞' }
      ],
      grammarPoints: [
        'repeat：再度繰り返して言う'
      ]
    },
    {
      id: 'sw-16',
      slideNumber: 6,
      text: '"What do you know you are a mirror!" roared the Queen.',
      translation: '「鏡の分際で何がわかるというのだ！」と王妃は怒鳴りつけました。',
      structure: {
        pattern: 'OVS',
        verb: 'roared',
        subject: 'the Queen'
      },
      vocabulary: [
        { word: 'roared', meaning: '吠えた、咆哮した、怒鳴った', phonetic: '/rɔːrd/', pos: '動詞' }
      ],
      grammarPoints: [
        'What do you know：お前に何がわかる（軽蔑・反論の決まり文句）'
      ]
    },
    {
      id: 'sw-17',
      slideNumber: 6,
      text: 'And she stormed off.',
      translation: 'そして彼女は激しい足取りで立ち去りました。',
      structure: {
        pattern: 'SV',
        subject: 'she',
        verb: 'stormed off'
      },
      vocabulary: [
        { word: 'stormed off', meaning: '怒り狂って立ち去った', phonetic: '/stɔːmd ɒf/', pos: '句動詞' }
      ],
      grammarPoints: [
        'storm off：怒って足音荒く立ち去る'
      ]
    },
    {
      id: 'sw-18',
      slideNumber: 6,
      text: 'Still, the Queen was bothered.',
      translation: 'それでもなお、王妃の苛立ちは収まりませんでした。',
      structure: {
        pattern: 'SVC',
        subject: 'the Queen',
        verb: 'was',
        complement: 'bothered'
      },
      vocabulary: [
        { word: 'bothered', meaning: '悩まされた、心がかき乱された', phonetic: '/ˈbɒð.əd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'Still：それでもなお、しかし',
        'be bothered：気に障る、悩まされている'
      ]
    },
    {
      id: 'sw-19',
      slideNumber: 6,
      text: 'So bothered was she that the Queen decided to be rid of the girl, once and for all.',
      translation: 'あまりにも苛立ったあまり、王妃はその娘を完全に始末してしまおうと決心しました。',
      structure: {
        pattern: 'CVS that (倒置強調構文)',
        complement: 'So bothered',
        verb: 'was',
        subject: 'she',
        notes: '「So + 形容詞 + be動詞 + 主語 + that節」の極めて高度で美しい倒置強調構文！'
      },
      vocabulary: [
        { word: 'rid', meaning: '取り除く、免れる', phonetic: '/rɪd/', pos: '形容詞' },
        { word: 'once and for all', meaning: 'きっぱりと、これを最後に、完全に', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'So + 形容詞 + be動詞 + 主語 that...：とても〜だったので…だ（倒置構文）',
        'be rid of ~：〜を処分する、〜を取り除く',
        'once and for all：これっきり、きっぱりと'
      ]
    },
    {
      id: 'sw-20',
      slideNumber: 6,
      text: '"I cannot wait another day!" she declared.',
      translation: '「もう一日たりとも待つことなどできぬ！」と彼女は宣言しました。',
      structure: {
        pattern: 'SVO',
        verb: 'declared',
        subject: 'she'
      },
      vocabulary: [
        { word: 'declared', meaning: '宣言した、断言した', phonetic: '/dɪˈkleəd/', pos: '動詞' }
      ],
      grammarPoints: [
        'cannot wait another day：一日も待てない（切迫した焦燥感）'
      ]
    },
    {
      id: 'sw-21',
      slideNumber: 7,
      text: 'The Queen called for her servant, a huntsman.',
      translation: '王妃は召使いである狩人を呼びつけました。',
      structure: {
        pattern: 'SVO',
        subject: 'The Queen',
        verb: 'called for',
        object: 'her servant, a huntsman'
      },
      vocabulary: [
        { word: 'servant', meaning: '使用人、召使い', phonetic: '/ˈsɜː.vənt/', pos: '名詞' },
        { word: 'huntsman', meaning: '狩人、猟師', phonetic: '/ˈhʌnts.mən/', pos: '名詞' }
      ],
      grammarPoints: [
        'call for ~：〜を呼び出す、〜を求める',
        'her servant, a huntsman：同格'
      ]
    },
    {
      id: 'sw-22',
      slideNumber: 7,
      text: '"Find a reason to take Snow White deep into the woods," she said, pointing her long finger at the servant.',
      translation: '「白雪姫を森の奥深くまで連れ出す口実を見つけるのだ」と、彼女は使用人に長い指を突きつけながら命じました。',
      structure: {
        pattern: 'SVO + 分詞構文',
        verb: 'Find',
        object: 'a reason to take Snow White deep into the woods',
        modifiers: 'pointing her long finger at the servant'
      },
      vocabulary: [
        { word: 'reason', meaning: '理由、口実', phonetic: '/ˈriː.zən/', pos: '名詞' },
        { word: 'woods', meaning: '森', phonetic: '/wʊdz/', pos: '名詞' },
        { word: 'pointing', meaning: '指差しながら（分詞構文）', phonetic: '/ˈpɔɪn.tɪŋ/', pos: '動詞' }
      ],
      grammarPoints: [
        'reason to do：〜するための口実・理由',
        'take A deep into B：AをBの奥深くに連れていく',
        'pointing ~：付帯状況の分詞構文（〜しながら）'
      ]
    },
    {
      id: 'sw-23',
      slideNumber: 7,
      text: '"Then kill her."',
      translation: '「そして、その娘を殺すのだ。」',
      structure: {
        pattern: 'SVO (命令文)',
        verb: 'kill',
        object: 'her'
      },
      vocabulary: [
        { word: 'kill', meaning: '殺す', phonetic: '/kɪl/', pos: '動詞' }
      ],
      grammarPoints: [
        '命令文：冷酷な命令'
      ]
    },
    {
      id: 'sw-24',
      slideNumber: 7,
      text: 'The huntsman was shocked!',
      translation: '狩人は大きなショックを受けました！',
      structure: {
        pattern: 'SVC',
        subject: 'The huntsman',
        verb: 'was',
        complement: 'shocked'
      },
      vocabulary: [
        { word: 'shocked', meaning: '衝撃を受けた、愕然とした', phonetic: '/ʃɒkt/', pos: '形容詞' }
      ],
      grammarPoints: [
        'be shocked：強い衝撃を受ける'
      ]
    },
    {
      id: 'sw-25',
      slideNumber: 8,
      text: 'But she was the Queen and what could he do?',
      translation: 'しかし相手は王妃であり、彼に一体何ができるというのでしょう？',
      structure: {
        pattern: '重文 (SVC + 修辞疑問)',
        subject: 'she / he',
        verb: 'was / could do'
      },
      vocabulary: [],
      grammarPoints: [
        'what could he do?：反語的疑問（彼に逆らう術などあるはずがなかった）'
      ]
    },
    {
      id: 'sw-26',
      slideNumber: 8,
      text: 'The next day he took Snow White into the woods.',
      translation: '翌日、彼は白雪姫を森の中へと連れていきました。',
      structure: {
        pattern: 'SVO',
        subject: 'he',
        verb: 'took',
        object: 'Snow White',
        modifiers: 'into the woods / The next day'
      },
      vocabulary: [
        { word: 'took', meaning: '連れていった（takeの過去形）', phonetic: '/tʊk/', pos: '動詞' }
      ],
      grammarPoints: [
        'take 人 into ~：人を〜の中へ連れていく'
      ]
    },
    {
      id: 'sw-27',
      slideNumber: 8,
      text: 'As he drew his knife to slay her, Snow White turned around.',
      translation: '彼が彼女を手にかけるためにナイフを抜いたその時、白雪姫がふと振り返りました。',
      structure: {
        pattern: '従属節(SVO) + 主節(SV)',
        subject: 'he / Snow White',
        verb: 'drew / turned around',
        modifiers: 'to slay her'
      },
      vocabulary: [
        { word: 'drew', meaning: '抜いた（drawの過去形）', phonetic: '/druː/', pos: '動詞' },
        { word: 'knife', meaning: '短剣、ナイフ', phonetic: '/naɪf/', pos: '名詞' },
        { word: 'slay', meaning: '殺害する、討ち取る', phonetic: '/sleɪ/', pos: '動詞' }
      ],
      grammarPoints: [
        'As SV：〜した時、〜しながら',
        'to slay her：殺すために（不定詞の副詞的用法・目的）',
        'turn around：後ろを振り向く'
      ]
    },
    {
      id: 'sw-28',
      slideNumber: 8,
      text: '"Look," she said, taking something out of her pocket.',
      translation: '「これを見て」と、彼女はポケットから何かを取り出しながら言いました。',
      structure: {
        pattern: 'SVO + 分詞構文',
        verb: 'said',
        subject: 'she',
        modifiers: 'taking something out of her pocket'
      },
      vocabulary: [
        { word: 'pocket', meaning: 'ポケット', phonetic: '/ˈpɒk.ɪt/', pos: '名詞' }
      ],
      grammarPoints: [
        'take something out of ~：〜から何かを取り出す',
        'taking ~：分詞構文（取り出しながら）'
      ]
    },
    {
      id: 'sw-29',
      slideNumber: 9,
      text: '"You have always been good to me."',
      translation: '「あなたはいつも私に優しくしてくださいました。」',
      structure: {
        pattern: 'SVC',
        subject: 'You',
        verb: 'have always been',
        complement: 'good',
        modifiers: 'to me'
      },
      vocabulary: [],
      grammarPoints: [
        'have always been ~：ずっと〜であり続けてくれた（現在完了の継続）',
        'be good to ~：〜に対して親切・優しい'
      ]
    },
    {
      id: 'sw-30',
      slideNumber: 9,
      text: 'She held in front of him six perfect arrowheads that she had carefully shaped.',
      translation: '彼女は丁寧に形作った6つの見事な鏃（やじり）を、彼の目の前に差し出しました。',
      structure: {
        pattern: 'SVO (修飾語句の挿入)',
        subject: 'She',
        verb: 'held',
        object: 'six perfect arrowheads that she had carefully shaped',
        modifiers: 'in front of him'
      },
      vocabulary: [
        { word: 'arrowheads', meaning: '鏃（矢じり）', phonetic: '/ˈær.əʊ.hedz/', pos: '名詞' },
        { word: 'shaped', meaning: '形作った、成形した', phonetic: '/ʃeɪpt/', pos: '動詞' },
        { word: 'carefully', meaning: '丁寧に、心を込めて', phonetic: '/ˈkeə.fəl.i/', pos: '副詞' }
      ],
      grammarPoints: [
        'that she had carefully shaped：関係代名詞節（矢じりを先行詞とする）',
        'had carefully shaped：過去完了形（差し出す前に作っていたこと）'
      ]
    },
    {
      id: 'sw-31',
      slideNumber: 9,
      text: '"Do you like them?" she said.',
      translation: '「気に入っていただけましたか？」と彼女は尋ねました。',
      structure: {
        pattern: 'SVO',
        subject: 'you',
        verb: 'like',
        object: 'them'
      },
      vocabulary: [],
      grammarPoints: [
        'like them：themは複数形の arrowheads を指す'
      ]
    },
    {
      id: 'sw-32',
      slideNumber: 9,
      text: '"They are for you."',
      translation: '「あなたへの贈り物です。」',
      structure: {
        pattern: 'SVC',
        subject: 'They',
        verb: 'are',
        complement: 'for you'
      },
      vocabulary: [],
      grammarPoints: [
        'be for you：あなたへのもの、あなたにあげるもの'
      ]
    },
    {
      id: 'sw-33',
      slideNumber: 9,
      text: '"Snow White," said the huntsman. "I cannot do this!"',
      translation: '「白雪姫様…」と狩人は言いました。「私にはとてもこんなことはできません！」',
      structure: {
        pattern: 'SVO',
        subject: 'I',
        verb: 'cannot do',
        object: 'this'
      },
      vocabulary: [],
      grammarPoints: [
        'cannot do this：良心の呵責から犯行を行えないこと'
      ]
    },
    {
      id: 'sw-34',
      slideNumber: 10,
      text: '"Of course you can take these," said Snow White.',
      translation: '「もちろん受け取ってくださって構いませんよ」と白雪姫は言いました。',
      structure: {
        pattern: 'SVO',
        subject: 'you',
        verb: 'can take',
        object: 'these'
      },
      vocabulary: [],
      grammarPoints: [
        'Of course：もちろん'
      ]
    },
    {
      id: 'sw-35',
      slideNumber: 10,
      text: '"That\'s not what I meant," said the servant.',
      translation: '「そういう意味ではございません」と使用人は答えました。',
      structure: {
        pattern: 'SVC',
        subject: 'That',
        verb: 'is not',
        complement: 'what I meant'
      },
      vocabulary: [
        { word: 'meant', meaning: '意味した、意図した', phonetic: '/ment/', pos: '動詞' }
      ],
      grammarPoints: [
        'what I meant：私が意図したこと（関係代名詞whatを含む名詞節）'
      ]
    },
    {
      id: 'sw-36',
      slideNumber: 10,
      text: 'He dropped to his knees.',
      translation: '彼はその場にがっくりと膝をつきました。',
      structure: {
        pattern: 'SV',
        subject: 'He',
        verb: 'dropped',
        modifiers: 'to his knees'
      },
      vocabulary: [
        { word: 'knees', meaning: '膝（ひざ）', phonetic: '/niːz/', pos: '名詞' }
      ],
      grammarPoints: [
        'drop to one\'s knees：膝を折って跪く、がっくりと膝をつく'
      ]
    },
    {
      id: 'sw-37',
      slideNumber: 10,
      text: '"How can I say this to you?"',
      translation: '「これを姫様にどうお伝えすればよいのか…」',
      structure: {
        pattern: 'SVO',
        subject: 'I',
        verb: 'can say',
        object: 'this',
        modifiers: 'to you / How'
      },
      vocabulary: [],
      grammarPoints: [
        'How can I say this：言いにくい重大な告白を始める時の表現'
      ]
    },
    {
      id: 'sw-38',
      slideNumber: 11,
      text: '"The Queen, your step-mother, ordered me to kill you," he said.',
      translation: '「お母上である王妃様が、姫様を殺すよう私に命じたのです」と彼は言いました。',
      structure: {
        pattern: 'SVO to do',
        subject: 'The Queen, your step-mother',
        verb: 'ordered',
        object: 'me',
        complement: 'to kill you'
      },
      vocabulary: [
        { word: 'ordered', meaning: '命令した', phonetic: '/ˈɔː.dəd/', pos: '動詞' }
      ],
      grammarPoints: [
        'order O to do：Oに〜するよう命じる'
      ]
    },
    {
      id: 'sw-39',
      slideNumber: 11,
      text: '"But I cannot!" "She did what?" Snow White called out with alarm.',
      translation: '「ですが私にはできません！」「お母様がそんなことを…？」と白雪姫は驚愕して叫びました。',
      structure: {
        pattern: 'SV',
        subject: 'Snow White',
        verb: 'called out',
        modifiers: 'with alarm'
      },
      vocabulary: [
        { word: 'alarm', meaning: '恐怖、驚愕、警戒', phonetic: '/əˈlɑːm/', pos: '名詞' },
        { word: 'called out', meaning: '叫んだ、声を上げた', phonetic: '/kɔːld aʊt/', pos: '句動詞' }
      ],
      grammarPoints: [
        'with alarm：驚きと恐怖を込めて',
        'She did what?：何をしたって？（信じがたい事実への驚きの疑問表現）'
      ]
    },
    {
      id: 'sw-40',
      slideNumber: 11,
      text: '"You must run away!" said the huntsman.',
      translation: '「逃げてください！」と狩人は言いました。',
      structure: {
        pattern: 'SV',
        subject: 'You',
        verb: 'must run away'
      },
      vocabulary: [
        { word: 'run away', meaning: '逃げる、逃走する', phonetic: '/rʌn əˈweɪ/', pos: '句動詞' }
      ],
      grammarPoints: [
        'run away：逃げ出す'
      ]
    },
    {
      id: 'sw-41',
      slideNumber: 11,
      text: '"Far into the woods. Now! And never come back to the castle!"',
      translation: '「森のずっと奥深くへ。今すぐに！そして二度と城へ戻ってきてはなりません！」',
      structure: {
        pattern: '副詞句 + 否定命令文',
        modifiers: 'Far into the woods / Now',
        notes: '「never come back」は強い禁止命令。'
      },
      vocabulary: [],
      grammarPoints: [
        'Far into ~：〜のずっと奥深くまで',
        'never come back：決して戻ってこない'
      ]
    },
    {
      id: 'sw-42',
      slideNumber: 12,
      text: 'Snow White turned and ran into the woods as fast as she could.',
      translation: '白雪姫は身を翻し、力のかぎり速く森の中へと走りました。',
      structure: {
        pattern: 'SV and SV',
        subject: 'Snow White',
        verb: 'turned and ran',
        modifiers: 'into the woods / as fast as she could'
      },
      vocabulary: [
        { word: 'fast', meaning: '速く', phonetic: '/fɑːst/', pos: '副詞' }
      ],
      grammarPoints: [
        'as fast as one can/could：できるかぎり速く'
      ]
    },
    {
      id: 'sw-43',
      slideNumber: 12,
      text: 'Deeper and deeper she ran.',
      translation: '彼女は森のより深く、さらに奥深くへと走り続けました。',
      structure: {
        pattern: 'CVS (倒置)',
        modifiers: 'Deeper and deeper',
        subject: 'she',
        verb: 'ran'
      },
      vocabulary: [
        { word: 'deeper', meaning: 'より深く（deepの比較級）', phonetic: '/ˈdiː.pər/', pos: '副詞' }
      ],
      grammarPoints: [
        '比較級 and 比較級：ますます〜、だんだんと〜'
      ]
    },
    {
      id: 'sw-44',
      slideNumber: 12,
      text: 'It was getting dark, and the wolves were starting to howl.',
      translation: 'あたりは暗くなり始め、狼たちが遠吠えを上げ始めていました。',
      structure: {
        pattern: '重文 (SVC and SVO)',
        subject: 'It / the wolves',
        verb: 'was getting / were starting',
        complement: 'dark',
        object: 'to howl'
      },
      vocabulary: [
        { word: 'wolves', meaning: '狼たち（wolfの複数形）', phonetic: '/wʊlvz/', pos: '名詞' },
        { word: 'howl', meaning: '遠吠えする', phonetic: '/haʊl/', pos: '動詞' }
      ],
      grammarPoints: [
        'get dark：暗くなる（変化を表すget）',
        'start to do：〜し始める'
      ]
    },
    {
      id: 'sw-45',
      slideNumber: 12,
      text: 'She tripped and her skirt was torn.',
      translation: '彼女は足をすべらせて転び、スカートが引き裂かれてしまいました。',
      structure: {
        pattern: '重文 (SV and SVC)',
        subject: 'She / her skirt',
        verb: 'tripped / was torn'
      },
      vocabulary: [
        { word: 'tripped', meaning: 'つまずいた、転んだ', phonetic: '/trɪpt/', pos: '動詞' },
        { word: 'torn', meaning: '破れた（tearの過去分詞）', phonetic: '/tɔːn/', pos: '形容詞' }
      ],
      grammarPoints: [
        'trip：つまずく',
        'be torn：破れる、引き裂かれる（受動態）'
      ]
    },
    {
      id: 'sw-46',
      slideNumber: 13,
      text: 'Tall tree branches seemed to reach down to the very ground to grab her.',
      translation: '高い木の枝がまるで彼女を捕まえようと地面すれすれまで伸びてきているように思えました。',
      structure: {
        pattern: 'S + seem to do',
        subject: 'Tall tree branches',
        verb: 'seemed to reach down',
        modifiers: 'to the very ground / to grab her'
      },
      vocabulary: [
        { word: 'branches', meaning: '木の枝', phonetic: '/ˈbrɑːn.tʃɪz/', pos: '名詞' },
        { word: 'grab', meaning: 'つかみ取る、捕らえる', phonetic: '/ɡræb/', pos: '動詞' },
        { word: 'the very', meaning: 'まさにその〜（強調のvery）', phonetic: '', pos: '形容詞' }
      ],
      grammarPoints: [
        'seem to do：〜のように思われる',
        'to the very ground：まさに地面そのものまで（veryがgroundを強調）',
        'to grab her：捕まえるために（目的を表す不定詞）'
      ]
    },
    {
      id: 'sw-47',
      slideNumber: 13,
      text: 'She was scratched, bleeding and scared. Yet she ran on and on.',
      translation: '彼女は傷だらけになり、血を流し、恐怖に震えながらも、なおも走り続けました。',
      structure: {
        pattern: 'SVC and SV',
        subject: 'She',
        verb: 'was / ran on and on',
        complement: 'scratched, bleeding and scared'
      },
      vocabulary: [
        { word: 'scratched', meaning: '引っかき傷がついた', phonetic: '/skrætʃt/', pos: '形容詞' },
        { word: 'bleeding', meaning: '出血している', phonetic: '/ˈbliː.dɪŋ/', pos: '形容詞' },
        { word: 'scared', meaning: '怯えた、怖がった', phonetic: '/skeəd/', pos: '形容詞' }
      ],
      grammarPoints: [
        'run on and on：延々と走り続ける'
      ]
    },
    {
      id: 'sw-48',
      slideNumber: 13,
      text: 'Then all of a sudden, far away, there was a light.',
      translation: 'その時、突然、遥か彼方に明かりが見えました。',
      structure: {
        pattern: 'There is 構文',
        verb: 'was',
        subject: 'a light',
        modifiers: 'Then all of a sudden / far away'
      },
      vocabulary: [
        { word: 'all of a sudden', meaning: '突然に、不意に', phonetic: '', pos: '成句' },
        { word: 'far away', meaning: '遠く離れて、遥か彼方に', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'all of a sudden：突如として（＝suddenly）'
      ]
    },
    {
      id: 'sw-49',
      slideNumber: 14,
      text: 'Who was living so deep in the woods? She stepped up closer. It was a cottage!',
      translation: 'こんな森の奥深くに誰が住んでいるのでしょう？彼女が近づいてみると、それは小さな山小屋でした！',
      structure: {
        pattern: '疑問文 + SV + SVC',
        subject: 'Who / She / It',
        verb: 'was living / stepped up / was',
        complement: 'a cottage'
      },
      vocabulary: [
        { word: 'cottage', meaning: '山小屋、コテージ、小さな家', phonetic: '/ˈkɒt.ɪdʒ/', pos: '名詞' },
        { word: 'closer', meaning: 'より近くに', phonetic: '/ˈkləʊ.sər/', pos: '副詞' }
      ],
      grammarPoints: [
        'step up closer：より近くへ歩み寄る'
      ]
    },
    {
      id: 'sw-50',
      slideNumber: 14,
      text: 'Yet no sound came from the cottage, only light from the windows.',
      translation: 'しかし小屋からは物音ひとつせず、窓から漏れる明かりだけがありました。',
      structure: {
        pattern: 'SV',
        subject: 'no sound',
        verb: 'came',
        modifiers: 'from the cottage'
      },
      vocabulary: [
        { word: 'windows', meaning: '窓', phonetic: '/ˈwɪn.dəʊz/', pos: '名詞' }
      ],
      grammarPoints: [
        'no sound came from ~：〜から物音が聞こえなかった'
      ]
    },
    {
      id: 'sw-51',
      slideNumber: 15,
      text: '"Hello?" she said, knocking softly on the door.',
      translation: '「ごめんください？」と、彼女はドアを静かにノックしながら呼びかけました。',
      structure: {
        pattern: 'SVO + 分詞構文',
        verb: 'said',
        subject: 'she',
        modifiers: 'knocking softly on the door'
      },
      vocabulary: [
        { word: 'knocking', meaning: 'ノックしながら', phonetic: '/ˈnɒk.ɪŋ/', pos: '動詞' },
        { word: 'softly', meaning: '優しく、静かに', phonetic: '/ˈsɒft.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'knock on the door：ドアを叩く'
      ]
    },
    {
      id: 'sw-52',
      slideNumber: 15,
      text: '"Hello?" No answer. The door was a little bit open.',
      translation: '「誰かいますか？」返事はありません。ドアがほんの少しだけ開いていました。',
      structure: {
        pattern: 'SVC',
        subject: 'The door',
        verb: 'was',
        complement: 'open',
        modifiers: 'a little bit'
      },
      vocabulary: [
        { word: 'a little bit', meaning: 'ほんの少しだけ', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'No answer：返事なし'
      ]
    },
    {
      id: 'sw-53',
      slideNumber: 15,
      text: 'She opened it some more and stepped in. "Hello, is anyone home?"',
      translation: '彼女はドアをもう少し押し開けて中に足を踏み入れました。「こんにちは、どなたかご在宅ですか？」',
      structure: {
        pattern: 'SVO and SV',
        subject: 'She',
        verb: 'opened and stepped in',
        object: 'it'
      },
      vocabulary: [
        { word: 'stepped in', meaning: '足を踏み入れた', phonetic: '/stept ɪn/', pos: '句動詞' }
      ],
      grammarPoints: [
        'some more：もう少し',
        'is anyone home?：誰かいますか？（家を訪ねる定番句）'
      ]
    },
    {
      id: 'sw-54',
      slideNumber: 16,
      text: 'She looked around. What a mess! She had never seen a messier living room.',
      translation: '彼女は周囲を見回しました。なんて散らかりようでしょう！これほど乱雑なリビングルームは見たことがありませんでした。',
      structure: {
        pattern: 'SV + 感嘆文 + SVO',
        subject: 'She',
        verb: 'had never seen',
        object: 'a messier living room'
      },
      vocabulary: [
        { word: 'mess', meaning: '散らかり、乱雑', phonetic: '/mes/', pos: '名詞' },
        { word: 'messier', meaning: 'より散らかった（messyの比較級）', phonetic: '/ˈmes.i.ər/', pos: '形容詞' }
      ],
      grammarPoints: [
        'What a mess!：なんて散らかっているんだ！（感嘆文）',
        'had never seen a messier ~：これほど散らかった〜は見たことがなかった'
      ]
    },
    {
      id: 'sw-55',
      slideNumber: 16,
      text: '"This cottage may be the biggest mess I ever saw," she thought.',
      translation: '「この山小屋は、私が今まで見た中で一番散らかっているかもしれないわ」と彼女は思いました。',
      structure: {
        pattern: 'SVC',
        subject: 'This cottage',
        verb: 'may be',
        complement: 'the biggest mess I ever saw'
      },
      vocabulary: [],
      grammarPoints: [
        'the biggest mess I ever saw：今まで見た中で最大の散らかりよう'
      ]
    },
    {
      id: 'sw-56',
      slideNumber: 16,
      text: '"But it\'s a roof over my head for tonight. Maybe if I clean up around here, I can earn my sleep."',
      translation: '「でも今夜雨風をしのげる屋根があるだけありがたいわ。ここを綺麗に掃除すれば、泊めてもらえるかもしれない。」',
      structure: {
        pattern: 'SVC + 条件節(if SV, SV)',
        subject: 'it / I',
        verb: 'is / can earn',
        complement: 'a roof over my head'
      },
      vocabulary: [
        { word: 'clean up', meaning: '片付ける、掃除する', phonetic: '/kliːn ʌp/', pos: '句動詞' },
        { word: 'earn', meaning: '（働きによって）得る、勝ち取る', phonetic: '/ɜːn/', pos: '動詞' }
      ],
      grammarPoints: [
        'a roof over my head：雨風をしのぐ宿、住まい（成句）',
        'earn one\'s sleep：働いて眠る権利を得る'
      ]
    },
    {
      id: 'sw-57',
      slideNumber: 17,
      text: 'As she cleaned, she thought of someone she already missed.',
      translation: '掃除をしながら、彼女はすでに恋しく思っていたある人のことを思い出しました。',
      structure: {
        pattern: '従属節(SV) + 主節(SVO)',
        subject: 'she',
        verb: 'thought of',
        object: 'someone she already missed'
      },
      vocabulary: [
        { word: 'missed', meaning: '恋しく思った、寂しく思った', phonetic: '/mɪst/', pos: '動詞' }
      ],
      grammarPoints: [
        'think of ~：〜のことを思い浮かべる',
        'someone she already missed：関係代名詞目的格省略'
      ]
    },
    {
      id: 'sw-58',
      slideNumber: 17,
      text: 'Before her father had re-married, she and a Prince who lived in the next kingdom were getting to know each other.',
      translation: '父親が再婚する前、彼女とお隣の王国に住む王子は親しく知り合いになりつつありました。',
      structure: {
        pattern: '従属節 + 主節(SVO)',
        subject: 'she and a Prince who lived in the next kingdom',
        verb: 'were getting to know',
        object: 'each other'
      },
      vocabulary: [
        { word: 're-married', meaning: '再婚した', phonetic: '/ˌriːˈmær.id/', pos: '動詞' },
        { word: 'kingdom', meaning: '王国', phonetic: '/ˈkɪŋ.dəm/', pos: '名詞' },
        { word: 'get to know', meaning: '知り合いになる、親しくなる', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'who lived in the next kingdom：関係代名詞節',
        'get to know each other：お互いを知るようになる、親しくなる'
      ]
    },
    {
      id: 'sw-59',
      slideNumber: 18,
      text: 'They would take long walks in the royal garden and tell each other stories, and laugh.',
      translation: 'ふたりはよく王宮の庭園を散策しては互いに物語を語り合い、笑い合っていたものでした。',
      structure: {
        pattern: 'S + would + V1 and V2 and V3',
        subject: 'They',
        verb: 'take, tell, laugh',
        notes: '過去の習慣を表す助動詞would（〜したものだった）'
      },
      vocabulary: [
        { word: 'royal', meaning: '王室の、王宮の', phonetic: '/ˈrɔɪ.əl/', pos: '形容詞' },
        { word: 'garden', meaning: '庭園', phonetic: '/ˈɡɑː.dən/', pos: '名詞' }
      ],
      grammarPoints: [
        'would do：よく〜したものだった（過去の不規則な習慣）',
        'take a walk：散歩する'
      ]
    },
    {
      id: 'sw-60',
      slideNumber: 18,
      text: 'After the Queen had moved into the castle, her stepmother had made a new rule no more visitors.',
      translation: '王妃が城に移り住んだ後、継母は「来客は一切禁止」という新しい規則を作ってしまったのです。',
      structure: {
        pattern: 'SVO',
        subject: 'her stepmother',
        verb: 'had made',
        object: 'a new rule'
      },
      vocabulary: [
        { word: 'visitors', meaning: '訪問者、来客', phonetic: '/ˈvɪz.ɪ.tərz/', pos: '名詞' },
        { word: 'rule', meaning: '規則、ルール', phonetic: '/ruːl/', pos: '名詞' }
      ],
      grammarPoints: [
        'no more ~：これ以上〜はない（禁止令）'
      ]
    },
    {
      id: 'sw-61',
      slideNumber: 19,
      text: 'Now the Prince had to slip over the palace gate in secret.',
      translation: 'それ以来、王子はひそかに宮殿の門を忍び越えなければなりませんでした。',
      structure: {
        pattern: 'SV',
        subject: 'the Prince',
        verb: 'had to slip',
        modifiers: 'over the palace gate / in secret'
      },
      vocabulary: [
        { word: 'slip over', meaning: 'こっそり乗り越える、滑り込む', phonetic: '/slɪp ˈəʊ.vər/', pos: '句動詞' },
        { word: 'in secret', meaning: '秘密裏に、こっそりと', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'had to do：〜しなければならなかった',
        'in secret：秘密で'
      ]
    },
    {
      id: 'sw-62',
      slideNumber: 19,
      text: 'He would call out to her from under her window and they could talk a bit that way.',
      translation: '彼は窓の下から彼女に呼びかけ、そうしてふたりは少し言葉を交わすことができたのでした。',
      structure: {
        pattern: '重文 (SV and SV)',
        subject: 'He / they',
        verb: 'would call out / could talk'
      },
      vocabulary: [],
      grammarPoints: [
        'that way：そのようにして',
        'a bit：少し'
      ]
    },
    {
      id: 'sw-63',
      slideNumber: 19,
      text: 'It wasn\'t as good as the long walks but it was the best they could manage.',
      translation: 'かつての長い散歩ほど良いものではありませんでしたが、それがふたりにできる精一杯のことでした。',
      structure: {
        pattern: 'SVC but SVC',
        subject: 'It / it',
        verb: 'wasn\'t / was',
        complement: 'as good as the long walks / the best they could manage'
      },
      vocabulary: [
        { word: 'manage', meaning: 'どうにかやりくりする', phonetic: '/ˈmæn.ɪdʒ/', pos: '動詞' }
      ],
      grammarPoints: [
        'not as good as ~：〜ほど良くはない（同等比較の否定）',
        'the best they could manage：彼らができる精一杯のこと'
      ]
    },
    {
      id: 'sw-64',
      slideNumber: 20,
      text: 'Now that she had to run away from home, would she ever see him again?',
      translation: '家から逃げ出さざるを得なくなった今、もう二度と彼に会うことは叶わないのでしょうか？',
      structure: {
        pattern: '理由節 + 疑問文',
        modifiers: 'Now that she had to run away from home',
        subject: 'she',
        verb: 'would see',
        object: 'him'
      },
      vocabulary: [],
      grammarPoints: [
        'Now that SV：今はもう〜なのだから（接続詞）',
        'ever：果たして、いったい（疑問文の強調）'
      ]
    },
    {
      id: 'sw-65',
      slideNumber: 20,
      text: 'After Snow White cleaned up the living room, she went upstairs.',
      translation: '白雪姫は居間をきれいに片付けた後、上の階へと上がっていきました。',
      structure: {
        pattern: '従属節 + 主節(SV)',
        subject: 'she',
        verb: 'went',
        modifiers: 'upstairs'
      },
      vocabulary: [
        { word: 'upstairs', meaning: '上の階へ、2階へ', phonetic: '/ʌpˈsteəz/', pos: '副詞' }
      ],
      grammarPoints: [
        'go upstairs：階段を上がって上の階へ行く'
      ]
    },
    {
      id: 'sw-66',
      slideNumber: 20,
      text: 'On the second floor, there were seven little beds lined up in a row, as if for children.',
      translation: '2階には、まるで子供用であるかのように、小さなベッドが7つ一列に並んでいました。',
      structure: {
        pattern: 'There is 構文',
        verb: 'were',
        subject: 'seven little beds lined up in a row',
        modifiers: 'On the second floor / as if for children'
      },
      vocabulary: [
        { word: 'lined up', meaning: '並べられた', phonetic: '/laɪnd ʌp/', pos: '過去分詞' },
        { word: 'in a row', meaning: '一列に', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'lined up in a row：一列に整列した（過去分詞の修飾）',
        'as if for children：まるで子供用であるかのように'
      ]
    },
    {
      id: 'sw-67',
      slideNumber: 21,
      text: 'Tired from cleaning, Snow White yawned and lay across all seven of the beds.',
      translation: '掃除で疲れた白雪姫はあくびをし、7つのベッドすべてを横切るように横たわりました。',
      structure: {
        pattern: '分詞構文 + SV and SV',
        modifiers: 'Tired from cleaning',
        subject: 'Snow White',
        verb: 'yawned and lay'
      },
      vocabulary: [
        { word: 'yawned', meaning: 'あくびをした', phonetic: '/jɔːnd/', pos: '動詞' },
        { word: 'lay', meaning: '横たわった（lieの過去形）', phonetic: '/leɪ/', pos: '動詞' }
      ],
      grammarPoints: [
        'Tired from cleaning：理由を表す分詞構文（掃除で疲れていたので）',
        'lay across：〜にまたがって横たわる'
      ]
    },
    {
      id: 'sw-68',
      slideNumber: 21,
      text: 'Soon she fell fast asleep. In the meantime, the Seven Dwarfs were heading home from a long day of working in the jewel mines.',
      translation: 'やがて彼女はぐっすり眠りに落ちました。その頃、7人の小人たちは宝石鉱山での長い一日の仕事を終えて家路についていました。',
      structure: {
        pattern: 'SV + SV',
        subject: 'she / the Seven Dwarfs',
        verb: 'fell / were heading home',
        complement: 'fast asleep'
      },
      vocabulary: [
        { word: 'dwarfs', meaning: '小人たち', phonetic: '/dwɔːfs/', pos: '名詞' },
        { word: 'fast asleep', meaning: '熟睡して、ぐっすり眠って', phonetic: '', pos: '成句' },
        { word: 'jewel mines', meaning: '宝石鉱山', phonetic: '', pos: '名詞' }
      ],
      grammarPoints: [
        'fall fast asleep：ぐっすり眠り込む',
        'In the meantime：その間に、一方では'
      ]
    },
    {
      id: 'sw-69',
      slideNumber: 22,
      text: 'When they opened the door, you can imagine their surprise when they saw their cottage all cleaned up!',
      translation: '彼らがドアを開けたとき、小屋がすっかり綺麗に掃除されているのを目にした彼らの驚きはいかばかりだったでしょう！',
      structure: {
        pattern: '主節(SVO) + 従属節',
        subject: 'you',
        verb: 'can imagine',
        object: 'their surprise'
      },
      vocabulary: [
        { word: 'surprise', meaning: '驚き', phonetic: '/səˈpraɪz/', pos: '名詞' }
      ],
      grammarPoints: [
        'you can imagine ~：〜をご想像いただけるでしょう',
        'all cleaned up：すっかり綺麗に片付けられて'
      ]
    },
    {
      id: 'sw-70',
      slideNumber: 22,
      text: '"What kind of magic is this?" said one of the Dwarfs, whose name was Doc.',
      translation: '「これは一体どんな魔法じゃ？」と、ドック（先生）という名の小人のひとりが言いました。',
      structure: {
        pattern: 'OVS + 関係代名詞節',
        subject: 'one of the Dwarfs, whose name was Doc',
        verb: 'said'
      },
      vocabulary: [
        { word: 'Doc', meaning: 'ドック（小人の名前：物知り博士）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'whose name was ~：非制限用法の関係代名詞（その者の名は〜であった）'
      ]
    },
    {
      id: 'sw-71',
      slideNumber: 23,
      text: '"I wouldn\'t mind more magic like this!" said another of the Dwarfs with a smile. His name was Dopey.',
      translation: '「こんな魔法なら大歓迎だけどね！」ともうひとりの小人が微笑みながら言いました。彼の名前はドーピー（おとぼけ）でした。',
      structure: {
        pattern: 'SVO',
        subject: 'I',
        verb: 'wouldn\'t mind',
        object: 'more magic like this'
      },
      vocabulary: [
        { word: 'Dopey', meaning: 'ドーピー（小人の名前：おとぼけ）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'not mind ~：〜を嫌がらない、むしろ歓迎する'
      ]
    },
    {
      id: 'sw-72',
      slideNumber: 23,
      text: '"We had better check upstairs," said another Dwarf, whose name was Grumpy. "Something is fishy around here, that\'s for sure."',
      translation: '「2階を調べたほうがよさそうだぞ」と、グランピー（おこりんぼ）という小人が言いました。「何か怪しいに決まっとる。」',
      structure: {
        pattern: 'SVO + SVC',
        subject: 'We / Something',
        verb: 'had better check / is',
        complement: 'fishy'
      },
      vocabulary: [
        { word: 'fishy', meaning: 'うさんくさい、怪しい', phonetic: '/ˈfɪʃ.i/', pos: '形容詞' },
        { word: 'Grumpy', meaning: 'グランピー（小人の名前：不機嫌・おこりんぼ）', phonetic: '', pos: '固有名詞' }
      ],
      grammarPoints: [
        'had better do：〜したほうがいい（忠告・強い提案）',
        'that\'s for sure：それは確実だ、間違いなく'
      ]
    },
    {
      id: 'sw-73',
      slideNumber: 24,
      text: 'There lying across all their beds, was a young lady, fast asleep. "Who are you?" said all the Dwarfs at once. Snow White bolted awake.',
      translation: '彼らのベッドいっぱいに横たわってぐっすり眠っている若い娘がいました。「お前は誰だ？」小人たちが一斉に尋ねると、白雪姫はハッと跳び起きました。',
      structure: {
        pattern: 'There is倒置 + SV',
        subject: 'a young lady',
        verb: 'was',
        modifiers: 'lying across all their beds'
      },
      vocabulary: [
        { word: 'bolted awake', meaning: 'ハッと跳び起きた、飛び跳ねるように目覚めた', phonetic: '', pos: '動詞成句' }
      ],
      grammarPoints: [
        'bolt awake：驚いてガバッと目を覚ます',
        'at once：一斉に、同時に'
      ]
    },
    {
      id: 'sw-74',
      slideNumber: 25,
      text: 'The Seven Dwarfs could tell she was as surprised as they were. Soon they all relaxed and shared their stories.',
      translation: '7人の小人たちは、彼女も自分たちと同じくらい驚いているのだと察しました。やがて彼らはみな打ち解け、互いの身の上話を語り合いました。',
      structure: {
        pattern: 'SVO and SV',
        subject: 'The Seven Dwarfs / they',
        verb: 'could tell / relaxed and shared'
      },
      vocabulary: [
        { word: 'tell', meaning: 'わかる、見分ける、察する', phonetic: '/tel/', pos: '動詞' },
        { word: 'relaxed', meaning: '緊張が解けた、くつろいだ', phonetic: '/rɪˈlækst/', pos: '動詞' }
      ],
      grammarPoints: [
        'could tell (that) SV：〜だと見て取れた、察することができた',
        'as surprised as they were：彼らと同じくらい驚いている（同等比較）'
      ]
    },
    {
      id: 'sw-75',
      slideNumber: 25,
      text: 'Snow White learned their names Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, and Sneezy.',
      translation: '白雪姫は彼らの名前を覚えました。バシュフル（てれすけ）、ドック（先生）、ドーピー（おとぼけ）、グランピー（おこりんぼ）、ハッピー（ごきげん）、スリーピー（ねぼすけ）、スニーズィー（くしゃみ）です。',
      structure: {
        pattern: 'SVO',
        subject: 'Snow White',
        verb: 'learned',
        object: 'their names'
      },
      vocabulary: [
        { word: 'Bashful', meaning: '恥ずかしがり屋（てれすけ）', phonetic: '/ˈbæʃ.fəl/', pos: '固有名詞' },
        { word: 'Sleepy', meaning: '眠たがり（ねぼすけ）', phonetic: '/ˈsliː.pi/', pos: '固有名詞' },
        { word: 'Sneezy', meaning: 'くしゃみ屋（くしゃみ）', phonetic: '/ˈsniː.zi/', pos: '固有名詞' }
      ],
      grammarPoints: [
        '7人の小人の性格を表す英語名'
      ]
    },
    {
      id: 'sw-76',
      slideNumber: 26,
      text: 'She told them all about her step-mother. That her stepmother had tried to get the huntsman to kill her, that the huntsman had set her free in the woods, and that she could never go back home again.',
      translation: '彼女は継母のことをすべて話しました。継母が狩人に自分を殺させようとしたこと、狩人が自分を森へ逃がしてくれたこと、そして二度と家には帰れないことなどを。',
      structure: {
        pattern: 'SVO + that節の並列',
        subject: 'She',
        verb: 'told',
        object: 'them',
        notes: '3つのthat節が並列して詳細な内容を説明しています。'
      },
      vocabulary: [
        { word: 'set free', meaning: '解放する、逃がす', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'get O to do：Oに〜させる（説得・依頼）',
        'set O free：Oを自由に解放する',
        'could never go back：二度と帰ることができない'
      ]
    },
    {
      id: 'sw-77',
      slideNumber: 27,
      text: '"Stay here, with us," said Bashful. "That\'s sweet," said Snow White. "But if I were to stay here at your home, I would have to do something for all of you."',
      translation: '「僕たちと一緒にここにいなよ」とバシュフルが言いました。「嬉しいわ」と白雪姫は答えました。「でも、もしここに置いてもらうなら、皆さんのために何かお役に立ちたいわ。」',
      structure: {
        pattern: '仮定法過去 (if S were to do, S would do)',
        subject: 'I',
        verb: 'would have to do',
        object: 'something'
      },
      vocabulary: [
        { word: 'sweet', meaning: '優しい、親切な、ありがたい', phonetic: '/swiːt/', pos: '形容詞' }
      ],
      grammarPoints: [
        'if S were to do：万一〜するとすれば（仮定法未来/過去）',
        'I would have to do：〜しなければならないでしょう'
      ]
    },
    {
      id: 'sw-78',
      slideNumber: 28,
      text: '"You already cleaned up our place," said Sneezy. "Keeping the house clean will be easy," said Snow White, "as long as we all pitch in. I will let everyone know what part they can do, and I will do my share too, of course."',
      translation: '「もう家を掃除してくれたじゃないか」とスニーズィーが言いました。「みんなで協力し合えば、家を清潔に保つのは簡単よ。誰が何をするか役割分担を決めましょう。もちろん私も自分の分をやるわ」と白雪姫は言いました。',
      structure: {
        pattern: 'SVO and SVO',
        subject: 'Keeping the house clean / I',
        verb: 'will be / will let',
        complement: 'easy'
      },
      vocabulary: [
        { word: 'pitch in', meaning: '協力する、手を貸す', phonetic: '/pɪtʃ ɪn/', pos: '句動詞' },
        { word: 'share', meaning: '役割、分担', phonetic: '/ʃeər/', pos: '名詞' }
      ],
      grammarPoints: [
        'as long as SV：〜である限りは（条件）',
        'let everyone know：みんなに知らせる',
        'do one\'s share：自分の持ち分・役割を果たす'
      ]
    },
    {
      id: 'sw-79',
      slideNumber: 29,
      text: '"That\'s fair," said Happy. "But there must be something else I can do for you," said Snow White. The Seven Dwarfs shrugged. "Do you know how to read?" said Doc.',
      translation: '「それなら公平だね」とハッピーが言いました。「でも、他にも何か皆さんにできることがあるはずよ」と白雪姫。小人たちは肩をすくめました。「文字を読むことはできるかい？」とドックが尋ねました。',
      structure: {
        pattern: 'There must be 構文',
        verb: 'must be',
        subject: 'something else I can do for you'
      },
      vocabulary: [
        { word: 'shrugged', meaning: '肩をすくめた', phonetic: '/ʃrʌɡd/', pos: '動詞' },
        { word: 'read', meaning: '文字・本を読む', phonetic: '/riːd/', pos: '動詞' }
      ],
      grammarPoints: [
        'there must be ~：〜があるに違いない',
        'know how to do：〜のやり方を知っている'
      ]
    },
    {
      id: 'sw-80',
      slideNumber: 30,
      text: '"We have these books filled with wonderful tales and would love to be able to read them." And so it was agreed that Snow White would teach them how to read. To celebrate their new friendship, Snow White and the Seven Dwarfs sang and danced the night away.',
      translation: '「素晴らしい物語の詰まった本があるのじゃが、読むことができたらどんなに良いかとずっと思っておってな。」こうして白雪姫が読み方を教えることになりました。新しい友情を祝い、白雪姫と小人たちは夜通し歌い踊り明かしました。',
      structure: {
        pattern: '形式主語構文 (it was agreed that SV) + SV',
        subject: 'Snow White and the Seven Dwarfs',
        verb: 'sang and danced the night away'
      },
      vocabulary: [
        { word: 'tales', meaning: 'お話、物語', phonetic: '/teɪlz/', pos: '名詞' },
        { word: 'celebrate', meaning: '祝う', phonetic: '/ˈsel.ə.breɪt/', pos: '動詞' },
        { word: 'friendship', meaning: '友情', phonetic: '/ˈfrend.ʃɪp/', pos: '名詞' }
      ],
      grammarPoints: [
        'filled with ~：〜で満たされた（過去分詞の修飾）',
        'would love to do：ぜひ〜したいと思う',
        'dance the night away：夜を徹して踊り明かす'
      ]
    },
    {
      id: 'sw-81',
      slideNumber: 31,
      text: 'The next morning before they left for work, the Seven Dwarfs warned Snow White she must not open the door to anyone. After all, who knows what evil her stepmother might do?',
      translation: '翌朝、仕事に出発する前、小人たちは誰に対しても絶対に扉を開けてはならないと白雪姫に警告しました。何しろ、あの継母がどんな悪事を企むか知れたものではないからです。',
      structure: {
        pattern: 'SVO (that節) + 修辞疑問文',
        subject: 'the Seven Dwarfs',
        verb: 'warned',
        object: 'Snow White'
      },
      vocabulary: [
        { word: 'warned', meaning: '警告した、注意した', phonetic: '/wɔːnd/', pos: '動詞' },
        { word: 'evil', meaning: '悪事、邪悪なこと', phonetic: '/ˈiː.vəl/', pos: '名詞' }
      ],
      grammarPoints: [
        'warn O (that) SV：Oに〜だと警告する',
        'After all：何と言っても、結局のところ',
        'who knows what SV：誰に何がわかるだろうか（誰にも分からない）'
      ]
    },
    {
      id: 'sw-82',
      slideNumber: 32,
      text: 'The princess nodded in agreement, and the Dwarfs left the house. The princess prepared her first reading lesson. She also prepared a good hot meal for the Seven Dwarfs when they returned home that night. And so the days passed.',
      translation: '王女はうなずいて承知し、小人たちは家を出ていきました。王女は最初の読み書きの授業の準備をしました。その夜小人たちが帰宅したときのために温かい食事も用意しました。そうして平穏な日々が過ぎていきました。',
      structure: {
        pattern: 'SV and SV + SVO',
        subject: 'The princess / the Dwarfs / She',
        verb: 'nodded / left / prepared'
      },
      vocabulary: [
        { word: 'nodded', meaning: 'うなずいた', phonetic: '/ˈnɒd.ɪd/', pos: '動詞' },
        { word: 'agreement', meaning: '合意、承諾', phonetic: '/əˈɡriː.mənt/', pos: '名詞' }
      ],
      grammarPoints: [
        'in agreement：同意して、うなずいて',
        'the days passed：日々が過ぎ去っていった'
      ]
    },
    {
      id: 'sw-83',
      slideNumber: 33,
      text: 'Back at the castle, the Queen marched up to her mirror. "Mirror, mirror on the wall," she demanded. "Who is the fairest of them all?" "Snow White is the fairest of them all!" said the Magic Mirror.',
      translation: '城に戻った王妃は、鏡の前へと大股で歩み寄りました。「壁の鏡よ、鏡さん」と彼女は詰問しました。「この世でいちばん美しいのは誰？」「白雪姫こそが、すべての中でいちばん美しくございます！」と魔法の鏡は告げました。',
      structure: {
        pattern: 'SV + OVS',
        subject: 'the Queen',
        verb: 'marched up to',
        modifiers: 'Back at the castle'
      },
      vocabulary: [
        { word: 'marched up', meaning: '大股で詰め寄った', phonetic: '/mɑːtʃt ʌp/', pos: '句動詞' },
        { word: 'demanded', meaning: '詰問した、要求した', phonetic: '/dɪˈmɑːn.dɪd/', pos: '動詞' }
      ],
      grammarPoints: [
        'march up to ~：〜へ堂々と歩み寄る・詰め寄る'
      ]
    },
    {
      id: 'sw-84',
      slideNumber: 34,
      text: '"That\'s impossible!" screamed the Queen. "The girl is no longer alive!" "Snow White lives!" said the Magic Mirror. And an image was shown on the mirror of Snow White living in the cottage of the Seven Dwarfs.',
      translation: '「あり得ない！」王妃は叫びました。「あの娘はもう生きていないはずだ！」「白雪姫は生きております！」と鏡は言いました。そして7人の小人の小屋で暮らす白雪姫の姿が鏡に映し出されたのです。',
      structure: {
        pattern: 'SVC + 受動態',
        subject: 'an image',
        verb: 'was shown',
        modifiers: 'on the mirror / of Snow White living in the cottage'
      },
      vocabulary: [
        { word: 'impossible', meaning: '不可能な、あり得ない', phonetic: '/ɪmˈpɒs.ə.bəl/', pos: '形容詞' },
        { word: 'no longer', meaning: 'もはや〜ない', phonetic: '', pos: '副詞句' }
      ],
      grammarPoints: [
        'no longer alive：もはや生きていない',
        'an image was shown of A：Aの姿が映し出された'
      ]
    },
    {
      id: 'sw-85',
      slideNumber: 35,
      text: 'The Queen turned red with rage. She screamed, "Who does she think she is?! Snow White will not get away with this!" At the cottage of the Dwarfs the next afternoon, when the Seven Dwarfs were away at work, there was a knock on the door.',
      translation: '王妃は怒りで顔を真っ赤にしました。「あの子は何様のつもりなの？！絶対に許しはしない！」翌日の午後、小人たちが仕事で留守にしていた時、小屋のドアをノックする音が響きました。',
      structure: {
        pattern: 'SVC + There is構文',
        subject: 'The Queen / a knock',
        verb: 'turned / was',
        complement: 'red with rage'
      },
      vocabulary: [
        { word: 'rage', meaning: '激怒、怒り', phonetic: '/reɪdʒ/', pos: '名詞' },
        { word: 'get away with', meaning: '（悪事などを）うまく逃れる、やり過ごす', phonetic: '', pos: '句動詞' }
      ],
      grammarPoints: [
        'turn red with rage：怒りで真っ赤になる',
        'get away with this：これを罰せられずに逃げ果せる'
      ]
    },
    {
      id: 'sw-86',
      slideNumber: 36,
      text: '"Who is it?" said Snow White. She remembered the warning of the Seven Dwarfs not to open the door to anyone. "It\'s only a poor old woman," came a squeaky voice, "selling apples."',
      translation: '「どなたですか？」と白雪姫は言いました。彼女は誰にも扉を開けてはならないという小人たちの警告を思い出しました。「ただの貧しい老婆ですよ」と甲高い声が聞こえてきました。「リンゴを売っているのですよ。」',
      structure: {
        pattern: 'SVO + SV',
        subject: 'She / a squeaky voice',
        verb: 'remembered / came',
        object: 'the warning'
      },
      vocabulary: [
        { word: 'warning', meaning: '警告、忠告', phonetic: '/ˈwɔː.nɪŋ/', pos: '名詞' },
        { word: 'squeaky', meaning: '甲高い、キーキーいう', phonetic: '/ˈskwiː.ki/', pos: '形容詞' }
      ],
      grammarPoints: [
        'warning not to do：〜しないようにという警告（不定詞の否定）',
        'selling apples：現在分詞によるwomanの修飾'
      ]
    },
    {
      id: 'sw-87',
      slideNumber: 37,
      text: 'Yet it was the evil Queen, disguised as an old woman. "It\'s raining out here, my dear," said her voice through the door. "Please let me in."',
      translation: 'しかしそれは、老婆に変装した邪悪な王妃でした。「外は雨が降っているのですよ、お嬢さん」とドア越しに声がしました。「どうか中へ入れておくれ。」',
      structure: {
        pattern: 'SVC',
        subject: 'it',
        verb: 'was',
        complement: 'the evil Queen, disguised as an old woman'
      },
      vocabulary: [
        { word: 'evil', meaning: '邪悪な、悪の', phonetic: '/ˈiː.vəl/', pos: '形容詞' },
        { word: 'disguised', meaning: '変装した', phonetic: '/dɪsˈɡaɪzd/', pos: '過去分詞' }
      ],
      grammarPoints: [
        'disguised as ~：〜に変装した',
        'let me in：私を中に入れて'
      ]
    },
    {
      id: 'sw-88',
      slideNumber: 38,
      text: '"Poor thing," thought Snow White, "having to go door to door selling apples in the rain." And so she opened the door. "Take a look at this big red apple," said the old woman, who as you know by now was really the Queen in disguise.',
      translation: '「かわいそうに」と白雪姫は思いました。「雨の中、一軒一軒リンゴを売って回らなければならないなんて。」そして彼女は扉を開けてしまいました。「この大きくて真っ赤なリンゴをごらん」と老婆（もうお分かりのように、変装した王妃です）は言いました。',
      structure: {
        pattern: 'SVO + 関係代名詞節',
        subject: 'she',
        verb: 'opened',
        object: 'the door'
      },
      vocabulary: [
        { word: 'door to door', meaning: '一軒一軒、戸別訪問で', phonetic: '', pos: '副詞句' },
        { word: 'disguise', meaning: '変装', phonetic: '/dɪsˈɡaɪz/', pos: '名詞' }
      ],
      grammarPoints: [
        'Poor thing：可哀想に（同情の表現）',
        'Take a look at ~：〜をちょっと見てみて'
      ]
    },
    {
      id: 'sw-89',
      slideNumber: 39,
      text: 'She held the red apple close to Snow White\'s face. "Lovely, my dear, isn\'t it?" "I would like very much to buy your apple," said Snow White. "But I have no money."',
      translation: '老婆は赤いリンゴを白雪姫の顔のすぐ近くへと差し出しました。「素敵だろう、お嬢さん？」「リンゴを買いたいのはやまやまですけれど、私にはお金がないのです」と白雪姫は言いました。',
      structure: {
        pattern: 'SVO + 付加疑問文 + SVO',
        subject: 'She / Snow White',
        verb: 'held / would like to buy',
        object: 'the red apple'
      },
      vocabulary: [
        { word: 'lovely', meaning: '愛らしい、素敵な', phonetic: '/ˈlʌv.li/', pos: '形容詞' }
      ],
      grammarPoints: [
        'would like very much to do：とても〜したいと思う',
        'have no money：お金が全くない'
      ]
    },
    {
      id: 'sw-90',
      slideNumber: 40,
      text: '"That fine comb in your hair will make a good trade," said the old woman. "Well, all right then!" said Snow White. She took the comb out of her hair and gave it to the old woman, who then gave her the apple.',
      translation: '「その髪に差している立派な櫛となら良い物々交換になるよ」と老婆は言いました。「ええ、それならいいわ！」と白雪姫。彼女は髪から櫛を抜き取って老婆に渡し、老婆は彼女にリンゴを渡しました。',
      structure: {
        pattern: 'SVO + SVO and SVOO',
        subject: 'She / the old woman',
        verb: 'took and gave / gave'
      },
      vocabulary: [
        { word: 'comb', meaning: '櫛（くし）', phonetic: '/kəʊm/', pos: '名詞' },
        { word: 'trade', meaning: '取引、物々交換', phonetic: '/treɪd/', pos: '名詞' }
      ],
      grammarPoints: [
        'make a good trade：良い取引になる',
        'give A to B / give A B：授与動詞構文'
      ]
    },
    {
      id: 'sw-91',
      slideNumber: 41,
      text: 'Snow White took a big bite. Alas, the fruit was poisoned! At once, Snow White fell to the ground in a deep sleep. "YES!" shouted the Queen, pumping the air with her fists.',
      translation: '白雪姫はリンゴを一口大きくかじりました。ああ、恐ろしいことに果実には毒が塗られていたのです！その瞬間、白雪姫は深い眠りへと崩れ落ちました。「やったぞ！」王妃は拳を突き上げながら歓喜の叫びを上げました。',
      structure: {
        pattern: 'SVO + SVC + SV',
        subject: 'Snow White / the fruit / Snow White',
        verb: 'took / was poisoned / fell'
      },
      vocabulary: [
        { word: 'bite', meaning: '一口かじること', phonetic: '/baɪt/', pos: '名詞' },
        { word: 'alas', meaning: 'ああ、悲しいかな（感嘆詞）', phonetic: '/əˈlæs/', pos: '感嘆詞' },
        { word: 'poisoned', meaning: '毒の入った', phonetic: '/ˈpɔɪ.zənd/', pos: '過去分詞' },
        { word: 'fists', meaning: '拳（こぶし）', phonetic: '/fɪsts/', pos: '名詞' }
      ],
      grammarPoints: [
        'take a bite：一口かじる',
        'fell to the ground：地面に倒れ伏す',
        'pumping the air with her fists：ガッツポーズをしながら（分詞構文）'
      ]
    },
    {
      id: 'sw-92',
      slideNumber: 42,
      text: 'Just then the door flew open. In marched the Seven Dwarfs, home from the day\'s work. Shocked indeed they were to find Snow White lying on the floor and what must be her stepmother beside her, laughing!',
      translation: 'ちょうどその時、ドアが勢いよく開きました。仕事から戻った小人たちが駆け込んできたのです。床に倒れている白雪姫と、その傍らで高笑いしている継母とおぼしき姿を目にし、彼らは言葉を失うほど驚愕しました！',
      structure: {
        pattern: '倒置構文 (In marched SV) + 倒置強調構文',
        verb: 'flew open / marched in',
        subject: 'the door / the Seven Dwarfs',
        notes: '「In marched the Seven Dwarfs」および「Shocked indeed they were」と息もつかせぬ倒置連続！'
      },
      vocabulary: [
        { word: 'flew open', meaning: '勢いよくパッと開いた', phonetic: '', pos: '動詞成句' },
        { word: 'indeed', meaning: '実に、本当に', phonetic: '/ɪnˈdiːd/', pos: '副詞' }
      ],
      grammarPoints: [
        'In marched the Seven Dwarfs：小人たちが進み入った（方向副詞の前置による倒置）',
        'Shocked indeed they were：彼らは実に衝撃を受けた（補語Shockedの前置倒置）'
      ]
    },
    {
      id: 'sw-93',
      slideNumber: 43,
      text: 'They chased that evil Queen out the door, and into the storm. Up to the very top of a mountain they chased her. All of a sudden, lightning hit the mountain! The Queen fell, and she was never seen again.',
      translation: '彼らは邪悪な王妃をドアの外、そして激しい嵐の中へと追い立てました。山の天辺まで彼女を追い詰めました。その瞬間、稲妻が山を直撃したのです！王妃は谷底へと落ち、二度とその姿を見せることはありませんでした。',
      structure: {
        pattern: 'SVO + 倒置 + SV and SVC',
        subject: 'They / lightning / The Queen / she',
        verb: 'chased / hit / fell / was seen'
      },
      vocabulary: [
        { word: 'chased', meaning: '追いかけた、追跡した', phonetic: '/tʃeɪst/', pos: '動詞' },
        { word: 'lightning', meaning: '稲妻、雷光', phonetic: '/ˈlaɪt.nɪŋ/', pos: '名詞' },
        { word: 'storm', meaning: '嵐', phonetic: '/stɔːm/', pos: '名詞' }
      ],
      grammarPoints: [
        'Up to the very top of ~ they chased her：山のてっぺんまで彼らは追った（前置詞句の前置）',
        'was never seen again：二度と姿を見られなかった'
      ]
    },
    {
      id: 'sw-94',
      slideNumber: 44,
      text: 'But there was nothing to help poor Snow White. She stayed absolutely still in her deep sleep. The Seven Dwarfs gently lifted her into a glass coffin. Day and night they kept watch over her.',
      translation: 'しかし哀れな白雪姫を助ける術はありませんでした。彼女は深い眠りの中で全く動かないままでした。7人の小人たちは優しく彼女をガラスの棺へと納めました。そして昼も夜も彼女を見守り続けました。',
      structure: {
        pattern: 'There is構文 + SVC + SVO',
        subject: 'nothing / She / The Seven Dwarfs / they',
        verb: 'was / stayed / lifted / kept watch'
      },
      vocabulary: [
        { word: 'absolutely still', meaning: '完全に静止して、ぴくりとも動かず', phonetic: '', pos: '成句' },
        { word: 'glass coffin', meaning: 'ガラスの棺（ひつぎ）', phonetic: '/ɡlɑːs ˈkɒf.ɪn/', pos: '名詞' }
      ],
      grammarPoints: [
        'stay still：じっと動かずにいる',
        'keep watch over ~：〜を見守る、〜の番をする'
      ]
    },
    {
      id: 'sw-95',
      slideNumber: 45,
      text: 'One day, the Prince happened to pass through. Ever since he had learned that Snow White was missing at the castle, he was searching for her, far and wide. Now he had finally found her, but in such a state!',
      translation: 'ある日、あの王子が偶然通りかかりました。白雪姫が城から姿を消したと知って以来、彼は遠く広く彼女を探し続けていたのです。今ようやく彼女を見つけたものの、まさかこのような姿でいようとは！',
      structure: {
        pattern: 'S + happen to do + 主節(SVO)',
        subject: 'the Prince / he',
        verb: 'happened to pass through / was searching'
      },
      vocabulary: [
        { word: 'happened to', meaning: '偶然〜した', phonetic: '', pos: '動詞句' },
        { word: 'missing', meaning: '行方不明の', phonetic: '/ˈmɪs.ɪŋ/', pos: '形容詞' },
        { word: 'far and wide', meaning: '隅々まで、遠く広く', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'happen to do：たまたま〜する',
        'Ever since SV：〜して以来ずっと',
        'in such a state：このような状態で'
      ]
    },
    {
      id: 'sw-96',
      slideNumber: 46,
      text: 'The Prince pulled open the glass coffin. Her face seemed so fresh, even in that deep sleep. He gently took one of Snow White\'s hands in his own and kissed it. At once, Snow White\'s eyes opened!',
      translation: '王子はガラスの棺を開けました。その深い眠りの中にあっても、彼女の顔は生きているかのように瑞々しく見えました。彼はそっと白雪姫の手を取り、口づけをしました。その瞬間、白雪姫の目がパッと開いたのです！',
      structure: {
        pattern: 'SVO + SVC + SVO + SV',
        subject: 'The Prince / Her face / He / eyes',
        verb: 'pulled open / seemed / took / opened'
      },
      vocabulary: [
        { word: 'fresh', meaning: '瑞々しい、新鮮な', phonetic: '/freʃ/', pos: '形容詞' },
        { word: 'gently', meaning: '優しく、そっと', phonetic: '/ˈdʒent.li/', pos: '副詞' }
      ],
      grammarPoints: [
        'pull open：引っ張って開ける',
        'one of ~\'s hands in his own：自分の手の中に彼女の手を取る'
      ]
    },
    {
      id: 'sw-97',
      slideNumber: 47,
      text: 'With Love\'s First Kiss, the evil Queen\'s spell was forever gone. Now nothing stood in the way for Snow White and the Prince to be together forever. They returned to the Prince\'s kingdom and lived happily ever after.',
      translation: '「真実の愛の最初のキス」によって、邪悪な王妃の呪いは永遠に解けました。白雪姫と王子が永遠に結ばれることを阻むものは何一つなくなりました。ふたりは王子の国へと帰り、いつまでも幸せに暮らしました。',
      structure: {
        pattern: 'SVC + SV + SV and SV',
        subject: 'the spell / nothing / They',
        verb: 'was gone / stood in the way / returned and lived'
      },
      vocabulary: [
        { word: 'spell', meaning: '呪い、魔力', phonetic: '/spel/', pos: '名詞' },
        { word: 'forever', meaning: '永遠に', phonetic: '/fəˈre.vər/', pos: '副詞' },
        { word: 'happily ever after', meaning: 'いつまでも幸せに（童話の結び句）', phonetic: '', pos: '成句' }
      ],
      grammarPoints: [
        'stand in the way of ~：〜の邪魔をする、妨げとなる',
        'lived happily ever after：いつまでも幸せに暮らしました（童話の伝統的な結びの言葉）'
      ]
    }
  ]
};
