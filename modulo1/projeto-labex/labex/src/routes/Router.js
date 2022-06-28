import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyTripDetailsPage from "../pages/MyTripDetailsPage";
import MyTripsPage from '../pages/MyTripsPage';
import NewTripPage from "../pages/NewTripPage";
import OurTripDetailsPage from "../pages/OurTripDetailsPage";
import OurTripPage from '../pages/OurTripPage';
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/mytripdetails" element={<MyTripDetailsPage/>} />
          <Route path="/mytrips" element={<MyTripsPage/>} />
          <Route path="/newtrip" element={<NewTripPage/>} />
          <Route path="/ourtripdetails" element={<OurTripDetailsPage/>} />
          <Route path="/ourtrip" element={<OurTripPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router;