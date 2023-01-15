import Filter from './components/movies/Filter';
import './App.css';
import { moviedata } from './data';
import MovieList from './components/MovieList';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MovieAdd from './components/movies/MovieAdd';
import Navbar from './components/Layout/Navbar';

function App() {
  const[title,setTitle]=useState("")
  const[rating,setRating]=useState(5)
   const addNewMovie=(movie)=> moviedata.push(movie);


   

  
  return (
    <>
    <Navbar/>
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
    </>
  
  );
}

export default App;
