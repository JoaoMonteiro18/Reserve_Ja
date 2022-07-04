//iniciando a aplicação
const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

//definindo a porta
const porta = 1000;
app.listen(porta, () => console.log('executando. Porta', porta));

//criando conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_projeto',
    password : 'ma120103'
})

//micros serviços
//Seção de micros serviços de clientes
app.get("/clientes", (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) =>{
        res.json(results)
        console.log(results)
    })
})

app.put("/clientes", (req, res) => {
    connection.query('INSERT INTO clientes VALUES (id, \'' + req.body.nome + '\', \'' + req.body.cpf + '\', \'' + req.body.telefone + '\')', (err, results) =>{
        res.json("---Cliente adicionado com sucesso!---")
    })
});

app.post("/clientes", (req, res) => {
    connection.query('UPDATE clientes SET nome = \'' + req.body.nome + '\', cpf = \'' + req.body.cpf + '\', telefone = \'' + req.body.telefone + '\' WHERE id=' + req.body.id, (err, results) =>{
        res.json("---Cliente atualizado com sucesso!---")
    })
});


app.delete("/clientes", (req, res) => {
    connection.query('DELETE FROM clientes WHERE cpf = \'' + req.body.cpf + '\'', (err, results) =>{
        res.json("---Registro de cliente deletado com sucesso!---")
    })
});


//Seção de micros serviços de horarios
app.get("/agenda", (req, res) => {
    connection.query('SELECT * FROM agenda', (err, results) =>{
        res.json(results)
        console.log(results)
    })
})

app.put("/agenda", (req, res) => {
    connection.query('INSERT INTO agenda VALUES (id, \'' + req.body.data + '\', \'' + req.body.hora + '\', \'' + req.body.disponibilidade + '\')', (err, results) =>{
        res.json("---Horário adicionado com sucesso!---")
    })
})

app.post("/agenda", (req, res) => {
    connection.query('UPDATE agenda SET data = \'' + req.body.data + '\', hora = \'' + req.body.hora + '\', disponibilidade = \'' + req.body.disponibilidade + '\' WHERE id=' + req.body.id_agenda, (err, results) =>{
        res.json("---Horário atualizado com sucesso!---")
    })
});

app.delete("/agenda", (req, res) => {
    connection.query('DELETE FROM agenda WHERE id = \'' + req.body.id_agenda + '\'', (err, results) =>{
        res.json("---Horário deletado com sucesso!---")
    })
});