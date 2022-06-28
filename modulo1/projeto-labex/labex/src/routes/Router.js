import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import AdminHomePage from '../pages/AdminHomePage';
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from '../pages/ListTripsPage';
import ApplicationFormPage from "../pages/ApplicationFormPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/trips/list" element={<ListTripsPage/>} />
          <Route path="/trips/application" element={<ApplicationFormPage/>} />
          <Route path="/admin/trips/" element={<AdminHomePage/>} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
          <Route path="/admin/trips/create" element={<CreateTripPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router;