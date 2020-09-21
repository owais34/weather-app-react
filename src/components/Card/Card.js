import React from 'react'
import './Card.css'
function Card({img_url,location,description,temp,wspeed,precip}) {
    return (
        <div className="card">
            <img src={img_url} alt="Avatar"></img>
            <div className="container">
            <h4><b>Location : {location}</b></h4>
            <p>{description}</p>
            <p>Temperature : {temp} deg C</p>
            <p>Wind-speed : {wspeed}</p>
            <p>Precipitation : {precip}</p>
            </div>
    </div>
    )
}

export default Card
