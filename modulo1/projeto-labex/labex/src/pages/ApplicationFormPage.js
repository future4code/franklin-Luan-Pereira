import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/cordination";

function ApplicationFormPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Meu Login Labex</h1>
      <form>
        <div className="input">
          <p>Nome Completo</p>
          <input />
        </div>
        <div className="input">
          <p>email</p>
          <input />
        </div>
        <div className="input">
          <p>senha</p>
          <input />
        </div>
        <button>Cadastrar</button>
      </form>
      <button onClick={ () => goToLoginPage(navigate)}>meu Login</button>
    </div>
  );
}

export default ApplicationFormPage;