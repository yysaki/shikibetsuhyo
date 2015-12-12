import {Game, ItemList, Item} from '../js/model/game.js';
import {expect} from 'chai';

describe('Game', () => {
  it('should be loaded', () => {
    var g = new Game({title: "", shortTitle: "", lists: []});
    expect(true).to.is.true;
  });
});
