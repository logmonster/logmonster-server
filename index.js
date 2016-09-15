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
routesObj.setRoutes(router, app, config);


// ******************************* //
// **   kick start the server   ** //
// ******************************* //

app.listen(config.server.port, function() {
    var host = this.address().address;
    var port = this.address().port;

    // * https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
    
    console.log("** listening at \x1b[36mhttp://%s:%s", host, port);
    console.log("\x1b[0m"); // reset back to the original text color
});
