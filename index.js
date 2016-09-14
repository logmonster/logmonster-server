var express = require('express');
var config = require('config');     // containing config data (default.json etc)

var initObj = require('./middlewares/init');
var routesObj = require('./middlewares/routes');

var app = express();
var router = express.Router();


// *************************** //
// **   setup middlewares   ** //
// *************************** //

initObj.init(app, config);
routesObj.setRoutes(router, app);


// ******************************* //
// **   kick start the server   ** //
// ******************************* //

app.listen(config.server.port, function() {
  var host = this.address().address;
  var port = this.address().port;

  console.log("** listening at http://%s:%s", host, port);
});
