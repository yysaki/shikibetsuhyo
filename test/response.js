import request from 'supertest';
import app from '../app';
import {expect} from 'chai';

describe('root path', () => {
  it('should return 200 with correct title', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>値段識別表 - 不思議のダンジョン 風来のシレン4 神の眼と悪魔のヘソ</title>');

        if (err) return done(err);
        done();
      });
  });
});
