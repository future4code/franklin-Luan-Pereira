import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"

function RecipeListPage() {
    useProtectedPage()
    
    return(
        <div>
            <img src=""/>
            <h2>#### NOME DA RECEITA ####</h2>
        </div>

    );
}

export default RecipeListPage;