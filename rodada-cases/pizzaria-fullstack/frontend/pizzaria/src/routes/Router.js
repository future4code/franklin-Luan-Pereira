import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "../pages/MainPage/MainPage";
import OrderIdPage from "../pages/OrderIdPage/OrderIdPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import PizzasPage from "../pages/PizzasPage/PizzasPage";


function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/api/pizzas" element={<PizzasPage />} />
                <Route path="/api/orders" element={<OrdersPage />} />
                <Route path="/api/orders/:id" element={<OrderIdPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;