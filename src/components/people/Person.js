import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <h2>Hi person {props.love}</h2>
            <p>{props.children}</p>
            <input type="text" value={props.love} onChange={props.change} />
            <button onClick={props.click}>Add Person</button>
        </div>
    )
}
export default person;