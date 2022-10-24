import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte } from "../../routes/coordinator";
import { goToLotofacil } from "../../routes/coordinator";
import { goToLotomania } from "../../routes/coordinator";
import { goToMegasena } from "../../routes/coordinator";
import { goToQuina } from "../../routes/coordinator";
import { goToTimemania } from "../../routes/coordinator";
import LOGO from "../../assets/LOGO.png";

import { 
    InfoSide,
    LotteryDrawSide,
    PageResults,
    SelectLotery,
    NameLotery,
    InfoLotery,
    NumberLotery,
    DrawnNumbers,
    Important,
} from "./styled";

const StandardPage = (
    {
        loteryName,
        loteryConcourseId,
        loteryConcourseDate,
        loteryConcourseDrawnNumbers,
        backgroundColor,
    }) => {
    const navigate = useNavigate();
    const [loteryPage, setLoteryPage] = useState("");

    // useEffect usado para renderizar a pagina do sorteio escolhido pelo usuario, com a variavel de controle sendo o loteryPage
    useEffect(() => {loteryPage === "Dia de sorte" && goToDiaDeSorte(navigate)},[loteryPage])
    useEffect(() => {loteryPage === "Lotofacil" && goToLotofacil(navigate)},[loteryPage])
    useEffect(() => {loteryPage === "Lotomania" && goToLotomania(navigate)},[loteryPage])
    useEffect(() => {loteryPage === "Mega-sena" && goToMegasena(navigate)},[loteryPage])
    useEffect(() => {loteryPage === "Quina" && goToQuina(navigate)},[loteryPage])
    useEffect(() => {loteryPage === "Timemania" && goToTimemania(navigate)},[loteryPage])
    
    // Array de options para serem renderizadas no select
    const options = ["Selecione","Mega-sena", "Quina", "Lotofacil", "Lotomania", "Timemania", "Dia de sorte"]
    
    // Aqui estamos transformando a data recebida no retorno da API

    return(
        <PageResults>
            <InfoSide
                backgroundColor={backgroundColor}
            >
                <SelectLotery
                    value={loteryPage}
                    onChange={(event) => setLoteryPage(event.target.value)}
                >
                    {options.map((optionValue) => (
                        <option value={optionValue}>{optionValue}</option> 
                    ))}
                </SelectLotery>

                <NameLotery className='logo'>
                    <img src={LOGO} alt="logo-loteria" />
                    <p>{loteryName}</p>
                </NameLotery>

                <InfoLotery className="concourse">
                    <NumberLotery className='info'>
                        <p>CONCURSO</p>
                        <span className='number'>{loteryConcourseId} - {loteryConcourseDate}</span>
                    </NumberLotery>

                </InfoLotery>
            </InfoSide>

            <LotteryDrawSide>
                <DrawnNumbers>
                    {loteryConcourseDrawnNumbers.map((item) => {
                        return (
                            <div>
                                <span className='number'>{item}</span>
                            </div>
                        )
                    })}
                    
                </DrawnNumbers>
                <Important>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </Important>
            </LotteryDrawSide>
        </PageResults>
    )
};

export default StandardPage;