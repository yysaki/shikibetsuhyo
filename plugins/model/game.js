class Game {
  constructor(gameish) {
    this.id = gameish.id
    this.title = gameish.title
    this.shortTitle = gameish.shortTitle
    this.gameUrl = gameish.gameUrl
    this.developerName = gameish.developerName
    this.developerUrl = gameish.developerUrl
    this.referenceName = gameish.referenceName
    this.referenceUrl = gameish.referenceUrl
    this.lists = gameish.lists
  }
}

class ItemList {
  constructor(listish) {
    this.type = listish.type
    this.name = listish.name
    this.items = listish.items

    var hs = {}
    this.items.forEach(item => {
      var key = JSON.stringify([item.buy, item.sell])
      if (!hs[key]) hs[key] = item
    })
    this._heads = Object.keys(hs).map(key => hs[key])
  }

  isHeadOfGroup(item) {
    return this._heads.some(i => i.equals(item))
  }
}

class Item {
  constructor(itemish) {
    this.name = itemish.name
    this.buy = itemish.buy
    this.sell = itemish.sell
  }

  equals(that) {
    return (
      this.name === that.name &&
      this.buy === that.buy &&
      this.sell === that.sell
    )
  }

  displayBuy() {
    return this.buy >= 0 ? String(this.buy) : "-"
  }

  displaySell() {
    return this.sell >= 0 ? String(this.sell) : "-"
  }
}

export { Game, ItemList, Item }
