var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Usuarios = require('../app/models/Usuarios');

passport.use(new LocalStrategy(
    function(username, password, done) {
        Usuarios.findByLogin({ username: username, password: password }, function(err, user) {
            //if (err) { return done(err); }
            if (!user) {
                return done(err, false, { message: 'Incorrect username or password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Usuarios.findOne(id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;