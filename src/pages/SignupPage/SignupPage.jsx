import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = (props) => {
    return (
        <div className="SignupPage">
        <p>Hi I'm Signup Page</p>
        <Link to='/'>Home</Link>
        </div>
    )
}

export default SignupPage;