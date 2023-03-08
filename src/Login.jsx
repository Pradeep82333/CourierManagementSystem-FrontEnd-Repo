import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      cust_name: '',
      saddress: '',
      raddress: '',
      rnumber: '',
      snumber: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlecust_nameChange = (event) => {
    this.setState({ cust_name: event.target.value });
  };

  handlesaddressChange = (event) => {
    this.setState({ saddress: event.target.value });
  };

  handleraddressChange = (event) => {
    this.setState({ raddress: event.target.value });
  };

  handlernumberChange = (event) => {
    this.setState({ rnumber: event.target.value });
  };

  handlesnumberChange = (event) => {
    this.setState({ snumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      cust_name: this.state.cust_name,
      saddress: this.state.saddress,
      raddress: this.state.raddress,
      rnumber: this.state.rnumber,
      snumber: this.state.snumber
    };

    axios.post('http://127.0.0.1:8080/addDetails', data)
    .then(response => {
      toast.success("Record created successfully!");
    })
    .catch(error => {
      console.log(error);
    });
    
  };

  
  render() {
    return (<>
    <ToastContainer/>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <label className="sign-label">Customer Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.cust_name}
          onChange={this.handlecust_nameChange}
        />

        <label className="sign-label">Sender Address</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.saddress}
          onChange={this.handlesaddressChange}
        />

        <label className="sign-label">Receiver Address</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.raddress}
          onChange={this.handleraddressChange}
        />

        <label className="sign-label">Receiver Number</label>
        <input
          className="sign-input"
          type="tel"
          value={this.state.rnumber}
          onChange={this.handlernumberChange}
        />

        <label className="sign-label">Sender Number</label>
        <input
          className="sign-input"
          type="tel"
          value={this.state.snumber}
          onChange={this.handlesnumberChange}
        />


        <button className="login-button" type="submit" onClick={this.handleCreate}>
          Create
        </button>
        <Link to="/Showdata">
          <button className="login-button" type="submit">Next</button>
        </Link>
        
      </form>
      </>
    );
  }
}

export default Login;