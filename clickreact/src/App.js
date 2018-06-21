import React, { Component } from 'react';
import office from "./office.json";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import './App.css';
import GameBoard from "./components/GameBoard";
import Character from "./components/Character";

class App extends React.Component {
  state = {
    characters: office,
    counter: 0,
    highScore: 0
  }

  handleClick = (name) => {
    const char = this.state.characters.find(chosen => chosen.name === name);
    console.log("Char: ", char);
    // check to see if this.state.characters.clicked = true
    // if true, game over
    if (char.clicked) {
      // return component for game over
      // reset all characters to clicked: false
      // reset counter to 0
      // DO NOT RESET HGH SCORE
    }
    // if false, change to true
    else {
      // set char.clicked to true
      char.clicked = true;
      // add a point to the counter
      if (this.state.counter === this.state.highScore) {
        this.setState({
          counter: this.state.counter + 1,
          highScore: this.state.highScore + 1
        });
      }
      else {
        this.setState({
          counter: this.state.counter + 1
        });
      };
      // console.log("clicked: ", char.clicked);
      console.log("State:", this.state);  
      // if counter is higher than highscore then add a point to high score
      // call this.shuffleChar() function
    };
  };

  resetClick = () => {

  }

  shuffleChar = () => {
    const charArray = this.state.characters;
    charArray.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.setState({
      characters: charArray
    });
  };

  render() {
    console.log(this.state.characters);
    return (
      <div>
        <Header />
        <Jumbotron />
        <GameBoard>
          {this.state.characters.map(character => (
            <Character
              key={character.name}
              image={character.image}
              name={character.name}
              shuffleChar={this.handleClick}
            />
          ))}
        </GameBoard>
      </div>
    );
  }
}

export default App;
