import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import './Showdata.css';


class Showdata extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/fetch')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <div>
        <Link to="/Update">
          <button className="next1" type="submit">Next</button>
        </Link>
        <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Sender Address</th>
            <th>Receiver Address</th>
            <th>Receiver Number</th>
            <th>Sender Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.cust_name}</td>
              <td>{item.saddress}</td>
              <td>{item.raddress}</td>
              <td>{item.rnumber}</td>
              <td>{item.snumber}</td>
            </tr>
          ))}
        </tbody>
       </table>
       </div>
      
    );
  }
  
}

export default Showdata;
