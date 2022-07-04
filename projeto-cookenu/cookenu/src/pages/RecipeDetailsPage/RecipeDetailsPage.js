import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { Container, ContainerDescription, ContainerImage, Image } from "./styled";

//Function to show Recipes Details
function RecipeDetailsPage() {
    useProtectedPage()
    const params = useParams()                                                   //to get id at URL
    // console.log(params)                                                         //show param (id)

    const [recipe, setRecipe] = useState({})
    const url = `${BASE_URL}/recipe/${params.id}`

    useEffect(() => {
        axios
            .get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
            })
            .then((response) => {
                setRecipe(response.data[0])
                console.log(response.data[0])
            })
            .catch((error) => {
                console.log(error)
                alert("Ocorreu um erro, tente novamente")
            })
    }, [url])

    // Container of Recipe Details
    const recipeDetails = () => {
        return(
            <div>
                <img src={recipe.image} />
                <h1> {recipe.title} </h1>
                <p> {recipe.description} </p>
            </div>
        )
    }

    return(
        <Container>
            <div>
                <ContainerImage>
                    <Image src={recipe && recipe.image} />
                </ContainerImage>
                <ContainerDescription>
                    <h1> {recipe && recipe.title} </h1>
                    <p> {recipe && recipe.description} </p>
                </ContainerDescription>
            </div>
        </Container>

    );
}

export default RecipeDetailsPage;