import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
        <img src= {props.img} />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, deserunt laudantium alias est assumenda recusandae mollitia iure labore, odit ab, iste repudiandae blanditiis obcaecati impedit? Similique, perferendis. Voluptatum, necessitatibus tempora.</p>
        <button>view</button>
      </div>
    </div>
  )
}

export default Card