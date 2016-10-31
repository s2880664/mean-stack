var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var ComicSchema = new Schema({
      //title : { type : String, unique : true, required : true },
      title : { type: String, required : true, unique : true},
      description : { type: String, maxlength: 500 },
      publishDate : Date
    });

mongoose.model('Comic', ComicSchema);
