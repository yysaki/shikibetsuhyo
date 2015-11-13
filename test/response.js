import request from 'supertest';
import app from '../app';
import {expect} from 'chai';

describe('root path', () => {
  it('should return 200 with correct title', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});
