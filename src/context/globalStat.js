import React, { useState, useContext, useReducer, useEffect } from 'react'



import AppReducer from './AppReducer'

const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
}

export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = (props) => {
  

  const [state, dispatch] = useReducer(AppReducer, initialState)
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  //actions

  const addMovieToWatchList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
  }

  const removeMovie=(id)=>{
    dispatch({type:'REMOVE',payload:id})
  }

   const addMovieToWatched = (movie) => {
     dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })
   }

   const moveToWatchlist = (movie) =>{
     dispatch({type:'MOVE_TO_WATCHLIST', payload:movie})

   }
 const removeFromWatched = (id)=>{
    dispatch({type:'REMOVE_FROM_WATCHED',payload:id})
 }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovie,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
        page,
        setPage,
        content,
        setContent,
        loading,
        setLoading
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
 export const useGlobalContext = () => {
   return useContext(GlobalContext)
 }