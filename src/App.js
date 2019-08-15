import React from 'react';
import './App.css';
import Congrats from './components/Congrats/Congrats';

function App() {
  return (
    <div className="App">
      <Congrats success={true}/>
    </div>
  );
}

export default App;
