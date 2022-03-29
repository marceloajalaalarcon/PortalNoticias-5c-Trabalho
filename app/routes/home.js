module.exports = function(app){
//rota para a pagina principal do app
    app.get('/', function(req,res){
        res.render('home/index.ejs')
    });
}
