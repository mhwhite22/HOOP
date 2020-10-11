import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className="LoginPage">
        <p>Hi I'm Login Page</p>
        <Link to='/'>Home</Link>
        </div>
    )
}

export default LoginPage;