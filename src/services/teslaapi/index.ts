export * from './datatypes';
import { TeslaApi, TeslaApiImpl } from './teslaapi';

export const tesla: TeslaApi = new TeslaApiImpl('https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com');
