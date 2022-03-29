const mysql = require('mysql')//importação do módulo mysql;

module.exports = function(){

        return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'ifms',
            database:'portal_noticias'
        });//cria uma conexão com o banco de dados portal noticias;

}