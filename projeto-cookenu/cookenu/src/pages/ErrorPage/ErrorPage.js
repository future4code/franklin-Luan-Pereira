import { useState } from "react";
import LOGO from "../../assets/main-logo.png"
import { Container, ContainerH1, ImageContainer } from "./styled";

// Function when user access a different page or wrong page
const ErrorPage = () => {
    return(
        <Container>
           <ContainerH1> Ops, acho que essa pagina não existe</ContainerH1>
           <ContainerH1>:(</ContainerH1>
           <ImageContainer src={LOGO}/>
        </Container>
    );
}

export default ErrorPage;