import React from 'react';


function Greeting(props) {
    const name = props.name;
    return (
        <h2>Hello, { name } </h2>
    );
}

export default Greeting;