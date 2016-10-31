var comics = require('../../app/controllers/comicBooks.server.controller');

module.exports = function(app) {
    
    app.route('/api/comics/title/:comicTitle').get(comics.read);

    app.route('/api/comics').post(comics.create).get(comics.list);

    app.route('/api/comics/:comicId').get(comics.read).put(comics.update).delete(comics.delete);

    // Middlewares
    app.param('comicTitle', comics.comicByTitle);
    app.param('comicId', comics.comicById);
};
