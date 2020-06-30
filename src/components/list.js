import React from 'react';

const list = [
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

function List() {
    return (
       <div>
      {list.map(function(item) {
        return ( 
          <div>
            <div key={item.objectID}>{item.title}</div>
            <a href={item.url}>{item.title}</a>
          </div>
          )
        })}
      </div>
    )
    
  }
  
  export default List;