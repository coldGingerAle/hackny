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
import DashboardComponent from './DashboardComponent';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

class Resources extends Component {
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
    const text = "Welcome  to  Resource  Rating!";
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
         <div className="row" style={{marginLeft: 100}}>
          <div className="card3" style={{marginTop: 40, marginLeft: 50, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>An Amazing Video</h4>
              <p>This is a description of an amazing video.</p>
              <span key={111} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={112}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Useful Video</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={113} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={114}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Fun Video</h4>
              <p>This is a description of a very fun video.</p>
              <span key={115} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={116}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Video Title</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={117} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={118}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 50, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Video Title</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={119} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={120}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Video Title</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={121} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={122}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Video Title</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={123} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={124}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
          <div className="card3" style={{marginTop: 40, marginLeft: 20, width: 400, backgroundColor: 'white', fontSize: 20}}>
            <Player
               playsInline
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div style={{padding: 50}}>
              <h4>Video Title</h4>
              <p>This is a description of a very, very, useful, video.</p>
              <span key={125} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
              <span key={126}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
            </div>
          </div>
         </div>
        </div>
      </BlandFade>
    );
  }
}

export default Resources = Radium(Resources);

var styles = {
  form: {
    width: '100vw',
    minHeight: '100vh',
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
  },
  like: {
    fontSize: 40,
    ':hover': {
      fontSize: 40,
      cursor: 'pointer',
      backgroundColor: '#FFA500',
      transition: 'all .5s ease-in-out'
    }
  }
}
