import { Vehicle } from '../services/teslaapi/datatypes';

export interface VehiclesState {
    vehicles?: Vehicle[];
    selectedVehicle?: Vehicle;
}