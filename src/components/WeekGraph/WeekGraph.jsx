import React from "react";
import { Bar } from "react-chartjs-2";
import { formatDate } from "../../utils/utilities";
import styles from "./WeekGraph.css";

const WeekGraph = (props) => {
  let weekDates = [];
  let weekDayNames = [];
  let weekScores = [0, 0, 0, 0, 0, 0, 0];
  const weekDayIdx = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  let acc = 0;

  while (acc < 7) {
    let yesterday = new Date(
      Date.now() - acc * 24 * 60 * 60 * 1000
    ).toDateString();
    const lookup = yesterday.slice(0, 3).toString();
    weekDayNames.push(weekDayIdx[lookup]);
    weekDates.push(yesterday);
    acc++;
  }

  props.days.map((day, i) => {
    let thisDay = formatDate(day.date).slice(0, 3).toString();
    const dayMatch = weekDayNames.indexOf(weekDayIdx[thisDay]);
    return (weekScores[dayMatch] = Math.floor(day.score));
  });

  const state = {
    labels: weekDates,
    datasets: [
      {
        label: `This Week's Wellness`,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weekScores,
      },
    ],
  };

  return (
    <div className="chartCard card transparent">
      <div className="chart">
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: `This Week's Wellness`,
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
};

export default WeekGraph;
