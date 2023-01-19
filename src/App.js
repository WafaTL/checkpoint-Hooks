
import { Routes, Route } from 'react-router-dom';
import MovieDescription from './components/movies/movieDetails/MovieDescription';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home';


function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/movieData/:id" element={<MovieDescription />} />
    


    </Routes>
   
    </>
  
  );
}

export default App;
