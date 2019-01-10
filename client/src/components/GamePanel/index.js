import React, { Component } from "react";
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
  /*
    score = the number of clicks w/o clicking a pre clicked element
    topScore = the highest score (tops off at a complete game for now)
    wins = the number of wins in the current session (included for future use)
    cards = the cards to display to the page. We only want to change the order of this array
    initialCards = the cards initial order. We only want to modify the clicked value of the objects in this array.
  */
  state = {
    score: 0,
    topScore: 0,
    wins: 0,
    cards: [],
    initialCards: []
  };
  //set up both arrays of cards upon mounting of the compnonent
  componentDidMount = () => {
    this.setState({cards: this.createCardArray(),initialCards:this.createCardArray()})
    
  }
  //set up the state of the card objects we use to play the game.
  createCardArray = () =>{
    //temp array to store our cards in
    var arr =[];
    //set the alt texts for the cards 
    var altArr = ["bumblebee", "devastator","grimlock",
 "megatron","optimus-prime","prowl","shockwave","soundwave","starscream","thundercracker","ultra-magnus","wheeljack"];
    // we import the images at the top of the page and assign them ref variables so they can be properly dispalyed in react.
    var imgArr = [Bumblebee,Devastator,Grimlock,Megatron,OptimusPrime,Prowl,Shockwave,Soundwave,Starscream,Thundercracker,UltraMagnus,Wheeljack]
    
    //we have 12 cards in our game so we want to go throguh and create all 12 cards and push them to the array
    for(var i=0 ; i<12 ; i++){
        var newCard={key:i,
                    id:i,
                    altText:altArr[i], 
                    clicked:false,
                    href:imgArr[i]}
        //push the new object into our temp array
        arr.push(newCard);
    }
    //send our array back for assignment
    return arr
  }

  

  //on click we want to 
    //1) check the clicked status of the clicked on item,
    //2) if clicked = true  we reset the game
    //3) if clicked = false update clicked status and shuffle 
  handleClick = (event) =>{
    event.preventDefault();
    //if the card has already been clicked the player loses and the game resets
    console.log(event.target.className);
    if(this.state.initialCards[event.target.id].clicked){
       console.log("Game Over!");
       this.resetGame();
    }
    /*   if not we want to update the game state
          we want to award the player a point
          set a new topScore (if necessary)
    */
    else{
      this.updateScore();
      //after updating the score check if the player won
      if(this.isGameOver()){
        console.log("You are the champion!");
      }
      else{
        //we want to update the clicked status of the clicked card in our initialCards state array
        var initialPositions = this.state.initialCards;
        initialPositions[event.target.id].clicked = true;     
        //store the new clicked value of the object back into our initialCards state array
        this.setState({initialCards: initialPositions});

        //shuffle the positions of the cards
        var tempArr = this.state.cards;
        this.shuffleArray(tempArr);
      }
    }
    
  }
  isGameOver =() =>{
    console.log(this.state.score);
    if (this.state.score>= 11){
      console.log("all images clicked no faults!")
      return true;
    }
    return false;
  }
  //reset the game state to a new game
  //Set the score to zero 
  //reinitialize the initialCards array
  //we leave the cards array alone because all we ever do is rearrange
  resetGame=()=>{
    this.setState({score:0,
                    initialCards:this.createCardArray()})
  }

  //this handles the re-arranging of elements after click
  shuffleArray= (array) => {
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
  updateScore(){
    var newScore = this.state.score +1;
    console.log(newScore);    
    this.setState({score:newScore});
    if(newScore>this.state.topScore){
      this.setState({topScore:newScore});
    }
  }
  render() {
    return (
      <div className ="game-block">
          { 
            //add the cards to the page in the order in which they appear in this.state.cards
            //This is what handles the position shuffling of the images.
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
