import React, { Component } from "react";

import { Option } from "../services/optiondecoder";
import { Sanitize } from "./sanitize";

export interface Props {
  option: Option;
}

export class OptionItem extends Component<Props> {
  public render() {
    const { option } = this.props;
    return (<div>
      <span className="code">{option.code}</span>
      <span className="name"><Sanitize html={option.name}/></span>
    </div>
    );
  }
}

