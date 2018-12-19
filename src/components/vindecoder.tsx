import React, { Component } from 'react';
import { VinPart } from './vinpart';
import { decodeVin, isValidVin } from '../services/vindecoder';
import './vindecoder.scss';

export interface Props {
  vin: string;
}

export class VinDecoder extends Component<Props> {
  render() {
    const { vin } = this.props;
    const validVin = isValidVin(vin);
    const vinParts = decodeVin(vin);
    if (vinParts) {
      return (
        <div className="vindecoder">
          {!validVin ? this.showVinWarning() : undefined}
          <ul className="part">
            {vinParts.map((part, i) => (<li key={i}><VinPart vin={vin} part={part} /></li>))}
          </ul>
        </div>
      );
    }
  }

  private showVinWarning() {
    return (
      <div className="error">Your VIN is invalid.</div>
    )
  }
}

