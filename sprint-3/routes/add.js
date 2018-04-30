var express = require('express');
var router = express.Router();

var data = require('../chirps.json')

router.get('/', function(req, res, next) {
	res.render('add');
});

router.post('/', function(req, res, next) {
	var tweet = req.body;
	tweet.isRetweet = false;
	tweet.comments = 0;
	tweet.retweets = 0;
	tweet.likes = 0;
	data.chirps.push(tweet);
	res.render('index');
});

module.exports = router;
