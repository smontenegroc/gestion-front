import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../functions/users";
import { useSelector } from "react-redux";
import { useState } from "react";

import '../styles/Cards.css'

function Card({ item }) {

  const token = useSelector((state) => state.auth.token)
  const [response, setResponse] = useState(null)

  const handleDelete = async () => {
    try {
      const deleteResponse = await deleteUser(item.id, token)
      console.log(deleteResponse)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card">
      <h3>{item.fullname}</h3>
      <p>{item.username}</p>
      <section className="card-footer">
        <Link to={`/users/${item.username}`} >Ver</Link>
        <button onClick={handleDelete} className="card-btn">Eliminar</button>        
      </section>
    </div>
  );
}


function Cards({ data }) {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cards;


