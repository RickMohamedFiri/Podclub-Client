import {Link } from "react-router-dom";
import logo from '../podclub-images/Logo(1).png';
import { useForm } from 'react-hook-form';
import '../css/SignUp.css';


function SignUp(){

    const {
        register,
        handleSubmit,
        formState: {errors} ,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return (
        <div className='main'>
            <div className='logo'>
            <img className="logo-img" src={logo} alt='podclub-logo'  />
            </div>
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span>
            </div>
                <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="signup-input" type='text' name="username" {...register("username" , {required: true , minLength: 4})} placeholder='Username' />
                    {errors.username && errors.username.type === "required" && (<p>Username is required </p>)}
                    {errors.username && errors.username.type === "minLength" && (<p>Username should be atleast 4 characters long </p>)}
                    <input className="signup-input" type='email' name="email" {...register("email" ,{required: true , pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} placeholder='Email'  />
                    {errors.email && errors.email.type === "required" && (<p>Email is required </p>)}
                    {errors.email && errors.email.type === "pattern" && (<p>Email is not valid </p>)}
                    <input className="signup-input" type='password' name="password" {...register("password", {required: true , minLength: 8})} placeholder='Password'   />
                    {errors.password && errors.password.type === "required" && (<p>Password is required </p>)}
                    {errors.password && errors.password.type === "minLength" && (<p>Password should be at least 8 characters long </p>)}
                    <button className="signup-btn" type="submit"><span>Sign Up</span></button>
                </form>
                <div className='redirect'>
                    <span >Already have an account ? <Link to="/Login" className='login'>Login</Link></span>
                </div>

            </div>
        </div>
    );
              }



export default SignUp;