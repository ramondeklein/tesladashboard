import { LOG_ON, LOG_OFF, LogOn, LogOff } from '../actions/account';
import { AccountState } from '../types/account';

export function accountReducer(state: AccountState = {}, action: LogOn | LogOff): AccountState {
  switch (action.type) {
    case LOG_OFF:
      return {
        ...state,
        user: undefined
      };

    case LOG_ON:
      return {
        ...state,
        user: {
          email: action.email,
          teslaToken: action.teslaToken
        }
      };

    default:
      return state;
  }
}
