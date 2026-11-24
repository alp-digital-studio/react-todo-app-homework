import { useState } from "react";

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (title.trim() === "") return;
        addTodo(title.trim());
        setTitle("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
export default TodoForm;
