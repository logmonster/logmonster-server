var express = require('express');
var config = require('config');

var initObj = require('./middlewares/init');

var app = express();

// setup middlewares
initObj.init(app, config);

// hardcode some links
app.get('/', function(req, res) {
    res.send('this is the index.js');
});


// kick start the server
app.listen(config.server.port, function() {
  var host = this.address().address;
  var port = this.address().port;

  console.log("** listening at http://%s:%s", host, port);
});
