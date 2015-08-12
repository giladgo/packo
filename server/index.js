var express = require('express');

app = express();

app.use(express.static('build'));

// TODO: User render() instead
app.use(express.static('server/templates/'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
