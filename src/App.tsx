import React from 'react';
import './App.css'
import { LandingPage } from './landingPage/LandingPage';

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
