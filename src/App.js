import './App.css';
import React, {useState} from 'react'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [list, setList]= useState([]);

  return (
    <div className="App">
      <h1>In the App.js</h1>

      <Input list={list} setList={setList} />
      
      <h4>your tasks are :</h4>
      {list.map((task, idx) => (
        <Tasks task={task} setList={setList} index={idx} list={list}/>
      ))}
      
    </div>
  );
}

export default App;


//need to revisit and redo this

//list = display
//
//work on creating a proccess step by step before working on
//onChange whatever changes on tag run this function
//pseudo code the process before execute