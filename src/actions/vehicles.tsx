import { ThunkDispatch } from "redux-thunk";
import { tesla } from "../services/teslaapi";
import { Vehicle } from "../services/teslaapi/datatypes";
import { ApplicationState } from "../types";
import { IsFetching, isFetching } from "./isfetching";

export const RESET_VEHICLES = "RESET_VEHICLES";
export type RESET_VEHICLES = typeof RESET_VEHICLES;

export interface ResetVehicles {
    type: RESET_VEHICLES;
}

export function resetVehicles(): ResetVehicles {
    return {
        type: RESET_VEHICLES,
    };
}

export const REFRESH_VEHICLES = "REFRESH_VEHICLES";
export type REFRESH_VEHICLES = typeof REFRESH_VEHICLES;

export interface RefreshVehicles {
    type: REFRESH_VEHICLES;
    vehicles: Vehicle[];
}

export function refreshVehicles() {
    return async (dispatch: ThunkDispatch<ApplicationState, {}, IsFetching | RefreshVehicles>, getState: () => ApplicationState) => {
        const user = getState().account.user;
        if (user) {
            try {
                dispatch(isFetching(true));
                const vehiclesResult = await tesla.getVehicles(user.teslaToken);
                dispatch({
                    type: REFRESH_VEHICLES,
                    vehicles: vehiclesResult,
                });
            } finally {
                dispatch(isFetching(false));
            }
        } else {
            dispatch({
                type: REFRESH_VEHICLES,
                vehicles: [],
            });
        }
    };
}
