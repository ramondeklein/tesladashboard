import React, { Component } from 'react';
import { VinPart } from './vinpart';
import { decodeVin } from '../services/vindecoder';
import './vindecoder.scss';

export interface Props {
  vin: string;
}

export class VinDecoder extends Component<Props> {
  render() {
    const { vin } = this.props;
    const vinParts = decodeVin(vin);
    if (vinParts) {
      return (
        <div className="vindecoder">
          <ul className="part">
            {vinParts.map((part, i) => (<li key={i}><VinPart vin={vin} part={part}/></li>))}
          </ul>
        </div>
      );
    }
  }
}

