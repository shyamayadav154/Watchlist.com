import React, { useState, useEffect } from 'react'
import CustomPagination from '../components/CustomPagination'
import MovieCard from '../components/MovieCard'
import { useGlobalContext } from '../context/globalStat'
import Loader from '../components/loader'
import Hero from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'

const Trending = () => {
    const [page, setPage] = useState(1)
  const { content, setContent, loading, setLoading, addMovieToWatchList,watchlist } =
    useGlobalContext()

  const navigateTo = useNavigate()

  const fetchTrending = async () => {
    setLoading(true)
    setContent([])
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
    )
    const data = await response.json()
    console.log(data)
    setContent(data.results)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }
  useEffect(() => {
    fetchTrending()
    window.scroll(0,300)
  }, [page])


  
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='movie-page' id='t'>
        <Hero />
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>Trending Movies & Series</h1>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className='movie-grid'>
              {content.length>0 && content.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type={movie.media_type} />
              ))}
            </div>
          )}

          <CustomPagination setPage={setPage} page={page} />
        </div>
      </div>
    </motion.div>
  )
}

export default Trending
