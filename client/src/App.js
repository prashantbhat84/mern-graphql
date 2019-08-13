import React from 'react';
import logo from './images/logo.png';

import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <img
          src={logo}
          alt='SpaceX'
          style={{ width: 100, height: 50, display: 'block', margin: 'auto' }}
        />
        <Route exact path='/' component={Launches} />
        <Route exact path='/launch/:flight_number' component={Launch} />
      </div>
    </Router>
  );
}

export default App;
