import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyTripDetailsPage from "./pages/MyTripDetailsPage";
import MyTripsPage from './pages/MyTripsPage';
import NewTripPage from "./pages/NewTripPage";
import OurTripDetailsPage from "./pages/OurTripDetailsPage";
import OurTripPage from './pages/OurTripPage';
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="login/" element={<LoginPage/>} />
          <Route path="mytripdetails/" element={<MyTripDetailsPage/>} />
          <Route path="mytrips/" element={<MyTripsPage/>} />
          <Route path="newtrip/" element={<NewTripPage/>} />
          <Route path="ourtripdetails/" element={<OurTripDetailsPage/>} />
          <Route path="ourtrip/" element={<OurTripPage/>} />
          <Route path="signup/" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
