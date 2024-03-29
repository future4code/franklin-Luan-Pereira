import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import sendIcon from "./img/send.png"
import labenuIcon from "./img/labenu.png"
import phoneIcon from "./img/phone.png" 


function App() {
  const MsgBaloon = styled.div`
    border-radius: 20px;
    margin: 10px;
    padding: 10px 40px 10px 15px;
    background-color: #ffffff;
    width: max-content;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
  `;

  const MsgBaloonMe = styled.div`
    border-radius: 20px;
    margin: 10px 10px 10px auto;
    padding: 10px 40px 10px 15px;
    background-color: #90ee90;
    width: max-content;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
  `;

  const MsgBaloonName = styled.span`
    color: #7a5c61;
    font-weight: bold;
    font-size: 14px;
    text-transform: capitalize;
  `;

  const MsgBaloonText = styled.span`
    word-break: break-all;
    max-width: 400px;
    display: block;
    font-size: 18px;
  `;

  // state do input
  const [valueInputMessage, setvalueInputMessage] = useState("");
  const [valueInputUser, setvalueInputUser] = useState("");

  const [onScreenMessage, setonScreenMessage] = useState([]); // That's an Array of Objects

  // onChage USER and MESSAGE
  const onChangeInputUserValue = (element) => {
    setvalueInputUser(element.target.value);
  };

  const onChangeInputMessageValue = (element) => {
    setvalueInputMessage(element.target.value);
  };

  // onClick Button
  const onClickSendMessage = () => {
    const newMessage = {
      user: valueInputUser,
      message: valueInputMessage,
    };

    // We have to copy the array to avoid bug
    const messageCopy = [...onScreenMessage, newMessage];

    setonScreenMessage(messageCopy);

    // Clear Input
    setvalueInputUser("");
    setvalueInputMessage("");
  };

  // Mapping to see all the Object and return each one to the Component(messageComponent)
  const messageComponent = onScreenMessage.map((message) => {
    if (message.user.toLowerCase() === "eu") {
      return (
        <MsgBaloonMe>
          <MsgBaloonName>Você</MsgBaloonName>
          <MsgBaloonText>{message.message}</MsgBaloonText>
        </MsgBaloonMe>
      );
    } else {
      return (
        <MsgBaloon>
          <MsgBaloonName>{message.user}</MsgBaloonName>
          <MsgBaloonText>{message.message}</MsgBaloonText>
        </MsgBaloon>
      );
    }
  });

  // #####    HTML    #####
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img className="Labenu" src={labenuIcon}/>
          <div className = "GroupName">
            <p>WhatsLab DESENVOLVE LABENU</p>
            <h6>+55 (21) 969503434, Labenu, ...</h6>
          </div>
        </div>
        <div>{messageComponent}</div>
        <section className="interacaoUser">
          <input
            className="inputUser"
            value={valueInputUser}
            onChange={onChangeInputUserValue}
            placeholder={"Usuário"}
          />
          <input
            className="inputMessage"
            value={valueInputMessage}
            onChange={onChangeInputMessageValue}
            placeholder={"Mensagem"}
          />
          <button className="btnForward" onClick={onClickSendMessage}>
            <img src={sendIcon}/>
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
