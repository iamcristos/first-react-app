import React, { Component } from 'react';
import './App.css';
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

  ChangerHandler = (event)=>{
    this.setState ({
      person : [
        {
          name: 'Cristos',
          year : event.target.value
        },
        {
          name: 'Femi',
          year : '2/2019'
        }
      ]
    })
  }

  togglePerson = ()=>{
    const showPerson = this.state.show;
    this.setState({show:!showPerson})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: "1px solid blue",
      padding: '10px'
    }

    let ifPerson = null
    if (this.state.show) {
      ifPerson = (
        <div>
          {this.state.person.map((psn, index)=>{
            // console.log(index)
            return <Person
            click={()=>this.deletePerson(index)}
             name={psn.name} 
             year={psn.year}
             key={psn.id}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
          <h1>I'll Be a great react developer</h1>
          <button 
            style={style}
            onClick={this.togglePerson}>Click Me!!!</button>
          {ifPerson}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello it works'))
  }
}

export default App;
