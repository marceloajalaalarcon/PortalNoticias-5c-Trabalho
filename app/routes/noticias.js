const dbConnection = require('../../config/dbConnection');//importando o bando de dados

module.exports = function(app){
      //rota para a pagina de noticias
    app.get('/noticias', function(req, res){
        const connection = dbConnection(); //execultando o banco de dados
        connection.query('select * from noticias', function(error, result) {
            if(error){
                res.render('erro404/erro404.ejs');
                 //renderização da pagian erro404.ejs
            } else {
                res.render('noticias/noticias.ejs', {noticias:result});
                //renderização da pagian noticias.ejs juntamente com o envio da variavel result
            }//verifica se a um erro, se ouver move o usuario para a tela de erro, se não ouver, mostra a tabela para o usuario
        })
    });

};