const db = require("../data/db.json")

let listaProdutos = db.usuarios 

module.exports = {
  
    salvar : ({ id, nome, descricao, preco, quantidade, categoria}) => { 
        const novoProduto = {
          id: listaProdutos.length + 1,
          nome,
          descricao,
          preco,
          quantidade,
          categoria
        }

        listaProdutos.push(novoProduto)
        console.log("Novo produto salvo", novoProduto)
        return novoProduto
    },

    listarTodos: () => {
       return listaProdutos
    },

    buscarPorId: (id) => {
       return listaProdutos.find((produto) => produto.id == id || null) 
    },

    //
    atualizar: (id, {nome, descricao, preco, quantidade, categoria}) => { 
        const index = listaProdutos.findIndex((produtos) => produtos.id == id)
        
        if(index === -1) return null 

        listaProdutos[index] = {
        ...listaProdutos[index],
        listaProdutos: produtos || listaProdutos [index].produtos,
        listaProdutos: nome || listaProdutos [index].nome,
        listaProdutos: descricao || listaProdutos [index].descricao,
        listaProdutos: preco || listaProdutos [index].preco,
        listaProdutos: quantidade || listaProdutos [index].quantidade,
        listaProdutos: categoria || listaProdutos [index].categoria,
        }
    
        return listaProdutos[index] 
    },

    deletar: (id) => {
        const index = listaProdutos.findIndex((produtos) => produtos.id == id)

        if (index === -1) return false
        listaProdutos.splice(index, 1) 
        return true
    },
}