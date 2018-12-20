import React, { Component } from "react";
import "./app.scss";
import AccountBar from "./containers/accountbar";
import Logo from "./containers/logo";
import VehicleDetails from "./containers/vehicledetails";
import VehicleList from "./containers/vehiclelist";

class App extends Component {
  public render() {
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
          <Route path="/vehicle/:vehicleId" component={VehicleDetails}/>
        </div>
      </div>
    );
  }
}

import { hot } from "react-hot-loader";
import { Route } from "react-router";
export default hot(module)(App);
