import React,{useState,useEffect} from 'react'
import CustomPagination from '../components/CustomPagination'
import Loader from '../components/loader'
import MovieCard from '../components/MovieCard'
import { useGlobalContext } from '../context/globalStat'
import { motion } from 'framer-motion'

const Series = () => {
    
  
  const [page, setPage] = useState(1)
  
     const {  content, setContent,loading,setLoading } = useGlobalContext()

     const fetchSeries = async () => {
       setLoading(true)
      
       const response = await fetch(
         `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
       )
       const data = await response.json()
       console.log(data);
       setContent(data.results)
        
      setLoading(false)
     }

     useEffect(()=>{
         fetchSeries()
          window.scroll(0, 0)
     },[page])
    

     if (loading) return <Loader />
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
            <h1 className='heading'>Popular Series</h1>
          </div>
          <div className='movie-grid'>
            {content.length > 0 &&
              content.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type='tv' />
              ))}
          </div>
          <CustomPagination setPage={setPage} page={page} />
        </div>
      </div>
    </motion.div>
  )
}

export default Series