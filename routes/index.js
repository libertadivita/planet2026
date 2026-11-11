var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('Planet_Cookie', 'Hello_Planet!').render('index', { title: 'Planet' });
});

module.exports = router;