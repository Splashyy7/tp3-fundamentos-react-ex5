import React from 'react';

const Produto = (propriedade) => {
  return (
    <div>
      <h1>{propriedade.produto.nome}</h1>
      <p>Preço: R${propriedade.produto.preco}</p>
      <p>Descrição: {propriedade.produto.descricao}</p>
    </div>
  );
};

export default Produto;
