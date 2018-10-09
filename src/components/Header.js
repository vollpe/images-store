import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="header-logo"><p><span className="uppercase">Company </span>the worst</p></div>
                <nav className="header-menu">
                    <a href="/menu" className="header-menu-element">Home</a>
                    <a href="/about" className="header-menu-element">About&nbsp;Us</a>
                    <a href="/" className="header-menu-element">List</a>
                    <a href="/login" className="header-menu-element">Sign&nbsp;In</a>
                </nav>
            </div>
        );
    }
}

export {Header};
