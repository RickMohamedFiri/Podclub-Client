import {Link } from "react-router-dom"
import logo from './Logo(1).png'
import '../css/SignUp.css'


function SignUp(){
    return (
        <div className='main'>
            <div className='logo'>
            <img src={logo} alt='podclub-logo'  />
            </div>
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span>
            </div>
                <form>
                    <input type='text' id='username' placeholder='Username' />
                    <input type='email' id='email' placeholder='Email'  />
                    <input type='password' id='password' placeholder='Password'   />
                    <button>Sign Up</button>
                </form>
                <div className='redirect'>
                    <span >Already have an account ? <Link to="/Login" className='login'>Login</Link></span>
                </div>

            </div>
        </div>
    );
              }



export default SignUp;