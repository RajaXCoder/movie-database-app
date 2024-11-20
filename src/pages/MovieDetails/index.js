import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios'
import './style.css'

const MovieDetails = props => {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  // const movieId = match
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    const apiKey = '52d38f600d3a8f6797c2b24e51d7db0e'

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => setMovie(res.data))
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
      .then(res => setCast(res.data.cast))
  }, [])

  return (
    <div className="movie-details">
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
      </div>
      <div className="movie-cast">
        <h3>Cast</h3>
        <div className="cast-grid">
          {cast.map(member => (
            <div key={member.id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                alt={member.name}
              />
              <p>
                {member.name} as {member.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
