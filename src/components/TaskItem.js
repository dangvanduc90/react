import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    };

    onUpdate = () => {
        this.props.onOpenForm();
        this.props.onUpdateTask(this.props.task);
    };

    render() {
        let task = this.props.task;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? "label label-info" : "label label-danger"} onClick={this.onUpdateStatus}>{task.status ? "Kích hoạt" : "Ẩn"}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5">Sửa</span>
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5">Xóa</span>
                    </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.update_status(id));
        },
        onDelete: (id) => {
            dispatch(actions.delete_task(id));
        },
        onOpenForm: () => {
            dispatch(actions.open_form());
        },
        onUpdateTask: (task) => {
            dispatch(actions.update_task(task));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);