import React, { Component } from 'react';
import Radium from 'radium';

class SkillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      level: 1
    })
    this.setLevel = this.setLevel.bind(this);
  }
  setLevel = (e) => {
    this.setState({
      level: parseInt(e.target.innerHTML)
    });
  }
  render() {
    const squares = [];
    for (let i = 1; i < 6; i++) {
      squares.push(
        <div key={i} className="card3" onClick={this.setLevel} style={i <= this.state.level ? styles.coloredbox : styles.levelbox}>
          {i}
        </div>
      )
    }
    return(
      <div>
        <div>
          <div style={{marginLeft: 180}}>
            <div style={{float: "left", margin: 10, fontSize: 50, width: 300}} className="strokeme">
              {this.props.skill}
            </div>
            {squares}
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    )
  }
}

export default SkillComponent = Radium(SkillComponent);

var styles = {
  levelbox: {
    height: '60px',
    width: '60px',
    borderRadius: '10px',
    backgroundColor: 'white',
    float: 'left',
    marginTop: 20,
    marginRight: 20,
    textAlign: 'center',
    verticalAlign: "middle",
    lineHeight: '60px',
    ':hover': {
      cursor: 'pointer'
    }
  },
  coloredbox: {
    height: '60px',
    width: '60px',
    borderRadius: '10px',
    backgroundColor: '#FC5F2A',
    float: 'left',
    marginTop: 20,
    marginRight: 20,
    textAlign: 'center',
    verticalAlign: "middle",
    lineHeight: '60px',
    color: 'white',
    ':hover': {
      cursor: 'pointer'
    }
  }
}
