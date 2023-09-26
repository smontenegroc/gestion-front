import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/Sidebar.css'; // Archivo CSS para estilos

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userRole = useSelector(state => state.user.roleId)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Archivos",
      href: "/files"
    }
  ]

  if(userRole === 1){
    navigation.splice(2, 0, 
      {
        title: "Usuarios",
        href: "/users"
      }
    )
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="menu">
        {
          navigation.map((navi, index) => (
            <li key={index}>
              <Link className="menu-link" to={navi.href}>{navi.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;

