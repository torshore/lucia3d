import React, { PureComponent } from 'react';

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import './HeroBanner.scss';

class HeroBanner extends PureComponent {
    render() {
        return <div className="hero-banner">
            <div className="_header">
                <div className="_nav-links">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#work">PORTFOLIO</a>
                    <a href="#contact">CONTACT</a>
                </div>

                <div className="_outer-links">
                    <a
                        href="https://www.facebook.com/lucia3d/"
                        target="_blank"
                    >
                        <FaFacebook className="_icon"/>
                    </a>

                    <a
                        href="https://github.com/Lucia416"
                        target="_blank"
                    >
                        <FaGithub className="_icon"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lucia-annunziata-wang/"
                        target="_blank"
                    >
                        <FaLinkedin className="_icon"/>
                    </a>

                    <a
                        href="https://www.instagram.com/lucia3d/"
                        target="_blank"
                    >
                        <FaInstagram className="_icon"/>
                    </a>
                </div>
            </div>

            <div className="_content">
                <div className="_logo">
                    <span>LUCIA</span>
                    <span>3D</span>
                </div>

                <div className="_description">
                    <span>3D Artist</span>
                    <span>Game Developer</span>
                    <span>Digital Designer</span>
                </div>
            </div>
        </div>
    }
}

export default HeroBanner;
