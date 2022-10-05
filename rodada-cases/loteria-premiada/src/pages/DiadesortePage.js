import React from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";

const DiadesortePage = () => {
    // const navigate = useNavigate();

    return(
        <div>
            <h1>
                Dia de Sorte
            </h1>
            <StandardPage />
        </div>
    )
};

export default DiadesortePage;