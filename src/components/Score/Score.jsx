import React from "react";

const Score = (props) => {
  return (
    <div>
      {props.days.map((day) => {
        const yesterday = new Date(
          Date.now() - 1 * 24 * 60 * 60 * 1000
        ).toDateString();
        let currDay = new Date(day.date);
        currDay = currDay.toDateString();
        if (currDay === yesterday) {
          return <h1>{Math.floor(day.score)}</h1>;
        }
      })}
    </div>
  );
};

export default Score;
