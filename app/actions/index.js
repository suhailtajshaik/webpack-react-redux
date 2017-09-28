import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
export function togglePrice() {
    return {
        type: types.TOGGLE_PRICE
    };
}
