import React from 'react';
import Nav from '../../components/Nav/Nav';
import TodoList from '../../components/TodoList'; 
import './todo.css'

const Todos = () => {
  return (
    <div className='todo-container'>
      <Nav />
      <TodoList /> 
    </div>
  );
}

export default Todos;
