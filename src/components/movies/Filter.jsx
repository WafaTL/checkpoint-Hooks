import React, { Fragment } from 'react'
import Rate from './Rate'

const Filter = ({title,setTitle,rating,setRating}) => {
const handleChange=(event)=> setTitle(event.target.value)
  return (
    <Fragment>
 
    <form class="d-flex" role="search">
    <input type="text" className="form-control" id="inputPassword"
    value={title}
    onChange={handleChange}/>   
 <Rate rating={rating}setRating={setRating} />
 </form>

   
    </Fragment>
  )
}

export default Filter
