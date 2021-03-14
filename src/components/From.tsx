// Import Components
import React, { useContext, useState } from "react"
import { TodoListContext } from "../TodoListContext"

// Import UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems: "flex-end"
    },
    button:{
        margin:"10px",
    }
})

const Form = () => {
    const classes = useStyles()

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
        <div className={classes.root}>

                    <TextField
                        id="outlined-basic" 
                        label="Nouvelle tâche" 
                        variant="outlined"
                        margin="normal"
                        value={inputTodo}
                        onChange={e => handleInputTodo(e.target.value)}
                    />

                    <Button
                    className={classes.button}
                    variant="contained" 
                    color="primary"
                    size="large"
                    onClick={() => { addNewTask() }}
                    >Ajouter</Button>

        </div>
    )
}
export default Form