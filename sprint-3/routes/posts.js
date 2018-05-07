var express = require('express');
var router = express.Router();
var data = require('../chirps.json')

/* GET /about/
 * Note that the path specified below ('') is
 * relative to the path from app.js ('/about'),
 * so the effective path is still '/about/'
 */
router.get('/', function(req, res, next) {
    res.render('posts'); // renders /views/about.hbs
});

module.exports = router;