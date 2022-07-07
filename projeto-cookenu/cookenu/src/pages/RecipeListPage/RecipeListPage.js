import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import { goToAddRecipes, goToRecipeDetails } from "../../routes/coordinator"


import { IntroContainer, IntroDiv, IntroP, IntroH1, IntroButton,ContainerH2, CardImage, CardTitle, CardRecipe, RecipeCardList } from "./styled"
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

        <div style={{width:"90vw", margin: "150px auto"} }>
            <div className="Introducao">
                <IntroContainer>
                    <IntroDiv>
                        <IntroP> Bem vindo a nossa Lista de Receitas</IntroP>
                        <IntroH1> É Tudo Sobre Bom </IntroH1>
                        <IntroH1>Cheiro & Sabor</IntroH1>
                        <IntroP> Relaxa! Sua única preocupação vai ser qual prato escolher!</IntroP>
                        <IntroP>Agora cai pro abraço. </IntroP>
                        <IntroButton onClick={
                        () => goToAddRecipes(navigate)
                        }>
                        Adicionar Receitas
                        </IntroButton>
                    </IntroDiv>
                </IntroContainer>
                <div>
                    <ContainerH2> Temos Maravilhosos tipos de Receitas:</ContainerH2>
                    <div>
                        <div style={{display: "flex", justifyContent: "center", gap: "30px"}}>
                            <CardRecipeCategory categoryIcon={BreakfastICON} title={"Breakfast"}/>
                            <CardRecipeCategory categoryIcon={DrinkICON} title={"Sucos"}/>
                            <CardRecipeCategory categoryIcon={FruitICON} title={"Frutas"}/>
                            <CardRecipeCategory categoryIcon={PastaICON} title={"Massa"}/>
                            <CardRecipeCategory categoryIcon={SweetICON} title={"Doces"}/>
                        </div>
                        <div style={{width: "90vw", height: "1px", margin: "120px 0", background: "black"}} />
                    </div>
                </div>
            </div>
            <RecipeCardList>
                {recipeList}
            </RecipeCardList>
        </div>

    );
}

export default RecipeListPage;