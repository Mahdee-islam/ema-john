import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../Hook/useAuth';

import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className = "top">
            <img src= { logo } alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                {user.displayName && <span style={{
                    color: 'white',
                    fontSize: '12px'
                }}>Hello, {user.displayName} </span>}
              {user.email ?  <button onClick={logOut}>Log out</button> :  <NavLink to="/login">Login </NavLink>}
                </nav>
        </div>
    );
};

export default Header;