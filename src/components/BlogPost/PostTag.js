import React, { Component } from 'react';

class PostTag extends Component {
    render() {
        return (
            <a className="post-category" href={this.props.url}>{this.props.name}</a>
        );
    }
}

export default PostTag;
