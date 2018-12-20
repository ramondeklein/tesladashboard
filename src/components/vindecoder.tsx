import React, { Component } from "react";
import { decodeVin, isValidVin } from "../services/vindecoder";
import { VinPart } from "./vinpart";

import "./vindecoder.scss";

export interface Props {
  vin: string;
}

export class VinDecoder extends Component<Props> {
  public render() {
    const { vin } = this.props;
    const validVin = isValidVin(vin);
    const vinParts = decodeVin(vin);
    if (vinParts) {
      return (
        <div className="vindecoder">
          {!validVin ? this.renderVinWarning() : undefined}
          <ul className="part">
            {vinParts.map((part, i) => (<li key={i}><VinPart vin={vin} part={part} /></li>))}
          </ul>
        </div>
      );
    }
  }

  private renderVinWarning() {
    return (
      <div className="error">Your VIN is invalid.</div>
    );
  }
}
