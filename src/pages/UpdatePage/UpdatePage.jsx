import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DayGraph from '../../components/DayGraph/DayGraph';
import UpdateForm from '../../components/UpdateForm/UpdateForm';


class UpdatePage extends Component {
    state = {
        invalidForm: false,
        formData: this.findDayById(this.props.location.state)
    }
    // findDayById(id){
    //     let dayId = null
    //     id.forEach(e => { 
    //         if (e) {
    //         dayId = e}
    //     });
    //     const dayObj = this.props.days.filter(day => day._id === dayId)
    //     console.log(dayObj)
    //     // this.props.days.map((day => {
    //     //         console.log(`this is e ${e}`)
    //     //         if (day._id === dayId) {
    //     //            return day
    //     //         }
    //     //     })
        
    // }
    render() {
      return (
        <div className='UpdatePage'>
            <h5>Hi I'm UpdatePage</h5>
            <UpdateForm {...this.props} />
            <Link to='/day'>Back</Link>
        </div>
      );
    }
}


export default UpdatePage;