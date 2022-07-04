import React from "react";
import styled from "styled-components";

export function CardRecipeCategory({categoryIcon, title}) {
  const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 20px rgba(0,0,0,0.1);
    height: 150px;
    width: 150px;
    align-items: center;
    justify-content: baseline;

  `;

  const ContainerImage = styled.div`
    display: flex;
    align-items: flex-end;
    height: 200px;

  `

  const ImageCard = styled.img`
    width: 50px;
    margin: 0 auto;

  `;

  const TitleCard = styled.p`
    text-transform: uppercase;
    font-weight: bold;
  `;

  return (
    <ContainerCard>
        <ContainerImage>
            <ImageCard src={categoryIcon} />
        </ContainerImage>
        <TitleCard> {title} </TitleCard>
    </ContainerCard>
  );
};

