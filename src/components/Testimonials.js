import React from "react"

function Testimonials(prop){
  return (
    <div>
      <h3>{prop.name}</h3>
      <p>{prop.comment}</p>
    </div>
  )
}

export default Testimonials