
function create(params, callback) {
    db.query('call registrar_unidad(?, ?)', [params.id, params.nombre], callback);
}

function readAll(callback) {
    db.query('call listar_unidades', function(err, rows) {
        // separar registros obtenidos de información adicional
        if(!rows || rows.length < 2) {
            callback(err);
        } else {
            callback(err, rows[0], rows[1]);
        }
    });
}

function read(id, callback) {
    db.query('call listar_unidad(?)', id, function(err, rows) {
        // separar registros obtenidos de información adicional
        if(!rows || rows.length < 2) {
            callback(err);
        } else {
            callback(err, rows[0], rows[1]);
        }
    });
}

function update(params, id, callback) {
    db.query('call actualizar_unidad(?, ?)', [id, params.nombre], callback);
}

function _delete(id, callback) {
    db.query('call eliminar_unidad(?)', id, callback);
}

// Exportar métodos
module.exports = (function() {
    var Model = {};
    Model.create = create;
    Model.readAll = readAll;
    Model.read = read;
    Model.update = update;
    Model.delete = _delete;

    return Model;
})();