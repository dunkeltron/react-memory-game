import React, { Component } from 'react';
import './App.css';
//import ScoreBar from "./components/ScoreBar";
import GamePanel from "./components/GamePanel";
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <GamePanel />
      <footer className="footer clearfix bg-dark">
        <div className="bottom">Clicky Game! 
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
