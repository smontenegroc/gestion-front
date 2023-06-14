import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../functions/functios';
import Tabla from '../components/Tabla';

const Users = () => {
  const token = useSelector((state) => state.token.token);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers(setUsers, token);
  }, []);

  return (
    <>
      {users != null ? (
        <Tabla data={users} />
      ) : ('No hay usuarios')}
    </>
  );
}

export default Users;


