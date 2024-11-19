import axios from "axios";
import "./todos.css";
import { useEffect, useState } from "react";
import binImage from "../../assets/bin.png";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/todos/";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(url);
      setTodos(response.data);
    } catch (error) {
      console.error("Error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(fetchTodos, 2000);
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todos</h2>
      {loading ? (
        <h1>Loading...</h1> // Show loading message while fetching
      ) : (
        todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.completed ? "Completed" : "Pending"}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              <img src={binImage} alt="Delete" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
