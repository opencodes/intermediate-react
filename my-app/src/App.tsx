import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerComponent from './components/TimerComponent';

function App() {
  const [showTimer, setShowTimer] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"   />
       {showTimer?  <TimerComponent/> : null}
       <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>
      </header>
    </div>
  );
}

export default App;
