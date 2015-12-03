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
  }
}

export {Game, ItemList}
