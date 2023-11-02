import {Link} from "react-router-dom";
import logo from './Logo(1).png'
import '../css/LogIn.css';


function LogIn(){
    return (
        <div className='main'>
            <div className='logo'>
            <img src={logo} alt='podclub-logo'  />
            </div>
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span> 
                <span className='sub-title'>back, User</span>
            </div>
                <form>
                    <input type='text' placeholder='Username' />
                    <input type='password' placeholder='Password' />
                    <button>Log In</button>
                </form>
                <div className='redirect'>
                    <span >Don't have an account ?  <Link to="/Signup" className="signup">Sign Up</Link></span>
                </div>

            </div>
        </div>
    );
}



export default LogIn;