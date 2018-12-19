import { tesla } from '../services/teslaapi';
import { IsFetching, isFetching } from './isfetching';
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../types';

export const LOG_ON = 'LOG_ON';
export type LOG_ON = typeof LOG_ON;

export interface LogOn {
    type: LOG_ON;
    email: string;
    teslaToken: string;
}

export function logOn(email: string, password: string) {
    return async (dispatch: ThunkDispatch<ApplicationState, {}, IsFetching | LogOn>) => {
        try {
            dispatch(isFetching(true));
            const loginResult = await tesla.login(email, password);
            dispatch({
                type: LOG_ON,
                email,
                teslaToken: loginResult.access_token
            });
        }
        finally {
            dispatch(isFetching(false));
        }
    }
}

export const LOG_OFF = 'LOG_OFF';
export type LOG_OFF = typeof LOG_OFF;

export interface LogOff {
    type: LOG_OFF;
}

export function logOff(): LogOff {
    return {
        type: LOG_OFF
    };
}
