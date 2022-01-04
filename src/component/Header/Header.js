import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = "top">
            <img src= { logo } alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                <NavLink to="/login">Login </NavLink>
                <NavLink to="/register">New Account </NavLink>
                </nav>
        </div>
    );
};

export default Header;