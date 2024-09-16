import React from 'react';
import Produto from './Produto';

function App() {
  const produto = {
    nome: 'Produto Exemplo',
    preco: 199.99,
    descricao: 'Desc'
  };

  return (
    <div className="App">
      <Produto produto={produto} />
    </div>
  );
}

export default App;
