export const IS_FETCHING = 'IS_FETCHING';
export type IS_FETCHING = typeof IS_FETCHING;

export interface IsFetching {
    type: IS_FETCHING;
    busy: boolean;
}

export function isFetching(busy: boolean): IsFetching {
    return {
        type: IS_FETCHING,
        busy
    }
}
