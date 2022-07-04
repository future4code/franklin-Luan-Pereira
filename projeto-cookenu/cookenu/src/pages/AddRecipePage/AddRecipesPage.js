import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm";
import {BASE_URL} from "../../constants/urls"
import { Container, ImageLogo, ContainerLogo, Form, InputName, Input, ButtonAdd } from "./styled";

import LOGO from "../../assets/main-logo.png"

// Function to add new Recipes on BackEnd
function AddRecipesPage() {
    useProtectedPage()

// Use a Component to aux Form state
    const [form, onChange, clear] = useForm({title: "", description: "",picture: ""})
    console.log(form)

    const url = `${BASE_URL}/recipe`

    const createRecipe = () => {
        axios
            .post(url, form,{                                                       // form = body
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
        <Container>
            <ContainerLogo>
                <ImageLogo src={LOGO}/>
            </ContainerLogo>
            <div style={{backgroundColor: "black", width: "1px", minHeight: "40vh", borderLeftStyle: "faded"}} ></div>
            <Form>
                <InputName> Titulo </InputName>
                <Input
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"titulo"}
                        type="text"
                        required
                />
                <InputName> Descrição</InputName>
                <Input
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"titulo"}
                        type="text"
                        required
                />
                <InputName> Imagem </InputName>
                <Input
                        name={"picture"}
                        value={form.picture}
                        onChange={onChange}
                        label={"titulo"}
                        type="text"
                        required
                />
                <ButtonAdd onClick={createRecipe}>Adicionar</ButtonAdd>
            </Form>
        </Container>

    );
}

export default AddRecipesPage;