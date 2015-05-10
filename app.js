import express from 'express';
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
});
