import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const toggle = (state = false, action) => {
    switch (action.type) {
        case types.TOGGLE_PRICE:
            return !state;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    filter,
    routing,
    toggle
});

export default rootReducer;
