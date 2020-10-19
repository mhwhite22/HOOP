import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataForm from '../../components/DataForm/DataForm';

class DataFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
      return (
        <div className='DataFormPage'>
            <DataForm { ...this.props } />
            <Link to='/user'>Back</Link>
        </div>
      );
    }
  }

  export default DataFormPage;