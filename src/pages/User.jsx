import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../functions/functios';
import { useSelector } from 'react-redux';

const User = () => {
  const token = useSelector((state) => state.token.token);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    getUser(params.username, setUser, token)
  }, [])

  const params = useParams()

  return(
    <>
      {user != null ? (
        <div>
          <h2>Nombre completo: {user.fullname}</h2>
          <p>Nombre de usuario: {params.username}</p>
        </div>
      ): ('No existe el usuario')}
    </>
  )
}

export default User;