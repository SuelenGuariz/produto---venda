// Usando o método simples para adicionar um título
const tituloSimples = document.getElementById('titulo');
tituloSimples.innerText = 'Bem-vindo à Minha Loja de Produtos';

// Usando o método complexo para adicionar um produto
const produto = document.getElementById('produto');
const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto Incrível';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição do Produto: Este é o produto mais incrível que você já viu. Não perca a oportunidade de tê-lo.';

const precoProduto = document.getElementById('preco');
precoProduto.innerText = '100,00';
