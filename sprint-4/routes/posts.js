var express = require('express');
var router = express.Router();
var data = require('../chirps.json')
const fs = require('fs');


const MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect("mongodb://jiaqihuangjqh:2397056Hjq@ds121960.mlab.com:21960/garyflyer", (err, client) => {
    if (err) return console.log(err, "here")
    db = client.db('garyflyer') // whatever your database name is

})

/* GET /about/
 * Note that the path specified below ('') is
 * relative to the path from app.js ('/about'),
 * so the effective path is still '/about/'
 */
router.get('/', function(req, res, next) {
    res.render('posts'); // renders /views/about.hbs
});


router.post('/', (req, res) => {
    var tweet = req.body;
    tweet.isRetweet = false;
    tweet.comments = 0;
    tweet.retweets = 0;
    tweet.likes = 0;
    db.collection('posters').save(tweet, (err, result) => {
        if (err) return console.log(err, "here2")
        console.log('saved to database')
        res.redirect('index', data)
    })
})

module.exports = router;