import React from 'react'
import { useGlobalContext } from '../context/globalStat'

const MovieControl = ({movie,type}) => {
  const { removeMovie, addMovieToWatched, moveToWatchlist, removeFromWatched,watchlist } =
    useGlobalContext()

    let storedMovie = watchlist.find((m) => m.id === movie.id)
    const watchDisable = storedMovie ? true: false
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button onClick={(e) => {
            e.stopPropagation()
            addMovieToWatched(movie)}} className='ctrl-btn'>
            <i className='fa-fw far fa-eye'></i>
          </button>
          <button onClick={(e) =>{
            e.stopPropagation()
             removeMovie(movie.id)}} className='ctrl-btn'>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button onClick={(e) =>{
            e.stopPropagation()
             moveToWatchlist(movie)}} className='ctrl-btn'>
            <i className='fa-fw far fa-eye-slash'></i>
          </button>
          <button
            onClick={(e) =>{
            e.stopPropagation()
             removeFromWatched(movie.id)}}
            className='ctrl-btn'
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {(type === 'movie'||type==='tv') && (
        <>
          <button disabled={watchDisable} className='ctrl-btn' onClick={(e) =>{
            e.stopPropagation()
             moveToWatchlist(movie)}}>
            <i className='fa fa-plus-circle'></i> Watchlist
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControl