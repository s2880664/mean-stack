var Comic = require('mongoose').model('Comic');

//
// CRUD
//

// Helper Functions
exports.read = function(req, res) {
  res.json(req.comic);
}

// Create
exports.create = function(req, res, next) {
  var comic = new Comic(req.body);

  comic.save(function(err){
    if(err)
      return next(err);
    else
      res.json(comic);
  });
};

// Retrieve
exports.list = function(req, res, next) {
  Comic.find({}, function(err, comics) {
    if(err)
      return next(err);
    else
      res.json(comics);
  });
};

exports.comicsBySearch = function(req, res, next, search) {
  Comic.find(
    { $or: [ { "title": { "$regex": search, "$options": "i" } },
    { "description": { "$regex": search, "$options": "i" }}] }, // i = case insensitive
    function(err, comics) {
      if(err)
        return next(err);
      else
        res.json(comics);
    }
  );
}

exports.comicByTitle = function(req, res, next, title) {
  Comic.findOne({
    title: title},
    function(err, comic) {
      if (err)
        return next(err);
      else {
        req.comic = comic;
        next();
      }
    }
  );
};

exports.comicById = function(req, res, next, id) {
  Comic.findOne({
    _id: id},
    function(err, comic) {
      if (err)
        return next(err);
      else {
        req.comic = comic;
        next();
      }
    }
  );
};

// Update
exports.update = function(req, res, next) {
  Comic.findByIdAndUpdate(req.comic.id, req.body, function(err, comic) {
    if (err)
      return next(err);
    else {
      req.comic = comic;
      next();
    }
  }
);
};

// Delete
exports.delete = function(req, res) {
  var comic = req.comic;
  comic.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(comic);
    }
  });
};
