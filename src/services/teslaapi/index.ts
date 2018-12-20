export * from "./datatypes";
import { TeslaApi } from "./teslaapi";

// import { TeslaApiImpl } from "./teslaapiimpl";
// const url = "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com";
// export const tesla: TeslaApi = new Implementation(url);

import { TeslaApiDummy } from "./teslaapidummy";
export const tesla: TeslaApi = new TeslaApiDummy();
