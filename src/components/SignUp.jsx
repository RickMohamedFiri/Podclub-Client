import {Link } from "react-router-dom"
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from './Logo(1).png'
import '../css/SignUp.css'
import axios from "axios";
import { Context } from "../App";


function SignUp() {

    const [signupForm, setSignupForm] = useState({
        username:"",
        email: "",
        password: ""
    });

    const[token, removeToken, setToken] = useContext(Context);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setSignupForm((prevsignupForm) => ({
            ...prevsignupForm,
            [name]: value
        }));
    };

    const handleSignup = (event) => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://podclub-api-z229.onrender.com/signup",
            data: {
                user_name: signupForm.username,
                email: signupForm.email,
                password: signupForm.password,
            },
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                setToken(response.data.access_token);
                localStorage.setItem("user_id", response.data.user_id);
                localStorage.setItem("email", signupForm.email);
                localStorage.setItem("username", signupForm.username);
                localStorage.setItem("user_id", response.data.user_id);
                alert("Sign Up Successful");
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
            <img className="logo-img" src={logo} alt='podclub-logo'  />
            </div>
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span>
            </div>
                <form className="signup-form">
                    <input
                        value={signupForm.username}
                        onChange={handleChange}
                        name="username"
                        className="signup-input" 
                        type='text' 
                        id='username' 
                        placeholder='Username' />
                    <input
                        value={signupForm.email}
                        onChange={handleChange}
                        name="email"
                        className="login-input"
                        type='text'
                        placeholder='Email'
                    />
                    <input
                        value={signupForm.password}
                        onChange={handleChange}
                        name="password"
                        className="login-input"
                        type='password'
                        placeholder='Password'
                    />
                    <div onClick={handleSignup} class="signup-btn">
                        <div class="cube">
                            <span class="side top">Sign Up</span>
                            <span class="side front">Sign Up</span>
                        </div>
                    </div>
                </form>
                <div className='redirect'>
                    <span >Already have an account ? <Link to="/Login" className='login'>Login</Link></span>
                </div>

            </div>
        </div>
    );
              }



export default SignUp;