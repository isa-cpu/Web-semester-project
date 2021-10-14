import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import TopHigh from './TopHigh'

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  // oooooo
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false)
    } else {
      setDropdown1(true)
    }
  }

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false)
    } else {
      setDropdown1(false)
    }
  }
  // drop two ends here
  // drop down3 starts

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false)
    } else {
      setDropdown2(true)
    }
  }

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false)
    } else {
      setDropdown2(false)
    }
  }
  // drop down3 ends

  // drop down4 starts

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false)
    } else {
      setDropdown3(true)
    }
  }

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false)
    } else {
      setDropdown3(false)
    }
  }
  // drop down4 ends

  return (
    <>
      <TopHigh />
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          SRC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link to='/src' className='nav-links' onClick={closeMobileMenu}>
              The SRC <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown3 />}
          </li>
          {/* next drop down */}

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/executives'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Executives <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown2 />}
          </li>
          <li className='nav-item'>
            <Link
              to='/committees'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Committees
            </Link>
          </li>
          {/* next drop down */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
              News <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          {/* next drop */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link to='/welfare' className='nav-links' onClick={closeMobileMenu}>
              Welfare <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown4 />}
          </li>
          <li className='nav-item'>
            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
