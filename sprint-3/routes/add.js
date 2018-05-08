var express = require('express');
var router = express.Router();

var data = require('../chirps.json');

router.get('/', function(req, res, next) {
	res.render('add', data);
});

router.post('/', (req, res) => {
        req.body.comments = 0;
        req.body.retweets = 0;
        req.body.likes = 0;
        req.body.isRetweet = false;
        data.chirps.push(req.body);
});


module.exports = router;
