import React from 'react';


function Banner(props) {
    let date = props.date
    return (
        <>
        <h3>{`Its ${date}`}</h3>
        <h3>Yesterday's Wellness Score</h3>
        </>
    );
}

export default Banner;