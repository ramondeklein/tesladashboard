import React, { Component } from "react";

import "./accountbar.scss";

export interface DispatchProps {
  onLogOn?: (email: string, password: string) => void;
}

interface State {
  email: string;
  password: string;
}

export class AccountBarLoggedOff extends Component<DispatchProps, State> {
  constructor(props: DispatchProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  public render() {
    return (
      <div className="accountbar">
        <input className="email" type="email" onChange={(e) => this.handleOnEmailChange(e)}/>
        <input className="password"  type="password" onChange={(e) => this.handleOnPasswordChange(e)}/>
        <div className="button" onClick={() => this.onLogon()} />
      </div>
    );
  }

  private handleOnEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }

  private handleOnPasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }

  private onLogon() {
    if (this.props.onLogOn) {
      this.props.onLogOn(this.state.email, this.state.password);
    }
  }
}
