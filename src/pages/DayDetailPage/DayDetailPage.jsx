import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../../components/Greeting/Greeting';
import Banner from '../../components/Banner/Banner';



const DayDetailPage = (props) => {
    return (
        <div className="DayDetailPage">
        <Greeting name={props.name}/>
        <h5>This is the Day Detail Page</h5>
        <Link className='btn btn-default WeekDetailPage-link-margin' to='/week'>View This Week's Data</Link>
        <br></br>
        <Link className='btn btn-default UserPage-link-margin' to='/user'>Home</Link>
        </div>
    )
}

export default DayDetailPage;