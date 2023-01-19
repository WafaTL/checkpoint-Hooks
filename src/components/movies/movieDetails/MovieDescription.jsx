import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { moviedata } from '../../../data';


const MovieDescripttion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviedata.find(el => el.id === Number(id));
  const onClick = () => navigate('/');

  return (
    <div >
         <img src={movie.posterUrl} style={{height:'50%', width:'50%'}}class="card-img-top" alt="..."/>
          <p className="card-text">{movie.description}</p> 
          <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <button className="btn btn-primary" onClick={onClick}>
          Go Back
        </button>
    </div>
  )
}

export default MovieDescripttion;
