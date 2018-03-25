import React, { Component } from 'react';
import FadeUnit from './FadeUnit';

export default class AnimatedWord extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  render() {
    const string = this.props.children;
    const fadecomponentsArray = [];
    for (let i = 0; i < string.length; i++) {
      fadecomponentsArray.push(
        <FadeUnit color={this.props.color} fontSize={this.props.fontSize} show={this.state.show} delay={300 + i * 20 + this.props.offset} increment={1}>
          {string.charAt(i)}
        </FadeUnit>
      )
    }
    return(
      <span style={{display: "inline-block"}}>
        {fadecomponentsArray}
      </span>
    )
  }
}
