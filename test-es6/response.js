import request from 'supertest';
import {raw_app} from '../js/app';
import {expect} from 'chai';

describe('root path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});

describe('shiren path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/shiren/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>不思議のダンジョン2 風来のシレン - 不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});

describe('shiren2 path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/shiren2/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>風来のシレン2 ～鬼襲来!シレン城!～ - 不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});

describe('shiren3 path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/shiren3/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>風来のシレン3 からくり屋敷の眠り姫 - 不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});

describe('shiren4 path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/shiren4/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>風来のシレン4 神の眼と悪魔のヘソ - 不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});

describe('shiren5 path', () => {
  it('should return 200 with correct title', done => {
    request(raw_app)
      .get('/shiren5/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.contain('<title>風来のシレン5 フォーチュンタワーと運命のダイス - 不思議のダンジョン 値段識別表</title>');

        if (err) return done(err);
        done();
      });
  });
});
