import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const LotofacilPage = () => {
    const [loteryName, setLoteryName] = useState("")
    const [loteryId, setLoteryId] = useState(0)
    const [loteryConcourseId, setLoteryConcourseId] = useState("")
    const [loteryConcourseDate, setLoteryConcourseDate] = useState("")
    const [loteryConcourseDrawnNumbers, setLoteryConcourseDrawnNumbers] = useState([])



    const urlLoterias = `${BASE_URL}/loterias`
    const urlLoteriasConcurso = `${BASE_URL}/loterias-concursos`
    const urlNumerosSorteados = `${BASE_URL}/concursos/${loteryConcourseId}`
    /**
     * Requisicao para pegar o Id da Loteria 
     */
    useEffect(() => {
        axios
            .get(urlLoterias)
            .then((response) => {
                let responseArray = response.data
                let responseResult = responseArray.find(item => item.nome === "lotofácil")
                setLoteryName(responseResult.nome)
                setLoteryId(responseResult.id)
                console.log("response.data.Loterias")
                console.log(response.data)
                console.log("loteryName:")
                console.log(loteryName)
                console.log("loteryId:")
                console.log(loteryId)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    /**
     * Requisicao para pegar o Id do Concurso que vai mostrar os numeros sorteados
     */
    useEffect(() => {
        axios
            .get(urlLoteriasConcurso)
            .then((response) => {
                let loteryArray = response.data;
                console.log("response.data")
                console.log(response.data)
                let result = loteryArray.find(item => item.loteriaId === loteryId)
                setLoteryConcourseId(result.concursoId)
                console.log("result:")
                console.log(result)
                console.log("id do Concurso:")
                console.log(loteryConcourseId)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [loteryId])
    /**
     * Requisicao para Numeros Sorteados e Datas
     */
    useEffect(() => {
        axios
            .get(urlNumerosSorteados)
            .then((response) => {
                setLoteryConcourseDate(response.data.data)
                console.log("LoteryConcourseDate")
                console.log(loteryConcourseDate)
                setLoteryConcourseDrawnNumbers(response.data.numeros)
                console.log("LoteryDrawnNumbers")
                console.log(loteryConcourseDrawnNumbers)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [loteryConcourseId])

    return(
        <div style={{
            marginInline: "auto",
            height: "100vh",
            maxWidth: "2000px",
            marginInline: "auto"
        }}>
            <StandardPage 
             loteryName = {loteryName}
             loteryId = {loteryId}
             loteryConcourseId = {loteryConcourseId}
             loteryConcourseDate = {loteryConcourseDate}
             loteryConcourseDrawnNumbers = {loteryConcourseDrawnNumbers}
             backgroundColor = "#DD7AC6"
            />
        </div>
    )
};

export default LotofacilPage;