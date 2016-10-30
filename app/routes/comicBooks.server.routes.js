var comicBooks = require('../../app/controllers/comicBooks.server.controller');

module.exports = function(app) {
    app.route('/comicbooks').post(comicBooks.create).get(comicBooks.list);

    app.route('/comicbooks/:comicbookID').get(comicBooks.read).put(comicBooks.update);

    app.param('comicbookID', comicBooks.comicbookByID);
};
