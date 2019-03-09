import React from 'react'
import './StarWars.css'

function StarWarsPeople(props){
  return(
    <div className="starwars-info">
    <h3>X</h3>
    <h3>{props.person.name} </h3>
    <h3>{props.person.gender} </h3>
    <h3>{props.person.mass} </h3>
    <h3>{props.person.eye_color} </h3>
    <h3>{props.person.birth_year} </h3>

    </div>
  )
}

export default StarWarsPeople