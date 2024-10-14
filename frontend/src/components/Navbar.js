import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Cooperfilme</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/enviar-roteiro">Enviar Roteiro</Link></li>
        <li><Link to="/alterar-status">Alterar Status</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;