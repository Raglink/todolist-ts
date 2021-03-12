// Import Components
import React, { useContext, useState } from "react"
import { TodoListContext } from "../TodoListContext"

// Import UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"


const Form = () => {

    const [inputTodo, setInputTodo] = useState<string>("")
    const { addTodo } = useContext(TodoListContext)

    const handleInputTodo = (event: string): void => {
        setInputTodo(event)
    }
    const addNewTask = (): void => {
        console.log("submit")
        addTodo(inputTodo)
        setInputTodo("")
    }
    return (
        <div className="form">
            <Grid container spacing={2} >
                <Grid  container justify="center">
                    <TextField
                        id="outlined-basic" 
                        label="Nouvelle tâche" 
                        variant="outlined"
                        margin="normal"
                        value={inputTodo}
                        onChange={e => handleInputTodo(e.target.value)}
                    />
                </Grid>
                <Grid container justify="center">
                    <Button
                    variant="contained" 
                    color="primary"
                    size="large"
                    onClick={() => { addNewTask() }}
                    >Ajouter</Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Form