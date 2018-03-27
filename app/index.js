import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './components/App.jsx';

import './index.scss';

const config = {
    apiKey: "AIzaSyDYmU3s3xtf0oLkwsKOtc3DEsmHMi-RjXw",
    authDomain: "lucia3d-503aa.firebaseapp.com",
    databaseURL: "https://lucia3d-503aa.firebaseio.com",
    projectId: "lucia3d-503aa",
    storageBucket: "lucia3d-503aa.appspot.com",
    messagingSenderId: "672284628878"
};
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('app'));
