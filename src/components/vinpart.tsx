import React, { Component } from 'react';
import './vinpart.scss';
import { VinInfoPart } from '../services/vindecoder';
import { vinPartsNew } from '../services/vindecoder/vinpartsnew';

export interface Props {
    vin: string;
    part: VinInfoPart;
}

export class VinPart extends Component<Props> {
    render() {
        const { vin, part } = this.props;
        const leftPart = vin.substring(0, part.startIndex);
        const highlightPart = vin.substring(part.startIndex, part.startIndex + part.length);
        const rightPart = vin.substring(part.startIndex + part.length);

        return (
            <div className="vinpart">
                <span>
                    {leftPart ? (<span className="dimmed">{leftPart}</span>) : undefined}
                    {highlightPart ? (<span className="highlight">{highlightPart}</span>) : undefined}
                    {rightPart ? (<span className="dimmed">{rightPart}</span>) : undefined}
                </span>
                <span className="label">{part.description}</span>
                <span className="value">{part.decodedValue}</span>
            </div>
        );
    }
}

