//merge custom props definition with base props definition
import TodoItem from "./TodoItem";
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    return <ul className="todoList">
        {todosCtx.items.map((item) =>
            <TodoItem key={item.id} id={item.id} text={item.text} onDelete={todosCtx.deleteTodo.bind(null, item.id)} />
        )}

    </ul>
}
export default Todos;