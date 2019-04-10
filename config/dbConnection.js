var mysql = require('mysql');

var connectionMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'beers_truck'
    });
}

module.exports = function(){
    return connectionMySQL;
}