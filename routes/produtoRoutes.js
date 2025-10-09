const express = require("express") 

const roteador = express.Router() 

const produtoController = require("../controllers/produtoController") 

//CRUD

//C = Criar
roteador.get("/cadastrar", produtoController.formCadastro) //rota para solicitar a pág de cadastro

roteador.post("/cadastrar", produtoController.salvarProduto) // rota para enviar dados de cadastro

//R = Ler usuários

roteador.get("/", produtoController.listarProdutos) //retorna as infos de todos os usuários

roteador.get("/:id", produtoController.buscarProduto) //retorna as infos de um usuário apenas

//U = atualizar (update) um usuário
roteador.put("/:id", produtoController.atualizarProduto)

//D = deletar (delete) um usuário
roteador.delete("/:id", produtoController.deletarProduto)




module.exports = roteador 