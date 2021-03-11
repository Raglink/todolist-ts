import React, { useContext, useEffect, useState } from "react"
import TodoListProvider, { TodoListContext } from "../TodoListContext"

const Form = () => {
    const [inputTodo, setInputTodo] = useState<string>("")
    const { addTodo } = useContext(TodoListContext)

    const handleInputTodo = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        setInputTodo(value)
    }
    const addNewTask = (): void => {
        console.log("submit")
        addTodo(inputTodo)
        setInputTodo("")
    }
    return (
        <div className="from">
            <label> Nouvelle tâche:
            <input
                    type="text"
                    id="todo"
                    value={inputTodo}
                    onChange={handleInputTodo}
                />
            </label>
            <button
                onClick={() => { addNewTask() }}
            >Ajouter</button>
        </div>
    )
}
export default Form