import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

  const token = useSelector((state) => state.token.token)

  return (
    <div>
      <Link to={'/users'}> Usuarios </Link>
    </div>
  );
};

export default Home;

