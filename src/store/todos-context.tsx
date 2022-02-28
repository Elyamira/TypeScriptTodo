import Todo from "../models/todo";
import React from "react";
import { useState } from "react";
type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    deleteTodo: (id: string) => void,
    editTodo: (id: string, newText: string) => void,
}
export const TodosContext = React.createContext<
    TodosContextObj
>({
    items: [],
    addTodo: () => { },
    deleteTodo: (id: string) => { },
    editTodo: (id: string, newText: string) => { }
});
const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos([...todos, newTodo])
    }
    const deleteTodo = (id: string) => {
        const newTodoList = todos.filter(todo => todo.id !== id)
        setTodos([...newTodoList])
    }
    const editTodo = (id: string, newText: string) => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.text = newText
            }
        })
        setTodos([...newTodos])
        console.log(newTodos);
        console.log(todos);

        // setTodos([...newTodos])
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodo,
        editTodo: editTodo,
    }
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}
export default TodosContextProvider;