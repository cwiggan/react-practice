import React from 'react';

const markinput = (props) => {
    return(
        <div className="box">
            <textarea onChange={(e) => props.changed(e)}>Some text **with emphasis**.</textarea>
        </div>
    );
}

export default markinput;