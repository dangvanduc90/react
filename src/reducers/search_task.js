import * as types from "./../constants/ActionTypes";

let initialState = null;

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TASK:
            return action.keyword;
        default:
            break;
    }
    return state;
};

export default myReducers;