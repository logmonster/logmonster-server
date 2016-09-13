var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('this is the index.js');
});

app.listen(9999, function() {
  var host = this.address().address;
  var port = this.address().port;

  console.log("** listening at http://%s:%s", host, port);
});
