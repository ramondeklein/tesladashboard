import { getEnabledCategories } from "trace_events";

export interface Option {
    group?: string;
    name?: string;
    description?: string;
    excludes: string[];
}

export interface OptionMap {
    [key: string]: Option;
}

export interface OptionsDecoder {
    loadPriceBooks(): Promise<OptionMap>;
    decodeOption(code: string): Option | undefined;
    decodeOptions(codes: string[]): OptionMap;
}

export class OptionsDecoderImpl implements OptionsDecoder {
    private readonly priceBookSource = "https://raw.githubusercontent.com/fredrikfjeld/tesla-options-decoder/gh-pages/";
    private readonly priceBooks = ["pricebook-3.5_MS_en_EU.json"];

    private options: OptionMap | undefined;

    public async loadPriceBooks(): Promise<OptionMap> {
        if (!this.options) {
            const options: OptionMap = {};
            for (const priceBook of this.priceBooks) {
                const response = await fetch(`${this.priceBookSource}/${priceBook}`);
                const result = await response.json();
                const priceBookOptions = result.tesla.configSetPrices.options;
                for (const code of Object.keys(priceBookOptions)) {
                    const priceBookOption = priceBookOptions[code];
                    options[code] = {
                        group: priceBookOption.category,
                        name: priceBookOption.name,
                        description: priceBookOption.description,
                        excludes: priceBookOption.excludes,
                    };
                }
            }
            this.options = options;
        }
        return this.options;
    }

    public decodeOption(code: string): Option | undefined {
        if (this.options) {
            return this.options[code];
        }
    }

    public decodeOptions(codes: string[]): OptionMap {
        const options: OptionMap = {};
        if (this.options) {
            for (const code of codes) {
                options[code] = this.options[code];
            }
        }
        return options;
    }
}

const optionsDecoderImpl = new OptionsDecoderImpl();
optionsDecoderImpl.loadPriceBooks();
export default optionsDecoderImpl;
