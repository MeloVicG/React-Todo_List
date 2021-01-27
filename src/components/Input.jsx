import React from "react"
// import React, { useState } from 'react';
// import Tasks from './Tasks'

//props are object
const Input = (props) => {
    const{list, setList} = props;
    let task = {
        name:"",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    //upon click this will enter into array
    const onClick = (e) => {
        setList([...list, task]);
        e.target.value =""; 
        // task = "";
    };
    return (
            <div>
                <input onChange={onChange} type="text" name="task"/> <br/>
                <button onClick={onClick}>Add to List</button>
                {/* <Tasks/> */}
            </div>
    );

};

export default Input;