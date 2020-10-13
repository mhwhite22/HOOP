import React, { Component } from 'react';
import DataForm from '../../components/DataForm/Dataform';

class DataFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
  
    render() {
      return (
        <div className='DataFormPage'>
            <h5>Hi I'm DataFormPage</h5>
            <DataForm { ...this.props } />
        </div>
      );
    }
  }

  export default DataFormPage;