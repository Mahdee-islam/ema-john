import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div >
            <div className="main-section">
            <h2>Create account</h2>
            <div className="register-form">
            <form onSubmit="">
                <input type="email"  placeholder="Your Email" />
                <br />
                <input type="password"  placeholder="Your password" />
                <br />
                <input type="password"  placeholder="Re-enter password" />
                <br />
                <input type="submit" value="Continue" className='regular-btn' />
            </form>
            </div>
            <div className="footer">
                <p>Already have an account?  <Link to="/login">Log-in</Link> </p>
                <button className='regular-btn'>Google Sign-in</button>
               
            </div>
            </div>
        </div>
    );
};

export default Register;