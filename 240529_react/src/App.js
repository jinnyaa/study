import React from 'react';
import './App.css';
import ComEx1 from './components/ComEx1';

const App = () => {
  return (
    <div className="container">
      <h1>리액트 연습</h1>
      {/* ComEx1.jsx > ComEx1.module.css */}
      <ComEx1 />
    </div>
  );
};

export default App;