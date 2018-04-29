import React, { PureComponent } from 'react';
import firebase from 'firebase';
import './App.scss';
import Header from './Header.jsx';

class App extends PureComponent {

    render() {

        return <div className='app'>
            <Header/>
            <div className='_content'>
            </div>
        </div>
    }
}

export default App;
