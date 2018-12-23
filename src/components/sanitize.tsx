import React, { Component } from "react";
import sanitize from "sanitize-html";

export interface Props {
  html?: string;
  options?: sanitize.IOptions;
}

export class Sanitize extends Component<Props> {
  private static readonly defaultOptions: sanitize.IOptions = {
    allowedTags: [],
  };

  public render() {
    const { html, options } = this.props;
    if (!html) {
      return null;
    }
    return (<span dangerouslySetInnerHTML={{__html: sanitize(html, options || Sanitize.defaultOptions)}}></span>);
  }
}
