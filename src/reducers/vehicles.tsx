import { RESET_VEHICLES, REFRESH_VEHICLES, SELECT_VEHICLE, ResetVehicles, RefreshVehicles, SelectVehicle } from '../actions/vehicles';
import { VehiclesState } from '../types/vehicles';

export function vehiclesReducer(state: VehiclesState = {}, action: ResetVehicles | RefreshVehicles | SelectVehicle): VehiclesState {
  switch (action.type) {
    
    case RESET_VEHICLES:
      return {};

    case REFRESH_VEHICLES:
      return { ...state, vehicles: action.vehicles };

    case SELECT_VEHICLE:
      return { ...state, selectedVehicle: action.vehicle };

    default:
      return state;
  }
}
