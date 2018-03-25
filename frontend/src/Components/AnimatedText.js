import React, { Component } from 'react';
import FadeUnit from './FadeUnit';
import AnimatedWord from './AnimatedWord';

export default class AnimatedText extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 2000) {
        this.setState({
          show: true
        })
      }
    }


  render() {
    const string = this.props.children;
    let re = /\s/g;
    let wordsArray = string.split(re);
    let wordsFadeComponentsArray = [];
    let offsetAccumulator = this.props.offsetAccumulator || 0;
    for (let i = 0; i < wordsArray.length; i++) {
      let offsetProp = i > 0 ? wordsArray[i - 1].length * 20 : 0;
      wordsFadeComponentsArray.push(
        <AnimatedWord color={this.props.color} fontSize={this.props.fontSize} offset={offsetAccumulator}>{wordsArray[i]}</AnimatedWord>
      )
      wordsFadeComponentsArray.push(
        <FadeUnit blank={true} color={this.props.color} fontSize={"0.5em"} offset={offsetAccumulator}/>
      )
      offsetAccumulator += (offsetProp + 20);
    }
    return(
      <div>
        {wordsFadeComponentsArray}
      </div>
    )
  }
}
