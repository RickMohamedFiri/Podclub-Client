import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './Logo(1).png'
import '../css/LogIn.css';
import axios from "axios";
import { Context } from "../App";


function LogIn() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const[token, removeToken, setToken] = useContext(Context);

    const navigate = useNavigate();

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
                localStorage.setItem("email", loginForm.email);
                localStorage.setItem("username", response.data.user_name);
                localStorage.setItem("user_id", response.data.user_id);
                alert("Login Successful");
                navigate('/Homepage');
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
                    <div onClick={handleLogin} class="login-btn">
                        <div class="cube">
                            <span class="side top">Log In</span>
                            <span class="side front">Log In</span>
                        </div>
                    </div>
                </form>
                <div className='redirect'>
                    <span>Don't have an account? <Link to="/Signup" className="signup">Sign Up</Link></span>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
