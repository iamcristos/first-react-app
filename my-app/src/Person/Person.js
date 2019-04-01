import React from 'react'
import './Person.css'
const person = (props) =>{
    
    return (
        <div className="Person">
            <h2 onClick={props.click}>I'm {props.name} this when I started Learning React {props.year}</h2>
            <input type='text' onChange={props.change} value={props.year}/>
            <p> {props.children} </p>
        </div>
    
    )
}

export default person