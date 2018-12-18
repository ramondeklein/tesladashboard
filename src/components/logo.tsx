import React, { Component } from 'react';
import tesla from './logo.svg';
import './logo.scss';

export interface Props {
    isRotating: boolean;
  }
  
export class Logo extends Component<Props> {
  render() {
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
