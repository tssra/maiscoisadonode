const db = require("../data/db.json")

let listaUsuarios = db.usuarios //variável pra armazenar os usuários vindos do db

module.exports = {
    //função para validar o login
    login : (email,senha) => {
        let logado = listaUsuarios.find((user) => user.email == email && user.senha == senha) || null //busca na lista de usuarios, se tem aquele usuario com as infomações que ele me passou

        return logado 
    },

    //CRUD
    salvar : ({usuario,email,senha, tipo}) => { //função para cadastrar um novo usuario
        const novoUsuario = {
          id: listaUsuarios.length + 1,
          usuario,
          email,
          senha, 
          tipo
        }

        listaUsuarios.push(novoUsuario)
        console.log("Novo usuário salvo", novoUsuario)
        return novoUsuario
    },

    listarTodos: () => { //busca os usuarios no banco
       return listaUsuarios
    },

    buscarPorId: (id) => { //busca um usuario especifico do banco (id)
       return listaUsuarios.find((user) => user.id == id || null) 
    },

    //
    atualizar: (id, {usuario,email,senha}) => { //busca na lista de usuarios um id especifico, se achar, pega o index dele e guarda na varivael index
        const index = listaUsuarios.findIndex((user) => user.id == id)
        
        if(index === -1) return null //se não achar, significa que um usuário com aquele index nao xiste

        listaUsuarios[index] = { //se achar um usuario, substitui as infos que estavam com nele, pelas novas enviadas
        ...listaUsuarios[index],
        usuario: usuario || listaUsuarios [index].usuario,
        email: email || listaUsuarios [index].email,
        senha: senha || listaUsuarios [index].senha
        }
    
        return listaUsuarios[index] //retorna o usuario atualizado
    },

    deletar: (id) => {
        const index = listaUsuarios.findIndex((user) => user.id == id)

        if (index === -1) return false
        listaUsuarios.splice(index, 1) 
        return true
    },
}