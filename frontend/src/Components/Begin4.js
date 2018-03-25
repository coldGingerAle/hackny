import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import BlandFade from './BlandFade';
import { Transition } from 'react-transition-group';
import SkillComponent from './SkillComponent';

class Begin4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      educationLevels: ["High School", "Associates", "Bachelor's", "Master's", "Doctoral"],
      selected: "High School"
    }
  }
  select = (e) => {
    this.setState({
      selected: e.target.innerHTML
    })
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
   render() {
    const text = "What  is  your  highest  attained  educational  level?";
    const educationArray = this.state.educationLevels.map(level => {
      return (
        <div className="col-md-2">
         <div onClick={this.select} key={level} className="card3" style={level == this.state.selected ? styles.selectedBox : styles.itemBox}>
          {level}
         </div>
        </div>
      )
    })
    return (
      <BlandFade show={this.state.show}>
        <div style={styles.form}>
        <div style={{textAlign: "center"}}>
          <AnimatedText fontSize={"2em"} color={"#1B6FBC"}>{text}</AnimatedText>
         </div>
         <div className="row">
          {educationArray}
         </div>
         <div className="col-md-6 offset-md-3" style={{textAlign: "center", marginTop: -30}}>
           <div>
             <div className="btn btn-success animated bounceInLeft" key={1} onClick={this.props.nextStep} style={styles.begin}>
              <i style={{color: 'white'}} className="fa fa-hand-o-right" aria-hidden="true"></i> Next
             </div>
           </div>
         </div>
        </div>
      </BlandFade>
    );
  }
}

export default Begin4 = Radium(Begin4);

var styles = {
  form: {
    width: '100vw',
    height: '100vh',
    padding: 0,
    margin: 0,
    paddingTop: 50,
    background: '#89BEDE',
    fontSize: '2em'
  },
  begin: {
    color: 'white',
    fontSize: "0.9em",
    marginTop: "60px",
    ':hover': {
      fontSize: '1em',
      cursor: 'pointer'
    },
    transition: 'all .25s ease-in-out'
  },
  itemBox: {
    backgroundColor: '#FC5F2A',
    height: '100px',
    borderRadius: '20px',
    width: '15vw',
    padding: '20px',
    marginLeft: '160px',
    marginTop: '50px',
    float: 'left',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    ':hover': {
      fontSize: '1.2em',
      cursor: 'pointer',
      backgroundColor: '#FFA500',
      transition: 'all .5s ease-in-out'
    }
  },
  selectedBox: {
    backgroundColor: '#FFA500',
    height: '100px',
    borderRadius: '20px',
    width: '15vw',
    padding: '20px',
    marginLeft: '160px',
    marginTop: '50px',
    float: 'left',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    ':hover': {
      fontSize: '1.2em',
      cursor: 'pointer',
      backgroundColor: '#FFA500',
      transition: 'all .5s ease-in-out'
    }
  }
}
