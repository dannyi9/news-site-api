var express = require('express');
var router = express.Router();
const axios = require('axios');

const rssURL = 'https://feeds.skynews.com/feeds/rss/home.xml';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Fetch RSS Feed */
router.get('/rss-feed', async (req, res) => {
  try {
    const response = await axios.get(rssURL);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (or a specific origin)
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching RSS feed');
  }
});

module.exports = router;
