import { vinPartsOld } from './vinpartsold';
import { vinPartsNew } from './vinpartsnew';
import { VinInfoPart, VinInfoPartDecoder } from './internals';

const vinPartsList = [vinPartsOld, vinPartsNew];

export interface DecodedVin {
    decodeVin(vin: string): VinInfoPart[] | undefined;
}

export class VinDecoder implements DecodedVin {
    public decodeVin(vin: string): VinInfoPart[] | undefined {
        const vinParts = this.GetVinInfoParts(vin);
        if (vinParts) {
            let vinInfoParts = [];
            for (const vinPart of vinParts) {
                var decodedPart = vinPart.decode(vin);
                if (decodedPart) {
                    vinInfoParts.push(decodedPart);
                }
            }
            return vinInfoParts;
        }
    }

    private GetVinInfoParts(vin: string): VinInfoPartDecoder[] | undefined {
        for (const vinParts of vinPartsList) {
            // We should always match the first two parts
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