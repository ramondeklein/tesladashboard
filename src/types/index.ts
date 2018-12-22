import { RouterState } from "connected-react-router";
import { FormStateMap } from "redux-form";

import { AccountState } from "./account";
import { IsFetchingState } from "./isfetching";
import { VehiclesState } from "./vehicles";

export interface ApplicationState {
    router: RouterState;
    form: FormStateMap;
    isFetching: IsFetchingState;
    account: AccountState;
    vehicles: VehiclesState;
}
