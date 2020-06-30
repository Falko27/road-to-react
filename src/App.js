import React from 'react';
import List from "./components/list";
import './App.css';

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
      <hr/>

      <List />

    </div>
  );
}

export default App;
