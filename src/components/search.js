import React from 'react'

const Search = ({handleChange, search}) => {

    return (
        <>
        <label htmlFor='search' type='text'>Search</label>
        <input value={search} id='search' type='text' onChange={handleChange}/>
        </>
    )

}

export default Search;