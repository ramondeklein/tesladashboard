export interface VinInfoPart {
    startIndex: number;
    length: number;
    description: string;
    value: string;
    decodedValue: string | undefined;
}

export interface VinInfoPartDecoder {
    decode(input: string): VinInfoPart | undefined;
}

export class VinInfoPartDecoderDefault implements VinInfoPartDecoder {
    public readonly description: string;
    private readonly valueDecoder: (input: string, vin: string) => string | undefined;
    private readonly startIndex: number;
    private readonly length: number;

    constructor(startIndex: number, length: number, description: string,
                converter: (input: string, vin: string) => string | undefined = (i) => i) {
        this.startIndex = startIndex;
        this.length = length;
        this.description = description;
        this.valueDecoder = converter;
    }

    public decode(vin: string): VinInfoPart | undefined {
        const value = vin.substring(this.startIndex, this.startIndex + this.length);
        if (value) {
            return {
                startIndex: this.startIndex,
                length: this.length,
                description: this.description,
                value: value,
                decodedValue: this.valueDecoder(value, vin),
            };
        }
    }
}

