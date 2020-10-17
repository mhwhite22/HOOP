import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div className="HomePage">
        <h3>Welcome to HOOP</h3>
        <h5>Helping you manage your wellness</h5>
        <Link to='/login'>Login</Link><br></br> 
        <Link to='/signup'>Sign Up Here</Link>
        </div>
    )
}
export default HomePage;