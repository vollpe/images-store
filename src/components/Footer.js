import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="app-footer">
                <div className="footer-menu-container">
                    <nav className="footer-menu uppercase">
                        <a href="/about" className="footer-menu-element">About</a>
                        <a href="/blog" className="footer-menu-element">Blog</a>
                        <a href="/news" className="footer-menu-element">News</a>
                        <a href="/contact" className="footer-menu-element">Contact</a>
                        <a href="/sitemap" className="footer-menu-element">Sitemap</a>
                    </nav>
                    <div className="footer-copyright">&copy; All rights reserved</div>
                </div>
                <div className="footer-button-box">
                    <button className="footer-button"><i className="fab fa-twitter"></i></button>
                    <button className="footer-button"><i className="fab fa-facebook-f"></i></button>
                    <button className="footer-button"><i className="fas fa-envelope"></i></button>
                </div>
            </div>
        );
    }
}

export {Footer};
