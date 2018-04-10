import React from 'react';
import MDReactComponent from 'markdown-react-js';

const markoutput = (props) => {
    return(
        <div className="box">
            <MDReactComponent text={props.text} />
        </div>
    );
}

export default markoutput;