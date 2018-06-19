import * as types from "./../constants/ActionTypes";
import uuidv4 from 'uuid/v4';

let initialState = [];
if (localStorage && localStorage.getItem('tasks') != null) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    initialState = tasks ? tasks : [];
}

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
        default:
            break;
    }
    return state;
};

export default myReducers;