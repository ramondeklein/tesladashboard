import React, { Component } from 'react';
import { Vehicle } from '../services/teslaapi/datatypes';

export interface Props {
  vehicle?: Vehicle;
}
  
export class VehicleDetails extends Component<Props> {
  render() {
    return (
      <div>{JSON.stringify(this.props.vehicle)}</div>
    );
  }
}
