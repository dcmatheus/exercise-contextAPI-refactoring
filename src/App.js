import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './myContext';

const initialState = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
};
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(key, boo) {
    this.setState({ [key]: boo });
  }

  render() {
    const { red, blue, yellow } = this.state;
    const value = {
      red,
      blue,
      yellow,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={value}>
        <Cars />
      </MyContext.Provider>
    );
  }
}


export default App;
