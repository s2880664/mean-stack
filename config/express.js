var config = require('./config'),
express = require('express'),
bodyParser = require('body-parser');

module.exports = function() {
  // Create app object
  var app = express();

  app.use(bodyParser.urlencoded({
    extended : true
  }));

  app.use(bodyParser.json());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Require routing file + pass app object as parameter
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/comicBooks.server.routes.js')(app);

  // Set location of static content
  app.use(express.static('./public'));

  return app;
}
