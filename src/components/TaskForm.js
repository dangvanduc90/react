import React, {Component} from "react";

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: 'true',
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
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseAddForm();
    };

    onClear = () => {
        this.setState({
            name: "",
            status: 'true',
        });
    };

    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc<span className="fa fa-times-circle text-right pull-right" onClick={() => this.onCloseAddForm()} /></h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmitAddForm}>
                            <div className="form-group"><label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status" onChange={this.onChange}>
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

export default TaskForm;