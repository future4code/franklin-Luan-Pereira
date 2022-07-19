import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    margin: 0 auto;

`

export const HeaderPage = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px;
background-color: whitesmoke;
box-shadow: 0px 2px 0px rgba(0,0,0,0.2);
border-radius: 120px

`

export const ButtonLogo = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const LogoHeader = styled.img`
    width: 100px;
`

export const ButtonStatus = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: .5s;
    &:hover{
        color: orangered;
    }
`

