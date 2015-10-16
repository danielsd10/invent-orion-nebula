
// Declaración de métodos del controlador

function listaUnidades(req, res, next) {
    res.render('unidades/lista', { title: 'Unidades de medida' });
}

function registrarUnidad(req, res, next) {
    res.render('unidades/editar', { title: 'Registrar unidad' });
}

// Exportar métodos
module.exports = function() {
    var Controller = {};
    Controller.index = listaUnidades;
    Controller.registrar = registrarUnidad;
    return Controller;
};