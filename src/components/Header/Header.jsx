import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <nav>
        <Link to="/">Todo</Link>
        <Link to="/followers">Follower</Link>
      </nav>
    </header>
  )
}

export default Header