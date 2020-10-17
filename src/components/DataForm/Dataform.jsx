import React, { Component } from 'react';
import {getCurrentDate} from '../../utils/utilities';

let today = getCurrentDate(); 

class DataForm extends Component {
    state = {
        formData: { 
            date: today,
            sleep: '',
            breaks: '',
            meals: '',
            exercise: '',
        }   
    }

    
    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await 
            this.props.handleAddDay(this.state.formData);
        } catch (err) {
            console.log(err)
        }
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
        });
      };



    render() {
        return (
            <div>
            <header className="header-footer">Add Today's Data</header>
            <form ref={this.formRef} className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <p>Date</p>
                <div className="col-sm-12">
                  <input type="text" className="form-control" placeholder="date" value={this.state.formData.date} name="date" onChange={this.handleChange} />
                </div>
              </div>
              <p>How many hours of sleep did you get?</p>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="sleep" className="form-control" placeholder="sleep" value={this.state.formData.sleep} name="sleep" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                    <p>How many times did you take at least a ten minute break during the work day?</p>
                <div className="col-sm-12">
                  <input type="breaks" className="form-control" placeholder="breaks" value={this.state.formData.breaks} name="breaks" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                    <p>How many meals did you eat today?</p>
                <div className="col-sm-12">
                  <input type="meals" className="form-control" placeholder="meals" value={this.state.formData.meals} name="meals" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                    <p>How many minutes of exercise did you get today?</p>
                <div className="col-sm-12">
                  <input type="exercise" className="form-control" placeholder="exercise" value={this.state.formData.exercise} name="exercise" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <button className="btn btn-default">Submit</button>&nbsp;&nbsp; 
                  {/* <Link to='/user'>Cancel</Link> */}
                </div>
              </div>
            </form>
          </div>
        )
    }
}

export default DataForm;


