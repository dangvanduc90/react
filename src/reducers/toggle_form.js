import * as types from "./../constants/ActionTypes";

let initialState = false;

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            state = !state;
            break;
        case types.CLOSE_FORM:
            state = false;
            break;
        case types.OPEN_FORM:
            state = true;
            break;
        default:
            break;
    }
    return state;
};

export default myReducers;