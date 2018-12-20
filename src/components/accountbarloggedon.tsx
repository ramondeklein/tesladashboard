import React, { Component } from "react";
import "./accountbar.scss";

export interface Props {
  email: string;
}

export interface DispatchProps {
  onLogOff?: () => void;
}

export class AccountBarLoggedOn extends Component<Props & DispatchProps> {
  public render() {
    return (
      <div className="accountbar">
        <div className="fullname">{this.props.email}</div>
        <div className="button" onClick={this.props.onLogOff} />
      </div>
    );
  }
}
