import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Vehicle } from "../services/teslaapi/datatypes";
import "./vehiclelist.scss";

export interface Props {
  vehicles: Vehicle[];
  selected?: Vehicle;
}

export class VehicleList extends Component<Props> {
  public render() {
    return (
      <ul className="vehiclelist">
        {this.props.vehicles.map((v) => this.renderVehicle(v))}
      </ul>
    );
  }

  private renderVehicle(v: Vehicle) {
    return (
      <li key={v.id}>
        <NavLink to={`/vehicle/${v.id}`}>{v.display_name}</NavLink>
      </li>
    );
  }
}
