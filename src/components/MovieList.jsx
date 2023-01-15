import React from 'react'
import MovieCard from './movies/MovieCard.jsx';

const MovieList = ({moviedata,title,rating}) => {
    console.log(moviedata);
    return (
        <div style={{display:'flex'}}>
    {moviedata.filter(element=>element.title.toLowerCase().includes(title.toLowerCase())&&(element.rating===rating)).map(movie=><MovieCard key={movie.id} movie={movie}/>)}
         </div>
    )}

export default MovieList
