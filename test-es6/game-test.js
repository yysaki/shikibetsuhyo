import {Game, ItemList, Item} from '../js/model/game.js';
import {expect} from 'chai';

describe('Game', () => {
  it('should be loaded', () => {
    var g = new Game({title: "", shortTitle: "", lists: []});
    expect(true).to.is.true;
  });
});

describe('ItemList', () => {
  it('should isHeadOfGroup correctly', () => {
    var hudaList = new ItemList({
      type: 'huda',
      name: '札',
      items: [
        new Item({name: '睡眠の札',       buy: 500, sell: 175}),
        new Item({name: '封印の札',       buy: 500, sell: 175}),
        new Item({name: '混乱の札',       buy: 500, sell: 175}),
        new Item({name: '空振りの札',     buy: 500, sell: 175}),
        new Item({name: 'ゾワゾワの札',   buy: 500, sell: 175}),
        new Item({name: '影縫いの札',     buy: 500, sell: 175}),
        new Item({name: '加速の札',       buy: 500, sell: 175}),
        new Item({name: '鈍足の札',       buy: 500, sell: 175}),
        new Item({name: '狂戦士の札',     buy: 500, sell: 175}),
        new Item({name: 'イカリの札',     buy: 500, sell: 175}),
        new Item({name: 'オオイカリの札', buy: 500, sell: 175})
      ]
    });
    var suimin = new Item({name: '睡眠の札', buy: 500, sell: 175});
    var huuin  = new Item({name: '封印の札', buy: 500, sell: 175});

    expect(hudaList.isHeadOfGroup(suimin)).to.be.true;
    expect(hudaList.isHeadOfGroup(huuin)).to.be.false;
  });
});

describe('Item', () => {
  it('should equals correctly', () => {
    var suimin = new Item({name: '睡眠の札', buy: 500, sell: 175});
    var suimin2 = new Item({name: '睡眠の札', buy: 500, sell: 175});
    var huuin  = new Item({name: '封印の札', buy: 500, sell: 175});

    expect(suimin.equals(suimin2)).to.be.true;
    expect(suimin.equals(huuin)).to.be.false;
  });
});
