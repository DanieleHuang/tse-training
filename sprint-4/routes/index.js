var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

var data = require('../chirps.json')

router.get('/', function(req, res, next) {

	var db, murl = 'mongodb://s3bansal:tc18@ds217350.mlab.com:17350/tse-training'

	MongoClient.connect(murl, (err, client) => {
		if (err) console.log(err);
		db = client.db('tse-training');
		db.collection('chirps').find().sort({'_id': -1}).toArray(function(err, results) {
			res.render('index', {"chirps": results});
		});
	});

});

module.exports = router;
