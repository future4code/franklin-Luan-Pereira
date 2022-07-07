import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding-top: 100px;
`

export const ContainerLogo = styled.div`
`

export const ImageLogo = styled.img`
    width: 800px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40vh;
    min-width: 20vh;
    padding-right: 100px;
`

export const InputName = styled.p`
    margin: 5px 5px 2px;
    color: orangered;
    font-weight: 600;
`

export const Input = styled.input`
    border: none;
    border-radius: 15px;
    background-color: whitesmoke;
    text-align: center;
    padding: 10px 10px;
    &:focus{

    }
`

export const ButtonAdd = styled.button`
    margin-top: 35px;
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: salmon;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    color: white;

    cursor: pointer;
    transition: .5s;
    &:hover{
        background-color: orangered;
    }

`