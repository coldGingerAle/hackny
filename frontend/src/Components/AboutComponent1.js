import React, { Component } from "react";
import Radium from 'radium';

class AboutComponent1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={styles.about} className="col-md-4 animated bounceInDown">
        <div style={styles.imgContainer} className="card3">
          <div style={styles.innerContainer}>
            <img style={{height: 285}} className="img-fluid" src="Img/calendar.png"/>
          </div>
        </div>
        <div style={styles.textBox}>
          <span className="badge btn btn-primary" style={{float: 'left', margin: 20}}>Step 2</span> <span onClick={this.props.setActive} style={{marginLeft: -120}}>View Projections</span>
        </div>
      </div>
    )
  }
}

export default Radium(AboutComponent1);

var styles = {
  imgContainer: {
    backgroundColor: 'white',
    maxHeight: 300
  },
  innerContainer: {
    backgroundColor: '#89BEDE',
    borderRadius: '50%'
  },
  textBox: {
    backgroundColor: '#5CB85C',
    height: 70,
    color: 'white',
    verticalAlign: 'middle',
    lineHeight: '70px'
  }
}
