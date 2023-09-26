import React from 'react';
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { useSelector } from 'react-redux';

const Home = () => {

  const fullname = useSelector((state) => state.user.fullname);
  
  return (
    <div>
      <Header fullname={fullname} />
      <Sidebar />
    </div>
  );
};

export default Home;

