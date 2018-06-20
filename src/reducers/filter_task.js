import * as types from "./../constants/ActionTypes";

let initialState = {
    filterName: "",
    filterStatus: -1 // -1 all, 0 deactive, 1 active
};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TASK:
            return {
                filterName: action.filter.filterName,
                filterStatus: parseInt(action.filter.filterStatus, 10),
            };
        default:
            break;
    }
    return state;
};

export default myReducers;