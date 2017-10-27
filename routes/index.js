var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Scraper = require("image-scraper");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/image-scraper', function(req, res, next) {
  res.render('index', { title: 'Image Scraper'});
});


router.get('/image-scraper/scrapped', function(req, res, next) {
  res.render('success', { title: 'Image Scraper',msg: `Successfully scrapped all the image! Please find the images on "bin" folder`});
});


router.post('/image-scraper', function(req, res, next) {
  var url = req.body.url;
  var scraper = new Scraper(url);
  scraper.scrape(function(image) { 
    image.save();
  });
  res.redirect('/image-scraper/scrapped');
});

module.exports = router;
