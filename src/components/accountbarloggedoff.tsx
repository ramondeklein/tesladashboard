import React, { Component, Dispatch } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { Icon } from "./icon";

import "./accountbar.scss";

export interface LoginData {
  email: string;
  password: string;
}

export interface DispatchProps {
  onSubmit: (data: LoginData, dispatch: Dispatch<any>, props: {}) => void;
}

class AccountBarLoggedOff extends Component<DispatchProps & InjectedFormProps<LoginData, DispatchProps>> {
  public render() {
    const { pristine, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component="input" type="email" placeholder="Email address" />
        <Field name="password" component="input" type="password" placeholder="Password" />
        <button type="submit" className="icon">
          <Icon icon="login" />
        </button>
      </form>
    );
  }
}

export const AccountBarLoggedOffForm = reduxForm<LoginData, DispatchProps>({})(AccountBarLoggedOff);
