import styled from "styled-components";

export const PageResults = styled.div`
    display: grid;
    text-align: center;
    height: 100%;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 2fr;
    }
`

export const InfoSide = styled.div`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "white")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
`

export const SelectLotery = styled.select`
    padding: 0.5rem 3rem 0.5rem 5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`

export const NameLotery = styled.div`
    text-align: center;
    @media (min-width: 1024px) {
        display: flex;
        gap: 1rem;
    }
    img {
      object-fit: contain;
    }
    > p {
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
    }
`

export const InfoLotery = styled.div`
    h1 {
        color: white;
        font-size: 0.8rem;
        font-weight: 200;
        margin: 0;
        margin-bottom: 0.5rem;
    }
`

export const NumberLotery = styled.div`
    display: flex;
    color: white;
    flex-direction: row;
    font-size: 1.5rem;
    min-width: 354px;
`

export const LotteryDrawSide = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2rem;
    border-radius: 50% 50% 0% 0%/ 15%;
    background-color: #EFEFEF;

    @media (min-width: 1024px) {
        border-radius: 12% 0% 0% 12%/ 50% 0% 0% 50%;
    }
`

export const DrawnNumbers = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    background-color: transparent;

    @media (min-width: 1024px) {
        align-items: center;
        justify-self: center;
    }
    .number {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        font-weight: bold;
        font-size: 1.7rem;

        @media (min-width: 1024px) {
          height: 5rem;
          width: 5rem;
        }
      }
`

export const Important = styled.span`
    display: block;
    margin-top: 2rem;
    text-align: center;
    line-height: 1.4;
    font-size: 0.8rem;
    
    @media (min-width: 1024px) {
        position: absolute;
        bottom: 7rem;
        left: 10%;
        right: 10%;
    }
`