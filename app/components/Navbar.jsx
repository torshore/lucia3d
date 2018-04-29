import React, { PureComponent } from 'react';
import './Navbar.scss'

class Navbar extends PureComponent {
    render() {
        return <div className={this.props.pageScrolled  ? 'navbar-fixed' : 'navbar' }>
            <div> Hello world
            </div>
        </div>
    }
}

export default Navbar
