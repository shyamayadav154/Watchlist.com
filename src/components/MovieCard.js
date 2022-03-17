import React, { useState } from 'react'
import MovieControl from './MovieControl'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
const MovieCard = ({ movie, type }) => {
  const [path, setPath] = useState('')

  const navigate = useNavigate()

  const clickHandler = () => {
    if (movie.release_date) {
      navigate(`/movie/${movie.id}`)
    } else {
      navigate(`/tv/${movie.id}`)
    }
  }

  return (
    <div onClick={clickHandler} className='movie-card'>
      <div className='overlay'></div>

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className='filler-poster'></div>
      )}
      <MovieControl type={type} movie={movie} />
      <div className='m-info'>
        <h3>{movie.title || movie.name}</h3>
        <div className='desc'>
          <p>
            {' '}
            <i className='fa fa-star'></i>&nbsp;{' '}
            {(movie.vote_average && movie.vote_average) || 'Not Released'}
          </p>
          <p>
            {moment(movie.first_air_date).format('LL') ||
              moment(movie.release_date).format('LL')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
