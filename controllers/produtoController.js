const path = require("path");
const produtoModel = require("../models/produtoModel");

module.exports = {
  formCadastro: (req, res) => {
    res.render("produtos/cadastroProdutos", { 
      titulo: "Cadastro de Produtos"
    });
  },

  salvarProduto: (req, res) => {
    const { id, nome, descricao, preco, quantidade, categoria } = req.body;
    const produtoNovo = produtoModel.salvar({ id, nome, descricao, preco, quantidade, categoria });

    res.render("produtos/confirmacaoProdutos", {
      titulo: "Cadastro confirmado",
      tipo: "cadastro",
      produto: produtoNovo
    });
  },

  listarProdutos: (req, res) => {
    const produtos = produtoModel.listarTodos();
    res.render("produtos/listagemProdutos", { 
      produtos, 
      titulo: "Lista de Produtos" 
    });
  },
  
  buscarProduto: (req, res) => {
    const id = req.params.id;
    const produto = produtoModel.buscarPorId(id);
    
    if (!produto) {
      return res.status(404).render("produtos/erroProdutos", {
        titulo: "Erro",
        mensagem: "Produto não encontrado"
      });
    }

    res.render("produtos/editarProdutos", {
      titulo: "Editar Produto",
      produto
    });
  },

  atualizarProduto: (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, quantidade, categoria } = req.body;

    const produtoAtualizado = produtoModel.atualizar(id, {
      nome,
      descricao,
      preco,
      quantidade,
      categoria
    });

    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroProdutos", {
        titulo: "Erro",
        mensagem: "Produto não encontrado"
      });
    }

    res.render("produtos/confirmacaoProdutos", {
      titulo: "Edição Confirmada",
      tipo: "edicao",
      produto: produtoAtualizado
    });
  },

  deletarProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtoModel.deletar(id);

    if (!deletado) {
      return res.status(404).render("produtos/erroProdutos", {
        titulo: "Erro",
        mensagem: "Produto não encontrado"
      });
    }

    res.render("produtos/confirmacaoProdutos", {
      titulo: "Produto Excluído",
      tipo: "deletar",
      deletado
    });
  },
};
