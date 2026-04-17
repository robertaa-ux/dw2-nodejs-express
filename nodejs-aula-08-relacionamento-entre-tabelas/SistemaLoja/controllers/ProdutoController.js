//IMPORTANDO O EXPRESS COM ES6 MODULES (NOVA)
import express from "express"
import Produto from "../models/Produto.js";

//Metodo do Express usado para criar as rotas da aplicação
const router = express.Router()

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
   /* const produtos = [
        {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
    ]*/

        //ROTA PRODUTO
        Produto.findAll().then(produtos => {
            res.render("produtos", {
                produtos : produtos
            })
        }).catch(error => {
            console.log("Ocorreu um erro ao buscar os produtos." + error)
        });
})

//ROTA DE CADASTRO DO PRODUTO
router.post("/produtos/cadastrar", (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    Produto.create({
        nome : nome,
        preco : preco,
        categoria : categoria,
    }).then(() => {
        res.redirect("/produtos")
    }).catch(error => {
        console.log("Ocorreu um erro ao cadastrar o produto." + error)
    });
})

export default router;