import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';


function App() {
  // state do input
  const [valueInputMessage, setvalueInputMessage] = useState('Message')
  const [valueInputUser, setvalueInputUser] = useState('User')


  // onChage USER and MESSAGE
  const onChangeInputUserValue = (element) => {

    setvalueInputUser(element.target.value)
  }

  const onChangeInputMessageValue = (element) => {
    
    setvalueInputMessage(element.target.value)
  }

  // onClick Button
  const onClickButton = () => {

    
  
    setvalueInputMessage("")
    setvalueInputUser("")
  }

// #####    HTML    #####
  return (
    <div className="App">
      <div className='container'>
        <input
          value={valueInputUser}
          onChange={onChangeInputUserValue}
        />
        <input
          value={valueInputMessage}
          onChange={onChangeInputMessageValue}
        />
        <button onClick={onClickButton}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
