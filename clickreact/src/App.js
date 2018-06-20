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

  handleClick = (event) => {
    // check to see if this.state.characters.clicked = true
    // if true, game over
    // if false, change to true
    // add a point to the counter
    // if counter is higher than highscore then add a point to high score
    // call this.shuffleChar() function
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
              shuffleChar={this.shuffleChar}
            />
          ))}
        </GameBoard>
      </div>
    );
  }
}

export default App;
