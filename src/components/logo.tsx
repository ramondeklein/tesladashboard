import React, { Component } from "react";
import "./logo.scss";
import tesla from "./logo.svg";

export interface Props {
    isRotating: boolean;
  }

export class Logo extends Component<Props> {
  public render() {
    return (
      <div>
        <img src={tesla} className={this.getClasses()} alt="Tesla" />
      </div>
    );
  }

  private getClasses(): string {
    let classes = "logo";
    if (this.props.isRotating) {
        classes += " animate";
    }
    return classes;
  }
}
