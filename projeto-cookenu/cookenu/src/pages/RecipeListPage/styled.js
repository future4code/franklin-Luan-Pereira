import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;

`
export const IntroDiv = styled.div`

`

export const IntroP = styled.p`
    font-size: 25px;
    margin: 10px 0 5px;
`

export const IntroH1 = styled.h1`
    font-size: 100px;
    margin: 0;
    color: orangered;
`
export const IntroButton = styled.button`
    margin: 65px 0;
    border: none;
    border-radius: 5px;
    padding: 15px 90px;
    background-color: salmon;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    color: white;

    cursor: pointer;
    transition: .5s;
    &:hover{
        background-color: orangered;
    }
`

export const ContainerH2 = styled.div`
    margin-top: 150px;
    margin-bottom: 50px;
    font-size: 25px;

`

// Recipes

export const CardRecipe = styled.div`
    border: 1px ;
    border-radius: px;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    height: 270px;
    margin-bottom: 30px;
    transition: .3s;

    &:hover {
        cursor: pointer;
        transform: scale(102%);
    }
`

export const CardTitle = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`

export const RecipeCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
`

export const CardImage = styled.img`
    width: 100%;
    height: 180px;
`