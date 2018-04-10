import React, { Component } from 'react';
import './App.css';
import Store from '../components/store/Store';
import People from '../components/people/People';
import base from '../base';
import MarkOut from '../components/markup/MarkOutput';
import MarkIn from '../components/markup/MarkIput';

class App extends Component {
  state = {
    people:[
        { id:78, name: 'Tony', age: 30 },
        { id:67, name: 'Max', age: 50 },
        { id:69, name: 'Naomi', age: 35 }
    ],
      username: 'yoda',
      markuptext: 'Some text **with emphasis**',
      stores: []
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
          return p.id === id;
      });
      const person  = { ...this.state.people[personIndx]};
      person.name = e.target.value;

      const people = [...this.state.people];
      people[personIndx] = person;
      this.setState({
          people: people
      });
  }
  updateMarkUp = (e) => {
      const content = this.state.markuptext;
      this.setState({
          markuptext: e.target.value
      });
  }
  toogleHandler = () => {
      const showThem = this.state.showPeople;
      this.setState({
          showPeople: !showThem
      })
  }
  componentDidMount(){
      //console.log('mounted');
      this.ref = base.syncState('stores',{
          context: this,
          state: 'stores'
      })
  }
  render() {
      let people = null;
      let store = null;
      const classes = [];
      if(this.state.people.length <=2){
          classes.push('red');
      }
      if(this.state.people.length <=1 ){
          classes.push('bold');
      }

      if(this.state.showPeople){
          console.log(this.state.stores);
          people = (
              <People
                  people={this.state.people}
                  clicked={this.deleteHandler}
                  changed={this.changeNameHandler}
              />
          );
      }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>People App</h1>
          {people}
        <button onClick={this.toogleHandler}>Toggle</button>
          <div className="markit">
              <MarkIn text={this.state.markuptext} changed={this.updateMarkUp} />
              <MarkOut text={this.state.markuptext}/>
          </div>

      </div>
    );
  }
}

export default App;
