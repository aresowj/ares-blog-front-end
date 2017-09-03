import React, { Component } from 'react';
import Footer from './Footer.js'

class RightBody extends Component {
    render() {
        return (
            <div className="content pure-u-1 pure-u-md-3-4">
                <BlogPosts />
                <BlogPosts />
            </div>
        );
    }
}

class BlogPosts extends Component {
    render() {
        return (
            <div>
                <div className="posts">
                    <h1 className="content-subhead">What's New</h1>
                    <BlogPost />
                    <BlogPost />
                </div>
                <Footer />
            </div>
        );
    }
}

class BlogPost extends Component {
    render() {
        return (
            <section className="post">
                <header className="post-header">
                    <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar" src="img/common/tilo-avatar.png" />

                    <h2 className="post-title">Introducing Pure</h2>

                    <p className="post-meta">
                        By <a href="#" className="post-author">Tilo Mitra</a> under <a className="post-category post-category-design" href="#">CSS</a> <a className="post-category post-category-pure" href="#">Pure</a>
                    </p>
                </header>

                <div className="post-description">
                    <p>
                        Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.
                    </p>
                </div>
            </section>
        );
    }
}

export default RightBody;
