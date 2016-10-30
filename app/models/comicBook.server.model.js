var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var ComicBookSchema = new Schema({
      //title : { type : String, unique : true, required : true },
      title : String,
      description : String,
    });

mongoose.model('ComicBook', ComicBookSchema);
