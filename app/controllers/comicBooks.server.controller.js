var Comic = require('mongoose').model('Comic');

exports.create = function(req, res, next){
  var comic = new Comic(req.body);
  comic.save(function(err){
    if(err){
      console.log('ERRRRRRRORRR');
      return next(err);
    }
    else{
      console.log('NO ERRROR');
      res.json(comic);
    }
  });
};

/*
var makeMongooseErrorMsgArray = function(err){
    var msgArray = [];
    if (err.errors) { // validation errors
        $.each(err.errors, function (key, val) {
            msgArray.push(val.message);
        });
    } else if (err.message){ // should be execution error without err.errors
        errLogr.log(err); // log execution errors
        msgArray.push(err.message);
    } else {
        msgArray.push('Unknown error');
    }
    return msgArray;
}
*/
exports.list = function(req, res, next) {
  Comic.find({}, function(err, comics) {
    if(err)
      return next(err);
    else
      res.json(comics);
  });
};

exports.read = function(req, res) {
  res.json(req.comic);
}

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
