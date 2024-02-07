import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <nav className='nav-menu'>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
     
    </div>
  )
}

export default Header