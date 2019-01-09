import React, { Component } from "react";
import GameCard from "../GameCard";
import "./panelStyles.css";
import Bumblebee from "./bumblebee.png";
import Devastator from "./devastator.png";
import Grimlock from "./grimlock.png";
import Megatron from "./megatron.png";
import OptimusPrime from "./optimus_prime.png";
import Prowl from "./prowl.png";
import Shockwave from "./shockwave.png";
import Soundwave from "./soundwave.png";
import Starscream from "./starscream.png";
import Thundercracker from "./thundercracker.png";
import UltraMagnus from "./ultra_magnus.png";
import Wheeljack from "./wheeljack.png";

class GamePanel extends Component {
  state = {
    score: 0,
    topScore: 0,
    wins: 0,
    cards: []
  };
  componentDidMount = () => {
    this.setState({cards: this.createCardArray()})
  }
  createCardArray = () =>{
    var arr =[];
    var altArr = ["bumblebee", "devastator","grimlock",
 "megatron","optimus-prime","prowl","shockwave","soundwave","starscream","thundercracker","ultra-magnus","wheeljack"];
    var imgArr = [Bumblebee,Devastator,Grimlock,Megatron,OptimusPrime,Prowl,Shockwave,Soundwave,Starscream,Thundercracker,UltraMagnus,Wheeljack]
    
    for(var i=0 ; i<12 ; i++){
        var newCard={key:i,
                    altText:altArr[i], 
                    clicked:false,
                    href:imgArr[i]}
        arr.push(newCard);
    }
    return arr
  }
  handleClick = (event) =>{
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <div className ="game-block">
          {this.state.cards.map(card => (
              <GameCard key={card.key} id={card.altText}altText={card.altText} clicked={card.clicked} href={card.href} onClick={this.handleClick}/>
          ))}

      </div>
    );
  }
}

export default GamePanel;
