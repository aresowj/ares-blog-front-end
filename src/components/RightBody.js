import React, { Component } from 'react';
import Footer from './Footer.js'
import BlogPostSection from './BlogPost/BlogPostSection.js'

class RightBody extends Component {
    render() {
        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                <BlogPostSection />
                <Footer />
            </div>
        );
    }
}

export default RightBody;
