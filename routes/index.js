var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.Planet_Cookie = "Hello_Planet";
  res.render('index', { title: 'Planet' });
});

module.exports = router;