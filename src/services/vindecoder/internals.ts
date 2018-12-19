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

interface OptionMap {
    [K: string]: string;
}

export class VinInfoPartDecoderOptions extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string, options: OptionMap) {
        super(startIndex, length, description, (i) => options[i]);
    }
}

interface ValueMap {
    [K: string]: number;
}

export class VinInfoPartDecoderCheckDigit extends VinInfoPartDecoderDefault {
    // See https://en.wikipedia.org/wiki/Vehicle_identification_number#Check-digit_calculation
    public static readonly validString = "Valid";
    private static readonly vinChars = "0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ";
    private static readonly weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

    constructor(startIndex: number, length: number, description: string) {
        super(startIndex, length, description, (i, vin) => this.checkDigit(i, vin));
    }

    private transliterate(ch: string): number {
        const index = VinInfoPartDecoderCheckDigit.vinChars.indexOf(ch);
        if (index < 0) {
            return -1;
        }
        return index % 10;
    }

    private checkDigit(value: string, vin: string): string | undefined {
        if (vin.length !== VinInfoPartDecoderCheckDigit.weights.length) {
            return `Invalid VIN length '${vin.length}'`;
        }

        let sum = 0;
        for (let i = 0; i < vin.length; ++i) {
            const ch = vin.charAt(i);
            const charValue = this.transliterate(ch);
            if (charValue < 0) {
                return `Invalid character '${ch}' at index ${i}`;
            }
            const weight = VinInfoPartDecoderCheckDigit.weights[i];
            sum += charValue * weight;
        }

        const remainder = sum % 11;
        const checkDigit = remainder < 10 ? remainder.toString() : "X";
        if (value !== checkDigit) {
            return `Invalid check character '${value}' (expected: '${checkDigit}')`;
        }

        return VinInfoPartDecoderCheckDigit.validString;
    }
}

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

export class VinInfoPartDecoderBuildPhase extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string) {
        super(startIndex, length, description, (i) => this.parseBuildPhase(i));
    }

    private parseBuildPhase(value: string): string | undefined {
        if (value.length === 1) {
            if (value >= "0" && value <= "9") {
                return "Normal model";
            }
            switch (value) {
                case "A": return "Alpha Prototype";
                case "B": return "Beta Prototype";
                case "E": return "Evaluation Prototype";
                case "F": return "Founder Series Vehicle";
                case "M": return "Mule (early prototype)";
                case "P": return "Production Vehicle";
                case "R": return "Release Candidate Vehicle";
                case "S": return "Signature Series Vehicle";
                case "V": return "Validation Prototype";
            }
        }
    }
}
