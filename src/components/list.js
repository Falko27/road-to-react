import React from 'react'

const List = ({list}) => {

return (
   list.map(item => {
            return  (
              <div>
                <p key={item.objectID}>{item.title}</p>
                <p>{item.author}</p>
              </div>
            )
        })
    )
}

export default List;