(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bumblebee.5068c84f.png"},function(e,t,a){e.exports=a.p+"static/media/devastator.adee3d35.png"},function(e,t,a){e.exports=a.p+"static/media/grimlock.6b23993f.png"},function(e,t,a){e.exports=a.p+"static/media/megatron.b8b2586b.png"},function(e,t,a){e.exports=a.p+"static/media/optimus_prime.21e07227.png"},function(e,t,a){e.exports=a.p+"static/media/prowl.fe999bdc.png"},function(e,t,a){e.exports=a.p+"static/media/shockwave.9fdcc986.png"},function(e,t,a){e.exports=a.p+"static/media/soundwave.3f8b396a.png"},function(e,t,a){e.exports=a.p+"static/media/starscream.db2d3fb4.png"},function(e,t,a){e.exports=a.p+"static/media/thundercracker.af833498.png"},function(e,t,a){e.exports=a.p+"static/media/ultra_magnus.bd338ed6.png"},function(e,t,a){e.exports=a.p+"static/media/wheeljack.9c59d0b2.png"},function(e,t,a){e.exports=a(34)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),c=(a(26),a(1)),i=a(2),l=a(4),u=a(3),p=a(5),m=(a(28),a(30),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={score:a.props.score,topScore:a.props.topScore,infoText:"Click a character to start!",wins:a.props.wins},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"getState",value:function(){return this.state}},{key:"correctClick",value:function(){var e=this.getState(),t=e.score,a=e.infoText;12===t?this.winningClick():(a="You guessed correctly",this.setState({infoText:a}))}},{key:"incorrectClick",value:function(){var e=this.getState(),t=e.score,a=e.topScore;e.infoText;this.setState({score:t,topScore:a,infoText:"You guessed incorrectly"})}},{key:"winnerClick",value:function(){var e=this.getState(),t=e.score,a=e.topScore,n=(e.infoText,e.wins);console.log("You won! This is win number  "+n+" for you. Congratulations!"),this.setState({score:t,topScore:a,infoText:"You Won! Click again to start over.",wins:n})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth),console.log("state",this.state),console.log("props",this.props),this.setState({score:this.props.score,topScore:this.props.topScore,infoText:"Click a character to start!",wins:this.props.wins})}},{key:"componentWillUnMount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar-dark bg-dark"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("a",{className:"navbar-brand  nav-item ",href:"/"},"Clicky Game"),o.a.createElement("p",{className:"nav-item info-text"},this.props.infoText),o.a.createElement("p",{className:"nav-item score-bar "},"Score: ",this.props.score," | Top Score: ",this.props.topScore)))}}]),t}(n.Component)),d=(a(32),a(8)),f=a.n(d),h=a(9),g=a.n(h),v=a(10),k=a.n(v),b=a(11),w=a.n(b),y=a(12),S=a.n(y),x=a(13),C=a.n(x),E=a(14),T=a.n(E),j=a(15),O=a.n(j),N=a(16),G=a.n(N),A=a(17),Y=a.n(A),W=a(18),M=a.n(W),D=a(19),z=a.n(D),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={score:0,topScore:0,wins:0,cards:[],initialCards:[],infoText:"Click a character to start!"},a.componentDidMount=function(){a.setState({cards:a.createCardArray(),initialCards:a.createCardArray()})},a.createCardArray=function(){for(var e=[],t=["bumblebee","devastator","grimlock","megatron","optimus-prime","prowl","shockwave","soundwave","starscream","thundercracker","ultra-magnus","wheeljack"],a=[f.a,g.a,k.a,w.a,S.a,C.a,T.a,O.a,G.a,Y.a,M.a,z.a],n=0;n<12;n++){var o={key:n,id:n,altText:t[n],clicked:!1,href:a[n]};e.push(o)}return e},a.handleClick=function(e){if(e.preventDefault(),console.log(e.target.className),a.state.initialCards[e.target.id].clicked)console.log("Game Over!"),a.setState({infoText:"You guessed incorrectly. Game Reset."}),a.resetGame();else if(a.updateScore(),a.isGameOver())console.log("You are the champion!"),a.setState({wins:a.state.wins+1,infoText:"You Won! Click again to start over."}),console.log("You won! This is win number  "+a.state.wins+" for you. Congratulations!"),a.resetGame();else{var t=a.state.initialCards;t[e.target.id].clicked=!0,a.setState({initialCards:t});var n=a.state.cards;a.shuffleArray(n)}},a.isGameOver=function(){return console.log(a.state.score),a.state.score>=11&&(console.log("all images clicked no faults!"),!0)},a.resetGame=function(){a.setState({score:0,initialCards:a.createCardArray()})},a.shuffleArray=function(e){var t=0,n=0,o=null;for(t=e.length-1;t>0;t-=1)n=Math.floor(Math.random()*(t+1)),o=e[t],e[t]=e[n],e[n]=o;a.setState({cards:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"updateScore",value:function(){var e=this.state.score+1;console.log(e),this.setState({score:e,infoText:"You guessed Correctly!"}),e>this.state.topScore&&this.setState({topScore:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(m,{wins:this.state.wins,score:this.state.score,topScore:this.state.topScore,infoText:this.state.infoText})),o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"title"},"Clicky Game!"),o.a.createElement("h2",{className:"subtitle"},"Click on an image to earn points, but don't click on any more than once!")),o.a.createElement("div",{className:"panel-container container group"},o.a.createElement("div",{className:"game-block container"},this.state.cards.map(function(t){return o.a.createElement("div",{key:t.key,className:"picture-card",onClick:e.handleClick},o.a.createElement("img",{id:t.id,className:t.altText,src:t.href,alt:t.altText}))}))))}}]),t}(n.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement("footer",{className:"footer clearfix bg-dark"},o.a.createElement("div",{className:"bottom"},"Clicky Game!")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,2,1]]]);
//# sourceMappingURL=main.41e0787f.chunk.js.map