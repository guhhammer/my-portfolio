import React from 'react';
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
