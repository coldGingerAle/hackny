import React, { Component } from "react";
import Radium from 'radium';

class AboutComponent0 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={styles.about} className="col-md-4 animated bounceInLeft">
        <div style={styles.imgContainer} className="card3">
          <div style={styles.innerContainer}>
            <img className="img-fluid" src="Img/Signing-Up.jpg"/>
          </div>
        </div>
        <div style={styles.textBox}>
          <span className="badge btn btn-primary" style={{float: 'left', margin: 20}}>Step 1</span> <span onClick={this.props.setActive} style={{marginLeft: -150}}>Sign Up</span>
        </div>
      </div>
    )
  }
}

export default Radium(AboutComponent0);

var styles = {
  imgContainer: {
    backgroundColor: 'white',
    maxHeight: 300,
    overflow: 'hidden'
  },
  innerContainer: {
    backgroundColor: '#89BEDE',
    borderRadius: '50%'
  },
  textBox: {
    height: 70,
    color: 'white',
    verticalAlign: 'middle',
    lineHeight: '70px',
    backgroundColor: '#5CB85D'
  }
}
