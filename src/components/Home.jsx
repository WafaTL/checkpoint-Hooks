import React from 'react'
import Filter from './movies/Filter';
import '../App.css';
import { moviedata } from '../data';
import MovieList from './MovieList';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MovieAdd from './movies/MovieAdd';
const Home = () => {
    const[title,setTitle]=useState("")
  const[rating,setRating]=useState(5)
   const addNewMovie=(movie)=> moviedata.push(movie);
  return (
    <div className="container">
    <div className="row">
        <div className='col-md-8 offset-md-2' >
        <Filter title={title} setTitle={setTitle}rating={rating}setRating={setRating}/> 

          <br/>
          <MovieAdd addNewMovie={addNewMovie}/>
           
        </div>
      </div> 
      <MovieList moviedata={moviedata} title={title} rating={rating} />
         
    </div>
  )
}

export default Home
