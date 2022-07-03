import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm";
import {BASE_URL} from "../../constants/urls"


function AddRecipesPage() {
    useProtectedPage()

    const [form, onChange, clear] = useForm({title: "", description: "",picture: ""})
    console.log(form)

    const url = `${BASE_URL}/recipe`

    const createRecipe = () => {
        axios
            .post(url, form,{      // form = body
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) =>{
                alert(response.data.message)
                clear()
            })
            .catch((error) => {
                alert(error.responde.message)
            })

    }


    return(
        <div>
            <h1> Adicionar Nova Receita </h1>
            <p> titulo </p>
            <input
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"titulo"}
                    type="text"
                    required
            />
            <p> descrição</p>
            <input
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    label={"titulo"}
                    type="text"
                    required
            />
            <p> imagem </p>
            <input
                    name={"picture"}
                    value={form.picture}
                    onChange={onChange}
                    label={"titulo"}
                    type="text"
                    required
            />
            <button onClick={createRecipe}>Adicionar</button>
        </div>

    );
}

export default AddRecipesPage;