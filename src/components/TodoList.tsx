//  Import components
import React, { useContext, useEffect } from "react";
import {TodoListContext} from "../TodoListContext"; 

// Import UI 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display:"flex",
        justifyContent:"center",
        flexGrow:1,
    },
    todo:{
        maxWidth:600,
        minWidth:280,
    },
    textList:{
        marginRight:25,
        flexWrap:"wrap",
    }
})

const TodoList = ()=>{
    const classes = useStyles();
    const {todoList} = useContext(TodoListContext);
    useEffect(()=>{
        console.log( "todoList : ", todoList)
    },[todoList])
    const displayTodoList = todoList.map((task, index)=>

        <ListItem key={index}>
            <Checkbox
            checked={true}
            onChange={()=>console.log("tata")}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <ListItemText className={classes.textList}
            primary={task}
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                
            </ListItemSecondaryAction>
        </ListItem>

            
        )
    return (
        <div className={classes.root}>
            <List className={classes.todo}>
                {displayTodoList}
            </List>
        </div>
            
    )
}

export default TodoList
