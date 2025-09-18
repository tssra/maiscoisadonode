const path = require ("path") //importa o módulo de path pra saber as pastas r arquivos do projeto

const userModel = require("../models/userModel") //importa tudo que tem no model

module.exports = { //responde a requisição mostrando a visualização da tela de login
    formLogin : (req,res) => {
        res.render("login")
    },

    //função para levar os dados preenchidos para o model realizar o login
    loginUsuario : (req,res) => {
        const {email, senha} = req.body  //cria um objeto com as informações do body, retirados dos inputs
        const logado = userModel.login(email,senha) //manda as informações do objeto para o model

        if(!logado){//se não conseguir logar, manda uma mensagem de erro
            return res.status(401).json({mensagem: "usuário ou senha inválidos"})
        }

        else{//manda uma mensagem de confirmação
            res.json({mensagem: "Login realizado"})
        }
    }
}