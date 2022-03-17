import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SingleContentLoader from '../components/singleContentLoader'
import { useGlobalContext } from '../context/globalStat'
import { motion } from 'framer-motion'
const img500 = 'https://image.tmdb.org/t/p/w500/'

const SingleContent = () => {
    const par = useParams()
    
    const [type, setType] = useState(par.type)
    const [id, setId] = useState(par.id)

    const [casts, setCasts] = useState([])

  const [video, setVideo] = useState([])
  const [videoLink, setVideoLink] = useState('')
    const {loading,setLoading,content,setContent} = useGlobalContext()
   
        const fetchData = async() =>{
          setLoading(true)
                const res = await fetch(
                  `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
                )
                const data = await res.json()
                    console.log(data,'content');
                    setContent(data)
                    setTimeout(() => {
                      setLoading(false)
                    }, 500);
                    
                  
        }

        const fetchCast = async () =>{
            const res = await fetch(
              `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
            )
            const data = await res.json()

           
            console.log(data);
                setCasts(data.cast)
                
        }

        const fetchVideo = async() =>{
          const res = await fetch(
            `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
          )
          const data = await res.json()
          const trailer = data.results.filter((result)=>{
            return result.name.toUpperCase().includes('TRAILER') || result.type.toUpperCase().includes('TRAILER')
          })
          setVideo(trailer[0]?.key)
          if(trailer[0]?.site === 'Vimeo'){
              setVideoLink(`https://vimeo.com/${trailer[0]?.key}`)
          }else{
              setVideoLink(`https://www.youtube.com/watch?v=${trailer[0]?.key}`)
          }
          
        }

        useEffect(()=>{
            fetchData()
            fetchCast()
            fetchVideo()
          
        },[id])
        

        if(loading) return <SingleContentLoader/>

        
            
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className='content'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.9) 0%, rgba(3,37,65, 0.5) 100%),url(${img500}${content.backdrop_path})`,
        }}
      >
        <div className='single-content'>
          <div className='img-container'>
            <img
              src={`${img500}${content.poster_path}`}
              alt={content.name || content.title}
            />
          </div>
          <div className='info-container'>
            <div className='info'>
              <h1>
                {content.title || content.name} (
                {(
                  content.first_air_date ||
                  content.release_date ||
                  '-----'
                ).substring(0, 4)}
                ){' '}
              </h1>
              <ul>
                <li>
                  {content.vote_average || 'Not Released'} &nbsp;
                  <i className='fa fa-star'></i>
                </li>
                {type === 'tv' ? (
                  <li>
                    {content.episode_run_time?.length > 0
                      ? `${content.episode_run_time[0]} m`
                      : 'Runtime Not available'}
                  </li>
                ) : (
                  <li>
                    {Math.floor(content.runtime / 60)}h {content.runtime % 60}m
                  </li>
                )}
              </ul>{' '}
              <p className='tagline'>
                {' '}
                <em>{content.tagline}</em>
              </p>
              <h2>Overview:</h2>
              <p className='overview'>{content.overview}</p>
            </div>
            <div className='casts'>
              <h2>Casts:</h2>
              <ul>
                {casts.map((cast, index) => {
                  if (index < 20)
                    return (
                      <li key={cast.id}>
                        {' '}
                        <img
                          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                          alt=''
                        />{' '}
                        <b>{cast.name}</b>
                      </li>
                    )
                })}
              </ul>
            </div>
            <div className='sc-btn-container'>
              <button className='sc-btn ' id='watchlist'>
                <i className='fa fa-plus'></i> Watchlist
              </button>
              <button className='sc-btn ' id='trailer'>
                <i className='fa fa-play'></i>{' '}
                <a href={videoLink} target='_blank'>
                  {' '}
                  Trailer
                </a>{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SingleContent