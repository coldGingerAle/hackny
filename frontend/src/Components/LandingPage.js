import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import { Transition } from 'react-transition-group'
import Begin1 from './Begin1';
import Begin0 from './Begin0';
import Begin2 from './Begin2';
import Begin3 from './Begin3';

class LandingPage extends Component {
  componentDidMount() {
    this.state = {
      email: "Email",
      password: "Password",
      token: "",
      show: false,
      flow: 0
    }
    this.handleFlow = this.handleFlow.bind(this);
    console.log(this.state.flow);
  }

  handleFlow = () => {
    let curflow = this.state.flow;
    this.setState({
      flow: (curflow + 1)
    })
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
    let component;
    switch(this.state.flow) {
      case 0:
        component = <Begin0 />;
        break;
      case 1:
        component = <Begin1 />;
        break;
     }
    return (
      <div>
        {component}
        <div onClick={this.handleFlow} style={styles.begin}>
         <i style={{color: 'white'}} className="fa fa-rocket" aria-hidden="true"></i> Let us begin!
        </div>
        Hello World
      </div>
    );
  }
}

export default LandingPage = Radium(LandingPage);

var styles = {
  form: {
    width: '100vw',
    margin: '0 auto',
    background: '#1B6FBC',
    fontSize: '2em'
  },
  begin: {
    color: 'white',
    ':hover': {
      fontSize: '1.5em',
      cursor: 'pointer'
    },
    transition: 'all .5s ease-in-out'
  }
}
