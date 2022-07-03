import React, { useState } from "react"
import Router from "../../routes/Router"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipeList } from "../../routes/coordinator";

const Header = ({logStatus, setLogStatus}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

// Action to Log out (only removing token)
    const logout = () => {
        localStorage.removeItem("token")
    }

// Function call Logout function and Change the Log Status
    const logStatusAction = () => {
        if (token) {
            logout()
            setLogStatus("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    const HeaderPage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    background-color: yellow;
`

    return(
        <HeaderPage>
            <button onClick={() => goToRecipeList(navigate)} >Cookenu</button>
            <button onClick={logStatusAction}>{logStatus}</button>
        </HeaderPage>
    );
}

export default Header
