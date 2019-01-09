import React, { Component } from "react";
import "./styles.css";

class ScoreBar extends Component {
  state = {
    score: 0,
    topScore: 0,
    infoText: "Click a character to start!",
    wins:0
  };
  getState(){
    return this.state;
  }
  correctClick(){
    var {
      score,
      topScore,
      infoText
    } = this.getState();
    score++;
    if (score === 12) {
      this.winningClick();
    } else {
      if (score > topScore) {
        topScore = score;
      }
      infoText = "You guessed correctly";
      this.setState({
        score,
        topScore,
        infoText
      });
    }
  }

  incorrectClick(){
    var {score ,topScore, infoText} = this.getState();
    if(score > topScore){
      topScore=score;
    }
    score=0;
    infoText = "You guessed incorrectly";
    this.setState({score,topScore,infoText});
  }
  winnerClick(){
    var {score ,topScore, infoText,wins} = this.getState();
    infoText = "You Won! Click again to start over."
    wins++;
    score = 0;
    topScore = 0;
    console.log("You won! This is win number  "+ wins + " for you. Congratulations!");
    this.setState({score,topScore,infoText,wins})
  }

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
