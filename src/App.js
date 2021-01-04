import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import List from './components/list'
import Search from './components/search'

const list = [{
  title: 'React', 
  url: 'https://reactjs.org/', 
  author: 'Jordan Wake',
  num_comments: 3,
  points: 4,
  objectID: 0,
},{
  title: 'Redux', 
  url: 'https://redux.js.org/', 
  author: 'Dan Amabrov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
}]

const useSemiPersistentState = (key, initalState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initalState
  )
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return [value, setValue];
}

const App = () => { 

  // show banner when url contains 'app'
  const [banner, setBanner] = useState(false)
  const url = useRef(window.location.href)

  useEffect(() => {
    if (url.current.indexOf('app') > 0) {
    setBanner(true)
  }
  }, [url])


  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    localStorage.setItem('search', e.target.value)
  }

  const searchedStories = list.filter((story) => {
    return story.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  })

  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {banner && 
      <div> This is my banner</div>
      }
      <h1>My Hacker Stories</h1>
      
      <Search search={searchTerm} handleChange={handleChange} label="Search" isFocused />

      <hr/>

      <p>Searching for: {searchTerm}</p>

      <List list={searchedStories} />

      <p>{count} page likes</p>
      <button onClick={() => setCount(count + 1)}>Like this page</button>
      
    </div>
  );
}

export default App;
