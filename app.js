import express from 'express';
import * as shiren4_udewa from './shiren4_udewa';

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index', { data: shiren4_udewa });
});

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
});
