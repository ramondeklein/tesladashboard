import { IsFetchingState } from './isfetching';
import { AccountState } from './account';
import { VehiclesState } from './vehicles';

export interface ApplicationState {
    isFetching: IsFetchingState;
    account: AccountState;
    vehicles: VehiclesState;
}