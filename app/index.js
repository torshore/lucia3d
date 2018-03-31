import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/App.jsx';

import './index.scss';

const config = {
    apiKey: "AIzaSyBLAHLO2HD6YuvOcWt5ZtDNM6mDO1k08yU",
    authDomain: "lucia3d-4dc6d.firebaseapp.com",
    databaseURL: "https://lucia3d-4dc6d.firebaseio.com",
    projectId: "lucia3d-4dc6d",
    storageBucket: "lucia3d-4dc6d.appspot.com",
    messagingSenderId: "315028208310"
};

  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('app'));
