import React, { Component } from 'react';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import './App.css';
import uuidv4 from 'uuid/v4';
import {connect} from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: 'name', // name, status
                value: 1,
            }
        };
    }

    onGenerateData = () => {
        let tasks = [
            {
                id: uuidv4(),
                name: 'Hoc lap trinh PHP',
                status: false,
            },
            {
                id: uuidv4(),
                name: 'Hoc lap trinh ASP',
                status: true,
            },
            {
                id: uuidv4(),
                name: 'Hoc lap trinh Javascript',
                status: false,
            },
            {
                id: uuidv4(),
                name: 'Hoc lap trinh Java',
                status: true,
            },
            {
                id: uuidv4(),
                name: 'Hoc lap trinh C#',
                status: true,
            }
        ];
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    onToggleForm = () => { // Add task
        if (this.props.isDisplayForm && this.props.taskEditing !== null) {
            this.props.onOpenForm();
        } else { // update task
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: "",
            name: '',
            status: false,
        });
    };


    render() {
        let {isDisplayForm} = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {isDisplayForm && <TaskForm />}
                    </div>
                    <div className={isDisplayForm ? ("col-xs-8") : ("col-xs-12")}>
                        <button type="button" className="btn btn-primary" onClick={() =>this.onToggleForm()}><span className="fa fa-plus mr-5" />Thêm Công Việc</button>
                        <button type="button" className="btn btn-primary ml-15" onClick={this.onGenerateData}>Data Sample</button>
                        <div className="row mt-15">
                            <Control />
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggle_form());
        },
        onClearTask: (task) => {
            dispatch(actions.update_task(task));
        },
        onOpenForm: () => {
            dispatch(actions.open_form());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
