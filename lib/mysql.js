var mysql = require('mysql');
var config = require('../app/config');

var cn = mysql.createConnection(config.db);

cn.connect(function(err) {
    if (err) {
        console.error('error connecting to database: ' + err.stack);
        // end process
        process.exit(1);
    }
    console.log('connected as id ' + cn.threadId);
});

// call cn.end(); to close connection

cn.on('close', function(err) {
    if (err) {
        // unexpected closing of connection, lets reconnect back.
        cn = mysql.createConnection(config.db);
    } else {
        console.log('connection closed normally.');
    }
});

module.exports = cn;