import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inputs</Link>
        <Link to="todo">TOdo</Link>
    </nav>
  )
}
