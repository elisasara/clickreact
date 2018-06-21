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
    highScore: 0,
    message: "Click an image to begin"
  }

  // pass correct header text and counter to header component

  handleClick = (name) => {
    const char = this.state.characters.find(chosen => chosen.name === name);
    console.log("Char: ", char);
    // check to see if this.state.characters.clicked = true
    // if true, game over
    if (char.clicked) {
      // set header to say "You guessed wrong. You lose!"
      // reset all characters to clicked: false
      this.resetClick();
      // reset counter to 0
      this.resetCounter();
      // DO NOT RESET HGH SCORE
    }
    // if false, change to true
    else {
      // set header to say "You guessed correctly! Keep going!"
      // set char.clicked to true
      char.clicked = true;
      // update counter
      this.updateCounter();
    };
    this.shuffleChar();
  };

  updateCounter = () => {
    if (this.state.counter === this.state.highScore) {
      this.setState({
        counter: this.state.counter + 1,
        highScore: this.state.highScore + 1
      });
      console.log("State:", this.state);
    }
    else {
      this.setState({
        counter: this.state.counter + 1
      });
      console.log("State:", this.state);
    };
  };

  resetCounter = () => {
    this.setState({
      counter: 0
    });
  };

  resetClick = () => {
    // for each in friends array change clicked to false
    this.state.characters.forEach(character => {
      character.clicked = false
    });
    console.log(this.state.characters);
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
        <Header
        text={this.state.message}
        counter={this.state.counter}
        highScore={this.state.highScore} />
        <Jumbotron />
        <GameBoard>
          {this.state.characters.map(character => (
            <Character
              key={character.name}
              image={character.image}
              name={character.name}
              handleClick={this.handleClick}
            />
          ))}
        </GameBoard>
      </div>
    );
  }
}

export default App;
