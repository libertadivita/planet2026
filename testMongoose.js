const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/planet');

// Создаём схему
var schema = mongoose.Schema({ name: String });

// Добавляем метод в схему
schema.methods.info = function() {
  console.log(this.name + " — планета Солнечной системы");
}

// Создаём модель на основе схемы
const Planet = mongoose.model('Planet', schema);

// Создаём экземпляр и сохраняем
const mars = new Planet({ name: 'Плутон' });
mars.save().then(() => mars.info());