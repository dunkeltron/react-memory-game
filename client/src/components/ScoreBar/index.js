import React, { Component } from "react";
//import { Router, Route,Link } from "react-router-dom";
import "./styles.css";

class ScoreBar extends Component {
  state = {
    score: 0,
    topScore: 0,
    infoText: "Click a character to start!"
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar-dark bg-dark">
      <div className = "row">
        <a className="navbar-brand  nav-item mr-auto" href="/">
          Clicky Game
        </a>  
        <p className="nav-item info-text">
              {this.state.infoText}
        </p>
        <p className="nav-item score-bar ml-auto" >
          Score: {this.state.score} | Top Score: {this.state.topScore}
        </p>
          
        </div>
      </nav>
    );
  }
}

export default ScoreBar;
