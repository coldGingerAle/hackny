import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import BlandFade from './BlandFade';
import { Transition } from 'react-transition-group'

class Begin0 extends Component {
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
    const text = "Receive,  Reciprocate,  Rate!";
    return (
      <BlandFade show={this.state.show}>
        <div style={styles.form}>
          <div>
           <AnimatedText fontSize={"2em"} color={"#1B6FBC"}>{text}</AnimatedText>
           </div>
           <div style={{textAlign: "center", marginTop: 100}}>
             <div>
               <div className="btn btn-info col-xs-6" key={0} onClick={this.props.nextStep} style={styles.begin}>
                <i style={{color: 'white'}} className="fa fa-user-plus" aria-hidden="true"></i> Sign Up
               </div>
               <div className="btn btn-primary col-xs-6" key={1} onClick={this.props.nextStep} style={styles.begin}>
                <i style={{color: 'white'}} className="fa fa-sign-in" aria-hidden="true"></i> Log In
               </div>
             </div>
           </div>
        </div>
      </BlandFade>
    );
  }
}

export default Begin0 = Radium(Begin0);

var styles = {
  form: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    padding: '100px',
    background: 'url(http://careerconnections.nj.gov/careerconnections/images/hero/RightCareer-480922793.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    fontSize: '2em',
    textAlign: 'center'
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
