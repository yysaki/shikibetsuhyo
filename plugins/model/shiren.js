import { Game, ItemList, Item } from "./game.js"

export default new Game({
  id: "shiren",
  title: "不思議のダンジョン2 風来のシレン",
  shortTitle: "風来のシレン",
  gameUrl: "https://www.nintendo.co.jp/wii/vc/vc_sr/",
  developerName: "スパイク・チュンソフト",
  developerUrl: "http://www.spike-chunsoft.co.jp/",
  referenceName: "SFCシレンwiki",
  referenceUrl: "http://twist.jpn.org/sfcsiren/",
  lists: [
    new ItemList({
      type: "udewa",
      name: "腕輪",
      items: [
        new Item({ name: "遠投の腕輪", buy: 1200, sell: 600 }),
        new Item({ name: "混乱よけの腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "錆よけの腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "垂れ流しの腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "通過の腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "呪いよけの腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "レベル固定の腕輪", buy: 2400, sell: 1200 }),
        new Item({ name: "透視の腕輪", buy: 3600, sell: 1800 }),
        new Item({ name: "回復の腕輪", buy: 5000, sell: 2500 }),
        new Item({ name: "ワナ師の腕輪", buy: 5000, sell: 2500 }),
        new Item({ name: "会心の腕輪", buy: 10000, sell: 5000 }),
        new Item({ name: "しあわせの腕輪", buy: 10000, sell: 5000 }),
        new Item({ name: "痛恨の腕輪", buy: 10000, sell: 5000 }),
        new Item({ name: "値切の腕輪", buy: 10000, sell: 5000 }),
        new Item({ name: "識別の腕輪", buy: 30000, sell: 15000 })
      ]
    }),
    new ItemList({
      type: "kusa",
      name: "草",
      items: [
        new Item({ name: "雑草", buy: 50, sell: 25 }),
        new Item({ name: "どく草", buy: 50, sell: 25 }),
        new Item({ name: "めぐすり草", buy: 50, sell: 25 }),
        new Item({ name: "薬草", buy: 50, sell: 25 }),
        new Item({ name: "弟切草", buy: 100, sell: 50 }),
        new Item({ name: "超不幸の種", buy: 200, sell: 30 }),
        new Item({ name: "不幸の種", buy: 200, sell: 40 }),
        new Item({ name: "くねくね草", buy: 200, sell: 50 }),
        new Item({ name: "胃縮小の種", buy: 200, sell: 60 }),
        new Item({ name: "キグニ族の種", buy: 200, sell: 100 }),
        new Item({ name: "命の草", buy: 500, sell: 200 }),
        new Item({ name: "ドラゴン草", buy: 500, sell: 200 }),
        new Item({ name: "ちからの草", buy: 500, sell: 250 }),
        new Item({ name: "どく消し草", buy: 650, sell: 250 }),
        new Item({ name: "胃拡張の種", buy: 1000, sell: 500 }),
        new Item({ name: "しあわせ草", buy: 1000, sell: 500 }),
        new Item({ name: "無敵草", buy: 3000, sell: 100 }),
        new Item({ name: "混乱草", buy: 3000, sell: 1500 }),
        new Item({ name: "睡眠草", buy: 5000, sell: 2500 }),
        new Item({ name: "復活の草", buy: 5000, sell: 2500 }),
        new Item({ name: "天使の種", buy: 10000, sell: 1500 })
      ]
    }),
    new ItemList({
      type: "makimono",
      name: "巻物",
      items: [
        new Item({ name: "モンスターハウスの巻物", buy: 80, sell: 40 }),
        new Item({ name: "混乱の巻物", buy: 100, sell: 50 }),
        new Item({ name: "敵倍速の巻物", buy: 100, sell: 50 }),
        new Item({ name: "バクスイの巻物", buy: 200, sell: 100 }),
        new Item({ name: "迷子の巻物", buy: 200, sell: 100 }),
        new Item({ name: "識別の巻物", buy: 300, sell: 150 }),
        new Item({ name: "あかりの巻物", buy: 300, sell: 250 }),
        new Item({ name: "拾えずの巻物", buy: 300, sell: 300 }),
        new Item({ name: "大部屋の巻物", buy: 400, sell: 200 }),
        new Item({ name: "自爆の巻物", buy: 500, sell: 100 }),
        new Item({ name: "おはらいの巻物", buy: 500, sell: 250 }),
        new Item({ name: "くちなしの巻物", buy: 500, sell: 250 }),
        new Item({ name: "地の恵みの巻物", buy: 800, sell: 400 }),
        new Item({ name: "天の恵みの巻物", buy: 800, sell: 400 }),
        new Item({ name: "パワーアップの巻物", buy: 1000, sell: 100 }),
        new Item({ name: "困った時の巻物", buy: 1000, sell: 250 }),
        new Item({ name: "真空斬りの巻物", buy: 1000, sell: 500 }),
        new Item({ name: "壺増大の巻物", buy: 1000, sell: 500 }),
        new Item({ name: "ワナの巻物", buy: 1000, sell: 500 }),
        new Item({ name: "メッキの巻物", buy: 1500, sell: 500 }),
        new Item({ name: "吸い出しの巻物", buy: 1500, sell: 750 }),
        new Item({ name: "白紙の巻物", buy: 3000, sell: 1000 }),
        new Item({ name: "ジェノサイドの巻物", buy: 50000, sell: 750 }),
        new Item({ name: "聖域の巻物", buy: -1, sell: -1 }),
        new Item({ name: "全滅の巻物", buy: -1, sell: -1 })
      ]
    }),
    new ItemList({
      type: "tsubo",
      name: "壺",
      items: [
        new Item({ name: "弱化の壺", buy: 1000, sell: 200 }),
        new Item({ name: "やりすごしの壺", buy: 1000, sell: 400 }),
        new Item({ name: "識別の壺", buy: 1000, sell: 500 }),
        new Item({ name: "変化の壺", buy: 1000, sell: 500 }),
        new Item({ name: "背中の壺", buy: 1500, sell: 700 }),
        new Item({ name: "トドの壺", buy: 1600, sell: 600 }),
        new Item({ name: "保存の壺", buy: 1600, sell: 600 }),
        new Item({ name: "魔物のるつぼ", buy: 2000, sell: 300 }),
        new Item({ name: "底抜けの壺", buy: 2500, sell: 400 }),
        new Item({ name: "倉庫の壺", buy: 2500, sell: 1200 }),
        new Item({ name: "分裂の壺", buy: 3000, sell: 1500 }),
        new Item({ name: "合成の壺", buy: 3500, sell: 1500 }),
        new Item({ name: "アホくさい壺", buy: 7500, sell: 1500 }),
        new Item({ name: "うっぷんばらしの壺", buy: 7500, sell: 1500 }),
        new Item({ name: "割れない壺", buy: 10000, sell: 1500 }),
        new Item({ name: "強化の壺", buy: 10000, sell: 5000 }),
        new Item({ name: "ガイバラの壺", buy: 15000, sell: 1500 })
      ]
    }),
    new ItemList({
      type: "tsue",
      name: "杖",
      items: [
        new Item({ name: "ガイコツまどうの杖", buy: 300, sell: 150 }),
        new Item({ name: "一時しのぎの杖", buy: 500, sell: 250 }),
        new Item({ name: "しあわせの杖", buy: 500, sell: 250 }),
        new Item({ name: "ふきとばしの杖", buy: 500, sell: 250 }),
        new Item({ name: "不幸の杖", buy: 500, sell: 250 }),
        new Item({ name: "場所替えの杖", buy: 700, sell: 350 }),
        new Item({ name: "痛み分けの杖", buy: 1000, sell: 500 }),
        new Item({ name: "かなしばりの杖", buy: 1000, sell: 500 }),
        new Item({ name: "封印の杖    ", buy: 1000, sell: 500 }),
        new Item({ name: "身がわりの杖", buy: 1000, sell: 500 }),
        new Item({ name: "ブフーの杖", buy: 2000, sell: 500 })
      ]
    })
  ]
})
