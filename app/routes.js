var express = require('express');
var passport = require('passport');
var router = express.Router();
var Controllers = require('./controllers');

/* GET home page */
router.get('/', Controllers.welcome);

/* Auth */
router.get('/login', Controllers.Auth.loginForm);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true}));

/* Vistas por módulo */
router.get('/unidades', Controllers.Unidades.index);
router.get('/unidades/registrar', Controllers.Unidades.editar);
router.get('/unidades/editar/:id', Controllers.Unidades.editar);
router.post('/unidades/registrar', Controllers.Unidades.guardar);
router.post('/unidades/editar/:id', Controllers.Unidades.guardar);
router.get('/unidades/eliminar/:id', Controllers.Unidades.eliminar);
router.get('/categorias', Controllers.Categorias.index);
router.get('/categorias/registrar', Controllers.Categorias.registrar);
router.get('/productos', Controllers.Productos.index);
router.get('/productos/registrar', Controllers.Productos.registrar);

module.exports = router;
