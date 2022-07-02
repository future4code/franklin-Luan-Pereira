import React from "react"
import Router from "../../routes/Router"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipeList } from "../../routes/coordinator";

const Header = () => {
    const navigate = useNavigate()

    const HeaderPage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
`

    return(
        <HeaderPage>
            <button onClick={() => goToRecipeList(navigate)} >Cookenu</button>
            <button onClick={() => goToLogin(navigate)}>Login</button>
        </HeaderPage>
    );
}

export default Header
