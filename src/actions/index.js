import * as types from "./../constants/ActionTypes";
export const list_all = () => {
    return {
        type: types.LIST_ALL,
    }
};
export const save_task = (task) => {
    return {
        type: types.SAVE_TASK,
        task: task
    }
};
export const toggle_form = () => {
    return {
        type: types.TOGGLE_FORM,
    }
};
export const close_form = () => {
    return {
        type: types.CLOSE_FORM,
    }
};
export const open_form = () => {
    return {
        type: types.OPEN_FORM,
    }
};
export const update_status = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id: id
    }
};
export const delete_task = (id) => {
    return {
        type: types.DELETE_TASK,
        id: id
    }
};
export const update_task = (task) => {
    return {
        type: types.UPDATE_TASK,
        task: task
    }
};
export const filter_task = (filter) => { // object {name, status}
    return {
        type: types.FILTER_TASK,
        filter: filter
    }
};
export const search_task = (keyword) => { // string
    return {
        type: types.SEARCH_TASK,
        keyword: keyword
    }
};
export const sort_task = (sort) => { // object {name, status}
    return {
        type: types.SORT_TASK,
        sort: sort
    }
};