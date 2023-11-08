
import {Link } from "react-router-dom"
import logo from '../podclub-images/Logo(1).png'
import '../css/SignUp.css'



function SignUp(){
    return (
        <div className='main'>
            <div className='logo'>
            <img className="logo-img" src={logo} alt='podclub-logo'  />

            </div>
        <div className='main'>
            
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span>
            </div>
                <form className="signup-form">
                    <input className="signup-input" type='text' id='username' placeholder='Username' />
                    <input className="signup-input" type='email' id='email' placeholder='Email'  />
                    <input className="signup-input" type='password' id='password' placeholder='Password'   />
                    <button className="signup-btn"><span>Sign Up</span></button>
                </form>
                <div className='redirect'>
                    <span >Already have an account ? <Link to="/Login" className='login'>Login</Link></span>

                </div>

            </div>
        </div>
        </>
    );
              }



export default SignUp;