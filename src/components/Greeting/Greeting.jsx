import React from 'react';
import styles from './Greeting.css'

function Greeting(props) {
    const name = props.name;
    return (
        <div className="Greeting">
        <h2>Hello, { name } </h2>
        </div>
    );
}

export default Greeting;