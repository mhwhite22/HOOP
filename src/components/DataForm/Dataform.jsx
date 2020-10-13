import React, { Link, Component } from 'react';

class DataForm extends Component {
    state = {
        formData: { 
            date: '',
            breaks: null,
            meals: null,
            exercise: null
        }   
    }
    
    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await 
            this.props.handleAddDay(this.state.formData);
            this.props.days.push();
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
      }

    render() {
        return (
            <div>
            <header className="header-footer">Add Today's Data</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="col-sm-12">
                    <p>Date</p>
                  <input type="text" className="form-control" placeholder="Date" value={this.state.date} name="name" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                    <p>How many hours of sleep did you get?</p>
                  <input type="sleep" className="form-control" placeholder="sleep" value={this.state.sleep} name="sleep" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                    <p>How many times did you take at least a ten minute break during the work day?</p>
                  <input type="breaks" className="form-control" placeholder="breaks" value={this.state.breaks} name="breaks" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                    <p>How many meals did you eat today?</p>
                  <input type="meals" className="form-control" placeholder="meals" value={this.state.meals} name="meals" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                    <p>How many minutes of exercise did you get today?</p>
                  <input type="exercise" className="form-control" placeholder="exercise" value={this.state.exercise} name="exercise" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp; 
                  {/* <Link to='/user'>Cancel</Link> */}
                </div>
              </div>
            </form>
          </div>
    

        )
    }
}

export default DataForm;


