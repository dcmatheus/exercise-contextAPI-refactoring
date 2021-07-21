import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './myContext';
import TrafficSignal from './TrafficSignal';

const initialState = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
  signalColor: 'red',
};
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(key, boo) {
    this.setState({ [key]: boo });
  }

  changeSignal(color) {
    this.setState({ signalColor: color });
  }

  render() {
    const { redCar, blueCar, yellowCar, signalColor } = this.state;
    const value = {
      redCar,
      blueCar,
      yellowCar,
      signalColor,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <MyContext.Provider value={value}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}


export default App;
