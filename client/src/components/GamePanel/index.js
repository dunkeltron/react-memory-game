import React, { Component } from "react";
//import GameCard from "../GameCard";
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
    cards: [],
    initialCards: []
  };
  componentDidMount = () => {
    this.setState({cards: this.createCardArrays()})
    
  }
  createCardArrays = () =>{
    var arr =[];
    var altArr = ["bumblebee", "devastator","grimlock",
 "megatron","optimus-prime","prowl","shockwave","soundwave","starscream","thundercracker","ultra-magnus","wheeljack"];
    var imgArr = [Bumblebee,Devastator,Grimlock,Megatron,OptimusPrime,Prowl,Shockwave,Soundwave,Starscream,Thundercracker,UltraMagnus,Wheeljack]
    
    for(var i=0 ; i<12 ; i++){
        var newCard={key:i,
                    id:i,
                    altText:altArr[i], 
                    clicked:false,
                    href:imgArr[i]}
        arr.push(newCard);
    }
    console.log(arr);
    this.setState({initialCards:arr});
    return arr
  }
  //on lcick we want to 
    //1) check the clicked status of the clicked on item,
    //2) if clicked = true  we reset the game
    //3) if clicked = false update clicked status and shuffle 
  handleClick = (event) =>{
    event.preventDefault();
    if(this.state.cards[event.target.id].clicked){
       console.log("Game Over!")
    }
    else{
      console.log( "Id"+event.target.id)
      var tempArr = this.state.cards;
      tempArr[event.target.id].clicked = true;
      console.log(tempArr);
      this.shuffleArray(tempArr,event.target.id);
    }
    
  }
  //this handles the re-arranging of elements after click
  shuffleArray(array,z){
    console.log("shuffleArray id",z);
    var i = 0
    , j = 0
    , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.setState({cards:array})
  }
  render() {
    return (
      <div className ="game-block">
          { 
            this.state.cards.map((card) => (
              <div key = {card.key} className = "picture-card"   onClick={this.handleClick} >
                <img id={card.id}  className = {card.altText} src={card.href} alt={card.altText}></img>
              </div>
          ))}

      </div>
    );
  }
}

export default GamePanel;
