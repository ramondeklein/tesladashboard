import React, { Component } from 'react';
import { Vehicle } from '../services/teslaapi/datatypes';
import './vehicledetails.scss';
import { decodeVin } from '../services/vindecoder';

export interface Props {
  vehicle?: Vehicle;
}

export class VehicleDetails extends Component<Props> {
  render() {
    const v = this.props.vehicle;
    if (!v) {
      return (<div>Please select a vehicle on the left</div>)
    }
    const vinParts = decodeVin(v.vin);
    if (vinParts) {
      return (
        <div className="vehicledetails">
          <div className="title">VIN: {v.vin}</div>
          <div className="online">{v.state}</div>
          <div className="header">Decoded VIN</div>
          <ul className="options">
            {vinParts.map((vp) => (
              <li>
                <div className="description">{vp.description}</div>
                <div className="value">{vp.value}: {vp.decodedValue}</div>
              </li>
            ))}
          </ul>
          <div className="header">Options</div>
          <ul className="options">
            {v.option_codes.split(",").map((o) => (<li key={o}>{o}</li>))}
          </ul>
        </div>
      );
    }
  }
}

