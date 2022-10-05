import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/standardPage/StandardPage";

const MegasenaPage = () => {
    // const navigate = useNavigate();

    return(
        <div>
            <h1>MegaSena</h1>
            <StandardPage />
        </div>
    )
};

export default MegasenaPage;