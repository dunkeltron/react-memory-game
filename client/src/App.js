import React, { Component } from 'react';
import './App.css';
import ScoreBar from "./components/ScoreBar";
import GamePanel from "./components/GamePanel";
class App extends Component {
  render() {
    return (
      <div className="App">
      <ScoreBar />
      
      <div className = "jumbotron">
        <h1 className= "title">Clicky Game!</h1>
        <h2 className= "subtitle">Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
      
      <div className="panel-container group">
        <GamePanel />
      </div>
      <footer className="footer clearfix bg-dark">
        <div className="bottom">Clicky Game! 
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
