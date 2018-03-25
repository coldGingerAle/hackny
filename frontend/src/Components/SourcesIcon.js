import React, { Component } from "react";
import Radium from 'radium';

class SourcesIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div onClick={this.props.goToRateResources} style={styles.about} className="col-md-2 animated bounceInLeft">
        <div style={styles.imgContainer} className="card3">
          <div style={styles.innerContainer}>
            <img style={{height: 300}} className="img-fluid" src={this.props.src}/>
          </div>
        </div>
        <div className="text-center" style={styles.textBox}>
          <span onClick={this.props.setActive} style={{textAlign: 'center'}}>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Radium(SourcesIcon);

var styles = {
  imgContainer: {
    backgroundColor: 'white',
    maxHeight: 500,
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
  },
  about: {
    margin: 40,
    marginTop: 0
  }
}
