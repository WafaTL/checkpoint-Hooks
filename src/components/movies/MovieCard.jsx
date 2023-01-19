import React from 'react'
import Rate from './Rate'
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    
      <div className="card" style={{height:'1000px'}}>
  <img src={movie.posterUrl} style={{height:'50%', width:'100%'}}class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
    <p className="card-text">{movie.description}</p>
    <p className="card-text"><Rate rating={movie.rating}/></p>
     <Link to={`/moviedata/${movie.id}`}>More</Link>

  </div>
</div>
    
  )
}

export default MovieCard
