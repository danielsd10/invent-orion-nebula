var Controllers = {};

// métodos generales
Controllers.welcome = function(req, res, next) {
    res.render('welcome', { title: 'Almacén' });
};

// controladores por módulo
Controllers.Unidades = require('./unidades');
Controllers.Categorias = require('./categorias');
Controllers.Productos = require('./productos');
Controllers.Auth = require('./auth');

module.exports = Controllers;