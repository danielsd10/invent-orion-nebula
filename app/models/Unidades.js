
function create(params, callback) {
    db.query('insert into unidades set ?', params, callback);
}

function readAll(callback) {
    db.query('select * from unidades order by nombre', callback);
}

function read(id, callback) {
    db.query('select * from unidades where id = ?', id, callback);
}

function update(params, id, callback) {
    db.query('update unidades set ? where id = ?', [params, id], callback);
}

function _delete(id, callback) {
    db.query('delete from unidades where id = ?', id, callback);
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