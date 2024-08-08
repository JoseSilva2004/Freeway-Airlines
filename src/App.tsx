import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Footer from './components/Footer/footer'; 
import './App.css';
import Itinerario from './components/Itinerarios/itinerarios';
import Check_In from './components/Check-in/check-in';
import Reservaciones from './components/Reservaciones/reservaciones'
import 'react-toastify/dist/ReactToastify.css';
import Boleteria from './components/Boleteria/boleteria';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <div className="background"></div>
                <div id="root">
                    <Navbar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/itinerario" element={<Itinerario />} />
                            <Route path="/reservaciones" element={<Reservaciones />} />
                            <Route path="/check-in" element={<Check_In />} />
                            <Route path="/boleteria" element={<Boleteria />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
