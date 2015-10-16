
// Declaración de métodos del controlador

function listaProductos(req, res, next) {
    res.render('productos/lista', { title: 'Productos' });
}

function registrarProducto(req, res, next) {
    res.render('productos/editar', { title: 'Registrar producto' });
}

// Exportar métodos
module.exports = function() {
    var Controller = {};
    Controller.index = listaProductos;
    Controller.registrar = registrarProducto;
    return Controller;
};