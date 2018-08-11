const functions = require('firebase-functions');
import express from 'express';
const gameList = require('./model/game-list.js');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (request, response) => {
  response.render('index');
});

gameList.default.forEach(g => {
  app.get(`/${g.id}/`, (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.render('content', {game: g});
  });
})

exports.raw_app = app;
exports.app = functions.https.onRequest(app);
