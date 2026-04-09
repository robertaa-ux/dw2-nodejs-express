// O ARQUIVO INDEX.JS É O ARQUIVO PRINCIPAL DO PROJETO

// Importando o módulo do Express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL DO SITE("/")
app.get("/", function (req, res) {
  // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
  res.render("index");
});

// CRIANDO A ROTA DE PERFIL DO USUARIO
app.get("/perfil", function (req, res) {
//   res.send("<h2>Bem vindo ao seu perfil!</h2>");
     res.render("perfil") 
});
app.get("/clientes", function (req, res) {
//   res.send("<h2>Bem vindo ao seu perfil!</h2>");
     res.render("clientes") 
});

// CRIANDO ROTA CLIENTES
app.get("/clientes", function (req, res) {
  res.send("<h2>Bem-vindo a rota clientes!</h2>");
});

// CRIANDO ROTA PRODUTOS
/*app.get("/produtos", function (req, res) {
  res.send("<h2>Bem-vindo a rota produtos!</h2>");
});*/
app.get("/produtos",(req,res)=>{
     const listaProdutos = ['Computador','Celular','tablet','Notebook'];
     res.render("produtos",{

          //Enviando variaveis para pagina html
          listaProdutos : listaProdutos
     })
})


// rota de produtos com parametro
app.get("/produtos/:produto",  (req, res) => {
     const produto = req.params.produto;
     res.render("detalhesProduto",{
          produto: produto
     }) ;
});

// CRIANDO ROTA SERVIÇOS
app.get("/servicos", function (req, res) {

  //ARRAY DE OBJETOS
  const servicos = [
    {servico: "Desenvolvimento de Websites", descricao: "Criação de sites com Node.js e integração de banco de dados", preco: 3500},
    {servico: "Auditoria de UX/UI", descricao: "Avaliação da usabilidade de sistemas com sugestões de melhoria", preco: 1800},
    {servico: "Infraestrutura em Nuvem", descricao: "Configiração de servidores e hospedagem de aplicações", preco: 2900},
    {servico: "Chatbot com IA", desricao: "Desenvolvimento de chatbot para atendimento automatico", preco: 2750},
  ]
  res.send("servicos", {
    //enviando o array de objetos para a pagina
    servicos: servicos
  });
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(
  port,
  /*function*/ (error) => {
    if (error) {
      console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else {
      console.log(
        `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
      );
    }
  },
);
