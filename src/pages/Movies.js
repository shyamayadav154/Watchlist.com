import React,{useState,useEffect} from 'react'
import CustomPagination from '../components/CustomPagination'
import Loader from '../components/loader'
import MovieCard from '../components/MovieCard'
import { useGlobalContext } from '../context/globalStat'
import { motion } from 'framer-motion'
import Header from '../components/Header'

const Movies = () => {
 const [page, setPage] = useState(1)
   const {  content, setContent,loading,setLoading } = useGlobalContext()

  const fetchMovies = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
    const data = await response.json()
    console.log(data)
    setContent(data.results)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
    
  }
  useEffect(() => {
    fetchMovies()
    window.scroll(0,0)
  }, [page])


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='movie-page' id='m'>
      
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>Popular Movies</h1>
          </div>
            {loading?  (<Loader/>):(
              <div className='movie-grid'>
              { content.length > 0 && content.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type='movie' />
              ))}
            </div>
            )}
          
          <CustomPagination setPage={setPage} page={page} />
        </div>
      </div>
    </motion.div>
  )
}

export default Movies