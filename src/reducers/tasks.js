import * as types from "./../constants/ActionTypes";
import uuidv4 from 'uuid/v4';
import _ from "lodash";

let initialState = [];
if (localStorage && localStorage.getItem('tasks') != null) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    initialState = tasks ? tasks : [];
}

let findIndex = (tasks, id) => {
    return _.findIndex(tasks, function (o) {
        return o.id === id;
    });
};


const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            break;
        case types.ADD_TASK:
            let newTask = {
                id: uuidv4(),
                name: action.task.name,
                status: action.task.status === 'true',
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            let index = findIndex(state, action.id);
            if (index !== -1) {
                // state[index].status = !state[index].status;
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        default:
            break;
    }
    return state;
};

export default myReducers;