import {combineReducers} from "redux";
import tasks from "./tasks";
import taskEditing from "./update_task";
import isDisplayForm from "./toggle_form";
import filterTask from "./filter_task";
import searchTask from "./search_task";
import sortTask from "./sort_task";

const myReducers = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    taskEditing: taskEditing,
    filterTask: filterTask,
    searchTask: searchTask,
    sortTask: sortTask,

});

export default myReducers;