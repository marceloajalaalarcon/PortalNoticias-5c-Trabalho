module.exports = function(app){
 //rota para a pagina principal do app
app.get('/formularioinclusaonoticias', function(req, res){
    res.render('admin/form_add_noticias.ejs')
});
}