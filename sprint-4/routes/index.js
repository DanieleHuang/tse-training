var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://Arnold:DBforCD5142018@ds163010.mlab.com:63010/arnoldscollection', (err,client) => {
  if (err) return console.log(err);
  db = client.db('arnoldscollection');
});

router.get('/', (req, res) => {
  db.collection('chirps').find().toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('index.hbs', result[0])
  });
});

module.exports = router;
