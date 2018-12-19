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
    private readonly valueDecoder: (input: string) => string | undefined;
    private readonly startIndex: number;
    private readonly length: number;
    public readonly description: string;

    constructor(startIndex: number, length: number, description: string, converter: (input: string) => string | undefined = i => i) {
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
                decodedValue: this.valueDecoder(value)
            }
        }
    }
}

interface OptionMap {
    [K: string]: string;
}

export class VinInfoPartDecoderOptions extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string, options: OptionMap) {
        super(startIndex, length, description, i => options[i]);
    }
}

export class VinInfoPartDecoderModelYear extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string) {
        super(startIndex, length, description, i => this.parseModelYear(i));
    }

    private parseModelYear(value: string): string | undefined {
        if (value.length == 1) {
            if (value >= '6' && value <= '9') return `200${value}`;
            if (value >= 'A' && value <= 'H') return (2010 + value.charCodeAt(0) - "A".charCodeAt(0)).toString();
            if (value >= 'J' && value <= 'N') return (2018 + value.charCodeAt(0) - "J".charCodeAt(0)).toString();
            if (value >= 'P' && value <= 'Z') return (2023 + value.charCodeAt(0) - "P".charCodeAt(0)).toString();
        }
    }
}

export class VinInfoPartDecoderBuildPhase extends VinInfoPartDecoderDefault {
    constructor(startIndex: number, length: number, description: string) {
        super(startIndex, length, description, i => this.parseBuildPhase(i));
    }

    private parseBuildPhase(value: string): string | undefined {
        if (value.length == 1) {
            if (value >= '0' && value <= '9') return 'Normal model';
            switch (value) {
                case 'A': return 'Alpha Prototype';
                case 'B': return 'Beta Prototype';
                case 'E': return 'Evaluation Prototype';
                case 'F': return 'Founder Series Vehicle';
                case 'M': return 'Mule (early prototype)';
                case 'P': return 'Production Vehicle';
                case 'R': return 'Release Candidate Vehicle';
                case 'S': return 'Signature Series Vehicle';
                case 'V': return 'Validation Prototype';
            }
        }
    }
}
