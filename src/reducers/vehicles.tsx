import { REFRESH_VEHICLES, RefreshVehicles, RESET_VEHICLES, ResetVehicles } from "../actions/vehicles";
import { VehiclesState } from "../types/vehicles";

export function vehiclesReducer(state: VehiclesState = {}, action: ResetVehicles | RefreshVehicles): VehiclesState {
  switch (action.type) {

    case RESET_VEHICLES:
      return {};

    case REFRESH_VEHICLES:
      return { ...state, vehicles: action.vehicles };

    default:
      return state;
  }
}
