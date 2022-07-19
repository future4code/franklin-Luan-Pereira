import './App.css';
import React, { useState } from 'react';
import Router from './routes/Router';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const token = localStorage.getItem("token")
  const [logStatus, setLogStatus] = useState(token ? "Logout" : "Login")

  return (
    <div className="App">
      <BrowserRouter>
        <Header logStatus={logStatus} setLogStatus={setLogStatus} />
        <Router logStatus={logStatus} setLogStatus={setLogStatus} />
      </BrowserRouter>
    </div>
  );
}

export default App;
