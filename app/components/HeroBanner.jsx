import React, { PureComponent } from 'react';

import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialInstagramCircular from 'react-icons/lib/ti/social-instagram-circular';

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
                        <TiSocialFacebookCircular className="_icon"/>
                    </a>

                    <a
                        href="https://github.com/Lucia416"
                        target="_blank"
                    >
                        <TiSocialGithubCircular className="_icon"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lucia-annunziata-wang/"
                        target="_blank"
                    >
                        <TiSocialLinkedinCircular className="_icon"/>
                    </a>

                    <a
                        href="https://www.instagram.com/lucia3d/"
                        target="_blank"
                    >
                        <TiSocialInstagramCircular className="_icon"/>
                    </a>
                </div>
            </div>

            <div className="_content">
                <div className="_logo"></div>

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
