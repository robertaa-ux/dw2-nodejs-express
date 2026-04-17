// Importando o Express
//const express = require("express")
import express from "express";
//importando o controller do Cliente (onde estão as rotas)
//Cliente Controller
import ClienteController from "./controllers/ClienteController.js"
//Pedido Controller
import PedidoController from "./controllers/PedidoController.js"
//Produto Controller
import ProdutoController from "./controllers/ProdutoController.js"
//Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js"
// Importando Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
// Importando asssociações
import associations from "./config/associations.js";

// Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`)
});
//Criando o banco de dados (somente se ainda não existir)
connection.query("CREATE DATABASE IF NOT EXISTS loja_relacional;").then(() =>{
    console.log("Obanco de dados está criado!");
}).catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
});

// Invocando a função que cria associações
associations();

// Sincronizando os Models de Cliente e Pedido
Promise.all( // Transformando as funções em promessas
    [
        Cliente.sync({force : false}),
        Pedido.sync({force : false})

    ]
).then(() => {
    console.log("Entidades criadas e relacionadas com sucesso!")
}).catch(error => {
    console.log("Ocorreu um erro ao sincronizar os Models." + error);
})

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
//Configirando o Express para aceitar dados vindo de formulários
app.use(express.urlencoded({extend: false}))
//ATIVANDO O USO DAS ROTAS
app.use("/", ClienteController)
app.use("/", PedidoController)
app.use("/", ProdutoController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})





// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})