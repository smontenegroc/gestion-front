import React from "react";
import '../styles/Header.css';

function Header({fullname}) {
  return (
    <div className="header">
      <div className="logo">
        <p>Gestión de Archivos</p>
      </div>
      <div className="search">
        <input type="text" placeholder="Buscar" />
      </div>
      <div className="user">
        <p>{fullname}</p>
      </div>
    </div>
  );
}

export default Header;
