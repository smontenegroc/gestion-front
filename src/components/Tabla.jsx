import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { json } from 'react-router-dom';



const Tabla = ({users}) => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'users.fullname', //access nested data with dot notation
        header: 'Nombre',
        size: 150,
      },
      {
        accessorKey: 'username',
        header: 'Usuario',
        size: 150,
      },
      {
        accessorKey: 'lastLogin', //normal accessorKey
        header: 'Útima conexión',
        size: 200,
      },
      {
        accessorKey: 'Acciones',
        header: 'Acciones',
        size: 150,
      },
    ],
    [],
  );

  // return <MaterialReactTable columns={columns} data={users} />;
  return json(users);
};

export default Tabla;

