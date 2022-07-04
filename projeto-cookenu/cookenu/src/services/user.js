import axios from "axios"

import { BASE_URL } from "../constants/urls"

//Function to LogIn Page
export const login = (form,clear) => {
    axios
        .post(`${BASE_URL}/user/login`, form)     /*  form(body) = email: text@domain.com */
        .then((response) => {                       /* and password: *****  */
            console.log(response.status,response.statusText)
            localStorage.setItem("token", response.data.token)  /* localStorage -> ("Name",response.local) */
            clear()
        })
        .catch((error) => console.log(error))
}
