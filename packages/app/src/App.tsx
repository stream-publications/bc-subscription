import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {ChannelListPage} from './pages/ChannelListPage';
// import {ChannelDetailPage} from './pages/ChannelDetailPage';
import logo from './assets/logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React Now
                </a>
                <div>hi</div>
                {/* <Router> */}
                {/*    <Route path="/" exact component={ChannelListPage} /> */}
                {/*    <Route path="/channel/" component={ChannelDetailPage} /> */}
                {/* </Router> */}
            </header>
            {/* <ChannelListPage /> */}
        </div>
    );
}

export default App;
