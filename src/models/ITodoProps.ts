import { ITodo } from "./ITodo";

export interface ITodoProps {
    todos: ITodo[],
    completeTodo: (id:number) => void,
    removeTodo: (id:number) => void,
    updateTodo: (todoId: number, newValue: ITodo) => void,
    // addTodo: (todo: ITodo) => void
}