import React from 'react'

const Rate = ({rating,setRating}) => {

   const star=x=> {
    const starArr=[]
    for(let i=1;i<=5;i++){
        if (i<=x) {
            starArr.push(
                <span onClick={()=>setRating(i)}>&#9733;</span>
            )
        } else {
            starArr.push(
                <span onClick={()=>setRating(i)}>&#9734;</span>)
        }
    }

    return starArr
   }
    
  return (
    <>
    
    {star(rating)}
    </>
  )
}
Rate.defaultProps={
    setRating:()=>{}
}

export default Rate
