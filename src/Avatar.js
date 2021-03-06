import React, { Component } from 'react';

class Avatar extends Component{
    render() {
        return <img className="Avatar"
                    src={this.props.author.avatarUrl}
                    alt={this.props.author.name}
        />
    }
}

export default Avatar;