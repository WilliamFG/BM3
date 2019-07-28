module.exports = (app) => { //app recebe constante vindo do custom-express

    app.get('/', function(req,resp){ // rota para raiz do código
        resp.marko (
            require ('../views/Ranq/ranq.marko'),
            {
                ranquea: [//array que guarda o ranqueamento
                    {
                        id:1,
                        TAG: 'CO01', 
                        Descricao:'Condutividade retorno loop',
                        Referencia:'1.5UuS/cm',
                        Pontuacao:'850',

                    },

                    {
                        id:2,
                        TAG: 'TOC01', 
                        Descricao:'TOC retorno loop',
                        Referencia:'300UuS/cm',
                        Pontuacao:'320',

                    }


                ]

            }

        );
    
    });
    
    app.get('/chiller', function(req,resp){ // rota para para chiller
        resp.send ("estou no chiller") // resposta da requisição http
    
    });

}



