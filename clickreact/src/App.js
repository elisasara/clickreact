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
    // const index = this.state.characters.indexOf({name: char});
    char.clicked = true;
    console.log("Char: ", char);
    console.log("clicked: ", char.clicked);
    // console.log("Position:", index);

    // check to see if this.state.characters.clicked = true
    // if true, game over
    // if (char.clicked) {
      // return component for game over
      // reset all characters to clicked: false
      // reset counter to 0
      // DO NOT RESET HGH SCORE
    // }
    // if false, change to true
    // else {
      // set char.clicked to true
      
      // add a point to the counter
      // if counter is higher than highscore then add a point to high score
      // call this.shuffleChar() function
    // };
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
              shuffleChar={this.handleClick}
            />
          ))}
        </GameBoard>
      </div>
    );
  }
}

export default App;
