const express = require('express');//importação do express
const app = express();//execução do express
    //configuração do ejs como motor de telas
    app.set('view-engine', 'ejs');
    //alteração do diretorio da posta views
    app.set('views','./app/views');

    module.exports = app;