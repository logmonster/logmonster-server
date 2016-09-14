/*
 *  module imports, as only this object needs morgan, make it constant
 */
const morgan = require('morgan');

/**
 *  init - initiation starts here
 *
 *  params
 *      app - express app instance
 */
var init = function(app, configData) {
    app.use(morgan('combined'));

    // ... TODO: do other configs here...
};


/*
 *  for extensibility; return a hash instead
 */
/**
 *  design - maintain init process within the Object's init(); 
 *      in case a change in init is required; just let the caller 
 *      require another js file
 *
 *  return - object / hash; for future extensibility, 
 *      if not just return the init() would do...
 */
module.exports = {
    'init': init
};
