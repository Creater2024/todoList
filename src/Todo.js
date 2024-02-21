import React from 'react'

export default function Todo({todo,toggleTodo}) {
  function handleChange(){
    toggleTodo(todo.id);
  }
  return (
    <div>
        <label>
            <input type='checkbox' checked={todo.isCompleted} onChange={handleChange}/>
            {todo.name}
        </label>
    </div>
  )
}
