import styled from 'styled-components';

export const Container = styled.div`

`

export const ImageHeader = styled.img`
    width: 100vw;

    transition: .5s;
    filter: brightness(70%);

    &:hover{
    filter: brightness(95%)
    }
`
export const Cards = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
`

export const CardFlavor = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    width: 40%;
    margin-bottom: 10px;
    /* border: 1px solid black; */
`


export const PizzaName = styled.p`
    font-size: 30px;
    color: red;
    font-weight: bold;
    text-shadow: darkgray;
    text-transform: capitalize;
    margin: 0;
`

export const PizzaIngredients = styled.p`
    text-transform: uppercase;
`

export const PizzaPrice = styled.p`
    margin: 0;
`