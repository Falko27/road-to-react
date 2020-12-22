import React from 'react'

const Search = ({handleChange, search, label, isFocused}) => {

    return (
        <>
        <label htmlFor='search' type='text'>{label}</label>
        <input autoFocus={isFocused} value={search} id='search' type='text' onChange={handleChange}/>
        </>
    )

}

export default Search;