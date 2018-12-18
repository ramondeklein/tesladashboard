import React, { Component } from 'react';
import Logo from './containers/logo';
import AccountBar from './containers/accountbar';
import VehicleList from './containers/vehiclelist'
import VehicleDetails from './containers/vehicledetails'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="pane header">
          <Logo/>
          <AccountBar/>
        </header>
        <nav className="pane nav">
          <div className="title">Your vehicles</div>
          <VehicleList/>
        </nav>
        <div className="pane details">
          <div className="title">Details</div>
          <VehicleDetails/>
        </div>
      </div>
    );
  }
}

export default App;
