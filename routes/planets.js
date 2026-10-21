var express = require('express');
var router = express.Router();

// Подключаем модель Planet
var Planet = require('../models/planet').Planet;

/* Страница планеты */
router.get("/:nick", async function(req, res, next) {
  var planets = await Planet.find({ nick: req.params.nick });
  
  console.log(planets); 
  
  if (!planets.length) {
    return next(new Error("Нет такой планеты в Солнечной системе"));
  }
  
  var planet = planets[0]; 
  res.render('planet', {
    title: planet.title,
    picture: planet.avatar,
    desc: planet.desc
  });
});

module.exports = router;