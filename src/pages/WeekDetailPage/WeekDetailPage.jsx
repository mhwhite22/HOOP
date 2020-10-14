import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../../components/Greeting/Greeting';
import Banner from '../../components/Banner/Banner';

const WeekDetailPage = (props) => {
    return (
        <div className="WeekDetailPage">
        <Greeting name={props.name}/>
        <h5>This is the Week Detail Page</h5>
        <Link className='btn btn-default DayDetailPage-link-margin' to='/day'>View Today's Data</Link>
        <br></br>
        <Link className='btn btn-default UserPage-link-margin' to='/user'>Home</Link>
        </div>
    )
}

export default WeekDetailPage;
