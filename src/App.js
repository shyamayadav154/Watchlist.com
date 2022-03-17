import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import './App.css'
import Add from './pages/Add'
import Header from './components/Header'
import Watched from './pages/Watched'
import Watchlist from './pages/Watchlist'
import './lib/font-awesome/css/all.min.css'
import { GlobalProvider } from './context/globalStat'
import Trending from './pages/Trending'
import Series from './pages/Series'
import Movies from './pages/Movies'
import Anime from './pages/Anime'
import SingleContent from './pages/SingleContent'

import { AnimatePresence, motion } from 'framer-motion'

function App() {
  let location = useLocation()
  return (
    <GlobalProvider>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Trending />} />
          <Route path='/series' element={<Series />} />
          <Route path='/anime' element={<Anime />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/:type/:id' element={<SingleContent />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </AnimatePresence>
    </GlobalProvider>
  )
}

export default App
