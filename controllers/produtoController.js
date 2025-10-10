const path = require("path");

const db = require('../data/db.json');

const produtoModel = require("../models/produtoModel");

module.exports = {
  formCadastro: (req, res) => {
    res.render("produtos/cadastroProdutos", { titulo: "Cadastro de Produtos"});
  },

    salvarProduto: (req, res) => {
    const { id, nome, descricao, preco, quantidade, categoria } = req.body;
    produtoNovo = produtoModel.salvar ({ id, nome, descricao, preco, quantidade, categoria })
    res.render("produtos/confirmacaoProdutos", { 
    tipo: "cadastro",
    titulo: "Cadastro confirmado",
    produtoNovo
    }
    );
  },

  listarProdutos: (req, res) => {
    const produtos = produtoModel.listarTodos();
    res.json(produtos);
   },
   buscarProduto: (req, res) => {
    const id = req.params.id;
    const produto = produtoModel.buscarPorId(id);
     if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    res.json(produto);
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
      return res.status(404).json({
        produtoAtualizado: produtoAtualizado,
        mensagem: "Produto não encontrado",
      });
    }
    res.json({ mensagem: "Produto foi atualizado" });
  },
 
  deletarProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtoModel.deletar(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    res.json({ deletado: deletado, mensagem: "Produto foi deletado" });
  },
};