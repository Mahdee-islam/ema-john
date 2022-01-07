import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import './Login.css';


const Login = () => {
   const { signInUsingGoogle } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();
   const redirect_url =  location.state?.form || '/shop';
   console.log('came form', location.state?.form);

   const handleGoogleLogin = () => {
       signInUsingGoogle()
       .then(result => {
        navigate(redirect_url);
    })
   }
    return (
        <div>
            <div className="main-section">
            <h2 className="heading">Log-in</h2>
           <div className="login-form">
               
               <form onSubmit="">
                   
                   <input type="email" placeholder='Your Email' />
                   <br />
                   <input type="password" placeholder='Your Password' />
                   <br />
                   <input type= "submit" value = "continue"  className='regular-btn'/>
               </form>
           </div>
            </div>
            <div className="footer">
           <p>---------New to ema-john?---------</p>
               <Link to = "/register" className='register'>Create your Emajohn account</Link>
               <br />
               <br />
               <button className='regular-btn' onClick={handleGoogleLogin}>Google Sign-in</button>
           </div>
        </div>
    );
};

export default Login;