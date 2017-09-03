import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="pure-menu pure-menu-horizontal">
                    <ul>
                        <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
                        <li className="pure-menu-item"><a href="http://twitter.com/yuilibrary/" className="pure-menu-link">Twitter</a></li>
                        <li className="pure-menu-item"><a href="http://github.com/yahoo/pure/" className="pure-menu-link">GitHub</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
