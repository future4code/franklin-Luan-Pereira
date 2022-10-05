import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegasenaPage from "../pages/MegaSenaPage";
import QuinaPage from "../pages/QuinaPage";
import LotofacilPage from "../pages/LotofacilPage";
import LotomaniaPage from "../pages/LotomaniaPage";
import TimemaniaPage from "../pages/TimemaniaPage";
import DiadesortePage from "../pages/DiadesortePage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MegasenaPage />} />
                <Route path="/megasena" element={<MegasenaPage />} />
                <Route path="/quina" element={<QuinaPage />} />
                <Route path="/lotofacil" element={<LotofacilPage />} />
                <Route path="/lotomania" element={<LotomaniaPage />} />
                <Route path="/timemania" element={<TimemaniaPage />} />
                <Route path="/dia-de-sorte" element={<DiadesortePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;