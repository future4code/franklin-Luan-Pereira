import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";

const LotomaniaPage = () => {
    // const navigate = useNavigate();

    return(
        <div>
            <h1>
                LotoMania
            </h1>
            <StandardPage />
        </div>
    )
};

export default LotomaniaPage;