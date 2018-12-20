import { LocationChangeAction, RouterState } from "connected-react-router";
import { Reducer } from "redux";

import { AccountState } from "./account";
import { IsFetchingState } from "./isfetching";
import { VehiclesState } from "./vehicles";

export interface ApplicationState {
    router: RouterState;
    isFetching: IsFetchingState;
    account: AccountState;
    vehicles: VehiclesState;
}
