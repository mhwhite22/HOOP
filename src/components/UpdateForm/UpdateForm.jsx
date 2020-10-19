import React, { Component } from "react";
import styles from "../DataForm/DataForm.css";

class UpdateForm extends Component {
  state = {
    invalidForm: false,
    formData: null,
  };
  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateDay(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValididty(),
    });
  };

  render() {
    return <h1>Edit Data for {}</h1>;
  }
}

export default UpdateForm;
