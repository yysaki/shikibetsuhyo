import {Game, ItemList, Item} from './game.js'

export default new Game({
  id: 'shiren2',
  title: '風来のシレン2 ～鬼襲来!シレン城!～',
  shortTitle: '風来のシレン2',
  gameUrl: 'http://www.spike-chunsoft.co.jp/games/shiren2/',
  developerName: 'スパイク・チュンソフト',
  developerUrl: 'http://www.spike-chunsoft.co.jp/',
  referenceName: '風来のシレン2 鬼襲来！シレン城！ 攻略Wiki',
  referenceUrl: 'http://shiren2.lsx3.net/',
  lists: [
    new ItemList({
      type: 'udewa',
      name: '腕輪',
      items: [
        new Item({name: 'くねくねよけの腕輪', buy: 3000,  sell: 1500}),
        new Item({name: '遠投の腕輪',         buy: 4000,  sell: 2000}),
        new Item({name: 'ノーコンの腕輪',     buy: 4000,  sell: 2000}),
        new Item({name: '白発白中の腕輪',     buy: 4000,  sell: 2000}),
        new Item({name: '回復の腕輪',         buy: 5000,  sell: 2500}),
        new Item({name: 'たれ流しの腕輪',     buy: 5000,  sell: 2500}),
        new Item({name: 'ハラヘリよけの腕輪', buy: 5000,  sell: 2500}),
        new Item({name: 'まがりの腕輪',       buy: 5000,  sell: 2500}),
        new Item({name: 'まじしおの腕輪',     buy: 5000,  sell: 2500}),
        new Item({name: 'ちからの腕輪',       buy: 5000,  sell: 3400}),
        new Item({name: '超会心の腕輪',       buy: 7500,  sell: 1500}),
        new Item({name: '百発百中の腕輪',     buy: 7500,  sell: 3000}),
        new Item({name: 'とうしの腕輪',       buy: 10000, sell: 5000}),
        new Item({name: 'パコレプキンの腕輪', buy: 10000, sell: 5000}),
        new Item({name: 'うけながしの腕輪',   buy: 15000, sell: 7500}),
        new Item({name: '紙一重の腕輪',       buy: 15000, sell: 7500}),
        new Item({name: 'ハラヘラズの腕輪',   buy: 15000, sell: 7500}),
        new Item({name: 'ハラヘリの腕輪',     buy: 15000, sell: 7500}),
        new Item({name: 'ワナ師の腕輪',       buy: 25000, sell: 1000}),
      ]
    }),
    new ItemList({
      type: 'kusa',
      name: '草',
      items: [
        new Item({name: '雑草',       buy: 50,   sell: 25}),
        new Item({name: '薬草',       buy: 100,  sell: 50}),
        new Item({name: 'くねくね草', buy: 300,  sell: 150}),
        new Item({name: 'すばやさ草', buy: 300,  sell: 150}),
        new Item({name: '高とび草',   buy: 300,  sell: 150}),
        new Item({name: '胃拡張の種', buy: 400,  sell: 200}),
        new Item({name: '胃縮小の種', buy: 400,  sell: 200}),
        new Item({name: '命の草',     buy: 400,  sell: 200}),
        new Item({name: '超不幸の種', buy: 400,  sell: 200}),
        new Item({name: '毒消し草',   buy: 400,  sell: 200}),
        new Item({name: '話の種',     buy: 500,  sell: 100}),
        new Item({name: '弟切草',     buy: 500,  sell: 250}),
        new Item({name: 'ドラゴン草', buy: 500,  sell: 250}),
        new Item({name: 'めぐすり草', buy: 500,  sell: 250}),
        new Item({name: '火炎草',     buy: 700,  sell: 350}),
        new Item({name: 'よくきき草', buy: 1000, sell: 500}),
        new Item({name: 'ちからの草', buy: 1500, sell: 700}),
        new Item({name: '毒草',       buy: 1500, sell: 700}),
        new Item({name: 'しあわせ草', buy: 2000, sell: 1000}),
        new Item({name: '不幸の種',   buy: 2000, sell: 1000}),
        new Item({name: '復活の草',   buy: 2500, sell: 1250}),
        new Item({name: '天使の種',   buy: 3000, sell: 1500}),
      ]
    }),
    new ItemList({
      type: 'makimono',
      name: '巻物',
      items: [
        new Item({name: 'ワナ作動の巻物',   buy: 200,   sell: 100}),
        new Item({name: 'いかすしの巻物',   buy: 500,   sell: 250}),
        new Item({name: 'いかずちの巻物',   buy: 500,   sell: 250}),
        new Item({name: '炎上の巻物',       buy: 500,   sell: 250}),
        new Item({name: '識別の巻物',       buy: 500,   sell: 250}),
        new Item({name: '引き上げの巻物',   buy: 500,   sell: 250}),
        new Item({name: 'おはらいの巻物',   buy: 1000,  sell: 500}),
        new Item({name: '氷の巻物',         buy: 1000,  sell: 500}),
        new Item({name: 'ゾワゾワの巻物',   buy: 1000,  sell: 500}),
        new Item({name: '分身の巻物',       buy: 1000,  sell: 500}),
        new Item({name: '持ちかえりの巻物', buy: 1000,  sell: 500}),
        new Item({name: 'ワナけしの巻物',   buy: 1000,  sell: 500}),
        new Item({name: '地の恵みの巻物',   buy: 1200,  sell: 600}),
        new Item({name: '天の恵みの巻物',   buy: 1200,  sell: 600}),
        new Item({name: 'バクスイの巻物',   buy: 1200,  sell: 600}),
        new Item({name: 'バクハの巻物',     buy: 1500,  sell: 750}),
        new Item({name: '水がれの巻物',     buy: 1500,  sell: 750}),
        new Item({name: '大部屋の巻物',     buy: 2000,  sell: 1000}),
        new Item({name: '壺われずの巻物',   buy: 2000,  sell: 1000}),
        new Item({name: '壺増大の巻物',     buy: 2000,  sell: 1100}),
        new Item({name: 'すいだしの巻物',   buy: 3000,  sell: 1500}),
        new Item({name: '仕入れ直しの巻物', buy: 4000,  sell: 2000}),
        new Item({name: 'メッキの巻物',     buy: 4000,  sell: 2000}),
        new Item({name: '白紙の巻物',       buy: 5000,  sell: 2500}),
        new Item({name: '聖域の巻物',       buy: 7500,  sell: 2500}),
        new Item({name: '聖城の巻物',       buy: 7500,  sell: 2500}),
        new Item({name: 'ねだやしの巻物',   buy: 25000, sell: 400}),
      ]
    }),
    new ItemList({
      type: 'tsubo',
      name: '壺',
      items: [
        new Item({name: 'ちょきんの壺',   buy: 2,     sell: 1}),
        new Item({name: '識別の壺',       buy: 1000,  sell: 500}),
        new Item({name: '弱化の壺',       buy: 1000,  sell: 500}),
        new Item({name: 'ほぞんの壺',     buy: 1200,  sell: 600}),
        new Item({name: 'へんげの壺',     buy: 2000,  sell: 1000}),
        new Item({name: '手封じの壺',     buy: 3000,  sell: 1500}),
        new Item({name: 'ビックリの壺',   buy: 3000,  sell: 1500}),
        new Item({name: '水がめ',         buy: 3000,  sell: 1500}),
        new Item({name: '草効果の壺',     buy: 4000,  sell: 2000}),
        new Item({name: '合成の壺',       buy: 8000,  sell: 4000}),
        new Item({name: 'モンスターの壺', buy: 10000, sell: 1}),
        new Item({name: '形見の壺',       buy: 10000, sell: 5000}),
        new Item({name: '強化の壺',       buy: 15000, sell: 7500}),
      ]
    }),
    new ItemList({
      type: 'tsue',
      name: '杖',
      items: [
        new Item({name: 'のりうつりの杖', buy: 500,  sell: 250}),
        new Item({name: 'ふきとばしの杖', buy: 500,  sell: 250}),
        new Item({name: '回復の杖',       buy: 800,  sell: 400}),
        new Item({name: '場所がえの杖',   buy: 800,  sell: 400}),
        new Item({name: '引きよせの杖',   buy: 800,  sell: 400}),
        new Item({name: 'ころばぬ先の杖', buy: 1000, sell: 500}),
        new Item({name: '物知りの杖',     buy: 1000, sell: 500}),
        new Item({name: 'クオーターの杖', buy: 1200, sell: 250}),
        new Item({name: '鈍足の杖',       buy: 1200, sell: 400}),
        new Item({name: '封印の杖',       buy: 2000, sell: 500}),
        new Item({name: 'とうめいの杖',   buy: 2000, sell: 1000}),
        new Item({name: 'トンネルの杖',   buy: 2000, sell: 1000}),
        new Item({name: '倍速の杖',       buy: 2000, sell: 1000}),
        new Item({name: '不幸の杖',       buy: 2500, sell: 1000}),
        new Item({name: 'からぶりの杖',   buy: 2500, sell: 1200}),
        new Item({name: '火ばしらの杖',   buy: 2500, sell: 1200}),
        new Item({name: 'しあわせの杖',   buy: 3000, sell: 1000}),
        new Item({name: '草投げの杖',     buy: 3000, sell: 1200}),
        new Item({name: '草受けの杖',     buy: 3000, sell: 1400}),
      ]
    }),
  ]
});
