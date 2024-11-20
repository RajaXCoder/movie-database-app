import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'
import './style.css'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 500 // TMDB's maximum limit

  useEffect(() => {
    const apiKey = '52d38f600d3a8f6797c2b24e51d7db0e'
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`,
      )
      .then(res => setMovies(res.data.results))
  }, [currentPage])

  return (
    <div className="movies-page">
      <h2>Popular Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default Home
