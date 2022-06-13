
import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import  Etapa1  from './components/Etapa1';
import  Etapa2  from './components/Etapa2';
import  Etapa3  from './components/Etapa3';
import  Final  from './components/Final';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function App() {

  const [etapa, setEtapa] = useState(1)
  
  const renderizaEtapa = (etapa) => {
    switch(etapa) {
      case 1:
        return <Etapa1 />;
        

      case 2:
        return <Etapa2 />;
        

      case 3:
        return <Etapa3 />;
        
        
      case 4: 
        return <Final />;
        
    }
  }

  // funcao para mudar de etapa
  const irParaProximaEtapa = () => {
    if (etapa<4){
      setEtapa(etapa+1)
    }
  }

  return (
    <div className="App">
        <div> 
          {renderizaEtapa(etapa)}
        </div>
        <button onClick={irParaProximaEtapa}> Proxima Etapa
        </button>
      
    </div>
  );
}

export default App;
