import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage"


function RecipeDetailsPage() {
    useProtectedPage()
    const params = useParams()      //to get id at URL
    // console.log(params)              //show param (id)

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
        <div>
            <br/>
            <div>
                <img src={recipe && recipe.image} />
                <h1> {recipe && recipe.title} </h1>
                <p> {recipe && recipe.description} </p>
            </div>
        </div>

    );
}

export default RecipeDetailsPage;