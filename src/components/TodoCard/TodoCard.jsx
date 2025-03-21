import "./TodoCard.css";

import useTodosStore from "../../Stores/TasksStore";
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { Tooltip } from 'react-tooltip'

function TodoCard({ todoTitle, todoDescription, complete, todoId }) {
  const markAsComplete = useTodosStore((state) => state.markAsComplete);
  const markAsIncomplete = useTodosStore((state) => state.markAsIncomplete);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);


  function handleMarkComplete() {
    markAsComplete(todoId);
  }

  function handleMarkIncomplete() {
    markAsIncomplete(todoId);
  }

  function handleDeleteTodo() {
    deleteTodo(todoId);
  }

  return (
    <div className="todo-card">
      <div className="todo-card-title-buttons">
        <h3 className={complete ? "todo-card-title-complete" : "todo-card-title"}>{todoTitle}</h3>

        <div className="todo-card-buttons">
          <button
            onClick={!complete ? handleMarkComplete : handleMarkIncomplete}
          >
            {complete ? <MdOutlinePendingActions data-tooltip-id="my-tooltip" data-tooltip-content="mark as pending" className="pending-svg" /> : <GiCheckMark data-tooltip-id="my-tooltip" data-tooltip-content="mark as complete" className="check-svg" />}
          </button>

          <button onClick={handleDeleteTodo}>
          <RiDeleteBin6Line data-tooltip-id="my-tooltip" data-tooltip-content="delete todo" className="delete-svg" />
          </button>

          <Tooltip id="my-tooltip" />
        </div>
      </div>

      <div className="status">
        <p>status: <span className={complete ? "span-complete" : "span-incomplete"}>{complete? "complete" : "pending"}</span></p>
      </div>

      <p className={complete ? "description-complete" : "description-incomplete"}>{todoDescription}</p>
    </div>
  );
}

export default TodoCard;
