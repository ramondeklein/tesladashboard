import React, { Component } from 'react';
import './accountbar.scss';

export interface Props {
}

export interface DispatchProps {
  onLogOn?: (email: string, password: string) => void;
}

interface State {
  email: string;
  password: string;
}
  
export class AccountBarLoggedOff extends Component<Props & DispatchProps, State> {
  constructor(props: Props & DispatchProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="accountbar">
        <input className="email" type="email" onChange={ e => this.handleOnEmailChange(e) }/>
        <input className="password"  type="password" onChange={ e => this.handleOnPasswordChange(e) }/>
        <div className="button" onClick={e => this.onLogon()} />
      </div>
    );
  }

  private handleOnEmailChange(event: any) : void {
    this.setState({ email: event.target.value });;
  }

  private handleOnPasswordChange(event: any) : void {
    this.setState({ password: event.target.value });
  }

  private onLogon(): void {
    if (this.props.onLogOn) {
      this.props.onLogOn(this.state.email, this.state.password);
    }    
  }
}