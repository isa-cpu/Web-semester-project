import React from 'react'
import { Link } from 'react-router-dom'
import s from './Tophigh.module.css'

const TopHigh = () => {
  return (
    <>
      <nav>
        <div className={(s.small_nav, s.d_flex)}>
          <ul className={s.nav_menu}>
            <li className={s.nav_links}>
              <Link className={s.link_items}>Contact Us</Link>
            </li>
            <li className={s.nav_links}>
              <Link className={s.link_items}>Executives</Link>
            </li>
            <li className={s.nav_links}>
              <Link className={s.link_items}>News</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default TopHigh
