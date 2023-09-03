import React from 'react'
import {DessertsList, Feedback, Registration, Todo} from './components'
import data from './constant/data'
import { useState } from 'react';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:30",
    },
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse())
  }
  return (
    <div className='App' >
      {/* <DessertsList data={data.desserts} /> */}
      {/* <button onClick={reverseOrder} >Reverse</button>
      <table>
        <tbody>
          {todos.map((todo,i) => (
            <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table> */}
      {/* <Feedback /> */}
      <Registration />
    </div>
  )
}

export default App
