import React from 'react';
import './NavBar.scss'


const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><a href="/">Forside</a></li>
        <li><a href="/Contact">Produkter</a></li>
        <h1 href="/">bageriet</h1>
        <li><a href="/Products">Kontakt</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;