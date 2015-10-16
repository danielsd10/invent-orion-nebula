
function findOne(params, callback) {
    db.query('call buscar_usuario(?, ?)', [params.username, params.password], function(err, rows) {
        if(!rows || rows.length < 2) {
            callback(err);
        } else {
            callback(err, rows[0]);
        }
    });
}

module.exports = (function() {
    var Model = {};
    Model.findOne = findOne;

    return Model;
})();