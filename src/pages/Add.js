import React, { useState, useEffect,useRef } from 'react'
import ResultCard from '../components/ResultCard'
import { motion } from 'framer-motion'

const Add = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])


  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results)
        } else {
          setResults([])
        }
        console.log(data)
      })
  }
    const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='add-page'>
        <div className='container'>
          <div className='add-content'>
            <div className='input-wrapper'>
              <input
                ref={inputRef}
                value={query}
                onChange={onChange}
                type='text'
                placeholder='Search For movies'
              />
            </div>
            {results.length > 0 && (
              <ul className='results'>
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <h2 className='no-movies'>Make your watchlist</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Add
