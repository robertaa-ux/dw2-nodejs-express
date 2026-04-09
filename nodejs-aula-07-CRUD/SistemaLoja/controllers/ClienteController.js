//FORMA DE IMP0ORTAR COM O JS ANTIGO
//const express = require("express")

//IMPORTANDO O EXPRESS COM ES6 MODULES (NOVA)
import express from "express"
//Metodo do Express usado para criar as rotas da aplicação
const router = express.Router()

//Importando o Model do cliente
import Cliente from "../models/Cliente.js"

// ROTA CLIENTES
router.get("/clientes",function(req,res){
  /*  const clientes = [
        {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
        {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
        {nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
        {nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}
    ]*/

        //ROTA CLIENTES
        //router.get("/clientes", function(req,res))
        //AQUYI IREMOS CHAMAR O MODEL "CLIENTE" INVOCAR O MÉODO FINDALL() PARA BUSCAR TODOD OS REGISTROS DA TABELA CLIENTE
        Cliente.findAll().then(clientes => {
            res.render("clientes", {
                clientes : clientes
            })
        }).catch(error => {
            console.log("Ocorreu um erro ao buscar os clientes." + error)
        });
    
})
//ROTA DE CADASTRO DO CLIENTE (subrota/cadastrar)
router.post("/clientes/cadastrar", (req, res) => {
    //CRIANDO AS VARIAVEIS QUE IRÃO ARMAZENAR OS DADOS VINDO DO FORMULÁRIO
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    //Enviando os dados para o banco
    //O método cliente cadastra informações no banco
    Cliente.create({
        nome : nome,
        cpf : cpf,
        endereco: endereco,
        //Se a promessa ser bem sucedidad o usuario sera direcionado para a pagina de clientes
    }).then(() => {
        res.redirect("/clientes")
        //FLHA NA PROMESSA        
    }).catch(error => {
        console.log("Ocorreu u erro ao cadastrar o cliente." + error)
    });
})

//Exportando o módulo para usa-lo em outro arquivo
export default router;