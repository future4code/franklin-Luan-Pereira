import React from "react";

function LoginPage() {
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
        <button>Criar Conta</button>

    </div>
  );
}

export default LoginPage;