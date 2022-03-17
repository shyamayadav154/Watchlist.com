import React from 'react'

import { Link,NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/globalStat'

const Header = () => {

  const  {watched, watchlist} = useGlobalContext()
  const watchlistIs = true
  
  return (
    <header>
      <div className='navbar'>
        <div className='inner-content'>
          <div onClick={() => window.scroll(0, 0)} className='brand'>
            <Link to='/'>WatchList.com</Link>
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li>
              <NavLink to='/series'>Series</NavLink>
            </li>
            <li>
              <NavLink to='/anime'>Anime</NavLink>
            </li>
            <li className='wl'>
              <NavLink to='/watchlist'>Watchlist</NavLink>{' '}
              <span
                className='badge'
                style={{ display: watchlist.length < 1 ? 'none' : 'flex' }}
              >
                {watchlist.length}
              </span>
            </li>
            <li className='wl'>
              <NavLink to='/watched'>Watched</NavLink>
              <span
                style={{ display: watched.length < 1 ? 'none' : 'flex' }}
                className='badge'
              >
                {watched.length}
              </span>
            </li>
            <li>
              <NavLink to='/add' className='btn btn-main'>
                +Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header