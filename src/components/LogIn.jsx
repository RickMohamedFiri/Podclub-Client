import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './Logo(1).png'
import '../css/LogIn.css';
import axios from "axios";

function LogIn({setToken}) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setLoginForm((prevLoginForm) => ({
            ...prevLoginForm,
            [name]: value
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://podclub-api-z229.onrender.com/login",
            data: {
                email: loginForm.email,
                password: loginForm.password,
            },
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                setToken(response.data.access_token);
                alert("Login Successful");
                localStorage.setItem("email", loginForm.email);
            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            } else {
                console.log("Network error or server is down");
            }
        });
    };

    return (
        <div className='main'>
            <div className='logo'>
                <img src={logo} alt='podclub-logo' />
            </div>
            <div className='form-container'>
                <div className='title'>
                    <span>Welcome</span>
                    <span className='sub-title'>back, User</span>
                </div>
                <form className="login-form">
                    <input
                        value={loginForm.email}
                        onChange={handleChange}
                        name="email"
                        className="login-input"
                        type='text'
                        placeholder='Email'
                    />
                    <input
                        value={loginForm.password}
                        onChange={handleChange}
                        name="password"
                        className="login-input"
                        type='password'
                        placeholder='Password'
                    />
                    <button onClick={handleLogin} className="login-btn">
                        <span>Log In</span>
                    </button>
                </form>
                <div className='redirect'>
                    <span>Don't have an account? <Link to="/Signup" className="signup">Sign Up</Link></span>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
