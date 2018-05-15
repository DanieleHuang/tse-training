var express = require('express');
var router = express.Router();

var data = require('../chirps.json');

router.get('/', function(req, res, next) {
	res.render('add', data);
});


router.post('/chirps', (req, res) => {
        db.collection('chirps').save(req.body, (err, result) => {
                if (err) return console.log(err);
                console.log('saved to database');
                res.redirect('/');
        });
});


module.exports = router;
