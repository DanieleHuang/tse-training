var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
	res.render('add');
});

router.post('/', function(req, res, next) {

	var tweet = req.body;
	tweet.isRetweet = false;
	tweet.comments = 0;
	tweet.retweets = 0;
	tweet.likes = 0;

	var db, murl = 'mongodb://s3bansal:tc18@ds217350.mlab.com:17350/tse-training'

	MongoClient.connect(murl, (err, client) => {
		if (err) console.log(err);
		db = client.db('tse-training');
		db.collection('chirps').save(tweet, (err, result) => {
			res.redirect('/');
		});

	});

});

module.exports = router;
