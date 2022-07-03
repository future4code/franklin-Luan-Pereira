import styled from "styled-components";


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