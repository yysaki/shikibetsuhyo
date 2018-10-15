import test from 'ava';
import { resolve } from 'path';
import {Game, ItemList, Item} from '../plugins/model/game.js';

test('Game should be loaded', async t => {
  var g = new Game({title: "", shortTitle: "", lists: []});
  t.true(true);
});

test('ItemList should isHeadOfGroup correctly', async t => {
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

  t.true(hudaList.isHeadOfGroup(suimin));
  t.false(hudaList.isHeadOfGroup(huuin));
});

test('Item should equals correctly', async t => {
  var suimin = new Item({name: '睡眠の札', buy: 500, sell: 175});
  var suimin2 = new Item({name: '睡眠の札', buy: 500, sell: 175});
  var huuin  = new Item({name: '封印の札', buy: 500, sell: 175});

  t.true(suimin.equals(suimin2));
  t.false(suimin.equals(huuin));
});
