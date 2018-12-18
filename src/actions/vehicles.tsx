import { Vehicle } from '../services/teslaapi/datatypes'

export const RESET_VEHICLES = 'RESET_VEHICLES';
export type RESET_VEHICLES = typeof RESET_VEHICLES;

export interface ResetVehicles {
    type: RESET_VEHICLES;
}

export function resetVehicles(): ResetVehicles {
    return {
        type: RESET_VEHICLES
    };
}

export const REFRESH_VEHICLES = 'REFRESH_VEHICLES';
export type REFRESH_VEHICLES = typeof REFRESH_VEHICLES;

export interface RefreshVehicles {
    type: REFRESH_VEHICLES;
    vehicles: Vehicle[];
}

export function refreshVehicles(vehicles: Vehicle[]): RefreshVehicles {
    return {
        type: REFRESH_VEHICLES,
        vehicles
    };
}

export const SELECT_VEHICLE = 'SELECT_VEHICLE';
export type SELECT_VEHICLE = typeof SELECT_VEHICLE;

export interface SelectVehicle {
    type: SELECT_VEHICLE;
    vehicle?: Vehicle;
}

export function selectVehicle(vehicle?: Vehicle): SelectVehicle {
    return {
        type: SELECT_VEHICLE,
        vehicle
    };
}
