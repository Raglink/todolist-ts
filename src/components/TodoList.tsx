import React, { useContext, useEffect } from "react";
import {TodoListContext} from "../TodoListContext"; 

const TodoList = ()=>{
    const {todoList} = useContext(TodoListContext);
    useEffect(()=>{
        console.log( "todoList : ", todoList)
    },[todoList])
    const displayTodoList = todoList.map((task, index)=>
            <li key={index}>{task}</li>
        )
    return (
        <p>
            <ul>{displayTodoList}</ul>
        </p>
        
    )
}

export default TodoList
