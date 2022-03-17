import React from 'react'
import { useGlobalContext } from '../context/globalStat'
import MovieCard from '../components/MovieCard'
import { motion } from 'framer-motion'

const Watched = () => {
  const { watched } = useGlobalContext()
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
            <h1 className='heading'>My Watched</h1>
          </div>
          {watched.length > 0 ? (
            <div className='movie-grid'>
              {watched.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type='watched' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>No movies in the listed, add some!</h2>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Watched
