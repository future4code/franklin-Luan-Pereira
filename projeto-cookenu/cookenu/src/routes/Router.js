import React from "react";
import {  Routes, Route } from "react-router-dom";

import AddRecipesPage from '../pages/AddRecipePage/AddRecipesPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({logStatus, setLogStatus}) => {
    return(
        <Routes>
            <Route index element={<RecipeListPage />} />
            <Route path="/login" element={<LoginPage logStatus={logStatus} setLogStatus={setLogStatus}/>} />
            <Route path="/cadastro" element={<SignUpPage logStatus={logStatus} setLogStatus={setLogStatus} />} />
            <Route path="/adicionar-receita" element={<AddRecipesPage />} />
            <Route path="/detalhe/:id" element={<RecipeDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;