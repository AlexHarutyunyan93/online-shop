import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="top-footer">

                </div>
                <div className="bottom-footer">
                    <div className="social-link-wrapper">
                        <ul className="social-menu">
                            <li className="social-menu-item">
                                <div className="social facebook">
                                    <a name="faceboockLink" href="/" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                                </div>
                            </li>
                            <li className="social-menu-item">
                                <div className="social instagram">
                                    <a name="instagramLink" href="/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;