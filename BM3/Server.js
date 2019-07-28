// BM3 - quando for utilizar em OS linux deletar a pasta node_modules

const app = require('./src/config/custom-express');// importa o módulo custom-express

app.listen(3000, function() {//servidor rodando na porta 3000 e executa function
    console.log('servidor rodando na porta 3000');

});

// app.get('/', function(req,resp){ // recebe o método GET vindo do navegador
//     resp.send("enviado para tela") // ao resceber responde com o valor em send

// });
