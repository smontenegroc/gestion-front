import React, { useEffect, useState } from 'react';
import { getRoles } from '../functions/functios';

const SelectRoles = () => {
    const [roles, setRoles] = useState(null);

  useEffect(() => {
    getRoles(setRoles);
  }, []);

  return (
    <div>
      <select name='roles'>
        <option>Seleccione un rol</option>
        {roles != null ? (
          roles.map(role => (
            <option key={role.id}>{role.roleName}</option>
          ))
        ) : ('')}
      </select>
    </div>
  );
}

export default SelectRoles