import React from 'react';
import logo from './images/logo.png';

import Launches from './components/Launches';

import './App.css';

function App() {
  return (
    <div className='container'>
      <img
        src={logo}
        alt='SpaceX'
        style={{ width: 100, height: 50, display: 'block', margin: 'auto' }}
      />
      <Launches />
    </div>
  );
}

export default App;
