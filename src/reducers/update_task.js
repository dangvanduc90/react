import * as types from "./../constants/ActionTypes";

let initialState = {};

const myReducers = (state = initialState, action) => {
    let task = action.task;
    switch (action.type) {
        case types.UPDATE_TASK:
            return task;
        default:
            break;
    }
    return state;
};

export default myReducers;