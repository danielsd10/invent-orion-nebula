

function loginUser(req, res, next) {

}

function loginForm(req, res, next) {
    res.render('login', { title: 'Iniciar Sesión' });
}

// Exportar métodos
module.exports = (function() {
    var Controller = {};
    Controller.loginForm = loginForm;
    Controller.login = loginUser;
    return Controller;
})();