import React, { Component } from 'react';
import './Layout.css';


class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <header className="header">
                    Stocks for you
                </header>
                <main className="content">
                    {this.props.children}
                </main>
            </div>

        )
    }
}

export default Layout;