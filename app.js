const app = require('./config/server.js'); //importando o servidor para iniciar o servidor;
    const rotaHome = require('./app/routes/home')(app); //importando a rota para a pagina inicial;
    const rotaAdmin = require('./app/routes/admin')(app); //importando a rota para a pagina admin;
    const rotaNoticias= require('./app/routes/noticias')(app); //importando a rota para a pagina noticias;

    //Rodando o servidor na porta 3000;
        app.listen('3000', function(){
            console.log('Servidor rodando na porta 3000')
        });
