export interface DictEntry {
  word: string;
  meaning: string;
  phonetic?: string;
  pos?: string;
  explanation?: string;
}

export const commonDictionary: Record<string, DictEntry> = {
  // Fairytale & classic words
  princess: { word: 'princess', meaning: '王女、プリンセス', phonetic: '/ˈprɪn.ses/', pos: '名詞' },
  castle: { word: 'castle', meaning: '城', phonetic: '/ˈkæs.əl/', pos: '名詞' },
  stepmother: { word: 'stepmother', meaning: '継母（ままはは）', phonetic: '/ˈstepˌmʌð.ər/', pos: '名詞' },
  king: { word: 'king', meaning: '国王、王', phonetic: '/kɪŋ/', pos: '名詞' },
  queen: { word: 'queen', meaning: '王妃、女王', phonetic: '/kwiːn/', pos: '名詞' },
  fair: { word: 'fair', meaning: '公平な、美しい、晴れた', phonetic: '/feər/', pos: '形容詞', explanation: '本物語では「公平な」と「美しい」の両義で重要なキーワードとなっています。' },
  court: { word: 'court', meaning: '宮廷、裁判所、中庭', phonetic: '/kɔːrt/', pos: '名詞' },
  ruler: { word: 'ruler', meaning: '統治者、支配者、定規', phonetic: '/ˈruː.lər/', pos: '名詞' },
  decision: { word: 'decision', meaning: '決定、判断、決断', phonetic: '/dɪˈsɪʒ.ən/', pos: '名詞' },
  mirror: { word: 'mirror', meaning: '鏡', phonetic: '/ˈmɪr.ər/', pos: '名詞' },
  magic: { word: 'magic', meaning: '魔法、不思議な魅力', phonetic: '/ˈmædʒ.ɪk/', pos: '名詞/形容詞' },
  wall: { word: 'wall', meaning: '壁', phonetic: '/wɔːl/', pos: '名詞' },
  fairest: { word: 'fairest', meaning: '最も美しい、最も公平な', phonetic: '/ˈfeə.rɪst/', pos: '形容詞 (最上級)' },
  yelled: { word: 'yelled', meaning: '叫んだ、大声を上げた', phonetic: '/jeld/', pos: '動詞 (過去形)' },
  roared: { word: 'roared', meaning: '怒鳴った、咆哮した', phonetic: '/rɔːrd/', pos: '動詞 (過去形)' },
  stormed: { word: 'stormed', meaning: '激しい勢いで立ち去った', phonetic: '/stɔːmd/', pos: '動詞 (過去形)' },
  bothered: { word: 'bothered', meaning: '悩まされた、気に障った', phonetic: '/ˈbɒð.əd/', pos: '形容詞' },
  rid: { word: 'rid', meaning: '取り除く（be rid of 〜で処分する）', phonetic: '/rɪd/', pos: '形容詞' },
  declared: { word: 'declared', meaning: '宣言した、公言した', phonetic: '/dɪˈkleəd/', pos: '動詞 (過去形)' },
  servant: { word: 'servant', meaning: '召使い、使用人', phonetic: '/ˈsɜː.vənt/', pos: '名詞' },
  huntsman: { word: 'huntsman', meaning: '狩人、猟師', phonetic: '/ˈhʌnts.mən/', pos: '名詞' },
  woods: { word: 'woods', meaning: '森、林', phonetic: '/wʊdz/', pos: '名詞' },
  pointing: { word: 'pointing', meaning: '指差している', phonetic: '/ˈpɔɪn.tɪŋ/', pos: '現在分詞' },
  slay: { word: 'slay', meaning: '殺害する、討つ', phonetic: '/sleɪ/', pos: '動詞' },
  knife: { word: 'knife', meaning: 'ナイフ、短剣', phonetic: '/naɪf/', pos: '名詞' },
  arrowheads: { word: 'arrowheads', meaning: '鏃（矢じり）', phonetic: '/ˈær.əʊ.hedz/', pos: '名詞' },
  knees: { word: 'knees', meaning: '膝（ひざ）', phonetic: '/niːz/', pos: '名詞' },
  alarm: { word: 'alarm', meaning: '驚愕、恐怖、警報', phonetic: '/əˈlɑːm/', pos: '名詞' },
  wolves: { word: 'wolves', meaning: '狼たち（wolfの複数形）', phonetic: '/wʊlvz/', pos: '名詞' },
  howl: { word: 'howl', meaning: '遠吠えする', phonetic: '/haʊl/', pos: '動詞' },
  tripped: { word: 'tripped', meaning: 'つまずいて転んだ', phonetic: '/trɪpt/', pos: '動詞 (過去形)' },
  torn: { word: 'torn', meaning: '引き裂かれた（tearの過去分詞）', phonetic: '/tɔːn/', pos: '過去分詞' },
  branches: { word: 'branches', meaning: '枝、小枝', phonetic: '/ˈbrɑːn.tʃɪz/', pos: '名詞' },
  grab: { word: 'grab', meaning: 'つかむ、ひっ捕まえる', phonetic: '/ɡræb/', pos: '動詞' },
  bleeding: { word: 'bleeding', meaning: '出血している', phonetic: '/ˈbliː.dɪŋ/', pos: '形容詞' },
  scared: { word: 'scared', meaning: '怯えた、怖がった', phonetic: '/skeəd/', pos: '形容詞' },
  cottage: { word: 'cottage', meaning: '小さな家、山小屋', phonetic: '/ˈkɒt.ɪdʒ/', pos: '名詞' },
  mess: { word: 'mess', meaning: '散らかり、混乱', phonetic: '/mes/', pos: '名詞' },
  messier: { word: 'messier', meaning: 'より散らかった', phonetic: '/ˈmes.i.ər/', pos: '形容詞 (比較級)' },
  earn: { word: 'earn', meaning: '稼ぐ、働いて得る', phonetic: '/ɜːn/', pos: '動詞' },
  dwarfs: { word: 'dwarfs', meaning: '小人たち', phonetic: '/dwɔːfs/', pos: '名詞' },
  asleep: { word: 'asleep', meaning: '眠って（fast asleepで熟睡して）', phonetic: '/əˈsliːp/', pos: '形容詞' },
  jewel: { word: 'jewel', meaning: '宝石', phonetic: '/ˈdʒuː.əl/', pos: '名詞' },
  mines: { word: 'mines', meaning: '鉱山', phonetic: '/maɪnz/', pos: '名詞' },
  fishy: { word: 'fishy', meaning: '怪しい、うさんくさい', phonetic: '/ˈfɪʃ.i/', pos: '形容詞' },
  shrugged: { word: 'shrugged', meaning: '肩をすくめた', phonetic: '/ʃrʌɡd/', pos: '動詞 (過去形)' },
  disguised: { word: 'disguised', meaning: '変装した', phonetic: '/dɪsˈɡaɪzd/', pos: '過去分詞' },
  poisoned: { word: 'poisoned', meaning: '毒入りの、毒を盛られた', phonetic: '/ˈpɔɪ.zənd/', pos: '過去分詞' },
  coffin: { word: 'coffin', meaning: '棺（ひつぎ）', phonetic: '/ˈkɒf.ɪn/', pos: '名詞' },
  spell: { word: 'spell', meaning: '呪文、魔力', phonetic: '/spel/', pos: '名詞' },

  // Cinderella vocabulary
  cinderella: { word: 'Cinderella', meaning: 'シンデレラ（灰かぶり姫）', phonetic: '/ˌsɪn.dəˈrel.ə/', pos: '固有名詞' },
  slipper: { word: 'slipper', meaning: '（舞踏会用の）靴、室内履き', phonetic: '/ˈslɪp.ər/', pos: '名詞' },
  slippers: { word: 'slippers', meaning: 'ガラスの靴、靴（複数形）', phonetic: '/ˈslɪp.ərz/', pos: '名詞' },
  pumpkin: { word: 'pumpkin', meaning: 'カボチャ', phonetic: '/ˈpʌmp.kɪn/', pos: '名詞' },
  coach: { word: 'coach', meaning: '（4頭立てなどの大型豪奢な）馬車', phonetic: '/kəʊtʃ/', pos: '名詞' },
  coachman: { word: 'coachman', meaning: '御者（馬車を操縦する人）', phonetic: '/ˈkəʊtʃ.mən/', pos: '名詞' },
  fairy: { word: 'fairy', meaning: '妖精、仙女', phonetic: '/ˈfeə.ri/', pos: '名詞' },
  godmother: { word: 'godmother', meaning: '名付け親、教母（妖精のおばあさん）', phonetic: '/ˈɡɒdˌmʌð.ər/', pos: '名詞' },
  wand: { word: 'wand', meaning: '魔法の杖', phonetic: '/wɒnd/', pos: '名詞' },
  ball: { word: 'ball', meaning: '舞踏会', phonetic: '/bɔːl/', pos: '名詞' },
  haughty: { word: 'haughty', meaning: '高慢な、傲慢な、尊大な', phonetic: '/ˈhɔː.ti/', pos: '形容詞' },
  garret: { word: 'garret', meaning: '屋根裏部屋', phonetic: '/ˈɡær.ɪt/', pos: '名詞' },
  cinders: { word: 'cinders', meaning: '燃え殻、灰', phonetic: '/ˈsɪn.dərz/', pos: '名詞' },
  ashes: { word: 'ashes', meaning: '灰', phonetic: '/ˈæʃ.ɪz/', pos: '名詞' },
  gowns: { word: 'gowns', meaning: '礼服、ドレス、ガウン', phonetic: '/ɡaʊnz/', pos: '名詞' },
  petticoat: { word: 'petticoat', meaning: 'ペチコート（下着スカート）', phonetic: '/ˈpet.i.kəʊt/', pos: '名詞' },
  manteau: { word: 'manteau', meaning: 'マントー（女性用の上着・マント）', phonetic: '/mænˈtəʊ/', pos: '名詞' },
  stomacher: { word: 'stomacher', meaning: '胸飾り、コルセットの前当て', phonetic: '/ˈstʌm.ək.ər/', pos: '名詞' },
  footmen: { word: 'footmen', meaning: '従僕（馬車の後方に立つ召使い）', phonetic: '/ˈfʊt.mən/', pos: '名詞' },
  gilded: { word: 'gilded', meaning: '金箔を貼った、金色の', phonetic: '/ˈɡɪl.dɪd/', pos: '形容詞' },
  equipage: { word: 'equipage', meaning: '馬車とお供の一揃え、馬車立て', phonetic: '/ˈek.wɪ.pɪdʒ/', pos: '名詞' },
  midnight: { word: 'midnight', meaning: '真夜中、午前零時', phonetic: '/ˈmɪd.naɪt/', pos: '名詞' },
  astonishment: { word: 'astonishment', meaning: '驚愕、ひどい驚き', phonetic: '/əˈstɒn.ɪʃ.mənt/', pos: '名詞' },
  thou: { word: 'thou', meaning: 'お前、なんじ（youの単数主格古語）', phonetic: '/ðaʊ/', pos: '代名詞' },
  thither: { word: 'thither', meaning: 'そこへ、あそこへ（古語）', phonetic: '/ˈðɪð.ər/', pos: '副詞' },
  jeer: { word: 'jeer', meaning: '嘲る、からかう', phonetic: '/dʒɪər/', pos: '動詞' },

  // Red Riding Hood vocabulary
  wolf: { word: 'wolf', meaning: '狼（オオカミ）', phonetic: '/wʊlf/', pos: '名詞' },
  hood: { word: 'hood', meaning: '頭巾、フード', phonetic: '/hʊd/', pos: '名詞' },
  latch: { word: 'latch', meaning: '掛け金、かんぬき', phonetic: '/lætʃ/', pos: '名詞' },
  trough: { word: 'trough', meaning: '飼い葉桶、水槽', phonetic: '/trɒf/', pos: '名詞' },
  pail: { word: 'pail', meaning: '手桶、バケツ', phonetic: '/peɪl/', pos: '名詞' },
  snore: { word: 'snore', meaning: 'いびきをかく', phonetic: '/snɔːr/', pos: '動詞' },
  scissors: { word: 'scissors', meaning: 'ハサミ', phonetic: '/ˈsɪz.əz/', pos: '名詞' },
  sausages: { word: 'sausages', meaning: 'ソーセージ', phonetic: '/ˈsɒs.ɪ.dʒɪz/', pos: '名詞' },
  snips: { word: 'snips', meaning: '（ハサミで）チョキリと切ること', phonetic: '/snɪps/', pos: '名詞' },
  devoured: { word: 'devoured', meaning: 'むさぼり食った、丸呑みにした', phonetic: '/dɪˈvaʊəd/', pos: '動詞' },

  // Rapunzel vocabulary
  rapunzel: { word: 'Rapunzel', meaning: 'ラプンツェル（野ジシャ、髪長姫）', phonetic: '/rəˈpʌn.zəl/', pos: '固有名詞' },
  enchantress: { word: 'enchantress', meaning: '魔女、妖術師、魅惑的な女性', phonetic: '/ɪnˈtʃɑːn.trəs/', pos: '名詞' },
  splendid: { word: 'splendid', meaning: '見事な、壮麗な、素晴らしい', phonetic: '/ˈsplen.dɪd/', pos: '形容詞' },
  herbs: { word: 'herbs', meaning: '薬草、ハーブ', phonetic: '/hɜːbz/', pos: '名詞' },
  dares: { word: 'dares', meaning: 'あえて〜する、思い切って〜する', phonetic: '/deəz/', pos: '動詞' },
  dared: { word: 'dared', meaning: 'あえて〜した', phonetic: '/deəd/', pos: '動詞 (過去形)' },
  desire: { word: 'desire', meaning: '強い願望、切望', phonetic: '/dɪˈzaɪər/', pos: '名詞/動詞' },
  perish: { word: 'perish', meaning: '死ぬ、滅びる', phonetic: '/ˈper.ɪʃ/', pos: '動詞' },
  clamber: { word: 'clamber', meaning: 'よじ登る、よろめきながら登る', phonetic: '/ˈklæm.bər/', pos: '動詞' },
  haste: { word: 'haste', meaning: '急ぐこと、急速', phonetic: '/heɪst/', pos: '名詞' },
  handful: { word: 'handful', meaning: '一握り、一掴み', phonetic: '/ˈhænd.fʊl/', pos: '名詞' },
  fury: { word: 'fury', meaning: '激怒、憤怒', phonetic: '/ˈfjʊə.ri/', pos: '名詞' },
  ransom: { word: 'ransom', meaning: '身代金、贖罪、引き換え', phonetic: '/ˈræn.səm/', pos: '名詞' },
  tower: { word: 'tower', meaning: '塔、高塔', phonetic: '/taʊər/', pos: '名詞' },
  stairs: { word: 'stairs', meaning: '階段', phonetic: '/steəz/', pos: '名詞' },
  tresses: { word: 'tresses', meaning: '（豊かな女性の）房髪、長い髪', phonetic: '/ˈtres.ɪz/', pos: '名詞' },
  braid: { word: 'braid', meaning: '編み毛、三つ編み', phonetic: '/breɪd/', pos: '名詞' },
  hook: { word: 'hook', meaning: '留め金、鉤（かぎ）', phonetic: '/hʊk/', pos: '名詞' },
  shears: { word: 'shears', meaning: '大バサミ、刈り込みバサミ', phonetic: '/ʃɪəz/', pos: '名詞' },
  waste: { word: 'waste', meaning: '荒地、荒野', phonetic: '/weɪst/', pos: '名詞' },
  desert: { word: 'desert', meaning: '荒野、砂漠', phonetic: '/ˈdez.ət/', pos: '名詞' },
  thorns: { word: 'thorns', meaning: 'トゲ、イバラの棘', phonetic: '/θɔːnz/', pos: '名詞' },
  blind: { word: 'blind', meaning: '目の見えない、盲目の', phonetic: '/blaɪnd/', pos: '形容詞' },
  wanders: { word: 'wanders', meaning: 'さまよい歩く、放浪する', phonetic: '/ˈwɒn.dərz/', pos: '動詞' },
  misery: { word: 'misery', meaning: '悲惨、みじめさ、困窮', phonetic: '/ˈmɪz.ər.i/', pos: '名詞' },
  wretchedness: { word: 'wretchedness', meaning: '悲惨さ、不幸、あわれさ', phonetic: '/ˈretʃ.ɪd.nəs/', pos: '名詞' },
  contented: { word: 'contented', meaning: '満ち足りた、満足した', phonetic: '/kənˈten.tɪd/', pos: '形容詞' },

  // Alice in Wonderland vocabulary
  alice: { word: 'Alice', meaning: 'アリス（主人公の少女）', phonetic: '/ˈæl.ɪs/', pos: '固有名詞' },
  rabbit: { word: 'rabbit', meaning: 'ウサギ', phonetic: '/ˈræb.ɪt/', pos: '名詞' },
  caterpillar: { word: 'caterpillar', meaning: 'イモムシ、毛虫', phonetic: '/ˈkæt.ə.pɪl.ər/', pos: '名詞' },
  cheshire: { word: 'Cheshire', meaning: 'チェシャ（チェシャ猫）', phonetic: '/ˈtʃeʃ.ər/', pos: '固有名詞' },
  hatter: { word: 'Hatter', meaning: '帽子屋（狂ったお茶会の主）', phonetic: '/ˈhæt.ər/', pos: '名詞' },
  hare: { word: 'Hare', meaning: '野ウサギ（三月ウサギ）', phonetic: '/heər/', pos: '名詞' },
  dormouse: { word: 'Dormouse', meaning: 'ヤマネ（眠り続ける小動物）', phonetic: '/ˈdɔː.maʊs/', pos: '名詞' },
  duchess: { word: 'Duchess', meaning: '公爵夫人', phonetic: '/ˈdʌtʃ.ɪs/', pos: '名詞' },
  croquet: { word: 'croquet', meaning: 'クロッケー（ゲートを通す球技）', phonetic: '/ˈkrəʊ.keɪ/', pos: '名詞' },
  hedgehog: { word: 'hedgehog', meaning: 'ハリネズミ', phonetic: '/ˈhedʒ.hɒɡ/', pos: '名詞' },
  hedgehogs: { word: 'hedgehogs', meaning: 'ハリネズミ（複数形）', phonetic: '/ˈhedʒ.hɒɡz/', pos: '名詞' },
  flamingo: { word: 'flamingo', meaning: 'フラミンゴ', phonetic: '/fləˈmɪŋ.ɡəʊ/', pos: '名詞' },
  flamingoes: { word: 'flamingoes', meaning: 'フラミンゴ（複数形）', phonetic: '/fləˈmɪŋ.ɡəʊz/', pos: '名詞' },
  mallet: { word: 'mallet', meaning: 'マレット、木槌', phonetic: '/ˈmæl.ɪt/', pos: '名詞' },
  mallets: { word: 'mallets', meaning: 'マレット（複数形）', phonetic: '/ˈmæl.ɪts/', pos: '名詞' },
  knave: { word: 'Knave', meaning: 'トランプのジャック、召使い、悪党', phonetic: '/neɪv/', pos: '名詞' },
  tarts: { word: 'tarts', meaning: 'タルト（洋菓子）', phonetic: '/tɑːts/', pos: '名詞' },
  executioner: { word: 'executioner', meaning: '死刑執行人、首切り役人', phonetic: '/ˌek.sɪˈkjuː.ʃən.ər/', pos: '名詞' },
  gryphon: { word: 'Gryphon', meaning: 'グリフォン（鷲の上半身と獅子の下半身を持つ伝説獣）', phonetic: '/ˈɡrɪf.ən/', pos: '固有名詞' },
  curiouser: { word: 'curiouser', meaning: 'ますます奇妙な（アリスの造語）', phonetic: '/ˈkjʊə.ri.ə.sər/', pos: '形容詞' },
  whiskers: { word: 'whiskers', meaning: '（ネコやウサギの）ヒゲ', phonetic: '/ˈwɪs.kərz/', pos: '名詞' },
  nonsense: { word: 'nonsense', meaning: '無意味、たわ言、ナンセンス', phonetic: '/ˈnɒn.səns/', pos: '名詞' },
  sixpence: { word: 'sixpence', meaning: '6ペンス（昔のイギリス銀貨）', phonetic: '/ˈsɪks.pəns/', pos: '名詞' },
  trial: { word: 'trial', meaning: '裁判、公判', phonetic: '/traɪəl/', pos: '名詞' },
  jury: { word: 'jury', meaning: '陪審員団、審査員', phonetic: '/ˈdʒʊə.ri/', pos: '名詞' },
  jurymen: { word: 'jurymen', meaning: '陪審員たち', phonetic: '/ˈdʒʊə.ri.mən/', pos: '名詞' },

  // Science vocabulary
  protein: { word: 'protein', meaning: 'タンパク質', phonetic: '/ˈprəʊ.tiːn/', pos: '名詞' },
  proteins: { word: 'proteins', meaning: 'タンパク質（複数形）', phonetic: '/ˈprəʊ.tiːnz/', pos: '名詞' },
  structure: { word: 'structure', meaning: '構造、組織', phonetic: '/ˈstrʌk.tʃər/', pos: '名詞' },
  molecular: { word: 'molecular', meaning: '分子の', phonetic: '/məˈlek.jə.lər/', pos: '形容詞' },
  accuracy: { word: 'accuracy', meaning: '正確さ、精度', phonetic: '/ˈæk.jə.rə.si/', pos: '名詞' },
  folding: { word: 'folding', meaning: '折りたたみ、立体配座形成', phonetic: '/ˈfəʊl.dɪŋ/', pos: '名詞' },
  biomedical: { word: 'biomedical', meaning: '生物医学の', phonetic: '/ˌbaɪ.əʊˈmed.ɪ.kəl/', pos: '形容詞' },
  enzyme: { word: 'enzyme', meaning: '酵素', phonetic: '/ˈen.zaɪm/', pos: '名詞' },
  genome: { word: 'genome', meaning: 'ゲノム、全遺伝情報', phonetic: '/ˈdʒiː.nəʊm/', pos: '名詞' },
  precision: { word: 'precision', meaning: '精密、正確', phonetic: '/prɪˈsɪʒ.ən/', pos: '名詞' },
  synaptic: { word: 'synaptic', meaning: 'シナプスの', phonetic: '/sɪˈnæp.tɪk/', pos: '形容詞' },
  hippocampus: { word: 'hippocampus', meaning: '海馬（記憶の中枢）', phonetic: '/ˌhɪp.əˈkæm.pəs/', pos: '名詞' },
  neocortex: { word: 'neocortex', meaning: '新皮質、大脳新皮質', phonetic: '/ˌniː.əʊˈkɔː.teks/', pos: '名詞' },
  breakthrough: { word: 'breakthrough', meaning: '画期的進歩、大発見', phonetic: '/ˈbreɪk.θruː/', pos: '名詞' }
};

export function lookupWord(rawWord: string): DictEntry | null {
  const clean = rawWord.toLowerCase().replace(/[^a-z0-9'-]/g, '').trim();
  if (!clean) return null;

  if (commonDictionary[clean]) {
    return commonDictionary[clean];
  }

  // Basic lemmatization (strip trailing s, ed, ing)
  if (clean.endsWith('ed')) {
    const base = clean.slice(0, -2);
    if (commonDictionary[base]) return commonDictionary[base];
    if (commonDictionary[clean.slice(0, -1)]) return commonDictionary[clean.slice(0, -1)];
  }
  if (clean.endsWith('ing')) {
    const base = clean.slice(0, -3);
    if (commonDictionary[base]) return commonDictionary[base];
    if (commonDictionary[base + 'e']) return commonDictionary[base + 'e'];
  }
  if (clean.endsWith('s')) {
    const base = clean.slice(0, -1);
    if (commonDictionary[base]) return commonDictionary[base];
  }

  return null;
}
