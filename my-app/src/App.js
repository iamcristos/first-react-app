import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
     person : [
      { id: 1,
        name: 'Cristos',
        year : '30/3/2019'
      },
      {
        id: 2,
        name: 'Femi',
        year : '2019'
      }
    ],
    show : false
  }

  deletePerson = (personIndex)=>{
    // const person = this.state.person;
    // const person = this.state.person.splice();
    const person = [...this.state.person]
    person.splice(personIndex, 1);
    this.setState({
      person: person
    })
  }

  ChangerHandler = (event, id)=>{
    const personIndex = this.state.person.findIndex(psn=>{
      return psn.id === id
    });

    const person = {...this.state.person[personIndex]}
    person.year = event.target.value;
    console.log(person)
    const persons = [...this.state.person]
    persons[personIndex] = person;
    this.setState({person:persons})
    // this.setState ({
    //   person : [
    //     {
    //       name: 'Cristos',
    //       year : event.target.value
    //     },
    //     {
    //       name: 'Femi',
    //       year : '2/2019'
    //     }
    //   ]
    // })
  }

  togglePerson = ()=>{
    const showPerson = this.state.show;
    this.setState({show:!showPerson})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: "1px solid blue",
      padding: '10px',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let ifPerson = null
    if (this.state.show) {
      ifPerson = (
        <div>
          {this.state.person.map((psn, index)=>{
            // console.log(index)
            return <Person
            click={()=>this.deletePerson(index)}
            change={(event)=>this.ChangerHandler(event,psn.id)}
             name={psn.name} 
             year={psn.year}
             key={psn.id}/>
          })}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'slime',
        color: 'black'
      }
    }
    const classes = []
    if (this.state.person.length <=1)  {
      classes.push('red')
    }
    if (this.state.person.length <1) {
      classes.push('bold')
    }
    return (
      <StyleRoot>
        <div className="App">
            <h1>I'll Be a great react developer</h1>
            <p className={classes.join(' ')}>It will take patience and persistence</p>
            <button 
              style={style}
              onClick={this.togglePerson}>Click Me!!!</button>
            {ifPerson}
        </div>
      </StyleRoot>
      
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello it works'))
  }
}

export default Radium(App);
