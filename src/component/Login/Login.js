import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
               <button className='regular-btn'>Google Sign-in</button>
           </div>
        </div>
    );
};

export default Login;