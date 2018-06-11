import React, { Component } from 'react';
import UserInfo from './UserInfo';

class Comment extends Component{

    render () {
        return <div className="Comment">
            <UserInfo author={this.props.author} />
            <div className="Comment-text">
                {this.props.text}
            </div>
            <div className="Comment-date">
                {this.props.date}
            </div>
        </div>
    }
}

export default Comment;