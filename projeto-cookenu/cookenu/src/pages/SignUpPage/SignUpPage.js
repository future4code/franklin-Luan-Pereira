import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";


function SignUpPage() {
    useUnprotectedPage()
    return(
        <div>
            <img src="###"/>
            <input placeholder="nome" />
            <input placeholder="email" />
            <input placeholder="senha" />
            <button>Fazer Cadastro</button>
        </div>

    );
}

export default SignUpPage;