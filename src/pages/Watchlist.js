import React from 'react'
import { useGlobalContext } from '../context/globalStat'
import MovieCard from '../components/MovieCard'
import { motion } from 'framer-motion'

const Watchlist = () => {
  const {watchlist} = useGlobalContext()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='movie-page'>
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>My Watchlist</h1>
          </div>
          {watchlist.length > 0 ? (
            <div className='movie-grid'>
              {watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type='watchlist' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>No movies in the watchlist</h2>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Watchlist