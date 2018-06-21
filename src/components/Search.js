import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    // onChange = (e) => {
    // };

    onSearch = () => {
        let target = this.refs.keyword;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        }, () => {
            this.props.onSearch(this.state.keyword);
        });
    };

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    name="keyword"
                    ref="keyword"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    // value={keyword}
                    // onChange={this.onChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                        <span className="fa fa-search mr-5">Tìm</span>
                    </button>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.search_task(keyword));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);