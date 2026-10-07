var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Planet' });
});

/* Страницы планет */
router.get('/mercury', function(req, res, next) {
  res.send("<h1>Страница Меркурия</h1>");
});

router.get('/venus', function(req, res, next) {
  res.send("<h1>Страница Венеры</h1>");
});

router.get('/earth', function(req, res, next) {
  res.send("<h1>Страница Земли</h1>");
});

router.get('/mars', function(req, res, next) {
  res.send("<h1>Страница Марса</h1>");
});

router.get('/jupiter', function(req, res, next) {
  res.send("<h1>Страница Юпитера</h1>");
});

router.get('/saturn', function(req, res, next) {
  res.send("<h1>Страница Сатурна</h1>");
});

router.get('/uranus', function(req, res, next) {
  res.send("<h1>Страница Урана</h1>");
});

router.get('/neptune', function(req, res, next) {
  res.send("<h1>Страница Нептуна</h1>");
});

module.exports = router;
