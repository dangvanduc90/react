import React, { Component } from 'react';

class Toggle extends Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    deleteRow(id) {
        console.log(id);
    }

    render() {
        // return <button onClick={this.handleClick}>
        // return <button onClick={(e) => this.deleteRow(2, e)}>
        return <button onClick={(e) => this.handleClick(e)}>
            {this.state.isToggleOn ? "ON" : "OFF"}
        </button>;
    }
}
export default Toggle;