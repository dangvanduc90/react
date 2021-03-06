import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {

    defaultState = () => {
        return {
            id: "",
            name: "",
            status: 'false',
        }
    };

    constructor(props) {
        super(props);
        if (props.taskEditing) {
            let task = props.taskEditing;
            this.state = {
                id: task.id,
                name: task.name,
                status: task.status + "",
            }
        } else {
            this.state = this.defaultState();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.taskEditing) {
            let task = nextProps.taskEditing;
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status + "",
            });
        } else {
            this.onClear();
        }
    }

    onCloseAddForm = () => {
        this.props.onCloseForm();
    };

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        })
    };

    onSubmitAddForm = (e) => {
        e.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.onCloseAddForm();
    };

    onClear = () => {
        this.setState(this.defaultState());
    };

    render() {
        let {id} = this.state;
        if (!this.props.isDisplayForm) return null;
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {id ? "Cập nhật Công Việc" : "Thêm Công Việc" }
                            <span className="fa fa-times-circle text-right pull-right" onClick={() => this.onCloseAddForm()} />
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmitAddForm}>
                            <div className="form-group"><label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5" />Lưu Lại</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => this.onClear()} ><span className="fa fa-close mr-5" />Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.save_task(task));
        },
        onCloseForm: () => {
            dispatch(actions.close_form());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);