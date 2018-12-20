import React, { Component } from "react";
import { Vehicle } from "../services/teslaapi/datatypes";
import { OptionsDecoder } from "./optiondecoder";
import "./vehicledetails.scss";
import { VinDecoder } from "./vindecoder";

export interface Props {
  vehicle?: Vehicle;
}

export class VehicleDetails extends Component<Props> {
  public render() {
    const v = this.props.vehicle;
    if (!v) {
      return (<div>Please select a vehicle on the left</div>);
    }
    return (
      <div className="vehicledetails">
        <div className="detail vin">
          <div className="title">VIN</div>
          <div>
            Each car has a unique Vehicle Idendentification Number (VIN). The
            VIN also holds some important information about the characteristics
            of your car.
          </div>
          <VinDecoder vin={v.vin} />
          <div>
            The VIN decoding has been created based on the efforts of
            <a href="https://teslatap.com/vin-decoder/">VIN decoder</a>.
          </div>
        </div>
        <div className="detail options">
          <div className="title">Options</div>
          <OptionsDecoder options={v.option_codes.split(",").sort()} />
        </div>
        <div className="detail status">
          <div className="title">Online actions</div>
          <div className="online">{v.state}</div>
        </div>
      </div>
    );
  }
}

