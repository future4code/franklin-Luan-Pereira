import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToSignUp, goToRecipeList } from "../../routes/coordinator"
import {BASE_URL} from "../../constants/urls"
import LOGO from "../../assets/main-logo.png"



// import { login } from "../../services/user"                                                   /* Another option -> import login at "services" directory */
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { ButtonLogin, ButtonSignUp, Container, ContainerLogo, Form, ImageLogo, Input, InputName } from "./styled";

function LoginPage({logStatus, setLogStatus}) {
    useUnprotectedPage();

    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({email: "", password: ""});

    const onSubmitForm = (event) => {
        // console.log(form)
        event.preventDefault()
        // login(form,clear,navigate)                                                                                  // When { login } is imported
    }

    const login = () => {
        axios
            .post(`${BASE_URL}/user/login`, form)                                                        /*  form(body) = email: text@domain.com */
            .then((response) => {                                                                                       /* and password: *****  */
                console.log(response.status,response.statusText)
                localStorage.setItem("token", response.data.token)                                 /* localStorage -> ("Name",response.local) */
                clear()
                goToRecipeList(navigate)
                setLogStatus("Logout")
            })
            .catch((error) => console.log(error))
    }

    return(
        <Container>
            <ContainerLogo>
                <ImageLogo src={LOGO}/>
            </ContainerLogo>
            <div style={{backgroundColor: "black", width: "1px", minHeight: "40vh", borderLeftStyle: "faded"}} ></div>
            <Form onSubmit={onSubmitForm}>
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
                <ButtonLogin onClick={login}>Login</ButtonLogin>
                <ButtonSignUp onClick={() => goToSignUp(navigate)}>Cadastro</ButtonSignUp>
            </Form>
        </Container>

    );
}

export default LoginPage;