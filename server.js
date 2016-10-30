process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose(),
    app = express();

// Listen for connections
app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV + ' Webserver running at http://localhost:' + config.port);;
