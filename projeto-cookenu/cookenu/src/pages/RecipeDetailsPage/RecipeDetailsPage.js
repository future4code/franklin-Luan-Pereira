import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"


function RecipeDetailsPage() {
    useProtectedPage()

    return(
        <div>
            <img src="###" />
            <h1> ### NOME DA RECEITA ###</h1>
            <p> Descricao </p>
        </div>

    );
}

export default RecipeDetailsPage;