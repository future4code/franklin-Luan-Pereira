import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import { goToRecipeList } from "../../routes/coordinator";

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
        <div>
            <img src="###"/>
            <form onSubmit={onSubmitForm}>
                <input
                    name={"name"}
                    value={form.nome}
                    onChange={onChange}
                    label={"nome"}
                    type="text"
                    required
                />
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
                <button onClick={signUp}>Fazer Cadastro</button>
            </form>
        </div>

    );
}

export default SignUpPage;