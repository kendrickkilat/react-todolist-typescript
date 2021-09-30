import React, {useState} from 'react'
import { RiCloseCircleLine  } from 'react-icons/ri';
import { TiEdit  } from 'react-icons/ti';
import { ITodo } from '../models/ITodo';
import { ITodoProps } from '../models/ITodoProps';
import TodoForm from './todo-form';

function Todo({todos, completeTodo, removeTodo, updateTodo}:ITodoProps ) {
    const [edit, setEdit] = useState({
        id: 0,
        title: '',
        content: ''
    });

    const submitUpdate = (todo: ITodo) => {
        updateTodo(edit.id, todo);
        setEdit({
            id: 0,
            title: '',
            content: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return <>{ todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                <h2>{todo.title}</h2> <br />
                <p>{todo.content}</p>
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className = "delete-icon"/>
                <TiEdit onClick={()=> setEdit({ id: todo.id, title: todo.title, content: todo.content })} 
                className="edit-icon" />
            </div>
        </div>
    ))} </>;
}

export default Todo
