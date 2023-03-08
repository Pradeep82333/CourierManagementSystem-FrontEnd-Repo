import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './delete.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/delete/${this.state.id}`)
    .then(response => {
      toast.success('Record deleted successfully!');
    })
    .catch(error => {
      toast.error('Error deleting record!');
    });
  };

  render() {
    return (
      <>
      <ToastContainer/>
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <button className="delete-button" type="submit" onClick={this.handleCreate}>
          Delete Record
        </button>
        <Link to="/Update">
          <button className="back3" type="submit">Back</button>
        </Link>
      </form>
      </>
    );
  }
}

export default DeleteRecord;
