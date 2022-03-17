import React from 'react'
import { useGlobalContext } from '../context/globalStat';

const ResultCard = ({movie}) => {
    console.log(movie);

    const { addMovieToWatchList, watchlist, watched } =
      useGlobalContext()


    let storedMovie = watchlist.find(m=>m.id === movie.id)
    let storedMovieWatched = watched.find((m)=>m.id == movie.id)
    const watchlistDisabled = storedMovie || storedMovieWatched ? true : false


    
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
        </div>
        <div className='controls'>
          <button
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
            className='btn'
          >
            Add to Watchlist
          </button>
       
        </div>
      </div>
    </div>
  )
}

export default ResultCard