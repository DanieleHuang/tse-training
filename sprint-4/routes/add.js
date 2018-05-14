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
	/*data.chirps.push({"isRetweet": false,
					  "author_name": req.body.author_name,
					  "author_handle": req.body.author_handle,
					  "text": req.body.text,
					  "comments": "0",
					  "retweets": "0",
					  "likes": "0"});
	res.render('index', data);*/
	db.collection('tweets').save({"isRetweet": false,
					  "author_name": req.body.author_name,
					  "author_handle": req.body.author_handle,
					  "text": req.body.text,
					  "comments": "0",
					  "retweets": "0",
					  "likes": "0"});
});

router.get('/', function(req, res) {
	res.render('add', {"chirps": db.collection('tweets').find().toArray()});
});

module.exports = router;
