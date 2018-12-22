import React, { Component } from "react";

import optionsDecoder from "../services/optiondecoder";
import { OptionItem } from "./optionitem";

import "./optiondecoder.scss";

interface State {
  initialized: boolean;
}

export interface Props {
  options: string[];
}

export class OptionsDecoder extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {initialized: false};
  }

  public async componentWillMount() {
    await optionsDecoder.loadPriceBooks();
    this.setState({ initialized: true });
  }

  public render() {
    const { options } = this.props;
    if (options) {
      if (!this.state.initialized) {
        return (<div>Loading pricebooks...</div>);
      }

      const decodedOptions = optionsDecoder.decodeOptions(options);
      return (
        <div className="optionsdecoder">
          <ul>
            {options.sort().map((o) => (
              <li className={`option-${o}`} key={o}>
                <OptionItem code={o} option={decodedOptions[o]}/>
              </li>))}
          </ul>
        </div>
      );
    }
  }
}

