var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://umbaleskabubu:141512@ds041556.mlab.com:41556/discount-twitter-2';

//var data = require('../chirps.json')
//router.use(bodyParser.urlencoded({extended: true}));

var db;

MongoClient.connect(url, (err, client) => {
	if (err) return console.log(err);
	db = client.db('discount-twitter-2');
});

router.post('/', function(req, res, next) {
	db.collection('tweets').save({"isRetweet": false,
					  "author_name": req.body.author_name,
					  "author_handle": req.body.author_handle,
					  "text": req.body.text,
					  "comments": "0",
					  "retweets": "0",
					  "likes": "0"});
	db.collection('tweets').find({}).sort({'_id': -1}).toArray((err, results) => {
		res.render('index', {"chirps": results});
	});
});

router.get('/', function(req, res) {
	db.collection('tweets').find({}).sort({'_id': -1}).toArray((err, results) => {
		res.render('add', {"chirps": results});
	});
});

module.exports = router;
