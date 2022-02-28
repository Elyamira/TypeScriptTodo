import React, { useRef, useState } from "react";
import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';
const TodoItem: React.FC<{ text: string, id: string, onDelete: (event: React.MouseEvent) => void }> = (props) => {
    const todosCtx = useContext(TodosContext)
    const [editText, setEditText] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [editedValue, setEditedValue] = useState("")
    const [checked, setChecked] = useState(false);
    const liEl = useRef<HTMLParagraphElement>(null);
    const cancelChanges = () => {
        liEl.current!.innerText = props.text;
        setEditText(false);


    }
    return <>
        <li className="listItem">
            <div className="text"><p ref={liEl} contentEditable={editText ? true : false}
                className={completed ? "completedTodo" : ""}>{props.text}</p></div>
            <div className="buttons">
                <input type="checkbox" onChange={() => setChecked(!checked)} checked={checked}></input>
                {!editText ? <button onClick={props.onDelete}>delete</button> : null}
                {!editText && <button onClick={() => {
                    setCompleted(false)
                    setEditText(!editText)

                }}> edit</button>}
                {editText && <button onClick={cancelChanges}>cancel changes</button>}

                {editText && <button onClick={() => {
                    setEditText(false)
                    const newText = liEl.current!.innerText
                    newText && setEditedValue(newText)
                    todosCtx.editTodo(props.id, newText)
                }}>save</button>}
            </div>

        </li>
    </>
}
export default TodoItem;