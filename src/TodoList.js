import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoList ,toggleTodo}) {
  {console.log('todoList is called')}
  return (
    
    todoList.map(todo => {
      return <Todo todo={todo} key={todo} toggleTodo = {toggleTodo}/>;
    })
  );
}

