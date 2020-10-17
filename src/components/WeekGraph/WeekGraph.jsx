import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';



const WeekGraph = (props) => {

    function formatDate(D){
        let currDay = D.toString()
        currDay = currDay.slice(0,10)
        const currYear = currDay.slice(0,4).trim()
        const currMonth = currDay.slice(5,7).trim()
        const currDate = currDay.slice(8,11).trim()
        const currDateStr = new Date(currYear, (currMonth-1), currDate).toDateString()
        return currDateStr
    }

    let weekDates = []
    let weekDayNames = []
    let weekScores = [0, 0, 0, 0, 0, 0, 0]
    const weekDayIdx = {
       'Sun': 0,
       'Mon': 1,
       'Tue': 2,
       'Wed': 3,
       'Thu': 4,
       'Fri': 5,
       'Sat': 6,
    }
    let acc = 0

    while (acc < 7) {
        let yesterday = new Date(Date.now() - acc * 24 * 60 * 60 * 1000).toDateString()
        // console.log(`this is yesterday: ${yesterday}`)
        const lookup = yesterday.slice(0,3).toString()
        // console.log(`this is lookup: ${lookup}`)
        weekDayNames.push(weekDayIdx[lookup])
        weekDates.push(yesterday)
        acc++
    }

    props.days.map((day, i) => {
        let thisDay = formatDate(day.date).slice(0,3).toString()
        // console.log(`this is thisday ${thisDay}`)
        // weekScores at the position in which thisDay holds in WeekDayNames
        // console.log(weekDayIdx[thisDay])
        const dayMatch = weekDayNames.indexOf(weekDayIdx[thisDay])
        // console.log(`this is dayMatch ${dayMatch}`)
        weekScores[dayMatch] = Math.floor(day.score)

    })
    // console.log(`this is weekDates: ${weekDates}`)
    // console.log(`this is  weekdayNames: ${weekDayNames}`)
    // console.log(`this is weekScores ${weekScores}`)
        
        // props.days.map((day, i) => {
        // let currDay = day.date.toString()
        // currDay = currDay.slice(0,10)
        // const currYear = currDay.slice(0,4).trim()
        // const currMonth = currDay.slice(5,7).trim()
        // const currDate = currDay.slice(8,11).trim()
        // const currDateStr = new Date(currYear, (currMonth-1), currDate).toDateString()

        // if (weekDates.includes(currDateStr)){
        //     weekScores[i] = (Math.floor(day.score))
        // }
    //})
    

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