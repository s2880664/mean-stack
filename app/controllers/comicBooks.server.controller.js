var ComicBook = require('mongoose').model('ComicBook');

exports.create = function(req, res, next){
  var comicBook = new ComicBook(req.body);
  comicBook.save(function(err){
    if(err){
      console.log('ERRRRRRRORRR');
      return next(err);
    }
    else{
      console.log('NO ERRROR');
      res.json(comicBook);
    }
  });
};

exports.list = function(req, res, next) {
  ComicBook.find({}, function(err, comicBooks) {
    if(err)
      return next(err);
    else
      res.json(comicBooks);
  });
};

exports.read = function(req, res) {
  res.json(req.comicBook);
}

exports.comicbookByID = function(req, res, next, id) {
  ComicBook.findOne({
    _id: id},
    function(err, comicBook) {
      if (err)
        return next(err);
      else {
          req.comicBook = comicBook;
          next();
        }
    }
  );
};

exports.update = function(req, res, next) {
  ComicBook.findByIdAndUpdate(req.comicBook.id, req.body, function(err, comicBook) {
      if (err)
        return next(err);
      else {
          req.comicBook = comicBook;
          next();
        }
    }
  );
};
