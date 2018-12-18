export const LOG_ON = 'LOG_ON';
export type LOG_ON = typeof LOG_ON;

export interface LogOn {
    type: LOG_ON;
    email: string;
    teslaToken: string;
}

export function logOn(email: string, teslaToken: string): LogOn {
    return {
        type: LOG_ON,
        email,
        teslaToken
    };
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
