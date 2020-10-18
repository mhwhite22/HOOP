import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './DayGraph.css'


const DayGraph = (props) => {
        const dayData = []
        props.days.map((day) =>{
        let currentDate = new Date(day.date)
        currentDate = currentDate.toDateString()
        const yesterday = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toDateString()
        if (currentDate === yesterday) {
            dayData.push(day.sleep, day.breaks, day.meals, day.exercise)
        }
        })

   
    const state = {
        labels: ['Sleep', 'Breaks', 'Meals',
                 'Exercise'],
        datasets: [
          {
            label: 'Yesterday"s Data',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: dayData
          }
        ]
      }

    return (
        <div className="card">
        <div className="chart-container">
        <Bar
            className="chart"
            data={state}
            options={{
                title:{
                    display: true,
                    text:'',
                    fontSize: 20,
                    defaultFontFamily: "'Megrim', cursive",
                },
                legend: {
                    display: false,
                    position: 'right'
                }
            }}
            />
        </div>
        </div>

    )
}

export default DayGraph;