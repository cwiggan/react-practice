import React from 'react';
import Person from './Person';

const people = (props) => props.people.map((person, index) => {
    return <Person love={person.name} change={(event) => props.changed(event, person.id)} click={props.clicked.bind(this, index)} key={person.id} />
});


export default people;