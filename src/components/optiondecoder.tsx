import React, { Component } from 'react';
import './optiondecoder.scss';

export interface Props {
  options: string[];
}

export class OptionsDecoder extends Component<Props> {
  render() {
    const { options } = this.props;
    if (options) {
      return (
        <div className="optionsdecoder">
          <ul>
            {options.map((o) => (<li className={"option-"+o} key={o}>{o}</li>))}
          </ul>
        </div>
      );
    }
  }
}

