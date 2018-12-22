import React, { Component, Dispatch } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import "./accountbar.scss";

export interface LoginData {
  email: string;
  password: string;
}

export interface Props {
  message: string;
}

export interface DispatchProps {
  onSubmit: (data: LoginData, dispatch: Dispatch<any>, props: Props) => void;
}

class AccountBarLoggedOff extends Component<Props & DispatchProps & InjectedFormProps<LoginData, Props & DispatchProps>> {
  public render() {
    const { message } = this.props;
    const { pristine, submitting, handleSubmit } = this.props;

    return (
      <div>
        <div>{message}</div>
        <form onSubmit={handleSubmit}>
          <Field name="email" component="input" type="email" placeholder="Email address" />
          <Field name="password" component="input" type="password" placeholder="Password" />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    );
  }
}

export const AccountBarLoggedOffForm = reduxForm<LoginData, Props & DispatchProps>({})(AccountBarLoggedOff);
