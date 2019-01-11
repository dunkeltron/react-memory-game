import React, { Component } from "react";
import "./styles.css";

class ScoreBar extends Component {
  state = {
    score: this.props.score,
    topScore: this.props.topScore,
    infoText: "Click a character to start!",
    wins: this.props.wins
  };
  getState(){
    return this.state;
  }
  correctClick(){
    var {
      score,
      infoText
    } = this.getState();
    if (score === 12) {
      this.winningClick();
    } else {
      infoText = "You guessed correctly";
      this.setState({
        infoText
      });
    }
  }

  incorrectClick(){
    var {score ,topScore, infoText} = this.getState();
    infoText = "You guessed incorrectly";
    this.setState({score ,topScore, infoText});
  }
  winnerClick(){
    var {score ,topScore, infoText,wins} = this.getState();
    infoText = "You Won! Click again to start over."
    console.log("You won! This is win number  "+ wins + " for you. Congratulations!");
    this.setState({score,topScore,infoText,wins})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    console.log("state",this.state);
    console.log("props",this.props);
    this.setState({
            score: this.props.score,
            topScore: this.props.topScore,
            infoText: "Click a character to start!",
            wins: this.props.wins
    });
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar-dark bg-dark">
      <div className = "row justify-content-center">
        <a className="navbar-brand  nav-item " href="/">
          Clicky Game
        </a>  
        <p className="nav-item info-text">
              {this.props.infoText}
        </p>
        <p className="nav-item score-bar " >
          Score: {this.props.score} | Top Score: {this.props.topScore}
        </p>

        </div>
      </nav>
    );
  }
}

export default ScoreBar;
