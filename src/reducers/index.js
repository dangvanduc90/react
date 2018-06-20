import {combineReducers} from "redux";
import tasks from "./tasks";
import taskEditing from "./update_task";
import isDisplayForm from "./toggle_form";

const myReducers = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    taskEditing: taskEditing

});

export default myReducers;