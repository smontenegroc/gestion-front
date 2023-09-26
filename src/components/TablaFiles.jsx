import React from 'react';

function TablaFiles({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Archivo</th>
          <th>Descripción</th>
          <th>Tipo de Archivo</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.filename}</td>
            <td>{item.description}</td>
            <td>{item.typeFile}</td>
            <td>Hola</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaFiles;