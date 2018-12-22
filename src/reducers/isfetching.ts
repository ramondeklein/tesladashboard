import { IS_FETCHING, IsFetching } from "../actions/isfetching";
import { IsFetchingState } from "../types/isfetching";

export function isFetchingReducer(state: IsFetchingState = { fetchCount: 0 }, action: IsFetching): IsFetchingState {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        fetchCount: action.busy ? state.fetchCount + 1 : state.fetchCount - 1,
      };

    default:
      return state;
  }
}
