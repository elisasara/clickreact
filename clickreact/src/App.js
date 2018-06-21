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

    // check to see if this.state.characters.clicked = true
    // if true, game over
    if (char.clicked) {
      // reset all characters to clicked: false
      this.resetClick();
      // reset counter to 0 and update message in header
      this.resetLostGame();
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
    // if the counter is equal to the high score then update the high score as well
    if (this.state.counter === this.state.highScore) {
      this.setState({
        counter: this.state.counter + 1,
        highScore: this.state.highScore + 1,
        message: "Correct! Keep Going!"
      });
    }

    // if the counter is at 11 and will be going to 12 display a winning message
    if (this.state.counter === 11) {
      this.setState({
        counter: 0,
        highScore: this.state.highScore +1,
        message: "You won! Click a character to start a new game!"
      });
      this.resetClick();
    }
    // otherwise just update the counter
    else {
      this.setState({
        counter: this.state.counter + 1,
        message: "Correct! Keep Going!"
      });
    };
  };

  resetLostGame = () => {
    this.setState({
      counter: 0,
      message: "You guessed wrong. You lose!"
    });
  };

  resetClick = () => {
    this.state.characters.forEach(character => {
      character.clicked = false
    });
  };

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
