import React, {Component} from "react";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        });
    };

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    };

    render() {
        let {keyword} = this.state;
        return (
            <div className="input-group">
                <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    value={keyword}
                    onChange={this.onChange}
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

export default Search;