// import React, { useState } from 'react';

const Tasks = (props) => {
    const {task, setList, index, list} = props;
    
    const onClick = () => {
            setList(() => {
                return list.filter(task => list.indexOf(task) !== index)
            });
        }

        //understand this part more
    const onChange = (e) =>{
            list[index].isComplete = !list[index].isComplete 
        setList([...list]);
    }

    const checked = {
        'text-decoration': 'line-through'
    }
    const unchecked = {};

    return (
            <div>
                <div className="container">
                    <label htmlFor="checkbox">{task.name}</label>
                    <input style={task.isComplete ? checked : unchecked} checked={task.isComplete} onChange={onChange} type="checkbox"/>
                    <button onClick={onClick} >Delete</button>
                </div>
            </div>
    )
};

export default Tasks;