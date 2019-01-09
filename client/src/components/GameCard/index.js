import React, { Component } from "react";
import "./cardStyles.css";
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

class GameCard extends Component {
  
  state = {
      altText: this.props.altText,
    clicked: this.props.clicked,
    id: this.props.id,
    href:this.props.href
  };

 
  
  componentDidMount = () => {
    this.correctSource();
    console.log(Wheeljack)
    console.log(this.state)
     
  }

  correctSource = () => {
    switch (this.state.id){
      case 0:
      this.setState({href:Bumblebee});
      break;
      case 1:
      this.setState({href:Devastator});
      break;
      case 2:
      this.setState({href:Grimlock});
      break;
      case 3:
      this.setState({href:Megatron});
      break;
      case 4:
      this.setState({href:OptimusPrime});
      break;
      case 5:
      this.setState({href:Prowl});
      break;
      case 6:
      this.setState({href:Shockwave});
      break;
      case 7:
      this.setState({href:Soundwave});
      break;
      case 8:
      this.setState({href:Starscream});
      break;
      case 9:
      this.setState({href:Thundercracker});
      break;
      case 10:
      this.setState({href:UltraMagnus});
      break;
      case 11:
      this.setState({href:Wheeljack});
      break;

      default:
        break;
    }
  }
  handleClick = () => {
      if(this.state.clicked){
          console.log("gameoverman");
      }
      else{
          this.setState({clicked: true});
      }
  }

  render() {
    return (
      <div className = "picture-card"   >
          <img className = {this.state.altText} src={this.state.href} alt={this.state.altText}></img>
      </div>
    );
  }
}

export default GameCard;
