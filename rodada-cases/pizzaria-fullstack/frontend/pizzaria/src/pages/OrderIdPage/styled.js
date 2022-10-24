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

export const CardFlavor = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 40%;
    margin: 20px 30px 150px 30px;
    box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.15);
    padding: 15px;
    /* border: 1px solid black; */
`

export const OrderNumber = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 50px;
`

export const PizzaName = styled.p`
    font-size: 35px;
    color: red;
    font-weight: 600;
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

export const PizzaQtd = styled.p`
    font-weight: bold;
`