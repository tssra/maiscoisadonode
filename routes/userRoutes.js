const express = require("express") //trazendo/importanto o pacote para o arquivo

const roteador = express.Router() //onde vai gerenciar as rotas do usuário

const useController = require("../controllers/userController") //importando tudo que tem no arquivo de controller do usuário
const userController = require("../controllers/userController")

//LOGIN
roteador.get("/login", userController.formLogin) //nesse end as pessoas conseguem pegar infos
roteador.post("/login", userController.loginUsuario) //rota para enviar dados na pág de login

//CRUD

//C = Criar
roteador.get("/cadastrar", userController.formCadastro) //rota para solicitar a pág de cadastro

roteador.post("/cadastrar", userController.salvarUsuario) // rota para enviar dados de cadastro

//R = Ler usuários

roteador.get("/", userController.listarUsuarios) //retorna as infos de todos os usuários

roteador.get("/:id", userController.buscarUsuario) //retorna as infosde um usuário apenas

//U = atualizar (update) um usuário
roteador.put("/:id", userController.atualizarUsuario)

//D = deletar (delete) um usuário
roteador.delete("/:id", userController.deletarUsuario)


module.exports = roteador //criando a exportação desse arquivo 

