import { AccessToken, Vehicle } from "./datatypes";

export interface TeslaApi {
    login(email: string, password: string): Promise<AccessToken>;
    getVehicles(token: string): Promise<Vehicle[]>;
}
