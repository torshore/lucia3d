import React, { PureComponent } from 'react';

import PortfolioLayout from './PortfolioLayout.jsx'
import './App.scss';

class App extends PureComponent {
    render() {
        return <div className="app">
            <div className="_icon">
                <PortfolioLayout />
            </div>
        </div>;
    }
}

export default App;
