import React, { Component } from "react";
import AccountBarLoggedOff from "../containers/accountbarloggedoff";
import AccountBarLoggedOn from "../containers/accountbarloggedon";

import "./accountbar.scss";

export interface Props {
  isLoggedOn: boolean;
}

export class AccountBar extends Component<Props> {
  public render() {
    if (this.props.isLoggedOn) {
      return (<AccountBarLoggedOn/>);
    }
    return (<AccountBarLoggedOff/>);
  }
}
