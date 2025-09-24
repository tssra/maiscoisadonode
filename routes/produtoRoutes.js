//integrar no index




//CRUD

//C = Criar
roteador.get("/cadastrar", userController.formCadastro) //rota para solicitar a pág de cadastro

roteador.post("/cadastrar", userController.salvarProduto) // rota para enviar dados de cadastro

//R = Ler usuários

roteador.get("/", userController.listarProdutos) //retorna as infos de todos os usuários

roteador.get("/:id", userController.buscarProdutos) //retorna as infosde um usuário apenas

//U = atualizar (update) um usuário
roteador.put("/:id", userController.atualizarProdutos)

//D = deletar (delete) um usuário
roteador.delete("/:id", userController.deletarProdutos)
