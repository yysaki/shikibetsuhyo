import express from 'express';
import gameList from './model/game-list.js';

var app = express();
var basedir = __dirname
  .replace(/\\/g, '/')
  .replace(/\/[^\/]*\/?$/, '');

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(basedir + '/public'));

app.get('/', (request, response) => {
  response.render('index');
});

gameList.forEach(g => {
  app.get(`/${g.id}/`, (request, response) => {
    response.render('content', {game: g});
  });
})

module.exports = app;

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
  });
}
