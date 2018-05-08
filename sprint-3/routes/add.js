var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var data = require('../chirps.json')

//router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
	data.chirps.push({"isRetweet": false,
					  "author_name": req.body.author_name,
					  "author_handle": req.body.author_handle,
					  "text": req.body.text,
					  "comments": "0",
					  "retweets": "0",
					  "likes": "0"});
	res.render('index', data);
});

router.get('/', function(req, res) {
	res.render('add', data);
});

module.exports = router;
