import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div className="HomePage">
        <h3>Welcome!</h3>
        <Link to='/login'>Login</Link><br></br> 
        <Link to='/signup'>Sign Up Here</Link>
        </div>
    )
}
export default HomePage;