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
import ReactPlayer from 'react-player';

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      educationLevels: ["High School", "Associates", "Bachelor's", "Master's", "Doctoral"],
      selected: "High School",
      content: []
    }
  }
  select = (e) => {
    this.setState({
      selected: e.target.innerHTML
    })
  }
  componentDidMount() {
    var self = this;
    this.setState({
      show: true
    })
    const url = "http://ec2-54-193-36-147.us-west-1.compute.amazonaws.com:8081/content";
    console.log(this.props.token)
    axios.defaults.headers.common['x-access-token'] = this.props.token;
    axios({
      method:'get',
      url:url
    })
      .then(function(response) {
        console.log(response)
        self.setState({
          content: response.data.content
        })
    });
  }
   render() {
    const text = "Welcome  to  Resource  Rating!";
    const array = this.state.content;
    const videoarray = array.map(data => {
      let url = data.url + "";
      return <div key={data.url} className="card3" style={{marginTop: 40, marginLeft: 50, width: 400, backgroundColor: 'white', fontSize: 20}}>
      <ReactPlayer width={400} height={400} url={data.url} />
        <div key={data.tittle} style={{padding: 50}}>
          <h4>{data.tittle}</h4>
          <h4>{data.author.firstName} {data.author.lastName}</h4>
          <span key={data.tittle + "a"} style={styles.like} className="badge"><i className="fa fa-thumbs-up"></i></span>
          <span key={data.tittle + "b"}style={styles.like} className="badge"><i className="fa fa-thumbs-down"></i></span>
        </div>
      </div>
    })

    return (
      <BlandFade show={this.state.show}>
        <div style={styles.form}>
        <div style={{textAlign: "center"}}>
          <AnimatedText fontSize={"2em"} color={"#1B6FBC"}>{text}</AnimatedText>
         </div>
         <div className="row" style={{marginLeft: 20}}>
          {videoarray}
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
