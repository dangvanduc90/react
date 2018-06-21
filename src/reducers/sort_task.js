import * as types from "./../constants/ActionTypes";

let initialState = {
    by: 'name',
    value: 1,
};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASK:
            return action.sort;
        default:
            break;
    }
    return state;
};

export default myReducers;