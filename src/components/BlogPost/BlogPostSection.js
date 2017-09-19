import React, { Component } from 'react';
import BlogPost from './BlogPost'

class BlogPostSection extends Component {
    render() {
        const tempPostProps = {
            "title": "Post Title",
            "author": "Ares Ou",
            "summary": "Post Summary",
            "tags": [{"name": "testTag", "url": "#"}, {"name": "testTag2", "url": "#"}],
        }
        return (
            <div>
                <div className="posts">
                    <h1 className="content-subhead">Latest Posts</h1>
                    <BlogPost {...tempPostProps} />
                </div>
            </div>
        );
    }
}

export default BlogPostSection;
