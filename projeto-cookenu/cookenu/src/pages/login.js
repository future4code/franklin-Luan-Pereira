import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function login() {
    return(
        <div>
            <img src="###"/>
            <input placeholder="email" />
            <input placeholder="senha" />
            <button>Login</button>
            <button>Cadastro</button>
        </div>

    );
}

export default login;