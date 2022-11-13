import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
  return (
    <div className='container'>
      <h3 className='text-uppercase text-center my-5'>Todo List</h3>
      {
        props.todo.length === 0
          ?
          "No Todo to display"
          :
          props.todo.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
      }
    </div>
  )
}

export default Todo