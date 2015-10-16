var express = require('express');
var router = express.Router();
var Controllers = require('./controllers');

/* GET home page */
router.get('/', Controllers.welcome);

/* Vistas por módulo */
router.get('/unidades', Controllers.Unidades.index);
router.get('/unidades/registrar', Controllers.Unidades.registrar);
router.get('/categorias', Controllers.Categorias.index);
router.get('/categorias/registrar', Controllers.Categorias.registrar);
router.get('/productos', Controllers.Productos.index);
router.get('/productos/registrar', Controllers.Productos.registrar);

module.exports = router;
