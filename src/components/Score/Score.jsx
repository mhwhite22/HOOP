import React from 'react';


const Score = (props) => {
    return (
        <div>
        {props.days.map(day =>
            <h1>{Math.floor(day.score)}</h1>
        )}
        </div>
    );
}

export default Score;