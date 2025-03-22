import TodoCard from "../TodoCard/TodoCard";
import useTodosStore from "../../Stores/TodosStore";
import "./TodoCardsContainer.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoCardsContainer() {
  const todos = useTodosStore((state) => state.todos);
  const clearCompleteTodos = useTodosStore((state) => state.clearCompleteTodos)

  function handleClearCompleteTodos() {
    clearCompleteTodos();
  }

  return (
    <div className="todo-cards-container">
      {todos.length !==0 && (
        <div className="todo-cards-title-btn">
          <h2 className="todo-cards-title">my todos</h2>
          <button className="todo-cards-button" onClick={handleClearCompleteTodos}><RiDeleteBin6Line />clear completed todos</button>
        </div>
      )}

      <div className="todo-cards">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todoTitle={todo.title}
            todoDescription={todo.description}
            complete={todo.complete}
            todoId={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoCardsContainer;
