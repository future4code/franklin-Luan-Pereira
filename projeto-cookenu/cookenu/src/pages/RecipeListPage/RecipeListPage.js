import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import { goToAddRecipes, goToRecipeDetails } from "../../routes/coordinator"


import { CardImage, CardTitle, CardRecipe, RecipeCardList } from "./styled"
import {CardRecipeCategory} from "./CardRecipeCategory"
import BreakfastICON from "../../assets/CardCategory/breakfast.png"
import DrinkICON from "../../assets/CardCategory/drink.png"
import FruitICON from "../../assets/CardCategory/fruit.png"
import PastaICON from "../../assets/CardCategory/pasta.png"
import SweetICON from "../../assets/CardCategory/sweet.png"

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
            <div className="Introducao">
                <div>
                    <div>
                        <p> Bem vindo a nossa Lista de Receitas</p>
                        <h1> É Tudo Sobre Bom </h1>
                        <h1>Cheiro & Sabor</h1>
                        <p> Relaxa! Sua única preocupação vai ser qual prato escolher! Agora cai pro abraço. </p>
                        <button>
                            Receitas
                        </button>
                    </div>
                    <img src={""} />
                </div>
                <div>
                    <h2> Temos Maravilhosos tipos de Receitas</h2>
                    <div>
                        <div style={{display: "flex", justifyContent: "center", gap: "30px"}}>
                            <CardRecipeCategory categoryIcon={BreakfastICON} title={"Breakfast"}/>
                            <CardRecipeCategory categoryIcon={DrinkICON} title={"Sucos"}/>
                            <CardRecipeCategory categoryIcon={FruitICON} title={"Frutas"}/>
                            <CardRecipeCategory categoryIcon={PastaICON} title={"Massa"}/>
                            <CardRecipeCategory categoryIcon={SweetICON} title={"Doces"}/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={
                () => goToAddRecipes(navigate)
            }>
            Adicionar Receita
            </button>
            <RecipeCardList>
                {recipeList}
            </RecipeCardList>
        </div>

    );
}

export default RecipeListPage;