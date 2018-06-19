import {combineReducers} from "redux";
import tasks from "./tasks";
import isDisplayForm from "./toggle_form";

const myReducers = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm
});

export default myReducers;