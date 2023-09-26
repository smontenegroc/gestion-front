import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../functions/users';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const User = () => {
  const token = useSelector((state) => state.auth.token);
  const fullname = useSelector((state) => state.user.fullname);

  const params = useParams();
  
  const [user, setUser] = useState(null);

  useEffect(()=>{
    getUser(params.username, setUser, token)
  }, [token, params.username])


  return(
    <div className='root'>
      <Header fullname={fullname} />
      <div className='contenedor'>
      <Sidebar />
        <div>
          {user != null ? (
            <div>
              <h2>Nombre completo: {user.fullname}</h2>
              <p>Nombre de usuario: {params.username}</p>
            </div>
          ): ('No existe el usuario')}
        </div>
      </div>
    </div>
  )
}

export default User;