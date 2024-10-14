import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RoteiroForm from './pages/RoteiroForm';
import StatusCheck from './pages/AlterarStatus';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enviar-roteiro" element={<RoteiroForm />} />
        <Route path="/alterar-status" element={<StatusCheck />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;