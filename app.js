import express from 'express';
import * as shiren4 from './es6/model/shiren4.js';

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/shiren/', (request, response) => {
  var about = 'about/shiren4';

  response.render(about, (err, aboutHtml) => {
    response.render(
      'index',
      {
        data: shiren4.data,
        about: aboutHtml
      });
  });
});

module.exports = app;

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
  });
}
