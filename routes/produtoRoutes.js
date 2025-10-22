const express = require("express") 

const roteador = express.Router() 

const produtoController = require("../controllers/produtoController") 

//C
roteador.get("/cadastrar", produtoController.formCadastro) 

roteador.post("/cadastrar", produtoController.salvarProduto) 

//R
roteador.get("/", produtoController.listarProdutos) 

roteador.get("/:id", produtoController.buscarProduto) 

//U
roteador.post("/:id", produtoController.atualizarProduto)

roteador.get("/:id", produtoController.deletarProduto)

module.exports = roteador 