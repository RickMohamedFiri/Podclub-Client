import React ,{useState, useEffect} from 'react';
import {Link } from "react-router-dom"
import axios from "axios"; 
import logo from './Logo(1).png'
import '../css/SignUp.css'


function SignUp(){
    const initialValues = {
        username: '',
        email: '',
        password: '',
      };
    
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.username) {
          errors.username = 'Username is required!';
        }
        if (!values.email) {
          errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
          errors.email = 'This is not a valid email format!';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 4) {
          errors.password = 'Password must be more than 4 characters';
        } else if (values.password.length > 10) {
          errors.password = 'Password cannot exceed more than 10 characters';
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    
        try {
          const response = await axios.post('' ,{
            name: formValues.username,
            email: formValues.email,
            password: formValues.password,
          });
          console.log('Form submission successful', response.data);
        } catch (error) {
          console.error('Error submitting form', error);
        }
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log('Form Values', formValues);
        }
      }, [formErrors, formValues, isSubmit]);
    


    return (
        <div className='main'>
            <div className='logo'>
            <img src={logo} alt='podclub-logo'  />
            </div>
            <div className='form-container'>
            <div className='title'>
                <span>Welcome</span>
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
             <div className="ui message success">Signed in successfully</div>
              ) : (
               console.log('Entered Details', formValues)
            )}
                <form onSubmit={handleSubmit}>
                    <input type='text' id='username' placeholder='Username' onChange={handleChange}/>
                    <input type='email' id='email' placeholder='Email' onChange={handleChange} />
                    <input type='password' id='password' placeholder='Password'  onChange={handleChange} />
                    <button>Sign Up</button>
                </form>
                <div className='redirect'>
                    <span >Already have an account ? <Link to="Login" className='login'>Login</Link></span>
                </div>

            </div>
        </div>
    );
              }



export default SignUp;