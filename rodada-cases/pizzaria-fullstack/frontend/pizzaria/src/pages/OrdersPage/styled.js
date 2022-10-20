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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 30%;
    margin-left: 30px;
    /* border: 1px solid black; */
`
export const Order = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-transform: capitalize;
    border-bottom: .5px solid red;
`

