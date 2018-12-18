import React, { Component } from 'react';
import AccountBarLoggedOn from '../containers/accountbarloggedon';
import AccountBarLoggedOff from '../containers/accountbarloggedoff';
import './accountbar.scss';

export interface Props {
  isLoggedOn: boolean;
}
  
export class AccountBar extends Component<Props> {
  render() {
    if (this.props.isLoggedOn)
      return (<AccountBarLoggedOn/>)
    return (<AccountBarLoggedOff/>)
  }
}
