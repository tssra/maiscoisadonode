const express = require("express") //trazendo/importanto o pacote para o arquivo

const roteador = express.Router() //onde vai gerenciar as rotas do usuário

const useController = require("../controllers/userController") //importando tudo que tem no arquivo de controller do usuário

//LOGIN
roteador.get("/login", userController.formLogin) //nesse end as pessoas conseguem pegar infos
roteador.post("/login", userController.loginUsuario) //rota para enviar dados na pág de login

module.exports = roteador //criando a exportação desse arquivo 