import React, { useState } from 'react';
import List from "./components/list";
import Search from "./components/search";
import './App.css';

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://react.js.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Amabrov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

  const [ searchTerm, setSearchTerm ] = React.useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    console.log(searchTerm)
  } 

  return (
    <div className="container">
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleChange} />
      
      <hr/>

      <List list={stories} />

    </div>
  );
}

export default App;
