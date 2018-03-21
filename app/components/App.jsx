import React, { PureComponent } from 'react';

import './App.scss';

class App extends PureComponent {
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
