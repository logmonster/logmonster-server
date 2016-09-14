
/**
 *  set the route(s) required for this express app
 */
var setRoutes = function(router, app) {
    if (router && app) {
        // ** routes setup
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