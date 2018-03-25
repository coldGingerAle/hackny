import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Page1 extends Component {
  render() {
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    var cn = "card";
    const strings = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    const divs = [];
    for (let i = 0; i < 81; i++) {
      let animateType;
      if (i % 3 == 0) {
        animateType="fade-right";
      } else if (i % 3 == 1) {
        animateType="fade-down";
      } else {
        animateType="fade-left";
      }
      divs.push(
        <div key={i} data-aos={animateType} data-aos-easing="linear" data-aos-duration="500" style={[styles.testing, {backgroundColor: getRandomColor()}]}>
          {strings[i % 9]}
        </div>
      )
    }
    return (
      <div style={styles.base}>
        <div className={cn} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" style={styles.animate}>
          Hello World
        </div>
        {divs}
      </div>
    );
  }
}

export default Page1 = Radium(Page1);

var styles = {
  base: {
    marginTop: '-100px !important',
    paddingTop: '0px !important',
    background: 'red',
    ':hover': {
    },
    minHeight: '100vh',
    transition: 'transform 1s'
  },
  space: {
    background: 'green',
    minHeight: '100vh'
  },
  animate: {
    background: 'blue',
    color: 'white',
    fontSize: '200px',
    textAlign: 'center',
    lineHeight: '100vhpx',
    height: '100vh',
    width: '100vw'
  },
  testing: {
    background: 'white',
    color: 'black',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '200px',
    height: '33vh',
    width: '33vw',
    float: 'left',
    ':hover': {
      background: 'red',
      fontSize: '100px',
      borderRadius: '50%',
      color: 'white'
    },
    transition: 'all 2s ease-in-out',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
}
