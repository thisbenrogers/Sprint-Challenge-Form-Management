import React from 'react';

import TOS from './components.js/TOS';
import RegForm from './components.js/RegForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Registration</h1>
      <RegForm />
      <TOS />
    </div>
  );
}

export default App;
