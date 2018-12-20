import { VinInfoPartDecoderDefault } from "./vininfopartdecoderdefault";

export class VinInfoPartDecoderModelYear extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string) {
        super(startIndex, length, description, (i) => this.parseModelYear(i));
    }

    private parseModelYear(value: string): string | undefined {
        if (value.length === 1) {
            if (value >= "6" && value <= "9") {
                return `200${value}`;
            } else if (value >= "A" && value <= "H") {
                return (2010 + value.charCodeAt(0) - "A".charCodeAt(0)).toString();
            } else if (value >= "J" && value <= "N") {
                return (2018 + value.charCodeAt(0) - "J".charCodeAt(0)).toString();
            } else if (value >= "P" && value <= "P") {
                return (2031 + value.charCodeAt(0) - "P".charCodeAt(0)).toString();
            } else if (value >= "R" && value <= "Y") {
                return (2032 + value.charCodeAt(0) - "R".charCodeAt(0)).toString();
            }
        }
    }
}
