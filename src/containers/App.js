import React, { Component } from 'react';
import './App.css';
import Person from '../components/people/Person';
import Error from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    people:[
        { id:78, name: 'Tony', age: 30 },
        { id:67, name: 'Max', age: 50 },
        { id:69, name: 'Naomi', age: 35 }
    ],
      username: 'yoda'
  }
  deleteHandler = (personNum) => {
    const people = [...this.state.people];
    people.splice(personNum, 1);
    this.setState({
        people: people
    });
  }
  changeNameHandler = (e, id) => {
      const personIndx = this.state.people.findIndex((p) => {
          return p.id == id;
      });
      const person  = { ...this.state.people[personIndx]};
      person.name = e.target.value;

      const people = [...this.state.people];
      people[personIndx] = person;
      this.setState({
          people: people
      });
  }
  toogleHandler = () => {
      const showThem = this.state.showPeople;
      this.setState({
          showPeople: !showThem
      })
  }
  render() {
      let people = null;
      const classes = [];
      if(this.state.people.length <=2){
          classes.push('red');
      }
      if(this.state.people.length <=1 ){
          classes.push('bold');
      }

      if(this.state.showPeople){
          people = (
              <div>
                  {this.state.people.map((person, index) => {
                      return <Person love ={person.name} change={(event) => this.changeNameHandler(event, person.id)} click={this.deleteHandler.bind(this, index)} key={person.id} />
                  })}
              </div>
          );
      }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hi</h1>
          {people}
        <button onClick={this.toogleHandler}>Toggle</button>
      </div>
    );
  }
}

export default App;
