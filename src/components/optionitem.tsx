import React, { Component } from "react";

import { Option } from "../services/optiondecoder";

export interface Props {
  code: string;
  option: Option;
}

export class OptionItem extends Component<Props> {
  public render() {
    const { code, option } = this.props;
    if (!option) {
      return (<span className="code">{code}</span>);
    }
    return (<div>
      <span className="code">{code}</span>
      <span className="name">{option.name}</span>
    </div>
    );
  }
}

