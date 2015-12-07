class Game {
  constructor(gameish) {
    this.title = gameish.title;
    this.shortTitle = gameish.shortTitle;
    this.lists = gameish.lists;
  }
}

class ItemList {
  constructor(listish) {
    this.type = listish.type;
    this.name = listish.name;
    this.items = listish.items;

    var hs = {};
    this.items
    .forEach(item => {
      var key = JSON.stringify([item.buy, item.sell]);
      if (!hs[key])
        hs[key] = item;
    });
    this._heads = Object.keys(hs).map(key => hs[key]);
  }
}

class Item {
  constructor(itemish) {
    this.name = itemish.name;
    this.buy = itemish.buy;
    this.sell = itemish.sell;
  }

  equals(that) {
    return this.name === that.name
      && this.buy === that.buy
      && this.sell === that.sell;
  }
}

export {Game, ItemList, Item}
