const express = require("express") 

const roteador = express.Router() 

const produtoController = require("../controllers/produtoController") 

roteador.get("/cadastrar", produtoController.formCadastro) 

roteador.post("/cadastrar", produtoController.salvarProduto) 

roteador.get("/", produtoController.listarProdutos) 

roteador.get("/:id", produtoController.buscarProduto) 


roteador.put("/:id", produtoController.atualizarProduto)

//D = deletar (delete) um usuário
roteador.delete("/:id", produtoController.deletarProduto)

module.exports = roteador 