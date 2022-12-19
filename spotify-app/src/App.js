import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
   
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("This is the token: ", token);
  }, []);
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
