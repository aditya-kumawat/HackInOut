import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
};

export default App;
