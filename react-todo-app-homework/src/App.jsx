import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoStats from "./components/TodoStats.jsx";

const initialTodos = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Practice useState", completed: false },
    { id: 3, title: "Build React components", completed: true },
    { id: 4, title: "Practice useEffect", completed: false },
    { id: 5, title: "Complete homework", completed: false }
];

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved !== null ? JSON.parse(saved) : initialTodos;
    });
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos([...todos, { id: Date.now(), title: title, completed: false }]);
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo => todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        ));
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function editTodo(id, title) {
        setTodos(todos.map(todo => todo.id === id
            ? { ...todo, title: title }
            : todo
        ));
    }

    function clearCompleted() {
        setTodos(todos.filter(todo => !todo.completed));
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    });

    const completed = todos.filter(todo => todo.completed).length;
    const active = todos.length - completed;

    return (
        <div className="app">
            <div className="todo-container">
                <Header />
                <TodoForm addTodo={addTodo} />
                <TodoStats total={todos.length} active={active} completed={completed} />
                <TodoFilter filter={filter} setFilter={setFilter} />
                <TodoList
                    todos={filteredTodos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
                <button className="clear-button" onClick={clearCompleted} disabled={completed === 0}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

export default App;
