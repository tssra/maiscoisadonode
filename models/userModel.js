const db = require("../data/db.json")

let listaUsuarios = db.usuarios //variável pra armazenar os usuários vindos do db

module.exports = {
    //função para validar o login
    login : (usuario,senha) => {
        let logado = listaUsuarios.find((user) => {user.email === usuario && user.senha === senha}) || null //busca na lista de usuarios, se tem aquele usuario com as infomações que ele me passou

        return logado 
    }
}