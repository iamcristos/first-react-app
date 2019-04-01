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
    ]
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
    ]

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
  render() {
    return (
      <div className="App">
          <h1>I'll Be a great react developer</h1>
          <button onClick={this.buttonHandler.bind(this, 'Khristos')}>Click Me!!!</button>
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
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello it works'))
  }
}

export default App;
