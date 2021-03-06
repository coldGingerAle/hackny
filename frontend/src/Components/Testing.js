import React, { Component } from 'react';
import FadeUnit from '../Components/FadeUnit';
import AnimatedText from '../Components/AnimatedText';
import AnimatedWord from '../Components/AnimatedWord';
import { Link } from 'react-router-dom';
import Begin1 from './Begin1';
import Begin0 from './Begin0';
import Begin2 from './Begin2';
import Begin3 from './Begin3';
import Begin4 from './Begin4';
import Begin5 from './Begin5';
import Resources from './Resources';
import Sources from './Sources';
import axios from 'axios';
import About0 from './About0';

export default class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: false,
      step: 0,
      token: ""
    })
    this.nextStep = this.nextStep.bind(this);
    this.goToResources = this.goToResources.bind(this);
    this.goToRateResources = this.goToRateResources.bind(this);
  }
  componentDidMount() {
    this.setState({
      show: true
    })
    const url = "http://ec2-54-193-36-147.us-west-1.compute.amazonaws.com:8081/login";
    axios.post(url, {
      email: "asdasd",
      password: "kkkkk1"
    }).then(response => {
      axios.defaults.headers.common['x-access-token'] = response.data.token;
      console.log(response);
      this.setState({
        token: response.data.token
      })
    }).catch(error => {
      console.log(error);
    })
  }
  nextStep = () => {
    this.setState({
      step: (this.state.step + 1) % 6
    })
  }
  goToResources = () => {
    this.setState({
      step: 6
    })
  }
  goToRateResources = () => {
    this.setState({
      step: 7
    })
  }
  render() {
    let component;
    switch(this.state.step) {
      case 0:
        component = <Begin0 nextStep={this.nextStep} />
        break;
      case 1:
        component = <Begin1 nextStep={this.nextStep} />;
        break;
      case 2:
        component = <Begin2 nextStep={this.nextStep} />;
        break;
      case 3:
        component = <Begin3 nextStep={this.nextStep} />;
        break;
      case 4:
        component = <Begin4 nextStep={this.nextStep} />;
        break;
      case 5:
        component = <Begin5 goToResources={this.goToResources} goToRateResources={this.goToRateResources} nextStep={this.nextStep} />;
        break;
      case 6:
        component = <Sources token={this.state.token}/>;
        break;
      case 7:
        component = <Resources token={this.state.token}/>;
        break;
    }
    return(
      <div>
        {component}
        <About0 />
      </div>
    )
  }
}
