module.exports = function(app) {
  //Import controllers
  var index = require('../controllers/index.server.controller');

  //Bind address to controller
  app.get('/', index.render);
}
