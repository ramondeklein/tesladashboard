import React, { Component } from "react";

import { Icon } from "./icon";

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
      <form>
        <span className="fullname">{this.props.email}</span>
        <button className="icon" onClick={() => this.onLogOff()}>
          <Icon icon="logout" />
        </button>
      </form>
    );
  }

  private onLogOff() {
    if (this.props.onLogOff) {
      this.props.onLogOff();
    }
  }
}
