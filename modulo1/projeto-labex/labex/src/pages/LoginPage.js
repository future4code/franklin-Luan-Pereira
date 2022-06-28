import React from "react";
import { useNavigate } from 'react-router-dom';
import { goToApplicationFormPage } from "../routes/cordination";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Meu Login Labex</h1>
        <form>
            <div className="input">
                <p>email</p>
                <input/>
            </div>
            <div className="input">
                <p>senha</p>
                <input/>
            </div>
            <button>Login</button>
        </form>
        <button onClick={ () => goToApplicationFormPage(navigate) }>Criar Conta</button>

    </div>
  );
}

export default LoginPage;