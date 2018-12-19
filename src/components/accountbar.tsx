import AccountBarLoggedOn from '../containers/accountbarloggedon';
import AccountBarLoggedOff from '../containers/accountbarloggedoff';
import { User } from '../types/user';
import React, { Component } from 'react';
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
