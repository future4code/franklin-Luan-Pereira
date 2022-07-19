import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import { goToRecipeList } from "../../routes/coordinator";
import { ButtonSignUp, Container, ContainerLogo, Form, ImageLogo, Input, InputName } from "./styled";

import LOGO from "../../assets/main-logo.png"

// Function to Sign Up users at platform
function SignUpPage({logStatus, setLogStatus}) {
    useUnprotectedPage()
    const navigate = useNavigate()

    const[form, onChange, clear] = useForm({ name: "", email: "", password: ""})

    const signUp = () => {
        axios
            .post(`${BASE_URL}/user/signup`, form)     /* form = body */
             .then((response) => {
                localStorage.setItem("token", response.data.token)
                clear()
                goToRecipeList(navigate)
                setLogStatus("Logout")
            })
            .catch((error) => console.log(error))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return(
        <Container>
            <ContainerLogo>
                <ImageLogo src={LOGO}/>
            </ContainerLogo>
            <div style={{backgroundColor: "black", width: "1px", minHeight: "40vh", borderLeftStyle: "faded"}} ></div>
            <Form onSubmit={onSubmitForm}>
                <InputName>Nome</InputName>
                <Input
                    name={"name"}
                    value={form.nome}
                    onChange={onChange}
                    label={"nome"}
                    type="text"
                    required
                />
                <InputName>Email</InputName>
                <Input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"email"}
                    type="email"
                    required
                />
                <InputName>Senha</InputName>
                <Input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"senha"}
                    type="password"
                    required
                    />
                <ButtonSignUp onClick={signUp}>Fazer Cadastro</ButtonSignUp>
            </Form>
        </Container>

    );
}

export default SignUpPage;