import React, { Component } from 'react';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import _ from "lodash";
// import logo from './logo.svg';
import './App.css';
import uuidv4 from 'uuid/v4';
import {connect} from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filter: {
                name: '',
                status: -1,
            },
            keyword: '',
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
        // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
        //     this.setState({
        //         isDisplayForm: true,
        //         taskEditing: null,
        //     });
        // } else {
        //     this.setState({
        //         isDisplayForm: !this.state.isDisplayForm,
        //         taskEditing: null,
        //     });
        // }
        this.props.onToggleForm();
    };

    onOpenForm = () => {
        this.props.onOpenForm();
    };

    // onSubmit = (data) => {
    //     let {tasks} = this.state;
    //     if (data.id) { // update
    //         let index = this.findIndexById(data.id);
    //         tasks.splice(index, 1);
    //
    //         let task = {
    //             id: data.id,
    //             name: data.name,
    //             status: data.status === 'true',
    //         };
    //         tasks.push(task);
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //         this.setState({
    //             tasks: tasks
    //         });
    //     } else { // add one
    //         let task = {
    //             id: uuidv4(),
    //             name: data.name,
    //             status: data.status === 'true',
    //         };
    //         tasks.push(task);
    //         this.setState({
    //             tasks: tasks
    //         });
    //         localStorage.setItem('tasks', JSON.stringify(tasks));
    //     }
    // };

    onUpdate = (id) => {
        let {tasks} = this.state;
        let index = this.findIndexById(id);
        if (index !== -1) {
            this.setState({
                taskEditing: tasks[index]
            });
        }
        this.onOpenForm();
    };

    onFilter = (filterName, filterStatus) => {
        this.setState({
            filter: {
                name: filterName,
                status: parseInt(filterStatus, 10)
            }
        })
    };

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword,
        });
    };

    onSort = (sort) => {
        this.setState({
            sort: sort,
        }, () => {
            // console.log(this.state.sort);
        })
    };

    findIndexById = (id) => {
        let {tasks} = this.state;
        return _.findIndex(tasks, function (o) {
            return o.id === id;
        });
    };

    render() {
        let {taskEditing, filter, keyword, sort} = this.state;
        let {isDisplayForm} = this.props;
        // if (keyword) {
        //     // Cach 1
        //     // tasks = tasks.filter((task) => {
        //     //     return task.name.toLowerCase().includes(keyword.toLowerCase());
        //     // });
        //
        //     // Cach 2
        //     tasks = _.filter(tasks, (task) => {
        //         return task.name.toLowerCase().includes(keyword.toLowerCase());
        //     });
        // }
        // if (filter.name) {
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().includes(filter.name.toLowerCase());
        //     });
        // }
        // tasks = tasks.filter((task) => {
        //     switch (filter.status) {
        //         case -1: // tat ca
        //             return true;
        //         case 0: // an?
        //             return !task.status;
        //         case 1: // kich hoat
        //             return task.status;
        //         default:
        //             return true;
        //     }
        // });

        // if (sort) {
        //     switch (sort.by) {
        //         case 'name':
        //             tasks.sort((a, b) => {
        //                 if (a.name > b.name)
        //                     return sort.value;
        //                 else if (a.name < b.name)
        //                     return -sort.value;
        //                 else
        //                     return 0;
        //             });
        //             break;
        //         case 'status':
        //                 tasks.sort((a, b) => {
        //                     if (a.status > b.status)
        //                         return sort.value;
        //                     else if (a.status < b.status)
        //                         return -sort.value;
        //                     else
        //                         return 0;
        //                 });
        //             break;
        //         default:
        //             break;
        //     }
        // }

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {isDisplayForm && <TaskForm task={taskEditing}/>}
                    </div>
                    <div className={isDisplayForm ? ("col-xs-8") : ("col-xs-12")}>
                        <button type="button" className="btn btn-primary" onClick={() =>this.onToggleForm()}><span className="fa fa-plus mr-5" />Thêm Công Việc</button>
                        <button type="button" className="btn btn-primary ml-15" onClick={this.onGenerateData}>Data Sample</button>
                        <div className="row mt-15">
                            <Control onSearch={this.onSearch} onSort={this.onSort}/>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
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
        isDisplayForm: state.isDisplayForm
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggle_form());
        },
        onOpenForm: () => {
            dispatch(actions.open_form());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
