import React,{useState} from 'react';
import './App.css';
import Form from './components/From';
import TodoList from './components/TodoList';
import TodoListProvider from './TodoListContext';
function App() {
  return (

    <div className="App">
      <TodoListProvider>
        <Form/>
        <TodoList/>
      </TodoListProvider>
      
    </div>
  );
}

export default App;
