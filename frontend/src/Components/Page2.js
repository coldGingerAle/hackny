import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';

class Page2 extends Component {
  componentDidMount() {
    this.state = {
      email: "Email",
      password: "Password",
      token: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var url = "http://ec2-54-193-36-147.us-west-1.compute.amazonaws.com:8080/login";
    axios.post(url, {
      email: "kkka1",
      password: "asdasd"
    }).then(response => {
      this.setState({
        token: response.data.token
      })
      console.log(response);
      console.log(this.state.token);
    }).catch(error => {
      console.log(error);
    })
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
   render() {
    return (
      <div style={styles.form}>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h1>{this.state.email}</h1>
          <h1>{this.state.password}</h1>
          <label for="exampleInputEmail1">Email address</label>
          <input value={this.state.email} onChange={this.handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input value={this.state.password} onChange={this.handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Page2 = Radium(Page2);

var styles = {
  form: {
    width: '33vw',
    margin: '0 auto',
    padding: '100px'
  }
}
