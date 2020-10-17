import React from 'react';
import {Bar} from 'react-chartjs-2';


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
        <div>
        <Bar
            data={state}
            options={{
                title:{
                    display: true,
                    text:'day data',
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

export default DayGraph;