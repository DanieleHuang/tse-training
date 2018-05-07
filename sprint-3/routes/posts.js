var express = require('express');
var router = express.Router();
var data = require('../chirps.json')
const fs = require('fs');

/* GET /about/
 * Note that the path specified below ('') is
 * relative to the path from app.js ('/about'),
 * so the effective path is still '/about/'
 */
router.get('/', function(req, res, next) {
    res.render('posts'); // renders /views/about.hbs
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    const content = JSON.stringify(req.body);
    fs.writeFileSync('../chirps.json', content)
})

module.exports = router;