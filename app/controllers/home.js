const conn = require('../../config/dbConnection');
const { getTarefas, alterTarefa, getTarefaEsp } = require('../models/home')



module.exports.home = (app, req, res) => {
    // aqui vamos fazer a chamada para o model do banco de dados.
    dbConn = conn();
    getTarefas(dbConn, (error, result) => {
        res.render('home.ejs', {tarefas: result});
    });
}

module.exports.getEsp = (app, req, res) => {
    const dbConn = conn();
    getTarefaEsp(app, dbConn, (error, result) =>{
        res.render('tarefaesp.ejs', {tarefas: result, usuario: []});
    })
}

module.exports.getTarefaEsp = (app, req, res) => {
    const dbConn = conn();
    getTarefaEsp(app, dbConn, (error, result) =>{
        result[0].id = app;
        res.render('alterTarefa.ejs', {tarefa: result[0], errors: []});
    })
}


module.exports.alterTarefa = (app, req, res) => {
    const dbConn = conn();
    const tarefa = req.query;
    alterTarefa(tarefa, dbConn, (error, result) =>{
        res.redirect('/');
    })
}
