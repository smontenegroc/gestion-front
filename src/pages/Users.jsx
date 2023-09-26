import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../functions/users';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';

// import '../styles/Users.css'

const Users = () => {
  const token = useSelector((state) => state.auth.token);
  const fullname = useSelector((state) => state.user.fullname);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers(setUsers, token);
  }, [token]);

  return (
    <div className='root'>
      <Header fullname={fullname} />
      <div className='contenedor'>
        <Sidebar />
        <div className='contenido'>
          <h2>Usuarios</h2>
          {users != null ? (
            <Cards data={users} />
          ) : ('No hay usuarios')}
        </div>
      </div>
    </div>
  );
}

export default Users;


