import React, { Component } from "react";

import { Category, Option } from "../services/optiondecoder";
import { OptionItem } from "./optionitem";
import { Sanitize } from "./sanitize";

export interface Props {
  category?: Category;
  options: Option[];
}

export class OptionGroup extends Component<Props> {
  public render() {
    const { category, options } = this.props;
    const categoryName = category ? (category.name || category.code) : "Unknown";
    return (
      <div>
        <div className="category-name"><Sanitize html={categoryName}/></div>
        <ul className="options">
          {options.map((o) => (
            <li className={`option-${o.code}`} key={o.code}>
              <OptionItem option={o} />
            </li>))}
        </ul>
      </div>
    );
  }
}
