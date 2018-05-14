var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://umbaleskabubu:141512@ds041556.mlab.com:41556/discount-twitter-2';

var db;

MongoClient.connect(url, (err, client) => {
	if (err) return console.log(err);
	db = client.db('discount-twitter-2');
});

//var data = require('../chirps.json')

router.get('/', function(req, res, next) {
	db.collection('tweets').find({}).sort({'_id': -1}).toArray((err, results) => {
		res.render('index', {"chirps": results});
	});
});

module.exports = router;
