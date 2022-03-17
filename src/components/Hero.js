import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heading'>
        <h1>Welcome.</h1>

        <h3>
          <span className='green'>Explore</span> and
          <span>
            {' '}
            <Link className='green' to='/add'>
              Add
            </Link>{' '}
          </span>{' '}
          Movies,Tv Shows and Anime to your{' '}
          <span >
            {' '}
            <Link to='/watchlist' className='green'>watchlist</Link>{' '}
          </span>
          .
        </h3>
      </div>
    </div>
  )
}

export default Hero

// linear-gradient(to right, rgba(0,32,541, 0.8) 0%, rgba(0,32,541, 0) 100%)
