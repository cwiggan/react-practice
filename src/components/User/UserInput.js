import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <input type="text" value={props.username} onChange={props.changeit} />
        </div>
    )
}

export default userinput;