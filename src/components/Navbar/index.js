import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    if (query) navigate(`/search?query=${query}`)
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>
          <Link to="/">movieDB</Link>
        </h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar
