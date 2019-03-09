import React from 'react'
import './StarWars.css'

function StarWarsPeople(props){
  return(
    <div className="starwars-info">
    <h3>Character Info</h3>
    <h3> I am {props.person.name} </h3>
    <h3>Gender: {props.person.gender} </h3>
    <h3>Weigh: {props.person.mass} </h3>
    <h3>Eye Color: {props.person.eye_color} </h3>
    <h3>Year of Birth: {props.person.birth_year} </h3>

    </div>
  )
}

export default StarWarsPeople