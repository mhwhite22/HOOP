import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DayGraph from '../../components/DayGraph/DayGraph';
import UpdateForm from '../../components/UpdateForm/UpdateForm';


class UpdatePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state
    }
    findDayById(id){
       const dayObj = this.props.days.filter((day) => {
            return day._id === id
        })
        console.log(dayObj)
        return dayObj
    }
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