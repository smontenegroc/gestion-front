import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../functions/users";
import { useSelector } from "react-redux";
import { useState } from "react";

import '../styles/Cards.css'

function Card({ item }) {

    const token = useSelector((state) => state.auth.token)

    return (
        <div className="card">
            <h3>{item.filename}</h3>
        </div>
    );
}


function FileCards({ data }) {
    return (
        <div className="card-container">
        {data.map((item) => (
            <Card key={item.id} item={item} />
        ))}
        </div>
    );
}

export default FileCards;