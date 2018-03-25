import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Style } from 'radium'
import normalize from 'radium-normalize';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import LandingPage from './Components/LandingPage';
import Testing from './Components/Testing';
import Header from './Components/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div>
        <Header scrollToBottom={this.scrollToBottom}/>
        <Router>
          <div>
            <Route exact path="/" component={Testing} />
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
            </div>
            <Route exact path="/2" component={Page2} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
