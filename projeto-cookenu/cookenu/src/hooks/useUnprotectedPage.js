import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRecipeList } from "../routes/coordinator"


export const useUnprotectedPage = () => {                                    /* We have to use that function at unauthenticated pages */
    const navigate = useNavigate()

    useEffect( () => {
    const token = localStorage.getItem("token")
        if (token){
            goToRecipeList(navigate)
        }
    }, [navigate])
}