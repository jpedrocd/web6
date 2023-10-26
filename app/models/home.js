let dbConnection = require("../../config/dbConnection");

module.exports = {
    getTarefas: (dbConnection, callback) => {
        const sql = 'select * from tarefas'
        dbConnection.query(sql, callback);
    },
    addTarefa: (tarefa, dbConnection, callback) => {
        const sql = `insert into tarefas (descricao, id_usuario, data_entrega) values ("${tarefa.descricao}","${tarefa.id_usuario}", "${tarefa.data_entrega}")`
        dbConnection.query(sql, callback);
    },
    alterTarefa: (tarefa, dbConnection, callback) => {
        const sql = `update tarefas set descricao = "${tarefa.descricao}", id_usuario = "${tarefa.id_usuario}", data_entrega = "${tarefa.data_entrega}"  where id_usuario = ${tarefa.id_usuario}`;
        console.log(sql)
        dbConnection.query(sql, callback);
    },
    getTarefaEsp: (tarefa, dbConnection, callback) => {
        const sql = `select * from tarefas where id_usuario = ${tarefa}`
        dbConnection.query(sql, callback);
    }
}