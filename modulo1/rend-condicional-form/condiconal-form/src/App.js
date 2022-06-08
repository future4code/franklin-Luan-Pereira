
import React, {useState} from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final } from './components/Final';

function App() {
  const [state, setState] = useState()

  return (
    <div className="App">
        <div>  
          <Etapa1/>
          <button>Proxima Etapa</button>
        </div>
      
    </div>
  );
}

export default App;
