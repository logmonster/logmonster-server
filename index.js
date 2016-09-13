var express = require('express');
var app = express();

var initObj = require('./middlewares/init');

// setup middlewares
initObj.init(app);

// hardcode some links

app.get('/', function(req, res) {
    res.send('this is the index.js');
});


// kick start the server
app.listen(9999, function() {
  var host = this.address().address;
  var port = this.address().port;

  console.log("** listening at http://%s:%s", host, port);
});
