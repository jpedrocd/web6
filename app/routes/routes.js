const { home, addTarefaController } = require('../controllers/home');
const { check, validationResult } = require('express-validator');
const { getEsp, getTarefaEsp, alterTarefa } = require('../controllers/home');

module.exports = {
    
    inicio: function(app){
        app.get('/', function (req, res){
            res.render('inicio.ejs');
        });
    },

    home: function(app){
        app.get('/tarefas', function (req, res){
            home(app, req, res); 
        });
    },

    getEsp: (app) => {
        app.get('/pesquisar', function(req, res){
            const query = req.query;
            getEsp(query.id, req, res)
        })
    },

    saveTarefa: (app) => {
        app.post('/tarefa/salvar',[
            check('descricao').isLength({min: 1, max: 100}).withMessage("Descricao não pode ser nula"),
            check('data_entrega').isInt({min: 10, max: 10}).withMessage('Ano no formato dd/mm/aaaa')
        ], function(req, res){
            const validation = validationResult(req);
            console.log(JSON.stringify(validation.errors, null, 2));
            if(validation.errors.length > 0){
                res.render('alterTarefa.ejs', {errors: validation.errors, tarefa: req.body});
            }else{
                res.redirect('/');
            }
        });
    },

    alterTarefa: (app) => {
        app.get('/alterar/salvar',[
            check('descricao').isLength({min: 1, max: 100}).withMessage("Descricao não pode ser nula"),
            check('id_usuario').isLength({min: 1}).withMessage('Digite o ID do usuario'),
            check('data_entrega').isLength({min: 10, max: 10}).withMessage('Ano no formato dd/mm/aaaa')
        ], function(req, res){
            const validation = validationResult(req);
            if(validation.errors.length > 0){
                res.render('alterTarefa.ejs', {errors: validation.errors, tarefa: req.body});
            }else{
                alterTarefa(app, req, res);
            }

        })
    },

    getTarefaEsp: (app) => {
        app.get('/alterar', function(req, res){
            const query = req.query;
            console.log(query.id);
            getTarefaEsp(query.id, req, res)
        })
    },

    searchEsp: (app) => {
        app.get('/tarefaesp', function(req, res){
            const query = req.query;
            console.log(query);
            getEsp(query.id, req, res)
        })
    }
}