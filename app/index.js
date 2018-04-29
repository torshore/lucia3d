import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/App.jsx';

import './index.scss';

const config = {
    apiKey: "AIzaSyB53-JtkHVvNKrBZQp7gnS6tDmTgx0xFzI",
    authDomain: "magicmark-223cc.firebaseapp.com",
    databaseURL: "https://magicmark-223cc.firebaseio.com",
    projectId: "magicmark-223cc",
    storageBucket: "magicmark-223cc.appspot.com",
    messagingSenderId: "7808501837"
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('app'));
