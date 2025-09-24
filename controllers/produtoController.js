module.exports = {
    formLogin : (req,res) => {
        res.render("login")
    },

   
    loginUsuario : (req,res) => {
        const {nome,preco} = req.body  
        const logado = userModel.login(nome,preco)

        if(!logado){
            return res.status(401).json({mensagem: "usuário ou senha inválidos"})
        }

        else{
            res.json({mensagem: "Login realizado"})
        }
    },

    //CRUD
    formCadastro: (req,res) => { 
        res.render("cadastro")
    },

    salvarUsuario: (req,res) => { //
        const {usuario,email,senha} =req.body
        userModel.salvar({usuario,email,senha})
        res.render("cadastroConfirmado")
    },

    listarUsuarios: (req,res) => { //função p mostrar todos os usuários
        const usuarios = userModel.listarTodos()
        res.json(usuarios)
        res.render("usuarios", { usuarios })
    },

    bsucarUsuario: (req,res) => { //função p buscar/mostrar um usuário
        const id = req.params.id //buscar o id vindo da url como parametro

        const usuario = userModel.buscarPorId(id) //guarda o usuario retornado, depois de buscar pelo model 

        if(!usuario){ //se não achar, avisa que deu erro
            return res.status(404).json({ mensagem:"Usuário não enocntrado"})
        }

        res.json(usuario) //se achar, devolve as informações via json
    },

    atualizaarUsuario: (req,res) => { //atualizar as infos do usuario
        const id = req.params.id 

        const {usuario,email,senha} = req.body //busca att para atualizar

        const usuarioAtualizado = userModel.atualizar(id, {usuario,email,senha}) //

        if(!usuarioAtualizado){
            return res.status(404).json({mensagem: "Usuário não encontrado"})
        }

        res.json({mensagem: "Usuário foi atualizado"}) //se atualizar, manda uma mensagem dizendo que deu certo
    },

    deletarUsuario: (req,res) => { //deletar um usuario
    const id = req.params.id

    const deletado = userModel.deletar(id) //

    if (!deletado){ //
        return res.status(404).json({menagem: "Usuário não encontrado"})
 }
        res.json({mensagem:"Usuário foi deletado"}) //
}

}