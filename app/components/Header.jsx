import React, { PureComponent } from 'react';
import './Header.scss';
import Navbar from './Navbar.jsx';

const playIcon = 'https://firebasestorage.googleapis.com/v0/b/magicmark-223cc.appspot.com/o/cover%2Fplay-button.png?alt=media&token=5eb4bcb2-74ec-4df4-940c-4ff75573cf4f'

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this._handleHeaderScroll = this._handleHeaderScroll.bind(this);

        this.state = {
            pageScrolled: false
        }
    }



    componentDidMount() {
        window.addEventListener('scroll', this._handleHeaderScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleHeaderScroll);
    }

    _handleHeaderScroll() {
        window.scrollY <= 20 ? this.setState({pageScrolled: false}) : this.setState({pageScrolled: true});
        console.log(this.state.pageScrolled)

    }

    render() {
        return <div className='header'>
                <Navbar pageScrolled={this.state.pageScrolled}/>
                <div className='_image_container'>
                    <img src={playIcon} className='_play_icon'/>
                </div>
            </div>
    }
}

export default Header
