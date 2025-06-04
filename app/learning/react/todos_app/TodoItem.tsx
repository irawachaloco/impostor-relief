import React from "react";
import { TodoProps } from "./types";

interface TodoItemProps {
  todo: TodoProps;
  handleEdit: (todo: TodoProps) => void;
  handleDelete: (todo: TodoProps) => void;
  onToggle: (todo: TodoProps) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleEdit,
  handleDelete,
  onToggle,
}) => {
  return (
    <li className="mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        className="mr-2"
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.content}
      </span>
      <button
        type="button"
        onClick={() => handleEdit(todo)}
        className="ml-2 mr-2  rounded-sm border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2"
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => handleDelete(todo)}
        className="mr-2  rounded-sm border border-1 border-red-400 bg-red-200 hover:bg-red-100 p-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
