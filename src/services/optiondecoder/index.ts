import { getEnabledCategories } from "trace_events";

export interface Category {
    code: string;
    name?: string;
    options: Option[];
}

export interface Option {
    code: string;
    category?: Category;
    name?: string;
    description?: string;
    excludes: string[];
}

export interface CategoryMap {
    [key: string]: Category;
}

export interface OptionMap {
    [key: string]: Option;
}

export interface OptionsDecoder {
    loadPriceBooks(): Promise<OptionMap>;
}

export class OptionsDecoderImpl implements OptionsDecoder {
    private readonly priceBookSource = "https://raw.githubusercontent.com/fredrikfjeld/tesla-options-decoder/gh-pages/";
    private readonly priceBooks = ["pricebook-3.5_MS_en_EU.json"];

    private options: OptionMap | undefined;

    public async loadPriceBooks(): Promise<OptionMap> {
        if (!this.options) {
            const nullKey: string = "NULL";
            const categories: CategoryMap = {};
            const options: OptionMap = {};
            for (const priceBook of this.priceBooks) {
                const response = await fetch(`${this.priceBookSource}/${priceBook}`);
                const result = await response.json();
                const priceBookCategories = result.tesla.configSetPrices.categories;
                for (const code of Object.keys(priceBookCategories)) {
                    const priceBookCategory = priceBookCategories[code];
                    categories[code] = {
                        code: code,
                        name: this.trim(priceBookCategory.name),
                        options: [],
                    };
                }
                categories[nullKey] = {
                    code: nullKey,
                    name: "Unknown",
                    options: [],
                };
                const priceBookOptions = result.tesla.configSetPrices.options;
                for (const code of Object.keys(priceBookOptions)) {
                    const priceBookOption = priceBookOptions[code];
                    const category = (priceBookOption.category ? categories[priceBookOption.category] : undefined) || categories[nullKey];
                    options[code] = {
                        code: code,
                        category: category,
                        name: this.trim(priceBookOption.name),
                        description: priceBookOption.description,
                        excludes: priceBookOption.excludes,
                    };
                    category.options.push(options[code]);
                }
            }
            this.options = options;
        }
        return this.options;
    }

    private trim(input?: string): string | undefined {
        if (input) {
            const tagIndex = input.indexOf("<");
            if (tagIndex >= 0) {
                input = input.substring(0, tagIndex);
            }
            return input.trim();
        }
    }
}

const optionsDecoderImpl = new OptionsDecoderImpl();
optionsDecoderImpl.loadPriceBooks();
export default optionsDecoderImpl;
