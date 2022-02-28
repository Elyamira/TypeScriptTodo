import React, { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value
        if (enteredText.trim().length === 0) {
            return
        }
        todoCtx.addTodo(enteredText)
        todoTextInputRef.current!.value = "";

    }
    return (
        <form onSubmit={submitHandler} className="todoForm">
            <label className="todoLabel" htmlFor="text">Todo text</label>
            <input className="todoInput" type="text" id="text" ref={todoTextInputRef} />
            <button className="addTodoButton">Add Todo</button>
        </form>
    );
}
export default NewTodo;