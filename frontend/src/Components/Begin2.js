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
    this.state = {
      show: false,
      interests: ["UI/UX", "Databases", "Data Science", "Cloud", "Cybersecurity", "Artificial Intelligence"],
      selected: [],
    }
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  select = (e) => {
    let temp = this.state.selected.slice();
    temp.push(e.target.innerHTML);
    this.setState({
      selected: temp
    })
  }
  deselect = (e) => {
    let temp = this.state.selected.slice();
    var index = temp.indexOf(e.target.innerHTML);
    if (index > -1) {
      temp.splice(index, 1);
    }
    this.setState({
      selected: temp
    })
  }
   render() {
    const text = "Choose Your Interests";
    const items = this.state.interests.map(item => {
      const isSelected = this.state.selected.includes(item);
      return <div key={item} onClick={isSelected ? this.deselect : this.select} style={isSelected? styles.selectedBox : styles.itemBox} className="animated bounceInDown">{item}</div>
    })
    return (
      <BlandFade show={this.state.show}>
        <div style={styles.form}>
        <div style={{textAlign: "center", marginTop: -10}}>
          <AnimatedText fontSize={"2em"} color={"#1B6FBC"}>{text}</AnimatedText>
         </div>
        {items}
        <div className="col-md-6 offset-md-3" style={{textAlign: "center"}}>
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
    fontSize: "0.9em",
    marginTop: "10px",
    ':hover': {
      fontSize: '1em',
      cursor: 'pointer'
    },
    transition: 'all .5s ease-in-out'
  },
  itemBox: {
    backgroundColor: '#FC5F2A',
    height: '100px',
    borderRadius: '20px',
    width: '25vw',
    padding: '20px',
    margin: '10px',
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
    width: '25vw',
    padding: '20px',
    margin: '10px',
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
