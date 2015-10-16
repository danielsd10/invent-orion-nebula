
// Declaración de métodos del controlador

function listaCategorias(req, res, next) {
    res.render('categorias/lista', { title: 'Categorías' });
}

function registrarCategoria(req, res, next) {
    res.render('categorias/editar', { title: 'Registrar categoría' });
}

// Exportar métodos
module.exports = function() {
    var Controller = {};
    Controller.index = listaCategorias;
    Controller.registrar = registrarCategoria;
    return Controller;
};