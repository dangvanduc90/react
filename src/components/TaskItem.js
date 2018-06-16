import React, {Component} from "react";

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onDelete = () => {
        this.props.onDelete(this.props.task.id) ;
    };

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id) ;
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

export default TaskItem;