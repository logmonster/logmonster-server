
var moment = require('moment');


/**
 *  set the route(s) required for this express app
 */
var setRoutes = function(router, app, config) {
    if (router && app) {
        // ** routes setup
        if (config['logging']['path-history'] == true) {
            router.use(function(req, res, next) {
                console.log('path:[%s]=>[%s]', moment().format(), req.url);
                next();
            });
        }
        
        router.get('/', function(req, res) {
            res.send('this is the root path access...');
        });
        
        
        
        // ** app setup
        app.use('/', router);
        
    }   // end -- if (router and app are valid)
};


/**
 *  return - object / hash 
 *      setRoutes = method to setup routes for this express app
 */
module.exports = {
    'setRoutes': setRoutes
};