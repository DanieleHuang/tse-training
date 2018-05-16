var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://jiaqihuangjqh:2397056Hjq@ds121960.mlab.com:21960/garyflyer", (err,client) => {
    if (err) return console.log(err);
    db = client.db('garyflyer');
});

router.get('/', function(req, res) {
    db.collection('posters').find({}).sort({'_id': -1}).toArray((err, result) => {
        res.render('index', {"chirps": result});
    });
})


module.exports = router;
