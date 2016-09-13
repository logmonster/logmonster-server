/*
 *  module imports, as only this object needs morgan, make it constant
 */
const morgan = require('morgan');

/**
 *  init - initiation starts here
 */
var init = function(app) {
    app.use(morgan('combined'));
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
