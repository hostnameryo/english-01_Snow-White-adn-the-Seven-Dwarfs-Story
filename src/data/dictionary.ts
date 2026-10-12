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
