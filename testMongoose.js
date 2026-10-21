const mongoose = require('mongoose');

// Подключаемся к базе данных planet
mongoose.connect('mongodb://127.0.0.1:27017/planet');

// Создаём модель Planet с полем name
const Planet = mongoose.model('Planet', { name: String });

// Создаём экземпляр модели
const mars = new Planet({ name: 'Плутон' });

// Сохраняем в базу
mars.save().then(() => console.log('Планета сохранена!'));