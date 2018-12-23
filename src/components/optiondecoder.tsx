import React, { Component } from "react";

import optionsDecoder, { OptionMap } from "../services/optiondecoder";
import { OptionGroup } from "./optiongroup";

import "./optiondecoder.scss";

interface State {
  optionMap?: OptionMap;
}

export interface Props {
  options: string[];
}

export class OptionsDecoder extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public async componentWillMount() {
    const optionMap = await optionsDecoder.loadPriceBooks();
    this.setState({ optionMap });
  }

  public render() {
    const { optionMap } = this.state;
    if (!optionMap) {
      return (<div>Loading pricebooks...</div>);
    }

    const { options } = this.props;
    if (options) {
      const categories = options
        .map((o) => optionMap[o] ? optionMap[o].category : undefined)
        .filter((c, i, a) => a.indexOf(c) === i)
        .sort(this.sortByNameOrCode);
      const groupedOptions = categories
        .map((c) => {
          return {
            category: c,
            options: options.map((o) => optionMap[o] || { code: o }).filter((o) => o.category === c).sort(this.sortByNameOrCode),
          };
        });
      return (
        <div className="optionsdecoder">
          <ul className="categories">
            {groupedOptions.map((c) => {
              const categoryCode = c.category ? c.category.code : "unknown";
              return (
                <li className={`category-${categoryCode}`} key={categoryCode}>
                  <OptionGroup category={c.category} options={c.options} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  private notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
  }

  private sortByNameOrCode<TValue extends { name?: string; code: string; }>(v1?: TValue, v2?: TValue): number {
    const name1 = (v1 && (v1.name || v1.code)) || "";
    const name2 = (v2 && (v2.name || v2.code)) || "";
    return name1.localeCompare(name2);
  }
}
