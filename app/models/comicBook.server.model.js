var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var ComicSchema = new Schema({
      //title : { type : String, unique : true, required : true },
      title : { type: String, required : true},
      description : String,
    });

mongoose.model('Comic', ComicSchema);
