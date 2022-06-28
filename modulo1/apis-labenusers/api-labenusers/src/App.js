import './App.css';
import React, {useState} from 'react';
import ListaUsuario from './components/ListaUsuario';
import CadastroUsuario from './components/CadastroUsuario';

function App() {
  
  const [telas,setTelas] = useState(false)

  const renderizaTela = (telas) => {
    switch(telas) {
      case false:
        return <CadastroUsuario />;
      
      case true:
        return <ListaUsuario />;
    }
  }

  const trocarTela = () => {
    setTelas(!telas)
  }
  
  return (
    <div className="App">
      <div>
        {renderizaTela(telas)}
      </div>
      <button onClick={trocarTela}>
        Trocar de Tela
      </button>
    </div>
  );
}

export default App;
