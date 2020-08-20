import {Box} from '@bigcommerce/big-design';
import {CheckIcon} from '@bigcommerce/big-design-icons';
import React from 'react';
import './styles/App.css';
import logo from './assets/logo.svg';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React Now
      </a>
      <CheckIcon />
    </header>
    <body>
      <Box marginVertical="xxLarge" marginHorizontal="xxxLarge">
        HI
      </Box>
    </body>
  </div>
);

export default App;
