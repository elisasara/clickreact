import React, { Component } from 'react';
import office from "./office.json";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import './App.css';
// import GameBoard from "./components/GameBoard";
import Character from "./components/Character";

class App extends React.Component {
  state = {
    office
  }
  render() {
    // const char =  this.state.office.map(character => {
    //   <Character key={character.name} src={character.image} alt={character.name} />
    // });
    console.log(this.state.office);
    return (
      <div>
        <Header />
        <Jumbotron />
        {this.state.office.map(character => (
          <Character
            key={character.name}
            src={character.image}
            alt={character.name}
          />
        ))}
      </div>
    );
  }
}

export default App;
