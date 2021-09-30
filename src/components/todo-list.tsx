import React, {useState} from 'react'
import TodoForm from './todo-form'
import Todo from './todo'
import { ITodo } from '../models/ITodo';

function TodoList() {
    const  [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: ITodo) => {

        console.log("AddTodo", todo);
        if((!todo.title || /^\s*$/.test(todo.title)) || (!todo.content || /^\s*$/.test(todo.content))) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos)
        console.log('newTodos', newTodos)
    };

    const removeTodo = (id:number) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const updateTodo = (todoId: number, newValue: ITodo) => {
        if(!newValue.title || /^\s*$/.test(newValue.title)) {
            return
        }
        if(!newValue.content || /^\s*$/.test(newValue.content))
        {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    
    }

    const completeTodo = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos ={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
