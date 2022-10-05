import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";

const QuinaPage = () => {
    // const navigate = useNavigate();

    return(
        <div>
            <h1>
                Quina    
            </h1>
            <StandardPage />
        </div>
    )
};

export default QuinaPage;