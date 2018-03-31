import React, { PureComponent } from 'react';
import firebase from 'firebase';
import './App.scss';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const rootRef = firebase.database().ref('3d-art');
        rootRef.once('value')
            .then((response) => {
                console.log(response.val())
            })
        }


    render() {
        console.log("Hi Front End Class!!!")
        return <div className="app">
            <div className="_header">
                <div className="_background" />
                <h1>Lucia3D</h1>
            </div>
        </div>;
    }
}

export default App;
