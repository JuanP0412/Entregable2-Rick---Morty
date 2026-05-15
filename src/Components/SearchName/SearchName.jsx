import React from 'react'
import './SearchName.css'

const SearchName = ({ search, setSearch }) => {
  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder='Buscar personaje...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
      />
    </div>
  )
}

export default SearchName