var Planet = require("../models/planet").Planet;

module.exports = async function(req, res, next) {
  res.locals.nav = [];
  
  // Запрашиваем из базы только title и nick
  var menu = await Planet.find({}, { _id: 0, title: 1, nick: 1 });
  
  if (menu.length != 0) {
    res.locals.nav = menu; // Глобальная переменная nav
  }
  next();
}