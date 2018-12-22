import React, { Component } from "react";
import iconPaths from "../resources/icomoon.js";

export interface Props {
    icon: string;
}

export class Icon extends Component<Props> {
    public render() {
        const { icon } = this.props;
        return (
            <svg viewBox="0 0 1024 1024">
                <path d={this.getPath(icon)}></path>
            </svg>
        );
    }

    private getPath(iconName: string): string {
        const icon = iconPaths.iconSets[0].icons.find((i) => i.tags.indexOf(iconName) >= 0);
        if (!icon) {
            throw Error(`icon '${iconName}' not found.`)
        }
        return icon.paths.join(" ");
    }
}
