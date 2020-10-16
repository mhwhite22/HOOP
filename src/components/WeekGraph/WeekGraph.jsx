import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';



const WeekGraph = (props) => {
    let weekDates = []
    let acc = 0
    while (acc < 7) {
        let yesterday = new Date(Date.now() - acc * 24 * 60 * 60 * 1000).toDateString()
        weekDates.push(yesterday)
        acc++
    }
    let weekScores = []
        props.days.map((day, i) => {
        let currDay = day.date.toString()
        currDay = currDay.slice(0,10)
        const currYear = currDay.slice(0,4).trim()
        const currMonth = currDay.slice(5,7).trim()
        const currDate = currDay.slice(8,11).trim()
        const currDateStr = new Date(currYear, (currMonth-1), currDate).toDateString()

        if (weekDates.includes(currDateStr)){
            weekScores.push(Math.floor(day.score))
        }
    })

    const state = {
        labels: weekDates,
        datasets: [
          {
            label: `This Week's Wellness`,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: weekScores,
          }
        ]
      }

    return (
        <div>
        <Bar
            data={state}
            options={{
                title:{
                    display: true,
                    text:`This Week's Wellness`,
                    fontSize: 20
                },
                legend: {
                    display: false,
                    position: 'right'
                }
            }}
            />
        </div>
    )
}

export default WeekGraph;