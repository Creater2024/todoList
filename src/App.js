import React, {useState,useRef,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoList from "./TodoList";
const LOCAL_STORAGE_KEY = 'TodoListApp.todos';
function App() {
   console.log('app is called');
  const [todoList,setTodoList] = useState([]);
  const todoNameRef = useRef();
  useEffect(()=>{
     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     console.log('data is retriving');
     if(storedTodos) {
      console.log('data is retrieved back',storedTodos);
      setTodoList(storedTodos);
     }
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todoList));
  } , [todoList])
  function toggleTodo(id){
     const newTodoList = [...todoList];
     const todo = newTodoList.find(todo => todo.id === id)
     todo.isCompleted = !todo.isCompleted;
     setTodoList(newTodoList);
  }
  function handleAddTodo(e){
     const name = todoNameRef.current.value;
     if(name === '') return 
     setTodoList(prevTodoList => {
          return (
             [...prevTodoList,{id:uuidv4(),name:name,isCompleted:false}]
          )
     })
     todoNameRef.current.value = null;
  }
  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" ref={todoNameRef}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button>Clear Complete</button>
        <TodoList todoList = {todoList} toggleTodo = {toggleTodo}/>
    </div>
  );
}

export default App;
