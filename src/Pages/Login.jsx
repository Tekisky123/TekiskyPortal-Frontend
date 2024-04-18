import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../Assets/Styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4545/api/user/login', {
                email,
                password
            });
            if (response.data.success) {
              
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Redirecting...',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                   
                    navigate('/dashboard')
                });
            } else {
                
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: response.data.message || 'Something went wrong!'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong! Please try again later.'
            });
        }
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <Link to="#">Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="#">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
