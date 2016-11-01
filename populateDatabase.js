var titles = ['Batman', 'Spiderman', 'Superman', 'X-Men'];
var starts = ['Chronicals', 'Adventures', 'Story'];

var titlesLength = titles.length;
var startsLength = starts.length;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");


    var collection = db.collection('comics');

    var i, ii;
    for (i = 0; i < startsLength; i++) {
      for(ii = 0; ii < titlesLength; ii++){
        collection.insert( { title : ("The " + starts[i] + " of " + titles[ii]),
        description : ("Comment " + Math.floor(Math.random() * 1000)),
        publishDate : randomDate(new Date(1900, 0, 1), new Date())
      })
    }
  }
  console.log("Finished populating database");
}
});

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
