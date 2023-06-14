import React from 'react';
import { Link } from 'react-router-dom';

function Tabla({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Nombre de Usuario</th>
          <th>Rol</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td>{item.roleId}</td>
            <td><Link to={`/users/${item.username}`}>Ver</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
