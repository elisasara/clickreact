import React, { Component } from 'react';
import office from "./office.json";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import './App.css';
// import GameBoard from './components/GameBoard/GameBoard';
import Character from "./components/Character";

class App extends React.Component {
  state = {
    office
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <Header />
        <Jumbotron />
        <div className="container">
        {this.state.office.map(character => {
          <Character src={this.state.image} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
