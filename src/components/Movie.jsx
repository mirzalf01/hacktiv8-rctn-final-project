import React from 'react'
import './../styles/movie.css'

const Movie = (props) => {
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <img src={props.url} alt="" />
            </div>
            <div className="card-body">
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default Movie