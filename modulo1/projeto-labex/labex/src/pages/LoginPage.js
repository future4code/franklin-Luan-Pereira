import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/cordination";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };


  return (
    <div>
        <h1>Meu Login Labex</h1>
        <div>
            <div className="input">
                <p>email</p>
                <input value={email} onChange={handleInputEmail} />
            </div>
            <div className="input">
                <p>senha</p>
                <input value={password} onChange={handleInputPassword }/>
            </div>
            <button onClick={onSubmitLogin}>Login</button>
        </div>
        <button onClick={ () => goToApplicationFormPage(navigate) }>Criar Conta</button>
    </div>
  );
};

export default LoginPage;