import React, { Component } from 'react';
import PostTag from './PostTag.js'

class BlogPost extends Component {
    render() {
        var tagsHTML = [];
        this.props.tags.forEach(function(tag) {
            tagsHTML.push(<PostTag {...tag} />)
        })
        return (
            <section className="post">
                <header className="post-header">
                    <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar" src="img/common/tilo-avatar.png" />

                    <h2 className="post-title">{this.props.title}</h2>

                    <p className="post-meta">
                        By <a href="#" className="post-author">{this.props.author}</a> under{' '}
                        {tagsHTML}
                    </p>
                </header>

                <div className="post-description">
                    <p>
                        {this.props.summary}
                    </p>
                </div>
            </section>
        );
    }
}

export default BlogPost;
