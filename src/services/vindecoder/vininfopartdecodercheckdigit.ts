import { VinInfoPartDecoderDefault } from "./vininfopartdecoderdefault";

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
            return `Invalid VIN length "${vin.length}"`;
        }

        let sum = 0;
        for (let i = 0; i < vin.length; ++i) {
            const ch = vin.charAt(i);
            const charValue = this.transliterate(ch);
            if (charValue < 0) {
                return `Invalid character "${ch}" at index ${i}`;
            }
            const weight = VinInfoPartDecoderCheckDigit.weights[i];
            sum += charValue * weight;
        }

        const remainder = sum % 11;
        const checkDigit = remainder < 10 ? remainder.toString() : "X";
        if (value !== checkDigit) {
            return `Invalid check character "${value}" (expected: "${checkDigit}")`;
        }

        return VinInfoPartDecoderCheckDigit.validString;
    }
}
