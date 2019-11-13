import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state={
      foods: ['tacos', 'more tacos', 'ice cream tacos', 'not tacos']
    }
  }
  render() {
    let foodsToDisplay = this.state.foods.map(
      (element, index) => {
        return <h2 key={index}>{element}</h2>
      }
    )
    return (
      <div className="App">
        {foodsToDisplay}
      

      </div>
    );
  }
}

export default App;
