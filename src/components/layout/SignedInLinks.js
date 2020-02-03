import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Recipe</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating lighten-1"><i class="fa fa-user-o" aria-hidden="true"></i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks