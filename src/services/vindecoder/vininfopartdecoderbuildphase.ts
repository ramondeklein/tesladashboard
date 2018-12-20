import { VinInfoPartDecoderDefault } from "./vininfopartdecoderdefault";

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
