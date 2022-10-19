import styled from 'styled-components';

export const Container = styled.div`
    background-image: url('./assets/MainBG.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #00000059;
    background-blend-mode: overlay;
    height: 120vh;
    display: flex;
    justify-content: center;
`

export const MenuSession = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    /* border: 1px solid white; */
    width: max-content;
    margin: 10% 0;
`

export const ImageLogo = styled.img`
    height: 400px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid white; */
    width: 800px;
`

export const PizzaFlavorsButton = styled.button`
    padding: 12px 30%;
    width: 100%;
    border-radius: 20px;
    border: none;
    background-color: red;
    margin-bottom: 28px;

    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    transition: .5s;
    &:hover{
        background-color: transparent;
        color: red;
        scale: calc(1.2);
    }

`

export const InputOrder = styled.input`
    padding: 8px 0;
    width: 100%;
    text-align: center;
    background-color: transparent;
    border-top: none;
    border-bottom: .5px solid;
    border-left: none;
    border-right: none;
    margin-bottom: 28px;


    color: white;
    font-size: 18px;
    font-weight: bold;
`

export const ButtonOrder = styled.button`
    padding: 12px 30%;
    width: 100%;
    border-radius: 20px;
    background-color: red;
    margin-bottom: 28px;
    border: none;
    cursor: pointer;


    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;

    transition: .5s;
    &:hover{
        background-color: transparent;
        color: red;
        scale: calc(1.2);
    }
    
`

export const ButtonAllOrders = styled.button`
    padding: 12px 30%;
    width: 100%;
    border-radius: 20px;
    background-color: red;
    margin-bottom: 8px;
    border: none;
    cursor: pointer;


    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;

    transition: .5s;
    &:hover{
        background-color: transparent;
        color: red;
        scale: calc(1.2);
    }

`