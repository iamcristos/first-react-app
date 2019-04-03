import React from 'react'
import Radium from 'radium'
import './Person.css'
const person = (props) =>{
    const style = {
        '@media (min-width : 500px)' : {
            width : '400px'
        }
    }
    return (
        <div className="Person" style = {style}>
            <h2 onClick={props.click}>I'm {props.name} this when I started Learning React {props.year}</h2>
            <input type='text' onChange={props.change} value={props.year}/>
            <p> {props.children} </p>
        </div>
    
    )
}

export default Radium(person)
// simply a component extending another component