import React from 'react';
import './App.css';
import MakeCom1 from './components/MakeCom1.js';
import MakeCom2 from './components/MakeCom2.js';

function App() {
  return (
    // JS 주석 <> pregment
    <>
      <header>
        <h1>리액트 연습</h1>
      </header>
      <MakeCom1></MakeCom1>
      <MakeCom2 />
    </>
  );
}

export default App;