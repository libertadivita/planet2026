var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Planet' });
});

/* Страница Меркурия */
router.get('/mercury', function(req, res, next) {
  res.render('planet', {
    title: "Меркурий",
    picture: "/images/mercury.jpg",
    desc: "Самая близкая к Солнцу планета Солнечной системы."
  });
});

/* Страница Венеры */
router.get('/venus', function(req, res, next) {
  res.render('planet', {
    title: "Венера",
    picture: "/images/venus.jpg",
    desc: "Вторая планета Солнечной системы, названа в честь богини любви."
  });
});

/* Страница Земли */
router.get('/earth', function(req, res, next) {
  res.render('planet', {
    title: "Земля",
    picture: "/images/earth.jpg",
    desc: "Третья планета от Солнца, единственная известная планета с жизнью."
  });
});

/* Страница Марса */
router.get('/mars', function(req, res, next) {
  res.render('planet', {
    title: "Марс",
    picture: "/images/mars.jpg",
    desc: "Четвёртая планета от Солнца. Известен как Красная планета."
  });
});

/* Страница Юпитера */
router.get('/jupiter', function(req, res, next) {
  res.render('planet', {
    title: "Юпитер",
    picture: "/images/jupiter.jpg",
    desc: "Крупнейшая планета Солнечной системы, газовый гигант."
  });
});

/* Страница Сатурна */
router.get('/saturn', function(req, res, next) {
  res.render('planet', {
    title: "Сатурн",
    picture: "/images/saturn.jpg",
    desc: "Шестая планета от Солнца, известна своими кольцами."
  });
});

/* Страница Урана */
router.get('/uranus', function(req, res, next) {
  res.render('planet', {
    title: "Уран",
    picture: "/images/uranus.jpg",
    desc: "Седьмая планета от Солнца, ледяной гигант."
  });
});

/* Страница Нептуна */
router.get('/neptune', function(req, res, next) {
  res.render('planet', {
    title: "Нептун",
    picture: "/images/neptune.jpg",
    desc: "Восьмая и самая дальняя планета Солнечной системы."
  });
});

module.exports = router;
