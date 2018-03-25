import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import BlandFade from './BlandFade';
import AboutComponent0 from './AboutComponent0';
import AboutComponent1 from './AboutComponent1';
import AboutComponent2 from './AboutComponent2';
import { Transition } from 'react-transition-group'

class About0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      active: "Sign Up"
    }
    this.setActive = this.setActive.bind(this);
  }
  setActive = (e) => {
    this.setState({
      active: e.target.innerHTML
    })
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
   render() {
    const text = "How this works.";
    return (
      <BlandFade show={this.state.show}>
        <div style={styles.form}>
          <h1 className="strokeme" style={{color: '#1B6FBC', marginBottom: 50, paddingTop: 50}}>How We Can Help You</h1>
         <div className="row">
          <AboutComponent0 active={this.state.active} setActive={this.setActive}/>
          <AboutComponent1 active={this.state.active} setActive={this.setActive}/>
          <AboutComponent2 active={this.state.active} setActive={this.setActive}/>
         </div>
        </div>
      </BlandFade>
    );
  }
}

export default About0 = Radium(About0);

var styles = {
  form: {
    width: '100vw',
    minHeight: '50vh',
    margin: '0 auto',
    padding: '100px',
    background: '#89BEDE',
    backgroundSize: 'cover',
    fontSize: '2em',
    textAlign: 'center',
    paddingTop: 0
  },
  begin: {
    color: 'white',
    fontSize: '20px',
    margin: "10px",
    width: "200px",
    ':hover': {
      fontSize: '25px',
      cursor: 'pointer'
    },
    transition: 'all .5s ease-in-out'
  }
}
