
function findByLogin(params, callback) {
    db.query('call buscar_usuario(?, ?)', [params.username, params.password], function(err, rows) {
        if(err) {
            callback(err, null);
        } else if(!rows || rows[0].length == 0) {
            callback(Error("wrong user or password"), null);
        } else {
            callback(err, rows[0][0]);
        }
    });
}

function findOne(id, callback) {
    db.query('call listar_usuario(?)', id, function(err, rows) {
        if(err) {
            callback(err, null);
        } else if(!rows || rows[0].length == 0) {
            callback(Error("wrong user"), null);
        } else {
            callback(err, rows[0][0]);
        }
    });
}

module.exports = (function() {
    var Model = {};
    Model.findByLogin = findByLogin;
    Model.findOne = findOne;

    return Model;
})();