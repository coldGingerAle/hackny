import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import BlandFade from './BlandFade';
import { Transition } from 'react-transition-group'

class Begin1 extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
   render() {
    const text = "Welcome to page 2!";
    return (
      <BlandFade show={this.state.show}>
        <div className="row" style={styles.form}>
          <div className="col-md-5 offset-md-1 animated bounceInLeft">
            <div className="form">
            <div className="form-group">
              <label style={{color: "white"}} for="name" className="strokeme">Name</label>
              <input style={{width: 500}} type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/>
            </div>
            <div class="form-group">
              <label style={{color: "white"}} for="college" className="strokeme">College</label>
              <input style={{width: 500}} type="text" class="form-control" id="college" placeholder="Enter college"/>
            </div>
            <div class="form-group">
              <label style={{color: "white"}} for="email" className="strokeme">Email</label>
              <input style={{width: 500}} type="email" class="form-control" id="email" placeholder="Enter e-mail"/>
            </div>
            </div>
          </div>
          <div className="col-md-5 animated bounceInRight">
            <div className="form">
            <div className="form-group">
              <label style={{color: "white"}} for="username" className="strokeme">Username</label>
              <input style={{width: 500}} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div class="form-group">
              <label style={{color: "white"}} for="exampleInputPassword1" className="strokeme">Password</label>
              <input style={{width: 500}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
              <label style={{color: "white"}} for="exampleInputPassword1" className="strokeme">Confirm Password</label>
              <input style={{width: 500}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div style={{textAlign: "left"}}>
              <div>
                <div className="btn btn-success" key={1} onClick={this.props.nextStep} style={styles.begin}>
                 <i style={{color: 'white'}} className="fa fa-hand-o-right" aria-hidden="true"></i> Next
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </BlandFade>
    );
  }
}

export default Begin1 = Radium(Begin1);

var styles = {
  form: {
    width: '100vw',
    height: '100vh',
    padding: 200,
    paddingTop: 50,
    background: '#89BEDE',
    fontSize: '2em'
  },
  begin: {
    color: 'white',
    fontSize: "0.8em",
    ':hover': {
      fontSize: '0.9em',
      cursor: 'pointer'
    },
    transition: 'all .5s ease-in-out'
  }
}
