var Unidades = require('../models/Unidades');

// Declaración de métodos del controlador

function listarUnidades(req, res, next) {
    Unidades.readAll(function(err, rows) {
        if (err) { next(); }
        res.render('unidades/lista', {title: 'Unidades de medida', unidades: rows});
    });
}

function editarUnidad(req, res, next) {
    if (!req.params.id) {
        res.render('unidades/editar', {title: 'Registrar unidad'});
    } else {
        Unidades.read(req.params.id, function(err, rows) {
            if (err) { next(); }
            res.render('unidades/editar', {title: 'Actualizar unidad', unidad: rows[0]});
        });
    }
}

function guardarUnidad(req, res, next) {
    if (!req.params.id) {
        Unidades.create({id: req.body.id, nombre: req.body.nombre}, function (err) {
            if (err) { next(); }
            res.redirect('/unidades');
        });
    } else {
        Unidades.update({nombre: req.body.nombre}, req.params.id, function (err) {
            if (err) { next(); }
            res.redirect('/unidades');
        });
    }
}

function eliminarUnidad(req, res, next) {
    if (!req.params.id) { next(); }
    Unidades.delete(req.params.id, function (err) {
        if (err) { next(); }
        res.redirect('/unidades');
    });
}

// Exportar métodos
module.exports = function() {
    var Controller = {};
    Controller.index = listarUnidades;
    Controller.editar = editarUnidad;
    Controller.guardar = guardarUnidad;
    Controller.eliminar = eliminarUnidad;
    return Controller;
};