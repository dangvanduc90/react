import React, { Component } from 'react';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
// import logo from './logo.svg';
import './App.css';
import uuidv4 from 'uuid/v4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [], // id
            isDisplayForm: true,
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks') != null) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({tasks: tasks});
        }
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

    onToggleForm = (e) => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    };

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    };

    onSubmit = (data) => {
        let task = {
            id: uuidv4(),
            name: data.name,
            status: data.status === 'true',
        };
        let {tasks} = this.state;
        tasks.push(task);
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    render() {
        let {tasks, isDisplayForm} = this.state;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {isDisplayForm && <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} />}
                    </div>


                    <div className={isDisplayForm ? ("col-xs-8") : ("col-xs-12")}>
                        <button type="button" className="btn btn-primary" onClick={() =>this.onToggleForm()}><span className="fa fa-plus mr-5" />Thêm Công Việc</button>
                        <button type="button" className="btn btn-primary ml-15" onClick={this.onGenerateData}>Data Sample</button>
                        <div className="row mt-15">
                            <Control/>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
