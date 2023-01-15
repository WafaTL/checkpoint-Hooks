import React, { Fragment,useState } from 'react'

const MovieAdd= ({addNewMovie}) => {
    const[movie,setMovie]=useState({
        title:'',
        date:'',
        genre:'',
        description:'',
        posterUrl:'',
        trailer:'',
        rating:'',
          
        })
        

const{title,date,genre,description,posterUrl,trailer,rating}=movie
 const handleChange=(event)=>setMovie({...movie,[event.target.name]:event.target.value});
const handleSubmit=(event)=>{
event.preventDefault();
const newMovie={
   ...movie,
   rating:Number(movie.rating),
    id:Math.floor(Math.random()*1000)
};
addNewMovie(newMovie);
setMovie({
    title:'',
    date:'',
    genre:'',
    description:'',
    posterUrl:'',
    trailer:'',
    rating:'',
      
    })
}
  return (
    <Fragment>
    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addMovie">
+
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="addMovie" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
    <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Title</label>
        <input name='title' type="text" value={title}onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput2" className="form-label">Genre</label>
        <input  name='genre'type="text"  onChange={handleChange} className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
        </div>

        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Date</label>
        <input name='date'type="date"  onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Description</label>
        <input name='description'type="text"  onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">PosterUrl</label>
        <input name='posterUrl' type="text" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Trailer</label>
        <input name='trailer'type="text" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Rating</label>
        <input name='rating'type="text" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
        </div>
        <div class="modal-footer">
         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
       </div>
        </form> 

        </div>
            
    </div>
  </div>
</div>
</Fragment>
  )
}

export default MovieAdd;

