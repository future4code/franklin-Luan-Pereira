import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddRecipesPage from '../pages/AddRecipePage/AddRecipesPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => {
    return(
        <BrowserRouter>
            <Header />                                      {/* Header here because we can only use useNavigate inside <Router> */}
            <Routes>
                <Route index element={<RecipeListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/adicionar-receita" element={<AddRecipesPage />} />
                <Route path="/detalhe/:id" element={<RecipeDetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;