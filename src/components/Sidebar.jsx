import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaFile, FaUser, FaServer, FaSignOutAlt } from 'react-icons/fa'

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
      href: "/",
      icon: <FaHome />
    },
    {
      title: "Archivos",
      href: "/files",
      icon: <FaServer />
    },
    // { 
    //   title: "Cerrar Sesión",
    //   href: "/logout",
    //   icon: <FaSignOutAlt />
    // }

  ]

  if(userRole === 1){
    navigation.splice(2, 0, 
      {
        title: "Usuarios",
        href: "/users",
        icon: <FaUser />
      }
    )
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="menu">
        {
          navigation.map((navi, index) => (
            <li key={index}>
              <Link className="menu-link" to={navi.href}> 
                <span className='menu-icon'>{navi.icon}</span><span className='menu-title'>{navi.title} </span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;

