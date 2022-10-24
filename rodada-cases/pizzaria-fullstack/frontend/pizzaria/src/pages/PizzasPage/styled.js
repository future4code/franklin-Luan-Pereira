import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
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
    margin-left: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
`

export const CardFlavor = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    width: 90%;
    margin-bottom: 10px;
    box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.15);
    padding: 15px;
    /* border: 1px solid black; */
`


export const PizzaName = styled.p`
    font-size: 40px;
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
    font-weight: 600;
`