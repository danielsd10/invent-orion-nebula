var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Usuarios = require('../app/models/Usuarios');

passport.use(new LocalStrategy(
    function(username, password, done) {
        Usuarios.findOne({ username: username, password: password }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    /*User.findById(id, function(err, user) {
        done(err, user);
    });*/
    done(err, {});
});

module.exports = passport;