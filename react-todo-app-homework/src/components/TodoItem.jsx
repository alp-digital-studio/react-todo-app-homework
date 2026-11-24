import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    function saveEdit() {
        if (title.trim() === "") return;
        editTodo(todo.id, title.trim());
        setEditing(false);
    }

    return (
        <div className="todo-item">
            <input
                className="check-input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {editing ? (
                <input
                    className="edit-input"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    onKeyDown={event => event.key === "Enter" && saveEdit()}
                />
            ) : (
                <span className={todo.completed ? "todo-title completed" : "todo-title"}>
                    {todo.title}
                </span>
            )}
            {editing ? (
                <button className="save-button" onClick={saveEdit}>Save</button>
            ) : (
                <button className="edit-button" onClick={() => {
                    setTitle(todo.title);
                    setEditing(true);
                }}>Edit</button>
            )}
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}
export default TodoItem;
