import React from 'react';

const List = (props) => {

    return props.list.map(item => {
        return ( 
          <div key={item.objectID}>
            <div>{item.title}</div>
            <a href={item.url}>{item.title}</a>
          </div>
        )
      }
    )}
  
  export default List;