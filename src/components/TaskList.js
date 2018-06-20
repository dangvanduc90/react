import React, {Component} from "react";
import TaskItem from "./TaskItem";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1 // -1 all, 0 deactive, 1 active
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
        let filter = {
            filterName: name === "filterName" ? value : this.state.filterName,
            filterStatus: name === "filterStatus" ? value : this.state.filterStatus,
        };
        this.props.onFilter(filter);
    };

    render() {
        // let {tasks, filterName, filterStatus} = this.props;
        let {tasks, filterTask} = this.props;

        if (filterTask.filterName) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().includes(filterTask.filterName.toLowerCase());
            });
        }
        tasks = tasks.filter((task) => {
            switch (filterTask.filterStatus) {
                case -1: // tat ca
                    return true;
                case 0: // an?
                    return !task.status;
                case 1: // kich hoat
                    return task.status;
                default:
                    return true;
            }
        });

        let element = tasks.map((task, index) =>
            {
                return <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                />;
            }
        );
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                // value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                // value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td>
                        </td>
                    </tr>
                    {element}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTask: state.filterTask,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(actions.filter_task(filter));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
