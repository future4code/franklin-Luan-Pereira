import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"


function AddRecipesPage() {
    useProtectedPage()

    return(
        <div>
            <h1> Adicionar Nova Receita </h1>
            <input placeholder="titulo" />
            <input placeholder="descricao" />
            <input placeholder="foto" />
            <button>Adicionar</button>
        </div>

    );
}

export default AddRecipesPage;