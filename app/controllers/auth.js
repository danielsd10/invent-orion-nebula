var passport = require('passport');

// middleware para verificar que usuario inició sesión
function isLoggedIn(req, res, next) {
    // si el usuario está autenticado, continuar
    if (req.isAuthenticated()) {
        return next();
    }
    // si no está autenticado, ir a login
    res.redirect('/login');
}

// login form
function loginForm(req, res, next) {
    res.render('login', { title: 'Iniciar Sesión' });
}

// logout
function logout(req, res){
    req.logout();
    res.redirect('/login');
}

// Exportar métodos
module.exports = (function() {
    var Controller = {};
    Controller.loginForm = loginForm;
    Controller.login = passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true});
    Controller.isLoggedIn = isLoggedIn;
    Controller.logout = logout;
    return Controller;
})();