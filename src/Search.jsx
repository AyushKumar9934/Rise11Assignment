import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSearch } from "react-icons/io";
import "./search.css"
const Search = () => {
  return (
    <nav className="navbar navbar-light bg-light">
  <form className="container-fluid">

    <div className="searchdiv">
    <div className='searchIcon'><IoIosSearch/></div>
  <input className="searchInput" type="text" placeholder='Search' ></input>


    
  

    </div>
  </form>
</nav>
  )
}

export default Search