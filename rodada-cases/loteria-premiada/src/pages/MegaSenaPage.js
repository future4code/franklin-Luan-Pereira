import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";
import { BASE_URL } from "../constants/url";

const MegasenaPage = () => {
    
    const [loteryName, setLoteryName] = useState("")
    const [loteryId, setLoteryId] = useState(0)
    const [loteryConcourse, setLoteryConcourse] = useState("")

    const url = `${BASE_URL}/loterias`

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setLoteryName(response.data[0].nome)
                setLoteryId(response.data[0].id)
                console.log("loteryName:")
                console.log(response.data[0].nome)
                console.log("loteryId:")
                console.log(response.data[0].id)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // useEffect(() => {
    //     axios
    //         .get(url)
    //         .then((response) => {
    //             setLoteryConcourse(response.data.concursoId)
    //             console.log("concourseId:")
    //             console.log(response.data.concursoId)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    return(
        <div>
            <h1>MegaSena</h1>
            <StandardPage />
        </div>
    )
};

export default MegasenaPage;