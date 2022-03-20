import React from 'react'

const SearchBar = () => {
  return (<>
  <div className='search-container flex'>
    <div className="search-bar flex bod-light">
        <span className="material-icons md-24">search</span>
        <input className="input-box" placeholder="Search for groceries"/>
    </div> 
    <button className="btn btn-primary">Search</button>
  </div>
    </>
  )
}

export default SearchBar;