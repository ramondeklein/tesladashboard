import { VinInfoPartDecoderDefault } from "./vininfopartdecoderdefault";

interface OptionMap {
    [K: string]: string;
}

export class VinInfoPartDecoderOptions extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string, options: OptionMap) {
        super(startIndex, length, description, (i) => options[i]);
    }
}
