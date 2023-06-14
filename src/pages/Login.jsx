import React, { useState, useEffect } from "react";
import { login } from "../functions/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../redux/tokenSlice";
import { addAuth } from "../redux/authSlice";

const Login = () => {
    const token = useSelector((state) => state.token.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await login(username, password);

            if (res.status === 'ok') {
                console.log(res)
                dispatch(addToken(res));
                navigate('/home');
            } else {
                console.log(res.message);
            }
        } catch (error) {
            // Manejo del error, puedes mostrar un mensaje de error al usuario.
        }
    };

    return (
        <div className="container">
            <div className="img">
                <img src="" alt="Logo" />
            </div>
            <div className="login-content">
                <form className="formLogin" onSubmit={onSubmit}>
                    <h2 className="title">Iniciar Sesión</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user" />
                        </div>
                        <div className="div">
                            <input type="text" className="input" placeholder="Usuario" autoComplete="username" value={username} onChange={handleUsernameChange} />
                        </div>
                    </div>
                    <div className="input-div pass" id="txtPass">
                        <div className="i">
                            <i className="fas fa-lock" />
                        </div>
                        <div className="div">
                            <input type="password" className="input" placeholder="Contraseña" autoComplete="current-password" value={password} onChange={handlePasswordChange} />
                        </div>
                    </div>
                    <input type="submit" className="btn" value="Iniciar Sesión" />
                </form>
            </div>
        </div>
    );
};

export default Login;

