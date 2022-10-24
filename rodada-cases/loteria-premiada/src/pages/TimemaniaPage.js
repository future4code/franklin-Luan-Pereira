import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const TimemaniaPage = () => {
    const [loteryName, setLoteryName] = useState("")
    const [loteryId, setLoteryId] = useState(0)
    const [loteryConcourseId, setLoteryConcourseId] = useState("")
    const [loteryConcourseDate, setLoteryConcourseDate] = useState("")
    const [loteryConcourseDrawnNumbers, setLoteryConcourseDrawnNumbers] = useState([])



    const urlLoterias = `${BASE_URL}/timemania/latest`
    
    /**
     * Requisicao para pegar o Id da Loteria 
     */
    useEffect(() => {
        axios
            .get(urlLoterias)
            .then((response) => {
                setLoteryName(response.data.nome)
                setLoteryConcourseId(response.data.concurso)
                setLoteryConcourseDate(response.data.data)
                setLoteryConcourseDrawnNumbers(response.data.dezenas)
                // console.log("response.data.nome")
                // console.log(response.data)
                // console.log("loteryDate:")
                // console.log(LoteryConcourseDate)
                // console.log("loteryId:")
                // console.log(loteryConcourseId)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div style={{
            marginInline: "auto",
            height: "100vh",
            maxWidth: "2000px",
            marginInline: "auto",
            backgroundColor: "#5AAD7D"
        }}>
            <StandardPage 
             loteryName = {loteryName}
             loteryConcourseId = {loteryConcourseId}
             loteryConcourseDate = {loteryConcourseDate}
             loteryConcourseDrawnNumbers = {loteryConcourseDrawnNumbers}
             backgroundColor = "#5AAD7D"
            />
        </div>
    )
};

export default TimemaniaPage;