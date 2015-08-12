var express = require('express');

app = express();

app.use(express.static('build'));

app.set('views', './server/templates');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index')
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
