import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div style={{backgroundColor: "#1B6FBC", width: "100vw"}}>
        <div className="col-md-10 offset-md-1">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#1B6FBC"}}>
          <a className="navbar-brand" href="#"><i style={{color: 'white'}} className="fa fa-2x fa-rocket" aria-hidden="true"></i> <span id="">CareerCourse</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
            </div>
            <form className="form-inline my-2 my-lg-0">
             <a onClick={this.props.scrollToBottom} className="nav-item nav-link active" href="#"><button type="button" className="btn btn-danger navbutton" style={{backgroundColor: '#FC5F2A', width: 150, fontSize: 20}}>About</button></a>
             <a className="nav-item nav-link active" href="#"><button type="button" className="btn btn-danger navbutton" style={{backgroundColor: '#FC5F2A', width: 150, fontSize: 20}}>Contact Us</button></a>
           </form>
          </div>
          </nav>
        </div>
      </div>
    )
  }
}
