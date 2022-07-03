import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import { goToAddRecipes, goToRecipeDetails } from "../../routes/coordinator"

import { CardImage, CardTitle, CardRecipe, RecipeCardList } from "./styled"

function RecipeListPage() {
    useProtectedPage()

    const navigate = useNavigate()
    const [recipe, setRecipe] = useState([])

    const url = `${BASE_URL}/recipe/feed`

    useEffect(() => {
        axios
            .get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
            })
            .then((response) => {
                setRecipe(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert("Ocorreu um erro, tente novamente")
            })
    }, [url])

    const onClickCard = (id) => {
        goToRecipeDetails(navigate,id)
    }

    const recipeList = recipe.map((recipe) => {
        return (
            <CardRecipe
            key={recipe.recipe_id}
            onClick={() => onClickCard(recipe.recipe_id)}
            >
                <CardTitle>{recipe.title}</CardTitle>
                <CardImage src={recipe.image} />
            </CardRecipe>
        )
    })

    return(
        <div style={{width:"90vw", margin: "0 auto"} }>
            <div>

                <h1> Lista de Receitas </h1>
                <button onClick={
                    () => goToAddRecipes(navigate)
                }>
                Adicionar Receita
                </button>
            </div>
            <RecipeCardList>
                {recipeList}
            </RecipeCardList>
        </div>

    );
}

export default RecipeListPage;