import React, { Component } from 'react';
import FadeUnit from '../Components/FadeUnit';
import AnimatedText from '../Components/AnimatedText';
import AnimatedWord from '../Components/AnimatedWord';
import { Link } from 'react-router-dom';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: false,
      step: 0
    })
    this.nextStep = this.nextStep.bind(this);
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  nextStep = () => {
    this.setState({
      step: (this.state.step + 1) % 3
    })
  }
  render() {
    }
    return(
      <div>
      
      </div>
    )
  }
}
