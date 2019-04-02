import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
     person : [
      {
        name: 'Cristos',
        year : '30/3/2019'
      },
      {
        name: 'Femi',
        year : '2019'
      }
    ],
    show : false
  }

  buttonHandler = (newName)=>{
    this.setState({person : [
      {
        name: newName,
        year : '30/3/2019'
      },
      {
        name: 'Femi',
        year : '2/2019'
      }
    ],

    }
  )
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
    return (
      <div className="App">
          <h1>I'll Be a great react developer</h1>
          <button 
            style={style}
            onClick={this.togglePerson}>Click Me!!!</button>
          { this.state.show ?
          <div>
            <Person 
            name={this.state.person[0].name}
            year= {this.state.person[0].year}
              click={this.buttonHandler}
              change={this.ChangerHandler}
            />
            <Person 
            name={this.state.person[1].name} 
            year={this.state.person[1].year} />
            <Person 
            name='Somebody'>Unknown coding year </Person>
          </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello it works'))
  }
}

export default App;
