import React from 'react';
import './NavBar.scss'


const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><a href="/">Forside</a></li>
        <li><a href="/produkter">Produkter</a></li>
        <h1 href="/">bageriet</h1>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;