import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToSignUp, goToRecipeList } from "../../routes/coordinator"
import {BASE_URL} from "../../constants/urls"
// import { login } from "../../services/user"                                                   /* Another option -> import login at "services" directory */
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

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
        <div>
            <img src="###"/>
            <form onSubmit={onSubmitForm}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"email"}
                    type="email"
                    required
                />

                <input
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"senha"}
                type="password"
                required
                />
                <button onClick={login}>Login</button>
                <button onClick={() => goToSignUp(navigate)}>Cadastro</button>
            </form>
        </div>

    );
}

export default LoginPage;