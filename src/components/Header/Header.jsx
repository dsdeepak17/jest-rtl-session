import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <Link to="/">Todo</Link>
        <Link to="/followers">Followers</Link>
      </nav>
    </header>
  )
}

export default Header