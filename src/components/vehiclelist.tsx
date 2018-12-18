import React, { Component } from 'react';
import { Vehicle } from '../services/teslaapi/datatypes';
import './vehiclelist.scss';

export interface Props {
  vehicles: Vehicle[];
  selected?: Vehicle;
}

export interface DispatchProps {
  onSelect?: (v?: Vehicle) => void;
}
  
export class VehicleList extends Component<Props & DispatchProps> {
  render() {
    return (
      <ul className='vehiclelist'>
        {this.props.vehicles.map((v) => (<li key={v.id} className={this.getClassName(v, this.props.selected)} onClick={() => this.onSelectVehicle(v)}>{v.display_name}</li>))}
      </ul>
    );
  }

  private getClassName(v: Vehicle, selectedVehicle?: Vehicle) {
    if (selectedVehicle && v.id === selectedVehicle.id) {
      return "selected";
    }
    return "";
  }

  private onSelectVehicle(vehicle?: Vehicle): void {
    if (this.props.onSelect) {
      this.props.onSelect(vehicle);
    }
  }
}
