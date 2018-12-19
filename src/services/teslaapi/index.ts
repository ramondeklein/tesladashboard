export * from './datatypes';
import { TeslaApi } from './teslaapi';

// import { TeslaApiImpl } from "./teslaapiimpl";
// export const tesla: TeslaApi = new Implementation('https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com');

import { TeslaApiDummy } from "./teslaapidummy";
export const tesla: TeslaApi = new TeslaApiDummy();