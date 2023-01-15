import React from 'react'
import Rate from './Rate'

const MovieCard = ({movie}) => {
  return (
    
      <div className="card" >
  <img src={movie.posterUrl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
    <p className="card-text">{movie.description}</p>
    <p className="card-text"><Rate rating={movie.rating}/></p>
    <a href="#!" className="btn btn-primary">Like</a>

  </div>
</div>
    
  )
}

export default MovieCard
