import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect( () => {                                                  /* first the useLayoutEffect verify before load the page */
                                                                                    /*(different from useEffect) */
    const token = localStorage.getItem("token")                             /* only works if that function find "token" at localStorage */
        if (!token){
            goToLogin(navigate)
        }
    }, [navigate])
}