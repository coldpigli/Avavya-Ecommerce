import React from 'react'

const SearchBar = () => {
  return (<>
    <div className='search-container flex bod-light'>
    <div className="search-bar flex">
        <span className="material-icons md-24">search</span>
        <input className="input-box" placeholder="Search for groceries"/>
    </div>
    <button className="btn btn-primary">Search</button>
    </div> 
    </>
  )
}

export default SearchBar;