import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';


function App() {
  // state do input
  const [valueInputMessage, setvalueInputMessage] = useState('')
  const [valueInputUser, setvalueInputUser] = useState('')

  const [onScreenMessage, setonScreenMessage] = useState(
  [ 
    {
        // User: "",
        // Message: "",
    },                                          // That's an Array of Objects
    {
        // User: "",
        // Message: "",
    } 
  ]
);


  // onChage USER and MESSAGE
  const onChangeInputUserValue = (element) => {

    setvalueInputUser(element.target.value)
  }

  const onChangeInputMessageValue = (element) => {
    
    setvalueInputMessage(element.target.value)
  }

       // onClick Button
  const onClickSendMessage = () => {
    const newMessage = {
      user: valueInputUser + ":",
      message: valueInputMessage,
    };

       // We have to copy the array to avoid bug
    const messageCopy = [...onScreenMessage,newMessage];

    setonScreenMessage(messageCopy);
      
      // Clear Input
    setvalueInputUser("");
    setvalueInputMessage("");
  }

  // Mapping to see all the Object and return each one to the Component(messageComponent)
    const messageComponent = onScreenMessage.map((message) => {
      return(
        <div>
          <p>{message.user}</p>
          <p>{message.message}</p>
        </div>
      );
    });

  

// #####    HTML    #####
  return (
    <div className="App">
      <div className='container'>
        <div>
          {messageComponent}
        </div>
        <input
          value={valueInputUser}
          onChange={onChangeInputUserValue}
          placeholder={"User..."}
        />
        <input
          value={valueInputMessage}
          onChange={onChangeInputMessageValue}
          placeholder={"Message..."}
        />
        <button onClick={onClickSendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
