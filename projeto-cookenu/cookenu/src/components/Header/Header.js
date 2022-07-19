import React, { useState } from "react"
import Router from "../../routes/Router"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipeList } from "../../routes/coordinator";

import LOGO from "../../assets/main-logo.png"

import { Container, HeaderPage, ButtonLogo, LogoHeader, ButtonStatus  } from "./styled";

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


    return(
        <Container>
            <HeaderPage>
                <ButtonLogo onClick={() => goToRecipeList(navigate)} >
                    <LogoHeader src={LOGO} />
                </ButtonLogo>
                <ButtonStatus onClick={logStatusAction}>
                    {logStatus}
                </ButtonStatus>
            </HeaderPage>
        </Container>
    );
}

export default Header
