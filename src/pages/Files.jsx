import React, { useEffect, useState } from 'react';
import TablaFiles from '../components/TablaFiles';
import { getFiles } from '../functions/files';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FileCards from '../components/FileCards';

import '../styles/Files.css'

const Files = () => {

  const token = useSelector((state) => state.auth.token);
  const fullname = useSelector((state) => state.user.fullname);

  const [files, setFiles] = useState(null);

  useEffect(() => {
    getFiles(setFiles, token);
  }, [token])

  return (
    <div className='root'>
      <Header fullname={fullname} />
      <div className='contenedor'>
        <Sidebar />
        <div>
          {
            files != null ? (
              <FileCards data={files} />
            ) : ('No hay archivos')
          }
        </div>
      </div>
    </div>
  );
};

export default Files;