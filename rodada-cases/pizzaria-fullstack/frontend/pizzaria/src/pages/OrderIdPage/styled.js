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

export const CardFlavor = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 40%;
    margin-left: 30px;
    /* border: 1px solid black; */
`


export const PizzaName = styled.p`
    font-size: 30px;
    color: red;
    font-weight: 600;
    text-shadow: darkgray;
    text-transform: capitalize;
    margin: 0;
`

export const PizzaIngredients = styled.p`
`

export const PizzaPrice = styled.p`
    margin: 0;
`