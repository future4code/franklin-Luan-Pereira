import React from "react";

function SignUpPage() {
  return (
    <div >
        <h1>Meu Login Labex</h1>
        <form>
            <div className="input">
                <p>Nome Completo</p>
                <input/>
            </div>
            <div className="input">
                <p>email</p>
                <input/>
            </div>
            <div className="input">
                <p>senha</p>
                <input/>
            </div>
            <button>Cadastrar</button>
        </form>
        <button>meu Login</button>
    </div>
  );
}

export default SignUpPage;