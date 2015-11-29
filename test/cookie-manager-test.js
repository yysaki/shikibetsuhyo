import CookieManager from '../es6/cookie-manager.js';
import {expect} from 'chai';

describe('CookieManager', () => {
    var cbData = {
      udewa:{1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, 10:true, 11:true, 12:true, 13:true, 14:true, 15:true, 16:true, 17:true, 18:true, 19:true, 20:true, 21:true, 22:true, 23:true, 24:true, 25:true},
      kusa:{1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false, 16:false, 17:false, 18:false, 19:false, 20:false, 21:false, 22:false, 23:false, 24:false, 25:false, 26:false, 27:false, 28:false, 29:false},
      makimono:{1:false, 2:true, 3:false, 4:true, 5:false, 6:true, 7:false, 8:true, 9:false, 10:true, 11:false, 12:true, 13:false, 14:true, 15:false, 16:true, 17:false, 18:true, 19:false, 20:true, 21:false, 22:true, 23:false, 24:true, 25:false, 26:true, 27:false, 28:true, 29:false, 30:true, 31:false, 32:true, 33:false, 34:true, 35:false, 36:true, 37:false},
      tsubo:{1:false, 2:true, 3:false, 4:true, 5:false, 6:true, 7:false, 8:true, 9:false, 10:true, 11:false, 12:true, 13:false, 14:true, 15:false, 16:true, 17:false, 18:true, 19:false, 20:true, 21:false, 22:true, 23:false, 24:true},
      tsue:{1:true, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false, 12:false, 13:false, 14:false, 15:false, 16:false, 17:false, 18:false, 19:false},
      huda:{1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:true}
    };

var rawJson = '[["udewa",25,"jz6rj"],["kusa",29,"0"],["makimono",37,"l1nv92i"],["tsubo",24,"6nq96"],["tsue",19,"1"],["huda",11,"sg"]]';

  it('should _encode correctly', () => {
    var cm = new CookieManager();

    expect(cm._encode(cbData)).to.equal(rawJson);
  });

  it('should _decode correctly', () => {
    var cm = new CookieManager();

    expect(JSON.stringify(cm._decode(rawJson))).to.equal(JSON.stringify(cbData));
  });

  it('should _isValid correctly', () => {
    var cm = new CookieManager();

    expect(cm._isValid(undefined)).to.be.false;
    expect(cm._isValid(rawJson)).to.be.true;
  });
});

