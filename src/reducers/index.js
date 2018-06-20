import {combineReducers} from "redux";
import tasks from "./tasks";
import taskEditing from "./update_task";
import isDisplayForm from "./toggle_form";
import filterTask from "./filter_task";

const myReducers = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    taskEditing: taskEditing,
    filterTask: filterTask,

});

export default myReducers;