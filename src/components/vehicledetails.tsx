import React, { Component } from 'react';
import { VinDecoder } from './vindecoder';
import { Vehicle } from '../services/teslaapi/datatypes';
import './vehicledetails.scss';

export interface Props {
  vehicle?: Vehicle;
}

export class VehicleDetails extends Component<Props> {
  render() {
    const v = this.props.vehicle;
    if (!v) {
      return (<div>Please select a vehicle on the left</div>)
    }
    return (
      <div className="vehicledetails">
        <div className="title">VIN: {v.vin}</div>
        <div className="online">{v.state}</div>
        <div className="header">Decoded VIN</div>
        <VinDecoder vin={v.vin}/>
        <div className="header">Options</div>
        <ul className="options">
          {v.option_codes.split(",").map((o) => (<li key={o}>{o}</li>))}
        </ul>
      </div>
    )
  }
}

