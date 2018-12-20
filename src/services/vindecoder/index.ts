import { VinInfoPartDecoderCheckDigit } from "./vininfopartdecodercheckdigit";
import { VinInfoPart, VinInfoPartDecoder } from "./vininfopartdecoderdefault";
import { vinPartsNew } from "./vinpartsnew";
import { vinPartsOld } from "./vinpartsold";
export * from "./vininfopartdecoderdefault";

const vinPartsList = [vinPartsOld, vinPartsNew];

export interface DecodedVin {
    decodeVin(vin: string): VinInfoPart[] | undefined;
    isValidVin(vin: string): boolean;
}

export class VinDecoder implements DecodedVin {
    public decodeVin(vin: string): VinInfoPart[] | undefined {
        const vinParts = this.GetVinInfoParts(vin);
        if (vinParts) {
            const vinInfoParts = [];
            for (const vinPart of vinParts) {
                const decodedPart = vinPart.decode(vin);
                if (decodedPart) {
                    vinInfoParts.push(decodedPart);
                }
            }
            return vinInfoParts;
        }
    }

    public isValidVin(vin: string): boolean {
        const vinParts = this.GetVinInfoParts(vin);
        if (vinParts) {
            for (const vinPart of vinParts) {
                if (vinPart instanceof VinInfoPartDecoderCheckDigit) {
                    const vinInfoPart = vinPart.decode(vin);
                    if (vinInfoPart) {
                        return vinInfoPart.decodedValue === VinInfoPartDecoderCheckDigit.validString;
                    }
                }
            }
        }
        return false;
    }

    private GetVinInfoParts(vin: string): VinInfoPartDecoder[] | undefined {
        for (const vinParts of vinPartsList) {
            const manufacturer = vinParts[0].decode(vin);
            const model = vinParts[1].decode(vin);
            if (manufacturer && manufacturer.decodedValue && model && model.decodedValue) {
                return vinParts;
            }
        }
    }
}

export function decodeVin(vin: string) {
    const vinDecoder = new VinDecoder();
    return vinDecoder.decodeVin(vin);
}

export function isValidVin(vin: string) {
    const vinDecoder = new VinDecoder();
    return vinDecoder.isValidVin(vin);
}
